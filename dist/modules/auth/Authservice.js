"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = require("../../utils/AppError");
class AuthService {
    // Injection du repository — AuthService utilise AuthRepository
    // pour accéder à la base de données
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * ── INSCRIPTION ──
     * Crée un nouveau compte patient
     * Le patient fournit son téléphone + codePin
     */
    async inscription(data) {
        // 1. On vérifie si un patient avec ce numéro existe déjà en DB
        // Si oui → on lève une erreur 409 (conflit)
        const patientExistant = await this.repository.findUserByTelephone(data.telephone);
        if (patientExistant) {
            throw AppError_1.AppError.conflict(AppError_1.ErrorMessages.AUTH.TELEPHONE_ALREADY_EXISTS);
        }
        // 2. On chiffre le codePin avec bcrypt avant de le sauvegarder
        // On ne stocke JAMAIS un PIN en clair en base de données
        const codePinChiffre = await bcryptjs_1.default.hash(data.codePin, 10);
        // 3. On crée le patient en DB avec le PIN chiffré
        // La création de User + Patient se fait en transaction
        const patient = await this.repository.createPatient(data.telephone, codePinChiffre);
        // 4. On retourne un message de succès avec l'id du patient créé
        return {
            message: "Inscription réussie ! Consultez votre SMS pour accéder aux services.",
            patientId: patient.id,
        };
    }
    /**
     * ── LOGIN ──
     * Connexion unifiée pour tous les utilisateurs
     * Deux cas possibles :
     * - Patient  → téléphone + codePin
     * - Staff    → email + password (admin, médecin, accueil)
     */
    async login(data) {
        // ════════════════════════════════════════
        // CAS 1 — PATIENT : téléphone + codePin
        // On détecte que c'est un patient si
        // les données contiennent "telephone"
        // ════════════════════════════════════════
        if ('telephone' in data) {
            // 1. On cherche le patient par son numéro de téléphone
            // Si introuvable → erreur 401
            const patient = await this.repository.findUserByTelephone(data.telephone);
            if (!patient) {
                throw AppError_1.AppError.unauthorized(AppError_1.ErrorMessages.AUTH.INVALID_CREDENTIALS);
            }
            // 2. On compare le codePin envoyé avec le hash stocké en DB
            // bcrypt.compare retourne true si les deux correspondent
            // Message volontairement vague → on ne dit pas si c'est
            // le téléphone ou le PIN qui est faux (sécurité)
            const codePinValide = await bcryptjs_1.default.compare(data.codePin, patient.codePin);
            if (!codePinValide) {
                throw AppError_1.AppError.unauthorized(AppError_1.ErrorMessages.AUTH.INVALID_CREDENTIALS);
            }
            // 3. On génère l'access token — expire dans 15 minutes
            // Contient l'id, le rôle et le téléphone du patient
            const accessToken = jsonwebtoken_1.default.sign({ id: patient.id, role: 'PATIENT', telephone: patient.telephone }, process.env.ACCESS_SECRET, { expiresIn: process.env.ACCESS_EXPIRES_IN });
            // 4. On génère le refresh token — expire dans 7 jours
            // Contient uniquement l'id — utilisé pour renouveler l'access token
            const refreshToken = jsonwebtoken_1.default.sign({ id: patient.id }, process.env.REFRESH_SECRET, { expiresIn: process.env.REFRESH_EXPIRES_IN });
            // 5. On retourne les tokens + les infos du patient
            return {
                message: "Connexion réussie",
                accessToken,
                refreshToken,
                user: {
                    id: patient.id,
                    role: 'PATIENT',
                    telephone: patient.telephone,
                    estComplet: patient.estComplet, // false = pas encore validé par l'accueil
                }
            };
        }
        // ════════════════════════════════════════
        // CAS 2 — STAFF : email + password
        // On détecte que c'est un staff si
        // les données contiennent "email"
        // Concerne : Admin, Médecin, Accueil
        // ════════════════════════════════════════
        if ('email' in data) {
            // 1. On cherche l'utilisateur par son email
            // Si introuvable → erreur 401
            const user = await this.repository.findUserByEmail(data.email);
            if (!user) {
                throw AppError_1.AppError.unauthorized(AppError_1.ErrorMessages.AUTH.INVALID_CREDENTIALS);
            }
            // 2. On compare le password envoyé avec le hash stocké en DB
            // Le "!" après user.password signifie qu'on est sûr qu'il n'est pas null
            const passwordValide = await bcryptjs_1.default.compare(data.password, user.password);
            if (!passwordValide) {
                throw AppError_1.AppError.unauthorized(AppError_1.ErrorMessages.AUTH.INVALID_CREDENTIALS);
            }
            // 3. On génère l'access token — expire dans 15 minutes
            // Contient l'id, le rôle et l'email du staff
            // Le rôle est important → utilisé par roleMiddleware pour protéger les routes
            const accessToken = jsonwebtoken_1.default.sign({ id: user.id, role: user.role, email: user.email }, process.env.ACCESS_SECRET, { expiresIn: process.env.ACCESS_EXPIRES_IN });
            // 4. On génère le refresh token — expire dans 7 jours
            const refreshToken = jsonwebtoken_1.default.sign({ id: user.id }, process.env.REFRESH_SECRET, { expiresIn: process.env.REFRESH_EXPIRES_IN });
            // 5. On retourne les tokens + les infos du staff
            // On ne retourne JAMAIS le password dans la réponse
            return {
                message: "Connexion réussie",
                accessToken,
                refreshToken,
                user: {
                    id: user.id,
                    role: user.role, // ADMIN, MEDECIN ou ACCUEIL
                    email: user.email,
                    nom: user.nom,
                    prenom: user.prenom,
                }
            };
        }
        // Si les données ne contiennent ni "telephone" ni "email"
        // → les données sont invalides
        throw AppError_1.AppError.badRequest("Données de connexion invalides");
    }
}
exports.AuthService = AuthService;

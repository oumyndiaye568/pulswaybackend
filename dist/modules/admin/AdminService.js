"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const AppError_1 = require("../../utils/AppError");
class AdminService {
    constructor(repository) {
        this.repository = repository;
    }
    // ════════════════════════════════
    // GESTION DES SERVICES
    // ════════════════════════════════
    async getAllServices() {
        return this.repository.getAllServices();
    }
    async getServiceById(id) {
        const service = await this.repository.getServiceById(id);
        if (!service) {
            throw AppError_1.AppError.notFound(AppError_1.ErrorMessages.SERVICE.NOT_FOUND);
        }
        return service;
    }
    //   async createService(data: CreateServiceDto) {
    //     // Vérifier si le service existe déjà
    //     const serviceExistant = await this.repository.getServiceByNom(data.nom);
    //     if (serviceExistant) {
    //       throw AppError.conflict(ErrorMessages.SERVICE.ALREADY_EXISTS);
    //     }
    //     return this.repository.createService(data);
    //   }
    async createService(data) {
        // 1. Vérifier si le service existe déjà
        const serviceExistant = await this.repository.getServiceByNom(data.nom);
        if (serviceExistant) {
            throw AppError_1.AppError.conflict(AppError_1.ErrorMessages.SERVICE.ALREADY_EXISTS);
        }
        // 2. Créer le service
        const service = await this.repository.createService(data);
        return {
            message: `Service ${data.nom} créé avec succès`,
            service,
        };
    }
    async updateService(id, data) {
        // Vérifier si le service existe
        const service = await this.repository.getServiceById(id);
        if (!service) {
            throw AppError_1.AppError.notFound(AppError_1.ErrorMessages.SERVICE.NOT_FOUND);
        }
        // Vérifier si le nouveau nom existe déjà
        if (data.nom) {
            const serviceExistant = await this.repository.getServiceByNom(data.nom);
            if (serviceExistant && serviceExistant.id !== id) {
                throw AppError_1.AppError.conflict(AppError_1.ErrorMessages.SERVICE.ALREADY_EXISTS);
            }
        }
        return this.repository.updateService(id, data);
    }
    async deleteService(id) {
        // Vérifier si le service existe
        const service = await this.repository.getServiceById(id);
        if (!service) {
            throw AppError_1.AppError.notFound(AppError_1.ErrorMessages.SERVICE.NOT_FOUND);
        }
        return this.repository.deleteService(id);
    }
    // ════════════════════════════════
    // GESTION DES UTILISATEURS
    // ════════════════════════════════
    async getAllUsers() {
        return this.repository.getAllUsers();
    }
    async getUserById(id) {
        const user = await this.repository.getUserById(id);
        if (!user) {
            throw AppError_1.AppError.notFound(AppError_1.ErrorMessages.ADMIN.NOT_FOUND);
        }
        return user;
    }
    async createUser(data) {
        // 1. Vérifier si l'email existe déjà
        const userExistant = await this.repository.getUserByEmail(data.email);
        if (userExistant) {
            throw AppError_1.AppError.conflict("Cet email est déjà utilisé");
        }
        // 2. Vérifier que specialite est fournie si role = MEDECIN
        if (data.role === 'MEDECIN' && !data.specialite) {
            throw AppError_1.AppError.badRequest("La spécialité est obligatoire pour un médecin");
        }
        // 3. Chiffrer le password
        const passwordChiffre = await bcryptjs_1.default.hash(data.password, 10);
        // 4. Créer l'utilisateur
        const user = await this.repository.createUser(data, passwordChiffre);
        // 5. Ne pas renvoyer le password
        const { password, ...userSansPassword } = user;
        return {
            message: `${data.role === 'MEDECIN' ? 'Médecin' : 'Agent accueil'} créé avec succès`,
            user: userSansPassword,
        };
    }
    async updateUser(id, data) {
        // 1. Vérifier si l'utilisateur existe
        const user = await this.repository.getUserById(id);
        if (!user) {
            throw AppError_1.AppError.notFound(AppError_1.ErrorMessages.ADMIN.NOT_FOUND);
        }
        // 2. Chiffrer le password si fourni
        if (data.password) {
            data.password = await bcryptjs_1.default.hash(data.password, 10);
        }
        const userMisAJour = await this.repository.updateUser(id, data);
        // 3. Ne pas renvoyer le password
        const { password, ...userSansPassword } = userMisAJour;
        return {
            message: "Utilisateur mis à jour avec succès",
            user: userSansPassword,
        };
    }
    async deleteUser(id) {
        const user = await this.repository.getUserById(id);
        if (!user) {
            throw AppError_1.AppError.notFound(AppError_1.ErrorMessages.ADMIN.NOT_FOUND);
        }
        await this.repository.deleteUser(id);
        return { message: "Utilisateur supprimé avec succès" };
    }
}
exports.AdminService = AdminService;

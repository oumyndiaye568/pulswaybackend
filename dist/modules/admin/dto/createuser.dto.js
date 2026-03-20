"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = void 0;
const zod_1 = require("zod");
exports.CreateUserSchema = zod_1.z.object({
    nom: zod_1.z.string()
        .min(2, "Le nom doit contenir au moins 2 caractères")
        .max(50, "Le nom est trop long"),
    prenom: zod_1.z.string()
        .min(2, "Le prénom doit contenir au moins 2 caractères")
        .max(50, "Le prénom est trop long"),
    email: zod_1.z.string()
        .email("Email invalide"),
    password: zod_1.z.string()
        .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    role: zod_1.z.enum(['MEDECIN', 'ACCUEIL'], {
        error: "Le rôle doit être MEDECIN ou ACCUEIL"
    }),
    serviceNom: zod_1.z.string()
        .min(2, "Le nom du service est obligatoire"),
    specialite: zod_1.z.string()
        .min(2, "La spécialité doit contenir au moins 2 caractères")
        .optional(),
});

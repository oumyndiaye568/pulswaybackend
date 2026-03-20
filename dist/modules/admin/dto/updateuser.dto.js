"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserSchema = void 0;
const zod_1 = require("zod");
exports.UpdateUserSchema = zod_1.z.object({
    nom: zod_1.z.string()
        .min(2, "Le nom doit contenir au moins 2 caractères")
        .max(50, "Le nom est trop long")
        .optional(),
    prenom: zod_1.z.string()
        .min(2, "Le prénom doit contenir au moins 2 caractères")
        .max(50, "Le prénom est trop long")
        .optional(),
    email: zod_1.z.string()
        .email("Email invalide")
        .optional(),
    password: zod_1.z.string()
        .min(6, "Le mot de passe doit contenir au moins 6 caractères")
        .optional(),
    serviceId: zod_1.z.number()
        .optional(),
    specialite: zod_1.z.string()
        .min(2, "La spécialité doit contenir au moins 2 caractères")
        .optional(),
});

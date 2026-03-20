"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceSchema = void 0;
const zod_1 = require("zod");
exports.CreateServiceSchema = zod_1.z.object({
    nom: zod_1.z.string()
        .min(2, "Le nom du service doit contenir au moins 2 caractères")
        .max(50, "Le nom du service est trop long"),
    description: zod_1.z.string()
        .max(255, "La description est trop longue")
        .optional(),
    prixTicket: zod_1.z.number()
        .min(0, "Le prix ne peut pas être négatif"),
});

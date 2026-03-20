"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscriptionSchema = void 0;
const zod_1 = require("zod");
exports.InscriptionSchema = zod_1.z.object({
    telephone: zod_1.z.string()
        .min(9, "Numéro de téléphone invalide")
        .max(15, "Numéro de téléphone trop long")
        .regex(/^\+?[0-9]+$/, "Numéro de téléphone invalide"),
    codePin: zod_1.z.string()
        .length(4, "Le code PIN doit contenir exactement 4 chiffres")
        .regex(/^\d+$/, "Le code PIN ne doit contenir que des chiffres"),
});

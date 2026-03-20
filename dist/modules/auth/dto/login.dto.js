"use strict";
// import { z } from 'zod'
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = void 0;
// export const LoginSchema = z.object({
//   telephone: z.string()
//     .min(9, "Numéro de téléphone invalide")
//     .max(15, "Numéro de téléphone trop long"),
//   codePin: z.string()
//     .length(4, "Le code PIN doit contenir exactement 4 chiffres")
//     .regex(/^\d+$/, "Le code PIN ne doit contenir que des chiffres"),
// });
// export type LoginDto = z.infer<typeof LoginSchema>
const zod_1 = require("zod");
exports.LoginSchema = zod_1.z.union([
    // Cas 1 — Patient : téléphone + codePin
    zod_1.z.object({
        telephone: zod_1.z.string()
            .min(9, "Numéro de téléphone invalide")
            .max(15, "Numéro de téléphone trop long"),
        codePin: zod_1.z.string()
            .length(4, "Le code PIN doit contenir exactement 4 chiffres")
            .regex(/^\d+$/, "Le code PIN ne doit contenir que des chiffres"),
    }),
    // Cas 2 — Staff : email + password
    zod_1.z.object({
        email: zod_1.z.string()
            .email("Email invalide"),
        password: zod_1.z.string()
            .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    })
]);

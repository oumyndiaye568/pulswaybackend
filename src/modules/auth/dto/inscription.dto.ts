import { z } from 'zod'

export const InscriptionSchema = z.object({
  telephone: z.string()
    .min(9, "Numéro de téléphone invalide")
    .max(15, "Numéro de téléphone trop long")
    .regex(/^\+?[0-9]+$/, "Numéro de téléphone invalide"),
  codePin: z.string()
    .length(4, "Le code PIN doit contenir exactement 4 chiffres")
    .regex(/^\d+$/, "Le code PIN ne doit contenir que des chiffres"),
});

export type InscriptionDto = z.infer<typeof InscriptionSchema>
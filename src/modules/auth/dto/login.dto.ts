// import { z } from 'zod'

// export const LoginSchema = z.object({
//   telephone: z.string()
//     .min(9, "Numéro de téléphone invalide")
//     .max(15, "Numéro de téléphone trop long"),
//   codePin: z.string()
//     .length(4, "Le code PIN doit contenir exactement 4 chiffres")
//     .regex(/^\d+$/, "Le code PIN ne doit contenir que des chiffres"),
// });

// export type LoginDto = z.infer<typeof LoginSchema>
import { z } from 'zod'

export const LoginSchema = z.union([
  // Cas 1 — Patient : téléphone + codePin
  z.object({
    telephone: z.string()
      .min(9, "Numéro de téléphone invalide")
      .max(15, "Numéro de téléphone trop long"),
    codePin: z.string()
      .length(4, "Le code PIN doit contenir exactement 4 chiffres")
      .regex(/^\d+$/, "Le code PIN ne doit contenir que des chiffres"),
  }),
  // Cas 2 — Staff : email + password
  z.object({
    email: z.string()
      .email("Email invalide"),
    password: z.string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
  })
]);

export type LoginDto = z.infer<typeof LoginSchema>
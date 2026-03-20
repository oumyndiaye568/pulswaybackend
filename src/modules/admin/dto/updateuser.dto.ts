import { z } from 'zod'

export const UpdateUserSchema = z.object({
  nom: z.string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom est trop long")
    .optional(),
  prenom: z.string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom est trop long")
    .optional(),
  email: z.string()
    .email("Email invalide")
    .optional(),
  password: z.string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères")
    .optional(),
  serviceId: z.number()
    .optional(),
  specialite: z.string()
    .min(2, "La spécialité doit contenir au moins 2 caractères")
    .optional(),
});

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>
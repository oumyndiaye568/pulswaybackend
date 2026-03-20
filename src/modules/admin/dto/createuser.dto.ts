import { z } from 'zod'

export const CreateUserSchema = z.object({
  nom: z.string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom est trop long"),
  prenom: z.string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom est trop long"),
  email: z.string()
    .email("Email invalide"),
  password: z.string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
  role: z.enum(['MEDECIN', 'ACCUEIL'], {
    error: "Le rôle doit être MEDECIN ou ACCUEIL"
  }),
 serviceNom: z.string()
  .min(2, "Le nom du service est obligatoire"),
  specialite: z.string()
    .min(2, "La spécialité doit contenir au moins 2 caractères")
    .optional(),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>
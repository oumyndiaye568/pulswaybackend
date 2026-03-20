import { z } from 'zod'

export const UpdateServiceSchema = z.object({
  nom: z.string()
    .min(2, "Le nom du service doit contenir au moins 2 caractères")
    .max(50, "Le nom du service est trop long")
    .optional(),
  description: z.string()
    .max(255, "La description est trop longue")
    .optional(),
  prixTicket: z.number()
    .min(0, "Le prix ne peut pas être négatif")
    .optional(),
});

export type UpdateServiceDto = z.infer<typeof UpdateServiceSchema>
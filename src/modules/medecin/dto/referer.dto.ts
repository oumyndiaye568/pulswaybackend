import { z } from 'zod'

export const RefererPatientSchema = z.object({
  patientId: z.number().int().positive('ID patient invalide'),
  medecinCibleId: z.number().int().positive('ID médecin cible invalide'),
  motif: z.string().min(1, 'Le motif est requis'),
  estUrgence: z.boolean().default(false)
})

export type RefererPatientDto = z.infer<typeof RefererPatientSchema>

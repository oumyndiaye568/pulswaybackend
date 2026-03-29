import { z } from 'zod'

export const CreateRendezVousSchema = z.object({
  patientId: z.number().int().positive('ID patient invalide'),
  date: z.string().datetime({ message: 'Date invalide' }),
  heure: z.string().min(5, 'Heure invalide').max(5),
  motif: z.string().optional()
})

export type CreateRendezVousDto = z.infer<typeof CreateRendezVousSchema>

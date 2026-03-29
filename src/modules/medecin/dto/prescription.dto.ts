import { z } from 'zod'

export const CreatePrescriptionSchema = z.object({
  patientId: z.number().int().positive('ID patient invalide'),
  ticketId: z.number().int().positive('ID ticket invalide').optional(),
  medicaments: z.string().min(1, 'Les médicaments sont requis'),
  examens: z.string().optional(),
  posologie: z.string().optional()
})

export type CreatePrescriptionDto = z.infer<typeof CreatePrescriptionSchema>

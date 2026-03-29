import { z } from 'zod'

export const FinConsultationSchema = z.object({
  compteRendu: z.string().optional()
})

export const DebutConsultationSchema = z.object({})

export type DebutConsultationDto = z.infer<typeof DebutConsultationSchema>
export type FinConsultationDto = z.infer<typeof FinConsultationSchema>

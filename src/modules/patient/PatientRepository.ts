import { prisma } from '../../prismaClient'

export class PatientRepository {
  /**
   * Trouver un patient par son ID
   */
  async findById(id: number) {
    return prisma.patient.findUnique({
      where: { id },
      include: {
        user: true,
        fileAttente: true,
        tickets: true,
        rendezVous: true,
      }
    })
  }

  /**
   * Trouver un patient par son téléphone
   */
  async findByTelephone(telephone: string) {
    return prisma.patient.findUnique({
      where: { telephone },
      include: { user: true }
    })
  }

  /**
   * Mettre à jour le profil du patient
   */
  async updateProfile(id: number, data: {
    nom?: string
    prenom?: string
    age?: number
    estComplet?: boolean
  }) {
    const patient = await prisma.patient.update({
      where: { id },
      data,
      include: { user: true }
    })

    // Mettre à jour aussi le user
    if (data.nom || data.prenom) {
      await prisma.user.update({
        where: { id: patient.userId },
        data: {
          nom: data.nom,
          prenom: data.prenom,
        }
      })
    }

    return patient
  }

  /**
   * Mettre à jour le statut prioritaire (auto si age >= 60)
   */
  async updatePrioritaire(id: number, age: number) {
    const estPrioritaire = age >= 60
    return prisma.patient.update({
      where: { id },
      data: { estPrioritaire: estPrioritaire, age },
      include: { user: true }
    })
  }
}

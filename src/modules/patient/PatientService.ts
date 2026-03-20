import { PatientRepository } from './PatientRepository'
import { AppError } from '../../utils/AppError'
import { prisma } from '../../prismaClient'

export class PatientService {
  constructor(private readonly repository: PatientRepository) {}

  /**
   * Récupérer le profil du patient
   */
  async getProfile(patientId: number) {
    const patient = await this.repository.findById(patientId)
    if (!patient) {
      throw AppError.notFound('Patient non trouvé')
    }
    return patient
  }

  /**
   * Mettre à jour le profil du patient
   */
  async updateProfile(patientId: number, data: {
    nom?: string
    prenom?: string
    age?: number
  }) {
    const patient = await this.repository.findById(patientId)
    if (!patient) {
      throw AppError.notFound('Patient non trouvé')
    }

    // Si l'âge est fourni, on met à jour le statut prioritaire
    if (data.age !== undefined) {
      return this.repository.updatePrioritaire(patientId, data.age)
    }

    return this.repository.updateProfile(patientId, data)
  }

  /**
   * Récupérer tous les services disponibles (public - sans auth)
   */
  async getServices() {
    return prisma.service.findMany({
      orderBy: { nom: 'asc' }
    })
  }

  /**
   * Récupérer un service par ID
   */
  async getServiceById(serviceId: number) {
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
      include: {
        medecins: {
          select: {
            id: true,
            specialite: true,
            user: {
              select: {
                nom: true,
                prenom: true
              }
            }
          }
        }
      }
    })

    if (!service) {
      throw AppError.notFound('Service non trouvé')
    }

    return service
  }

  /**
   * Vérifier si le patient a un dossier complet
   */
  async checkDossierComplet(patientId: number) {
    const patient = await this.repository.findById(patientId)
    if (!patient) {
      throw AppError.notFound('Patient non trouvé')
    }

    return {
      estComplet: patient.estComplet,
      age: patient.age,
      estPrioritaire: patient.estPrioritaire
    }
  }
}

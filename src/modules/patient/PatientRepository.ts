import { prisma } from '../../prismaClient'

export class PatientRepository {

  // ════════════════════════════════
  // PATIENT CRUD
  // ════════════════════════════════

  async getAll(): Promise<any[]> {
    return prisma.patient.findMany({
      include: {
        user: true,
        fileAttente: { include: { service: true } },
      },
      orderBy: { createdAt: 'desc' }
    })
  }

  async getById(id: number) {
    return prisma.patient.findUnique({
      where: { id },
      include: {
        user: true,
        fileAttente: { include: { service: true } },
        tickets: true,
        rendezVous: true,
      }
    })
  }

  async create(data: { userId: number; telephone: string; codePin: string }) {
    return prisma.patient.create({
      data,
      include: { user: true }
    })
  }

  async delete(id: number): Promise<void> {
    await prisma.patient.delete({ where: { id } })
  }

  async findByTelephone(telephone: string) {
    return prisma.patient.findUnique({
      where: { telephone },
      include: { user: true }
    })
  }

  // ════════════════════════════════
  // PROFIL
  // ════════════════════════════════

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

  async updatePrioritaire(id: number, age: number) {
    const estPrioritaire = age >= 60
    return prisma.patient.update({
      where: { id },
      data: { estPrioritaire, age },
      include: { user: true }
    })
  }

  // ════════════════════════════════
  // SERVICES
  // ════════════════════════════════

  /**
   * Obtenir tous les services disponibles
   */
  async getAllServices() {
    return prisma.service.findMany({
      orderBy: { nom: 'asc' }
    })
  }

  /**
   * Obtenir un service par ID
   */
  async getServiceById(serviceId: number) {
    return prisma.service.findUnique({
      where: { id: serviceId },
      include: {
        medecins: {
          include: { user: { select: { nom: true, prenom: true } } }
        }
      }
    })
  }

  // ════════════════════════════════
  // FILE D'ATTENTE
  // ════════════════════════════════

  /**
   * Obtenir le numéro suivant dans la file d'un service
   */
  async getNumeroSuivant(serviceId: number): Promise<number> {
    const dernierNumero = await prisma.fileAttente.findFirst({
      where: { serviceId },
      orderBy: { numero: 'desc' }
    })
    return (dernierNumero?.numero || 0) + 1
  }

  /**
   * Vérifier si le patient a un RDV aujourd'hui pour ce service
   * Détection automatique RDV vs SPONTANE
   */
  async getRendezVousAujourdhui(patientId: number, serviceId: number) {
    const maintenant = new Date()
    const debutJournee = new Date(maintenant.setHours(0, 0, 0, 0))
    const finJournee = new Date(maintenant.setHours(23, 59, 59, 999))

    return prisma.rendezVous.findFirst({
      where: {
        patientId,
        serviceId,
        date: {
          gte: debutJournee,
          lte: finJournee
        },
        statut: 'CONFIRME'
      },
      include: {
        medecin: { include: { user: true } },
        service: true
      }
    })
  }

  /**
   * Obtenir un patient par son userId
   */
  async getByUserId(userId: number) {
    return prisma.patient.findUnique({
      where: { userId },
      include: { user: true }
    })
  }

  /**
   * Entrer dans la file d'attente avec détection automatique du type
   * - Si RDV confirmé aujourd'hui → type: RDV
   * - Sinon → type: SPONTANE
   */
  async entrerEnFile(patientId: number, serviceId: number) {
    // Vérifier si le patient est déjà dans une file
    const dejaEnFile = await prisma.fileAttente.findUnique({
      where: { patientId }
    })

    if (dejaEnFile) {
      return dejaEnFile
    }

    // Obtenir le patient pour vérifier la priorité
    const patient = await prisma.patient.findUnique({
      where: { id: patientId }
    })

    // Détection automatique du type d'entrée
    const rdvAujourdhui = await this.getRendezVousAujourdhui(patientId, serviceId)
    const typeEntree = rdvAujourdhui ? 'RDV' : 'SPONTANE'

    // Obtenir le numéro suivant
    const numero = await this.getNumeroSuivant(serviceId)

    // Créer l'entrée dans la file
    // On ne lie plus directement au RDV - on utilise juste le typeEntree
    return prisma.fileAttente.create({
      data: {
        patientId,
        serviceId,
        numero,
        estPrioritaire: patient?.estPrioritaire || false,
        typeEntree,           // ← Détection automatique (RDV ou SPONTANE)
        statut: 'EN_ATTENTE',
      },
      include: { 
        service: true
      }
    })
  }

  /**
   * Voir son numéro dans la file
   */
  async getFileAttente(patientId: number) {
    // Récupérer la file d'attente
    const fileAttente = await prisma.fileAttente.findUnique({
      where: { patientId },
      include: { 
        service: true
      }
    })

    if (!fileAttente) return null

    // Si le patient est entré via RDV, récupérer les infos du RDV
    let rendezVousInfo = null
    if (fileAttente.typeEntree === 'RDV') {
      rendezVousInfo = await this.getRendezVousAujourdhui(patientId, fileAttente.serviceId)
    }

    return {
      ...fileAttente,
      rendezVous: rendezVousInfo
    }
  }

  /**
   * Obtenir la position dans la file
   */
  async getPositionFile(patientId: number, serviceId: number) {
    const file = await prisma.fileAttente.findFirst({
      where: {
        serviceId,
        statut: 'EN_ATTENTE'
      },
      orderBy: [
        { estPrioritaire: 'desc' },
        { numero: 'asc' }
      ]
    })

    if (!file) return 0

    // Compter le nombre de patients avant celui-ci
    const count = await prisma.fileAttente.count({
      where: {
        serviceId,
        statut: 'EN_ATTENTE',
        estPrioritaire: file.estPrioritaire,
        numero: { lt: file.numero }
      }
    })

    return count + 1
  }

  /**
   * Supprimer la file d'attente (annuler le numéro)
   */
  async supprimerFileAttente(patientId: number): Promise<void> {
    await prisma.fileAttente.delete({
      where: { patientId }
    })
  }

  // ════════════════════════════════
  // RENDEZ-VOUS
  // ════════════════════════════════

  /**
   * Voir ses rendez-vous
   */
  async getRendezVous(patientId: number) {
    return prisma.rendezVous.findMany({
      where: { patientId },
      include: { service: true, medecin: { include: { user: true } } },
      orderBy: { date: 'asc' }
    })
  }

  /**
   * Obtenir un RDV par ID
   */
  async getRendezVousById(id: number) {
    return prisma.rendezVous.findUnique({
      where: { id },
      include: { 
        service: true, 
        medecin: { include: { user: true } },
        patient: { include: { user: true } }
      }
    })
  }
}
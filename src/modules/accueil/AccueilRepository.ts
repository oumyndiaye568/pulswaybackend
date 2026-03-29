import { prisma } from '../../prismaClient'
import { FileAttente, Service, RendezVous, Ticket, Referer, Notification } from '../../../generated/prisma'

export class AccueilRepository {

  // ════════════════════════════════
  // PROFIL ACCUEIL
  // ════════════════════════════════

  async findByUserId(userId: number) {
    return prisma.accueil.findUnique({
      where: { userId },
      include: { service: true, user: true }
    })
  }

  async findById(id: number) {
    return prisma.accueil.findUnique({
      where: { id },
      include: { service: true, user: true }
    })
  }

  // ════════════════════════════════
  // RECHERCHE PAR NUMÉRO DE FILE
  // ════════════════════════════════

  async searchByNumero(numero: number, serviceId?: number): Promise<FileAttente[]> {
    return prisma.fileAttente.findMany({
      where: {
        numero: numero,
        ...(serviceId && { serviceId })
      },
      include: {
        patient: {
          include: {
            user: true
          }
        },
        service: true,
        ticket: true
      }
    })
  }

  // ════════════════════════════════
  // PRIX DU TICKET
  // ════════════════════════════════

  async getPrixService(serviceId: number): Promise<Service | null> {
    return prisma.service.findUnique({
      where: { id: serviceId }
    })
  }

  async createTicketWithPayment(data: {
    patientId: number
    serviceId: number
    fileAttenteId: number
    numero: string
    montantPaye: number
  }): Promise<Ticket> {
    // Obtenir le prix du service
    const service = await prisma.service.findUnique({
      where: { id: data.serviceId },
      select: { prixTicket: true }
    })

    const prixTicket = service?.prixTicket || 0
    const montantRestant = Math.max(0, prixTicket - data.montantPaye)

    return prisma.ticket.create({
      data: {
        patientId: data.patientId,
        serviceId: data.serviceId,
        fileAttenteId: data.fileAttenteId,
        numero: data.numero,
        montantPaye: data.montantPaye,
        montantRestant: montantRestant,
        statut: 'EN_ATTENTE'
      },
      include: {
        patient: { include: { user: true } },
        service: true
      }
    })
  }

  async updatePayment(ticketId: number, montantPaye: number): Promise<Ticket> {
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
      include: { service: true }
    })

    if (!ticket) {
      throw new Error('Ticket non trouvé')
    }

    const prixTicket = ticket.service.prixTicket || 0
    const montantRestant = Math.max(0, prixTicket - montantPaye)

    return prisma.ticket.update({
      where: { id: ticketId },
      data: {
        montantPaye,
        montantRestant
      },
      include: {
        patient: { include: { user: true } },
        service: true
      }
    })
  }

  // ════════════════════════════════
  // NOTIFICATIONS RÉFÉRÉS
  // ════════════════════════════════

  async getReferersForService(serviceId: number): Promise<Referer[]> {
    return prisma.referer.findMany({
      where: {
        medecinCible: {
          serviceId: serviceId
        },
        statut: 'EN_ATTENTE'
      },
      include: {
        patient: { include: { user: true } },
        medecinSource: { include: { user: true, service: true } },
        medecinCible: { include: { user: true, service: true } }
      },
      orderBy: { createdAt: 'desc' }
    })
  }

  async getReferersForAccueil(accueilId: number): Promise<Referer[]> {
    const accueil = await this.findById(accueilId)
    if (!accueil || !accueil.serviceId) {
      return []
    }

    return prisma.referer.findMany({
      where: {
        medecinCible: {
          serviceId: accueil.serviceId
        }
      },
      include: {
        patient: { include: { user: true } },
        medecinSource: { include: { user: true, service: true } },
        medecinCible: { include: { user: true, service: true } }
      },
      orderBy: { createdAt: 'desc' }
    })
  }

  async createNotification(data: {
    patientId: number
    type: 'PATIENT_REFERE' | 'RENDEZ_VOUS' | 'URGENCE'
    message: string
    canal?: 'IN_APP' | 'SMS'
  }): Promise<Notification> {
    return prisma.notification.create({
      data: {
        patientId: data.patientId,
        type: data.type,
        message: data.message,
        canal: data.canal || 'IN_APP'
      }
    })
  }

  // ════════════════════════════════
  // RENDEZ-VOUS
  // ════════════════════════════════

  async getAllRendezVousForService(serviceId: number): Promise<RendezVous[]> {
    return prisma.rendezVous.findMany({
      where: { serviceId },
      include: {
        patient: { include: { user: true } },
        medecin: { include: { user: true, service: true } },
        service: true
      },
      orderBy: [{ date: 'asc' }, { heure: 'asc' }]
    })
  }

  async getRendezVousByServiceAndDate(serviceId: number, date: Date): Promise<RendezVous[]> {
    const startOfDay = new Date(date)
    startOfDay.setHours(0, 0, 0, 0)
    const endOfDay = new Date(date)
    endOfDay.setHours(23, 59, 59, 999)

    return prisma.rendezVous.findMany({
      where: {
        serviceId,
        date: {
          gte: startOfDay,
          lte: endOfDay
        }
      },
      include: {
        patient: { include: { user: true } },
        medecin: { include: { user: true, service: true } },
        service: true
      },
      orderBy: { heure: 'asc' }
    })
  }

  async createRendezVous(data: {
    patientId: number
    medecinId: number
    serviceId: number
    date: Date
    heure: string
    motif?: string
  }): Promise<RendezVous> {
    return prisma.rendezVous.create({
      data: {
        ...data,
        creerPar: 'ACCUEIL'
      },
      include: {
        patient: { include: { user: true } },
        medecin: { include: { user: true, service: true } },
        service: true
      }
    })
  }

  async updateRendezVousStatut(rendezVousId: number, statut: 'PLANIFIE' | 'CONFIRME' | 'ANNULE'): Promise<RendezVous> {
    return prisma.rendezVous.update({
      where: { id: rendezVousId },
      data: { statut },
      include: {
        patient: { include: { user: true } },
        medecin: { include: { user: true, service: true } },
        service: true
      }
    })
  }

  // ════════════════════════════════
  // FILE D'ATTENTE
  // ════════════════════════════════

  async getFileAttenteService(serviceId: number): Promise<FileAttente[]> {
    return prisma.fileAttente.findMany({
      where: {
        serviceId,
        statut: { in: ['EN_ATTENTE', 'VALIDE', 'EN_COURS', 'URGENCE'] }
      },
      include: {
        patient: {
          include: { user: true }
        },
        service: true,
        ticket: true
      },
      orderBy: [
        { estPrioritaire: 'desc' },
        { heurePrise: 'asc' }
      ]
    })
  }

  async validerPatient(fileAttenteId: number): Promise<FileAttente> {
    return prisma.fileAttente.update({
      where: { id: fileAttenteId },
      data: {
        statut: 'VALIDE',
        heureValidation: new Date()
      },
      include: {
        patient: { include: { user: true } },
        service: true
      }
    })
  }
}
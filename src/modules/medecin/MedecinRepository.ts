import { prisma } from '../../prismaClient'
import { Medecin, RendezVous, Ticket, Prescription, Referer } from '../../../generated/prisma'

export class MedecinRepository {

  // ════════════════════════════════
  // PROFIL MÉDECIN
  // ════════════════════════════════

  async findByUserId(userId: number): Promise<Medecin | null> {
    return prisma.medecin.findUnique({
      where: { userId }
    })
  }

  async findById(id: number): Promise<Medecin | null> {
    return prisma.medecin.findUnique({
      where: { id },
      include: {
        service: true,
        user: true
      }
    })
  }

  // ════════════════════════════════
  // FILE D'ATTENTE
  // ════════════════════════════════

  async getFileAttente(medecinId: number) {
    const medecin = await this.findById(medecinId)
    if (!medecin) return []

    return prisma.fileAttente.findMany({
      where: {
        serviceId: medecin.serviceId,
        statut: { in: ['VALIDE', 'EN_COURS'] }
      },
      include: {
        patient: {
          include: {
            user: true
          }
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

  // ════════════════════════════════
  // RENDEZ-VOUS
  // ════════════════════════════════

  async getRendezVous(medecinId: number): Promise<RendezVous[]> {
    return prisma.rendezVous.findMany({
      where: { medecinId },
      include: {
        patient: {
          include: { user: true }
        },
        service: true
      },
      orderBy: { date: 'asc' }
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
        patientId: data.patientId,
        medecinId: data.medecinId,
        serviceId: data.serviceId,
        date: data.date,
        heure: data.heure,
        motif: data.motif,
        creerPar: 'MEDECIN'
      },
      include: {
        patient: { include: { user: true } },
        service: true
      }
    })
  }

  // ════════════════════════════════
  // TICKETS
  // ════════════════════════════════

  async getTickets(medecinId: number): Promise<Ticket[]> {
    return prisma.ticket.findMany({
      where: { medecinId },
      include: {
        patient: {
          include: { user: true }
        },
        service: true
      },
      orderBy: { createdAt: 'desc' }
    })
  }

  async getTicketById(ticketId: number): Promise<Ticket | null> {
    return prisma.ticket.findUnique({
      where: { id: ticketId },
      include: {
        patient: {
          include: { user: true }
        },
        service: true
      }
    })
  }

  // ════════════════════════════════
  // CONSULTATION
  // ════════════════════════════════

  async debutConsultation(ticketId: number, medecinId: number): Promise<Ticket> {
    return prisma.ticket.update({
      where: { id: ticketId },
      data: {
        statut: 'EN_COURS',
        medecinId,
        dateDebut: new Date()
      },
      include: {
        patient: { include: { user: true } },
        service: true
      }
    })
  }

  async finConsultation(
    ticketId: number,
    compteRendu?: string
  ): Promise<Ticket> {
    return prisma.ticket.update({
      where: { id: ticketId },
      data: {
        statut: 'TERMINE',
        compteRendu,
        dateFin: new Date()
      }
    })
  }

  async declarerUrgence(ticketId: number): Promise<Ticket> {
    return prisma.ticket.update({
      where: { id: ticketId },
      data: { estUrgence: true }
    })
  }

  // ════════════════════════════════
  // PRESCRIPTIONS
  // ════════════════════════════════

  async createPrescription(data: {
    patientId: number
    medecinId: number
    ticketId?: number
    medicaments: string
    examens?: string
    posologie?: string
  }): Promise<Prescription> {
    return prisma.prescription.create({
      data
    })
  }

  async getPrescriptionsPatient(patientId: number): Promise<Prescription[]> {
    return prisma.prescription.findMany({
      where: { patientId },
      include: {
        medecin: { include: { user: true, service: true } }
      },
      orderBy: { createdAt: 'desc' }
    })
  }

  // ════════════════════════════════
  // RÉFÉRÉS
  // ════════════════════════════════

  async refererPatient(data: {
    patientId: number
    medecinSourceId: number
    medecinCibleId: number
    motif: string
    estUrgence: boolean
  }): Promise<Referer> {
    return prisma.referer.create({
      data
    })
  }

  async getReferersRecus(medecinId: number): Promise<Referer[]> {
    return prisma.referer.findMany({
      where: { medecinCibleId: medecinId },
      include: {
        patient: { include: { user: true } },
        medecinSource: { include: { user: true, service: true } }
      },
      orderBy: { createdAt: 'desc' }
    })
  }
}

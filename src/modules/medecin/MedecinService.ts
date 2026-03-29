import { MedecinRepository } from './MedecinRepository'
import { AppError } from '../../utils/AppError'
import { SmsService } from '../../utils/SmsService'

export class MedecinService {
  private repository: MedecinRepository
  private smsService: SmsService

  constructor() {
    this.repository = new MedecinRepository()
    this.smsService = new SmsService()
  }

  /**
   * Obtenir le profil du médecin
   */
  async getProfile(medecinId: number) {
    const medecin = await this.repository.findById(medecinId)
    if (!medecin) {
      throw new AppError('Médecin non trouvé', 404)
    }
    return medecin
  }

  /**
   * Obtenir la file d'attente du médecin (son service)
   * Trier par : priorité (âges >= 60 ans) DESC, puis heure ASC
   * 
   * RÈGLE MÉTIER:
   * - Les patients ≥ 60 ans sont prioritaires (estPrioritaire = true)
   * - Ils sont classés en premier, puis par heure d'arrivée
   */
  async getFileAttente(medecinId: number) {
    const fileAttente = await this.repository.getFileAttente(medecinId)
    
    // RÈGLE MÉTIER: Trier par priorité + heure
    // Les patients prioritaires (≥60 ans) en premier, puis par ordre d'arrivée
    return fileAttente.sort((a, b) => {
      // D'abord priorité
      if (a.estPrioritaire && !b.estPrioritaire) return -1
      if (!a.estPrioritaire && b.estPrioritaire) return 1
      
      // Ensuite par heure d'arrivée
      return new Date(a.heurePrise).getTime() - new Date(b.heurePrise).getTime()
    })
  }

  /**
   * Obtenir les rendez-vous du médecin
   */
  async getRendezVous(medecinId: number) {
    return this.repository.getRendezVous(medecinId)
  }

  /**
   * Obtenir les tickets/consultations du médecin
   */
  async getTickets(medecinId: number) {
    return this.repository.getTickets(medecinId)
  }

  /**
   * Obtenir un ticket par ID
   */
  async getTicketById(ticketId: number) {
    const ticket = await this.repository.getTicketById(ticketId)
    if (!ticket) {
      throw new AppError('Ticket non trouvé', 404)
    }
    return ticket
  }

  /**
   * Démarrer une consultation
   * 
   * RÈGLE MÉTIER:
   * - Le statut passe de EN_ATTENTE à EN_COURS
   * - La date de début est enregistrée
   * - Le médecin est assigné au ticket
   */
  async debutConsultation(medecinId: number, ticketId: number) {
    const ticket = await this.repository.getTicketById(ticketId)
    
    if (!ticket) {
      throw new AppError('Ticket non trouvé', 404)
    }

    if (ticket.statut !== 'EN_ATTENTE') {
      throw new AppError('Ce ticket ne peut pas démarrer une consultation', 400)
    }

    // Vérifier que le ticket appartient au service du médecin
    const medecin = await this.repository.findById(medecinId)
    if (medecin && ticket.serviceId !== medecin.serviceId) {
      throw new AppError('Ce ticket ne vous appartient pas', 403)
    }

    return this.repository.debutConsultation(ticketId, medecinId)
  }

  /**
   * Terminer une consultation
   * 
   * RÈGLE MÉTIER:
   * - Le statut passe de EN_COURS à TERMINE
   * - Le compte-rendu est ajouté
   * - La date de fin est enregistrée
   */
  async finConsultation(medecinId: number, ticketId: number, compteRendu?: string) {
    const ticket = await this.repository.getTicketById(ticketId)
    
    if (!ticket) {
      throw new AppError('Ticket non trouvé', 404)
    }

    if (ticket.statut !== 'EN_COURS') {
      throw new AppError('Ce ticket nest pas en cours de consultation', 400)
    }

    // Vérifier que le médecin est celui qui traite le ticket
    if (ticket.medecinId !== medecinId) {
      throw new AppError('Vous ne pouvez pas terminer cette consultation', 403)
    }

    const ticketTermine = await this.repository.finConsultation(ticketId, compteRendu)

    // Notification au patient (optionnel - peut être implémenté plus tard)
    // try {
    //   const patient = await this.repository.getPatientById(ticket.patientId)
    //   if (patient) {
    //     await this.smsService.envoyerNotification(
    //       patient.telephone,
    //       'Votre consultation est terminée. Merci de votre visite.'
    //     )
    //   }
    // } catch (error) {
    //   console.error('Erreur notification patient:', error)
    // }

    return ticketTermine
  }

  /**
   * Créer une prescription
   * 
   * RÈGLE MÉTIER:
   * - Le médecin doit être celui qui traite le ticket
   * - Les médicaments sont obligatoires
   */
  async createPrescription(medecinId: number, data: {
    patientId: number
    ticketId?: number
    medicaments: string
    examens?: string
    posologie?: string
  }) {
    // Si un ticket est fourni, vérifier que le médecin le traite
    if (data.ticketId) {
      const ticket = await this.repository.getTicketById(data.ticketId)
      if (!ticket) {
        throw new AppError('Ticket non trouvé', 404)
      }
      if (ticket.medecinId !== medecinId) {
        throw new AppError('Vous ne pouvez pas prescrire sur ce ticket', 403)
      }
    }

    return this.repository.createPrescription({
      ...data,
      medecinId
    })
  }

  /**
   * Référer un patient vers un autre médecin
   * 
   * RÈGLE MÉTIER:
   * - Indiquer si c'est un cas d'urgence (estUrgence)
   * - Le motif est obligatoire
   * - Une notification peut être envoyée au patient si urgence
   */
  async refererPatient(medecinId: number, data: {
    patientId: number
    medecinCibleId: number
    motif: string
    estUrgence: boolean
  }) {
    // Vérifier que le médecin cible existe
    const medecinCible = await this.repository.findById(data.medecinCibleId)
    if (!medecinCible) {
      throw new AppError('Médecin cible non trouvé', 404)
    }

    // Vérifier que le médecin source ne se référence pas lui-même
    if (medecinId === data.medecinCibleId) {
      throw new AppError('Vous ne pouvez pas vous référer vous-même', 400)
    }

    const referer = await this.repository.refererPatient({
      ...data,
      medecinSourceId: medecinId
    })

    // Si urgence, créer une notification
    if (data.estUrgence) {
      // Logique de notification à implémenter
      console.log('⚠️ URGENCE: Patient référé en urgence')
    }

    return referer
  }

  /**
   * Créer un rendez-vous pour un patient
   */
  async createRendezVous(medecinId: number, data: {
    patientId: number
    serviceId: number
    date: string
    heure: string
    motif?: string
  }) {
    const medecin = await this.repository.findById(medecinId)
    if (!medecin) {
      throw new AppError('Médecin non trouvé', 404)
    }

    return this.repository.createRendezVous({
      ...data,
      medecinId,
      date: new Date(data.date)
    })
  }

  /**
   * Déclarer une urgence sur un ticket
   * 
   * RÈGLE MÉTIER:
   * - Le ticket doit être en attente ou en cours
   * - Marque le ticket comme urgent
   */
  async declarerUrgence(medecinId: number, ticketId: number) {
    const ticket = await this.repository.getTicketById(ticketId)
    
    if (!ticket) {
      throw new AppError('Ticket non trouvé', 404)
    }

    if (ticket.statut === 'TERMINE') {
      throw new AppError('Impossible de déclarer urgenc sur un ticket terminé', 400)
    }

    // Vérifier que le ticket appartient au service du médecin
    const medecin = await this.repository.findById(medecinId)
    if (medecin && ticket.serviceId !== medecin.serviceId) {
      throw new AppError('Ce ticket ne vous appartient pas', 403)
    }

    return this.repository.declarerUrgence(ticketId)
  }

  /**
   * Obtenir les patients référés vers ce médecin
   */
  async getReferersRecus(medecinId: number) {
    return this.repository.getReferersRecus(medecinId)
  }

  /**
   * Obtenir les prescriptions d'un patient
   */
  async getPrescriptionsPatient(patientId: number) {
    return this.repository.getPrescriptionsPatient(patientId)
  }
}

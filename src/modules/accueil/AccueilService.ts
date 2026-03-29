import { AccueilRepository } from './AccueilRepository'
import { AppError } from '../../utils/AppError'
import { prisma } from '../../prismaClient'

export class AccueilService {
  private repository: AccueilRepository

  constructor() {
    this.repository = new AccueilRepository()
  }

  // ════════════════════════════════
  // RECHERCHE PAR NUMÉRO DE FILE
  // ════════════════════════════════

  /**
   * Rechercher un patient par numéro de file
   */
  async searchByNumero(numero: number, serviceId?: number) {
    if (!numero || numero <= 0) {
      throw new AppError('Numéro de file invalide', 400)
    }
    return this.repository.searchByNumero(numero, serviceId)
  }

  // ════════════════════════════════
  // PRIX DU TICKET
  // ════════════════════════════════

  /**
   * Obtenir le prix d'un service
   */
  async getPrixService(serviceId: number) {
    const service = await this.repository.getPrixService(serviceId)
    if (!service) {
      throw new AppError('Service non trouvé', 404)
    }
    return {
      serviceId: service.id,
      nom: service.nom,
      prixTicket: service.prixTicket
    }
  }

  /**
   * Créer un ticket avec paiement
   */
  async createTicketWithPayment(accueilId: number, data: {
    patientId: number
    serviceId: number
    fileAttenteId: number
    numero: string
    montantPaye: number
  }) {
    // Vérifier que l'accueil appartient au service
    const accueil = await this.repository.findById(accueilId)
    if (!accueil) {
      throw new AppError('Accueil non trouvé', 404)
    }

    if (accueil.serviceId && accueil.serviceId !== data.serviceId) {
      throw new AppError('Vous ne pouvez pas créer un ticket pour un autre service', 403)
    }

    // Vérifier le montant payé
    const service = await this.repository.getPrixService(data.serviceId)
    if (!service) {
      throw new AppError('Service non trouvé', 404)
    }

    if (data.montantPaye < 0) {
      throw new AppError('Le montant payé ne peut pas être négatif', 400)
    }

    if (data.montantPaye > service.prixTicket) {
      throw new AppError('Le montant payé ne peut pas dépasser le prix du ticket', 400)
    }

    return this.repository.createTicketWithPayment(data)
  }

  /**
   * Mettre à jour le paiement d'un ticket
   */
  async updatePayment(ticketId: number, montantPaye: number) {
    if (montantPaye < 0) {
      throw new AppError('Le montant payé ne peut pas être négatif', 400)
    }

    return this.repository.updatePayment(ticketId, montantPaye)
  }

  // ════════════════════════════════
  // NOTIFICATIONS RÉFÉRÉS
  // ════════════════════════════════

  /**
   * Obtenir les patients référés pour le service de l'accueil
   */
  async getReferersForService(accueilId: number) {
    return this.repository.getReferersForAccueil(accueilId)
  }

  /**
   * Obtenir les patients référés pour un service spécifique
   */
  async getReferersForServiceById(serviceId: number) {
    return this.repository.getReferersForService(serviceId)
  }

  /**
   * Créer une notification pour un patient référé
   */
  async notifierPatientRefere(patientId: number, message: string) {
    return this.repository.createNotification({
      patientId,
      type: 'PATIENT_REFERE',
      message
    })
  }

  // ════════════════════════════════
  // RENDEZ-VOUS
  // ════════════════════════════════

  /**
   * Obtenir tous les RDV du service
   */
  async getAllRendezVousForService(serviceId: number) {
    return this.repository.getAllRendezVousForService(serviceId)
  }

  /**
   * Obtenir les RDV du service pour une date spécifique
   */
  async getRendezVousByDate(serviceId: number, date: string) {
    const dateObj = new Date(date)
    if (isNaN(dateObj.getTime())) {
      throw new AppError('Date invalide', 400)
    }
    return this.repository.getRendezVousByServiceAndDate(serviceId, dateObj)
  }

  /**
   * Créer un RDV (depuis l'accueil)
   */
  async createRendezVous(accueilId: number, data: {
    patientId: number
    medecinId: number
    serviceId: number
    date: string
    heure: string
    motif?: string
  }) {
    // Vérifier que l'accueil appartient au service
    const accueil = await this.repository.findById(accueilId)
    if (!accueil) {
      throw new AppError('Accueil non trouvé', 404)
    }

    if (accueil.serviceId && accueil.serviceId !== data.serviceId) {
      throw new AppError('Vous ne pouvez pas créer un RDV pour un autre service', 403)
    }

    return this.repository.createRendezVous({
      ...data,
      date: new Date(data.date)
    })
  }

  /**
   * Confirmer ou annuler un RDV
   */
  async updateRendezVousStatut(rendezVousId: number, statut: 'PLANIFIE' | 'CONFIRME' | 'ANNULE') {
    const validStatuts = ['PLANIFIE', 'CONFIRME', 'ANNULE']
    if (!validStatuts.includes(statut)) {
      throw new AppError('Statut invalide', 400)
    }

    return this.repository.updateRendezVousStatut(rendezVousId, statut)
  }

  // ════════════════════════════════
  // FILE D'ATTENTE
  // ════════════════════════════════

  /**
   * Obtenir la file d'attente du service
   */
  async getFileAttenteService(serviceId: number) {
    return this.repository.getFileAttenteService(serviceId)
  }

  /**
   * Valider un patient (passer de EN_ATTENTE à VALIDE)
   */
  async validerPatient(fileAttenteId: number) {
    return this.repository.validerPatient(fileAttenteId)
  }

  /**
   * Obtenir le profil de l'accueil
   */
  async getProfile(accueilId: number) {
    const accueil = await this.repository.findById(accueilId)
    if (!accueil) {
      throw new AppError('Accueil non trouvé', 404)
    }
    return accueil
  }

  // ════════════════════════════════
  // COMPLÉTER INSCRIPTION (NOM, PRENOM, AGE)
  // ════════════════════════════════

  /**
   * Compléter le profil d'un patient (nom, prenom, age)
   * Called par l'accueil quand le patient présente son numéro
   */
  async completerInscription(patientId: number, data: {
    nom: string
    prenom: string
    age: number
  }) {
    const patient = await prisma.patient.findUnique({
      where: { id: patientId }
    })
    
    if (!patient) {
      throw new AppError('Patient non trouvé', 404)
    }

    if (!data.nom || !data.prenom || !data.age) {
      throw new AppError('nom, prenom et age sont requis', 400)
    }

    // Mettre à jour l'utilisateur (nom, prenom)
    await prisma.user.update({
      where: { id: patient.userId },
      data: {
        nom: data.nom,
        prenom: data.prenom
      }
    })

    // Mettre à jour le patient (age) et marquer comme complet
    const patientMisAJour = await prisma.patient.update({
      where: { id: patientId },
      data: {
        age: data.age,
        estComplet: true,
        estPrioritaire: data.age >= 60 // Auto-prioritaire si >= 60 ans
      },
      include: {
        user: true
      }
    })

    return {
      message: 'Inscription complétée avec succès',
      patient: {
        id: patientMisAJour.id,
        nom: patientMisAJour.user.nom,
        prenom: patientMisAJour.user.prenom,
        age: patientMisAJour.age,
        estComplet: patientMisAJour.estComplet,
        estPrioritaire: patientMisAJour.estPrioritaire
      }
    }
  }
}
import { Request, Response } from 'express'
import { AccueilService } from './AccueilService'
import { sendSuccess, sendError } from '../../utils/Reponse'
import { AppError } from '../../utils/AppError'

export class AccueilController {
  private service: AccueilService

  constructor() {
    this.service = new AccueilService()
  }

  /**
   * GET /api/accueil/profile
   * Obtenir le profil de l'agent d'accueil
   */
  getProfile = async (req: Request, res: Response) => {
    try {
      const accueilId = (req as any).user.id
      const profile = await this.service.getProfile(accueilId)
      return sendSuccess(res, profile, 'Profil obtenu avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  // ════════════════════════════════
  // RECHERCHE PAR NUMÉRO DE FILE
  // ════════════════════════════════

  /**
   * GET /api/accueil/file-attente/search?numero=5&serviceId=1
   * Rechercher un patient par numéro de file
   */
  searchByNumero = async (req: Request, res: Response) => {
    try {
      const { numero, serviceId } = req.query

      if (!numero) {
        return sendError(res, 'Le numéro de file est requis', 400)
      }

      const result = await this.service.searchByNumero(
        Number(numero),
        serviceId ? Number(serviceId) : undefined
      )
      return sendSuccess(res, result, 'Résultat de recherche')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  // ════════════════════════════════
  // PRIX DU TICKET
  // ════════════════════════════════

  /**
   * GET /api/accueil/services/:serviceId/prix
   * Obtenir le prix du ticket d'un service
   */
  getPrixService = async (req: Request, res: Response) => {
    try {
      const serviceId = Number(req.params.serviceId)
      if (isNaN(serviceId)) {
        return sendError(res, 'ID de service invalide', 400)
      }

      const prix = await this.service.getPrixService(serviceId)
      return sendSuccess(res, prix, 'Prix du ticket')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * POST /api/accueil/tickets
   * Créer un ticket avec paiement
   */
  createTicketWithPayment = async (req: Request, res: Response) => {
    try {
      const accueilId = (req as any).user.id
      const { patientId, serviceId, fileAttenteId, numero, montantPaye } = req.body

      if (!patientId || !serviceId || !fileAttenteId || !numero || montantPaye === undefined) {
        return sendError(res, 'patientId, serviceId, fileAttenteId, numero et montantPaye sont requis', 400)
      }

      const ticket = await this.service.createTicketWithPayment(accueilId, {
        patientId,
        serviceId,
        fileAttenteId,
        numero,
        montantPaye
      })
      return sendSuccess(res, ticket, 'Ticket créé avec succès', 201)
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * PUT /api/accueil/tickets/:id/payment
   * Mettre à jour le paiement d'un ticket
   */
  updatePayment = async (req: Request, res: Response) => {
    try {
      const ticketId = Number(req.params.id)
      const { montantPaye } = req.body

      if (isNaN(ticketId)) {
        return sendError(res, 'ID de ticket invalide', 400)
      }

      if (montantPaye === undefined) {
        return sendError(res, 'montantPaye est requis', 400)
      }

      const ticket = await this.service.updatePayment(ticketId, montantPaye)
      return sendSuccess(res, ticket, 'Paiement mis à jour')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  // ════════════════════════════════
  // NOTIFICATIONS RÉFÉRÉS
  // ════════════════════════════════

  /**
   * GET /api/accueil/referers
   * Obtenir les patients référés pour le service
   */
  getReferers = async (req: Request, res: Response) => {
    try {
      const accueilId = (req as any).user.id
      const referers = await this.service.getReferersForService(accueilId)
      return sendSuccess(res, referers, 'Patients référés')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * POST /api/accueil/referers/:refererId/notifier
   * Envoyer une notification à un patient référé
   */
  notifierPatientRefere = async (req: Request, res: Response) => {
    try {
      const refererId = Number(req.params.refererId)
      const { patientId, message } = req.body

      if (isNaN(refererId)) {
        return sendError(res, 'ID de référé invalide', 400)
      }

      if (!patientId || !message) {
        return sendError(res, 'patientId et message sont requis', 400)
      }

      const notification = await this.service.notifierPatientRefere(patientId, message)
      return sendSuccess(res, notification, 'Notification envoyée')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  // ════════════════════════════════
  // RENDEZ-VOUS
  // ════════════════════════════════

  /**
   * GET /api/accueil/rendez-vous?serviceId=1
   * Obtenir tous les RDV du service
   */
  getAllRendezVous = async (req: Request, res: Response) => {
    try {
      const { serviceId, date } = req.query

      if (!serviceId) {
        return sendError(res, 'serviceId est requis', 400)
      }

      if (date) {
        const rdv = await this.service.getRendezVousByDate(Number(serviceId), date as string)
        return sendSuccess(res, rdv, 'Rendez-vous pour cette date')
      } else {
        const rdv = await this.service.getAllRendezVousForService(Number(serviceId))
        return sendSuccess(res, rdv, 'Tous les rendez-vous')
      }
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * POST /api/accueil/rendez-vous
   * Créer un RDV depuis l'accueil
   */
  createRendezVous = async (req: Request, res: Response) => {
    try {
      const accueilId = (req as any).user.id
      const { patientId, medecinId, serviceId, date, heure, motif } = req.body

      if (!patientId || !medecinId || !serviceId || !date || !heure) {
        return sendError(res, 'patientId, medecinId, serviceId, date et heure sont requis', 400)
      }

      const rdv = await this.service.createRendezVous(accueilId, {
        patientId,
        medecinId,
        serviceId,
        date,
        heure,
        motif
      })
      return sendSuccess(res, rdv, 'Rendez-vous créé avec succès', 201)
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * PUT /api/accueil/rendez-vous/:id/statut
   * Mettre à jour le statut d'un RDV
   */
  updateRendezVousStatut = async (req: Request, res: Response) => {
    try {
      const rendezVousId = Number(req.params.id)
      const { statut } = req.body

      if (isNaN(rendezVousId)) {
        return sendError(res, 'ID de rendez-vous invalide', 400)
      }

      if (!statut) {
        return sendError(res, 'statut est requis', 400)
      }

      const validStatuts = ['PLANIFIE', 'CONFIRME', 'ANNULE']
      if (!validStatuts.includes(statut)) {
        return sendError(res, 'Statut invalide. Utilisez: PLANIFIE, CONFIRME ou ANNULE', 400)
      }

      const rdv = await this.service.updateRendezVousStatut(rendezVousId, statut)
      return sendSuccess(res, rdv, 'Statut mis à jour')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  // ════════════════════════════════
  // FILE D'ATTENTE
  // ════════════════════════════════

  /**
   * GET /api/accueil/file-attente?serviceId=1
   * Obtenir la file d'attente du service
   */
  getFileAttente = async (req: Request, res: Response) => {
    try {
      const { serviceId } = req.query

      if (!serviceId) {
        return sendError(res, 'serviceId est requis', 400)
      }

      const fileAttente = await this.service.getFileAttenteService(Number(serviceId))
      return sendSuccess(res, fileAttente, 'File d\'attente')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * POST /api/accueil/file-attente/:id/valider
   * Valider un patient (passer de EN_ATTENTE à VALIDE)
   */
  validerPatient = async (req: Request, res: Response) => {
    try {
      const fileAttenteId = Number(req.params.id)

      if (isNaN(fileAttenteId)) {
        return sendError(res, 'ID de file d\'attente invalide', 400)
      }

      const result = await this.service.validerPatient(fileAttenteId)
      return sendSuccess(res, result, 'Patient validé')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  // ════════════════════════════════
  // COMPLÉTER INSCRIPTION
  // ════════════════════════════════

  /**
   * POST /api/accueil/patients/:id/completer
   * Compléter le profil d'un patient (nom, prenom, age)
   * L'accueil termine l'inscription quand le patient présente son numéro
   */
  completerInscription = async (req: Request, res: Response) => {
    try {
      const patientId = Number(req.params.id)
      const { nom, prenom, age } = req.body

      if (isNaN(patientId)) {
        return sendError(res, 'ID patient invalide', 400)
      }

      if (!nom || !prenom || !age) {
        return sendError(res, 'nom, prenom et age sont requis', 400)
      }

      const result = await this.service.completerInscription(patientId, {
        nom,
        prenom,
        age
      })

      return sendSuccess(res, result, 'Inscription complétée avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }
}

// Export singleton
export const accueilController = new AccueilController()
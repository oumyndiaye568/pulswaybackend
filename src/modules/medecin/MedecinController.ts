import { Request, Response } from 'express'
import { MedecinService } from './MedecinService'
import { sendSuccess, sendError } from '../../utils/Reponse'
import { AppError } from '../../utils/AppError'

export class MedecinController {
  private service: MedecinService

  constructor() {
    this.service = new MedecinService()
  }

  /**
   * GET /api/medecin/profile
   * Obtenir le profil du médecin
   */
  getProfile = async (req: Request, res: Response) => {
    try {
      const medecinId = (req as any).user.id
      const profile = await this.service.getProfile(medecinId)
      return sendSuccess(res, profile, 'Profil obtenu avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * GET /api/medecin/file-attente
   * Obtenir la file d'attente du médecin (son service)
   * Trie : prioritaires (≥60 ans) en premier, puis par heure d'arrivée
   */
  getFileAttente = async (req: Request, res: Response) => {
    try {
      const medecinId = (req as any).user.id
      const fileAttente = await this.service.getFileAttente(medecinId)
      return sendSuccess(res, fileAttente, 'File d\'attente obtenue avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * GET /api/medecin/rendez-vous
   * Obtenir les rendez-vous du médecin
   */
  getRendezVous = async (req: Request, res: Response) => {
    try {
      const medecinId = (req as any).user.id
      const rendezVous = await this.service.getRendezVous(medecinId)
      return sendSuccess(res, rendezVous, 'Rendez-vous obtenus avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * GET /api/medecin/tickets
   * Obtenir les tickets/consultations du médecin
   */
  getTickets = async (req: Request, res: Response) => {
    try {
      const medecinId = (req as any).user.id
      const tickets = await this.service.getTickets(medecinId)
      return sendSuccess(res, tickets, 'Tickets obtenus avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * GET /api/medecin/tickets/:id
   * Obtenir un ticket par ID
   */
  getTicketById = async (req: Request, res: Response) => {
    try {
      const ticketId = Number(req.params.id)
      if (isNaN(ticketId)) {
        return sendError(res, 'ID ticket invalide', 400)
      }
      const ticket = await this.service.getTicketById(ticketId)
      return sendSuccess(res, ticket, 'Ticket obtenu avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * POST /api/medecin/consultation/:id/debut
   * Démarrer une consultation
   */
  debutConsultation = async (req: Request, res: Response) => {
    try {
      const medecinId = (req as any).user.id
      const ticketId = Number(req.params.id)
      
      if (isNaN(ticketId)) {
        return sendError(res, 'ID ticket invalide', 400)
      }

      const ticket = await this.service.debutConsultation(medecinId, ticketId)
      return sendSuccess(res, ticket, 'Consultation démarrée avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * POST /api/medecin/consultation/:id/fin
   * Terminer une consultation avec compte-rendu
   */
  finConsultation = async (req: Request, res: Response) => {
    try {
      const medecinId = (req as any).user.id
      const ticketId = Number(req.params.id)
      const { compteRendu } = req.body
      
      if (isNaN(ticketId)) {
        return sendError(res, 'ID ticket invalide', 400)
      }

      const ticket = await this.service.finConsultation(medecinId, ticketId, compteRendu)
      return sendSuccess(res, ticket, 'Consultation terminée avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * POST /api/medecin/prescription
   * Créer une prescription
   */
  createPrescription = async (req: Request, res: Response) => {
    try {
      const medecinId = (req as any).user.id
      const { patientId, ticketId, medicaments, examens, posologie } = req.body

      if (!patientId || !medicaments) {
        return sendError(res, 'patientId et medicaments sont requis', 400)
      }

      const prescription = await this.service.createPrescription(medecinId, {
        patientId,
        ticketId,
        medicaments,
        examens,
        posologie
      })
      return sendSuccess(res, prescription, 'Prescription créée avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * POST /api/medecin/referer
   * Référer un patient vers un autre médecin
   */
  refererPatient = async (req: Request, res: Response) => {
    try {
      const medecinId = (req as any).user.id
      const { patientId, medecinCibleId, motif, estUrgence } = req.body

      if (!patientId || !medecinCibleId || !motif) {
        return sendError(res, 'patientId, medecinCibleId et motif sont requis', 400)
      }

      const referer = await this.service.refererPatient(medecinId, {
        patientId,
        medecinCibleId,
        motif,
        estUrgence: estUrgence || false
      })
      return sendSuccess(res, referer, 'Patient référé avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * POST /api/medecin/rendez-vous
   * Créer un rendez-vous pour un patient
   */
  createRendezVous = async (req: Request, res: Response) => {
    try {
      const medecinId = (req as any).user.id
      const { patientId, serviceId, date, heure, motif } = req.body

      if (!patientId || !serviceId || !date || !heure) {
        return sendError(res, 'patientId, serviceId, date et heure sont requis', 400)
      }

      const rendezVous = await this.service.createRendezVous(medecinId, {
        patientId,
        serviceId,
        date,
        heure,
        motif
      })
      return sendSuccess(res, rendezVous, 'Rendez-vous créé avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * POST /api/medecin/tickets/:id/urgence
   * Déclarer une urgence sur un ticket
   */
  declarerUrgence = async (req: Request, res: Response) => {
    try {
      const medecinId = (req as any).user.id
      const ticketId = Number(req.params.id)
      
      if (isNaN(ticketId)) {
        return sendError(res, 'ID ticket invalide', 400)
      }

      const ticket = await this.service.declarerUrgence(medecinId, ticketId)
      return sendSuccess(res, ticket, 'Urgence déclarée avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * GET /api/medecin/referers
   * Obtenir les patients référés vers ce médecin
   */
  getReferersRecus = async (req: Request, res: Response) => {
    try {
      const medecinId = (req as any).user.id
      const referers = await this.service.getReferersRecus(medecinId)
      return sendSuccess(res, referers, 'Patients référés obtenus avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }

  /**
   * GET /api/medecin/prescriptions/:patientId
   * Obtenir les prescriptions d'un patient
   */
  getPrescriptionsPatient = async (req: Request, res: Response) => {
    try {
      const patientId = Number(req.params.patientId)
      
      if (isNaN(patientId)) {
        return sendError(res, 'ID patient invalide', 400)
      }

      const prescriptions = await this.service.getPrescriptionsPatient(patientId)
      return sendSuccess(res, prescriptions, 'Prescriptions obtenues avec succès')
    } catch (error) {
      if (error instanceof AppError) {
        return sendError(res, error.message, error.statusCode)
      }
      return sendError(res, 'Erreur serveur interne', 500)
    }
  }
}

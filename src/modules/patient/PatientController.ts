import { Request, Response, NextFunction } from 'express'
import { PatientService } from './PatientService'
import { sendSuccess, sendError } from '../../utils/Reponse'

export class PatientController {
  constructor(private readonly service: PatientService) {}

  // ════════════════════════════════
  // PROFIL
  // ════════════════════════════════

  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const patientId = (req as any).user.id
      const profile = await this.service.getProfile(patientId)
      return sendSuccess(res, profile, 'Profil récupéré', 200)
    } catch (error) {
      next(error)
    }
  }

  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const patientId = (req as any).user.id
      const profile = await this.service.updateProfile(patientId, req.body)
      return sendSuccess(res, profile, 'Profil mis à jour', 200)
    } catch (error) {
      next(error)
    }
  }

  // ════════════════════════════════
  // ITINÉRAIRE (SERVICES)
  // ════════════════════════════════

  /**
   * GET /api/patient/services
   * Liste de tous les services (pour l'itinéraire)
   */
  async getAllServices(req: Request, res: Response, next: NextFunction) {
    try {
      const services = await this.service.getAllServices()
      return sendSuccess(res, services, 'Services récupérés', 200)
    } catch (error) {
      next(error)
    }
  }

  /**
   * GET /api/patient/services/:id
   * Détails d'un service (localisation + médecins)
   */
  async getServiceById(req: Request, res: Response, next: NextFunction) {
    try {
      const serviceId = Number(req.params.id)
      const service = await this.service.getServiceById(serviceId)
      return sendSuccess(res, service, 'Service récupéré', 200)
    } catch (error) {
      next(error)
    }
  }

  // ════════════════════════════════
  // FILE D'ATTENTE
  // ════════════════════════════════

  /**
   * POST /api/patient/services/:id/numero
   * Obtenir un numéro (détection automatique RDV vs SPONTANE)
   */
  async obtenirNumero(req: Request, res: Response, next: NextFunction) {
    try {
      const patientId = (req as any).user.id
      const serviceId = Number(req.params.id)
      const result = await this.service.obtenirNumero(patientId, serviceId)
      return sendSuccess(res, result, result.message, 201)
    } catch (error) {
      next(error)
    }
  }

  /**
   * GET /api/patient/file-attente
   * Voir son numéro dans la file
   */
  async getFileAttente(req: Request, res: Response, next: NextFunction) {
    try {
      const patientId = (req as any).user.id
      const fileAttente = await this.service.getFileAttente(patientId)
      return sendSuccess(res, fileAttente, 'File d\'attente récupérée', 200)
    } catch (error) {
      next(error)
    }
  }

  /**
   * DELETE /api/patient/file-attente
   * Annuler son numéro (quitter la file)
   */
  async annulerNumero(req: Request, res: Response, next: NextFunction) {
    try {
      const patientId = (req as any).user.id
      const result = await this.service.annulerNumero(patientId)
      return sendSuccess(res, result, result.message, 200)
    } catch (error) {
      next(error)
    }
  }

  // ════════════════════════════════
  // RENDEZ-VOUS
  // ════════════════════════════════

  /**
   * GET /api/patient/rendez-vous
   * Voir ses rendez-vous
   */
  async getRendezVous(req: Request, res: Response, next: NextFunction) {
    try {
      const patientId = (req as any).user.id
      const rendezVous = await this.service.getRendezVous(patientId)
      return sendSuccess(res, rendezVous, 'Rendez-vous récupérés', 200)
    } catch (error) {
      next(error)
    }
  }

  /**
   * GET /api/patient/rendez-vous/:id
   * Voir un rendez-vous spécifique
   */
  async getRendezVousById(req: Request, res: Response, next: NextFunction) {
    try {
      const rdvId = Number(req.params.id)
      const rendezVous = await this.service.getRendezVousById(rdvId)
      return sendSuccess(res, rendezVous, 'Rendez-vous récupéré', 200)
    } catch (error) {
      next(error)
    }
  }

  // ════════════════════════════════
  // DOSSIER
  // ════════════════════════════════

  async checkDossier(req: Request, res: Response, next: NextFunction) {
    try {
      const patientId = (req as any).user.id
      const dossier = await this.service.checkDossierComplet(patientId)
      return sendSuccess(res, dossier, 'Statut du dossier', 200)
    } catch (error) {
      next(error)
    }
  }

  // ════════════════════════════════
  // GUIDAGE (CARTE / VOIX)
  // ════════════════════════════════

  /**
   * GET /api/patient/services/:id/guidage
   * Obtenir les informations de guidage pour un service
   * Utilisé pour l'option Carte (texte) ou Voix (audio)
   */
  async getGuidage(req: Request, res: Response, next: NextFunction) {
    try {
      const serviceId = Number(req.params.id)
      const guidage = await this.service.getGuidage(serviceId)
      return sendSuccess(res, guidage, 'Informations de guidage', 200)
    } catch (error) {
      next(error)
    }
  }
}

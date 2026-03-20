import { Request, Response, NextFunction } from 'express'
import { PatientService } from './PatientService'
import { sendSuccess, sendError } from '../../utils/Reponse'

export class PatientController {
  constructor(private readonly service: PatientService) {}

  /**
   * GET /api/patient/profile
   * Récupérer le profil du patient connecté
   */
  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      // req.user est défini par l'authMiddleware
      const patientId = (req as any).user.id
      const profile = await this.service.getProfile(patientId)
      return sendSuccess(res, profile, 'Profil récupéré', 200)
    } catch (error) {
      next(error)
    }
  }

  /**
   * PUT /api/patient/profile
   * Mettre à jour le profil du patient
   */
  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const patientId = (req as any).user.id
      const profile = await this.service.updateProfile(patientId, req.body)
      return sendSuccess(res, profile, 'Profil mis à jour', 200)
    } catch (error) {
      next(error)
    }
  }

  /**
   * GET /api/patient/services
   * Liste des services disponibles (PUBLIC - sans auth)
   */
  async getServices(req: Request, res: Response, next: NextFunction) {
    try {
      const services = await this.service.getServices()
      return sendSuccess(res, services, 'Services récupérés', 200)
    } catch (error) {
      next(error)
    }
  }

  /**
   * GET /api/patient/services/:id
   * Détail d'un service (PUBLIC)
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

  /**
   * GET /api/patient/dossier
   * Vérifier si le dossier est complet
   */
  async checkDossier(req: Request, res: Response, next: NextFunction) {
    try {
      const patientId = (req as any).user.id
      const dossier = await this.service.checkDossierComplet(patientId)
      return sendSuccess(res, dossier, 'Statut du dossier', 200)
    } catch (error) {
      next(error)
    }
  }
}

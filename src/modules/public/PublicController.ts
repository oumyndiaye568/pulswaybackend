import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../../prismaClient'
import { sendSuccess, sendError } from '../../utils/Reponse'

export class PublicController {

  /**
   * GET /api/public/services?patientId=123
   * Obtenir la liste des services (accessible sans auth, mais patientId requis)
   */
  async getServices(req: Request, res: Response): Promise<void> {
    try {
      const { patientId } = req.query

      if (!patientId) {
        sendError(res, 'patientId est requis', 400)
        return
      }

      // Vérifier que le patient existe
      const patient = await prisma.patient.findUnique({
        where: { id: Number(patientId) },
        include: { user: true }
      })

      if (!patient) {
        sendError(res, 'Patient non trouvé', 404)
        return
      }

      // Récupérer tous les services
      const services = await prisma.service.findMany({
        orderBy: { nom: 'asc' }
      })

      sendSuccess(res, {
        patient: {
          id: patient.id,
          telephone: patient.telephone
        },
        services: services
      }, 'Liste des services')
    } catch (error) {
      console.error('[Public] Erreur getServices:', error)
      sendError(res, 'Erreur serveur', 500)
    }
  }

  /**
   * POST /api/public/login
   * Connexion rapide pour les patients (patientId + codePin)
   * Retourne un token JWT + liste des services
   * 
   * Nouveau flux :
   * 1. Patient clique sur lien SMS (avec patientId)
   * 2. Entre son codePin
   * 3. Reçoit token + voit les services
   */
  async login(req: Request, res: Response): Promise<void> {
    try {
      const { patientId, codePin } = req.body

      if (!patientId || !codePin) {
        sendError(res, 'patientId et codePin sont requis', 400)
        return
      }

      // Trouver le patient par ID
      const patient = await prisma.patient.findUnique({
        where: { id: Number(patientId) },
        include: { user: true }
      })

      if (!patient) {
        sendError(res, 'Patient non trouvé', 404)
        return
      }

      // Vérifier le codePin
      const isValidPin = await bcrypt.compare(codePin, patient.codePin)
      if (!isValidPin) {
        sendError(res, 'CodePin invalide', 401)
        return
      }

      // Générer un token JWT
      const token = jwt.sign(
        { 
          userId: patient.userId, 
          patientId: patient.id, 
          role: 'PATIENT' 
        },
        process.env.ACCESS_SECRET || 'default-secret',
        { expiresIn: '1h' }
      )

      // Récupérer la liste des services
      const services = await prisma.service.findMany({
        orderBy: { nom: 'asc' }
      })

      sendSuccess(res, {
        token,
        patientId: patient.id,
        patient: {
          telephone: patient.telephone,
          estComplet: patient.estComplet
        },
        services: services
      }, 'Connexion réussie - voici les services disponibles')
    } catch (error) {
      console.error('[Public] Erreur login:', error)
      sendError(res, 'Erreur serveur', 500)
    }
  }

  /**
   * POST /api/public/numero
   * Obtenir un numéro dans la file d'attente
   * Le patient doit être connecté (token requis)
   */
  async obtenirNumero(req: Request, res: Response): Promise<void> {
    try {
      const { serviceId } = req.body
      const patientId = (req as any).user?.patientId

      if (!serviceId) {
        sendError(res, 'serviceId est requis', 400)
        return
      }

      if (!patientId) {
        sendError(res, 'Non autorisé', 401)
        return
      }

      // Vérifier que le patient n'est pas déjà dans une file
      const fileExistante = await prisma.fileAttente.findUnique({
        where: { patientId }
      })

      if (fileExistante) {
        sendError(res, 'Vous êtes déjà dans une file d\'attente', 400)
        return
      }

      // Vérifier le service
      const service = await prisma.service.findUnique({
        where: { id: serviceId }
      })

      if (!service) {
        sendError(res, 'Service non trouvé', 404)
        return
      }

      // Obtenir le dernier numéro de la file pour ce service
      const dernierNumero = await prisma.fileAttente.findFirst({
        where: { serviceId },
        orderBy: { numero: 'desc' }
      })

      const nouveauNumero = (dernierNumero?.numero || 0) + 1

      // Créer l'entrée dans la file
      const fileAttente = await prisma.fileAttente.create({
        data: {
          patientId,
          serviceId,
          numero: nouveauNumero,
          typeEntree: 'SPONTANE', // Le patient choisit le service lui-même
          statut: 'EN_ATTENTE'
        },
        include: {
          service: true,
          patient: {
            include: { user: true }
          }
        }
      })

      sendSuccess(res, {
        numero: fileAttente.numero,
        service: fileAttente.service.nom,
        position: nouveauNumero,
        message: 'Présentez ce numéro à l\'accueil pour compléter votre inscription'
      }, 'Numéro obtenu avec succès', 201)
    } catch (error) {
      console.error('[Public] Erreur obtenirNumero:', error)
      sendError(res, 'Erreur serveur', 500)
    }
  }
}

// Export singleton
export const publicController = new PublicController()
import { Router } from 'express'
import { MedecinController } from './MedecinController'
import { authMiddleware } from '../../midellwares/Auth.middelware'
import { roleMiddleware } from '../../midellwares/Role.middelware'

const router = Router()
const controller = new MedecinController()

/**
 * Routes Médecin - Toutes protégées par auth + rôle MEDECIN
 */

// Profil
router.get(
  '/profile',
  authMiddleware,
  roleMiddleware('MEDECIN'),
  controller.getProfile
)

// File d'attente
router.get(
  '/file-attente',
  authMiddleware,
  roleMiddleware('MEDECIN'),
  controller.getFileAttente
)

// Rendez-vous
router.get(
  '/rendez-vous',
  authMiddleware,
  roleMiddleware('MEDECIN'),
  controller.getRendezVous
)

router.post(
  '/rendez-vous',
  authMiddleware,
  roleMiddleware('MEDECIN'),
  controller.createRendezVous
)

// Tickets
router.get(
  '/tickets',
  authMiddleware,
  roleMiddleware('MEDECIN'),
  controller.getTickets
)

router.get(
  '/tickets/:id',
  authMiddleware,
  roleMiddleware('MEDECIN'),
  controller.getTicketById
)

// Consultation
router.post(
  '/consultation/:id/debut',
  authMiddleware,
  roleMiddleware('MEDECIN'),
  controller.debutConsultation
)

router.post(
  '/consultation/:id/fin',
  authMiddleware,
  roleMiddleware('MEDECIN'),
  controller.finConsultation
)

// Urgences
router.post(
  '/tickets/:id/urgence',
  authMiddleware,
  roleMiddleware('MEDECIN'),
  controller.declarerUrgence
)

// Prescriptions
router.post(
  '/prescription',
  authMiddleware,
  roleMiddleware('MEDECIN'),
  controller.createPrescription
)

router.get(
  '/prescriptions/:patientId',
  authMiddleware,
  roleMiddleware('MEDECIN'),
  controller.getPrescriptionsPatient
)

// Référés
router.post(
  '/referer',
  authMiddleware,
  roleMiddleware('MEDECIN'),
  controller.refererPatient
)

router.get(
  '/referers',
  authMiddleware,
  roleMiddleware('MEDECIN'),
  controller.getReferersRecus
)

export default router

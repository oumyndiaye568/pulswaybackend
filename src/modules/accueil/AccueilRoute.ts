import { Router } from 'express'
import { accueilController } from './AccueilController'
import { authMiddleware } from '../../midellwares/Auth.middelware'
import { roleMiddleware } from '../../midellwares/Role.middelware'

const router = Router()

// Protection: toutes les routes nécessitent une authentification et le rôle ACCUEIL
router.use(authMiddleware)
router.use(roleMiddleware('ACCUEIL'))

// ════════════════════════════════
// PROFIL
// ════════════════════════════════

router.get('/profile', accueilController.getProfile.bind(accueilController))

// ════════════════════════════════
// RECHERCHE PAR NUMÉRO DE FILE
// ════════════════════════════════

router.get('/file-attente/search', accueilController.searchByNumero.bind(accueilController))

// ════════════════════════════════
// PRIX DU TICKET
// ════════════════════════════════

router.get('/services/:serviceId/prix', accueilController.getPrixService.bind(accueilController))
router.post('/tickets', accueilController.createTicketWithPayment.bind(accueilController))
router.put('/tickets/:id/payment', accueilController.updatePayment.bind(accueilController))

// ════════════════════════════════
// NOTIFICATIONS RÉFÉRÉS
// ════════════════════════════════

router.get('/referers', accueilController.getReferers.bind(accueilController))
router.post('/referers/:refererId/notifier', accueilController.notifierPatientRefere.bind(accueilController))

// ════════════════════════════════
// RENDEZ-VOUS
// ════════════════════════════════

router.get('/rendez-vous', accueilController.getAllRendezVous.bind(accueilController))
router.post('/rendez-vous', accueilController.createRendezVous.bind(accueilController))
router.put('/rendez-vous/:id/statut', accueilController.updateRendezVousStatut.bind(accueilController))

// ════════════════════════════════
// FILE D'ATTENTE
// ════════════════════════════════

router.get('/file-attente', accueilController.getFileAttente.bind(accueilController))
router.post('/file-attente/:id/valider', accueilController.validerPatient.bind(accueilController))

// ════════════════════════════════
// COMPLÉTER INSCRIPTION
// ════════════════════════════════
// POST /api/accueil/patients/:id/completer
// L'accueil termine l'inscription quand le patient présente son numéro
router.post('/patients/:id/completer', accueilController.completerInscription.bind(accueilController))

export default router
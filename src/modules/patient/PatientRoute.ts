import { Router } from 'express'
import { patientController } from '../../container'
import { authMiddleware } from '../../midellwares/Auth.middelware'

const router = Router()

// ════════════════════════════════
// TOUTES LES ROUTES NÉCESSITENT AUTH
// ════════════════════════════════

router.use(authMiddleware)

// ── ITINÉRAIRE (SERVICES) ──

// GET /patient/services - Liste de tous les services
router.get('/services', patientController.getAllServices.bind(patientController))

// GET /patient/services/:id - Détails d'un service (localisation + médecins)
router.get('/services/:id', patientController.getServiceById.bind(patientController))

// ── PROFIL ──
router.get('/profile', patientController.getProfile.bind(patientController))
router.put('/profile', patientController.updateProfile.bind(patientController))

// ── DOSSIER ──
router.get('/dossier', patientController.checkDossier.bind(patientController))

// ── FILE D'ATTENTE ──

// POST /patient/services/:id/numero - Obtenir un numéro
router.post('/services/:id/numero', patientController.obtenirNumero.bind(patientController))

// GET /patient/file-attente - Voir son numéro
router.get('/file-attente', patientController.getFileAttente.bind(patientController))

// DELETE /patient/file-attente - Annuler son numéro
router.delete('/file-attente', patientController.annulerNumero.bind(patientController))

// ── RENDEZ-VOUS ──

// GET /patient/rendez-vous - Liste des RDV
router.get('/rendez-vous', patientController.getRendezVous.bind(patientController))

// GET /patient/rendez-vous/:id - Détails RDV
router.get('/rendez-vous/:id', patientController.getRendezVousById.bind(patientController))

// ── GUIDAGE (CARTE / VOIX) ──

// GET /patient/services/:id/guidage - Obtenir les informations de guidage
router.get('/services/:id/guidage', patientController.getGuidage.bind(patientController))

export default router

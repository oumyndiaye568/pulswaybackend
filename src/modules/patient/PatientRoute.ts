import { Router } from 'express'
import { patientController } from '../../container'
import { authMiddleware } from '../../midellwares/Auth.middelware'

const router = Router()

// Routes publiques (sans authentification)
// Le patient peut voir les services sans être connecté
router.get('/services', patientController.getServices.bind(patientController))
router.get('/services/:id', patientController.getServiceById.bind(patientController))

// Routes protégées (authentification requise)
router.use(authMiddleware)

router.get('/profile', patientController.getProfile.bind(patientController))
router.put('/profile', patientController.updateProfile.bind(patientController))
router.get('/dossier', patientController.checkDossier.bind(patientController))

export default router

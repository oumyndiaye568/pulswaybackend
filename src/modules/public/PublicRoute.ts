import { Router } from 'express'
import { publicController } from './PublicController'
import { authMiddleware } from '../../midellwares/Auth.middelware'

const router = Router()

// ════════════════════════════════
// ROUTES PUBLIQUES (SANS AUTH)
// ════════════════════════════════

/**
 * GET /api/public/services?patientId=123
 * Liste des services (patientId requis, pas de auth)
 */
router.get('/services', publicController.getServices.bind(publicController))

/**
 * POST /api/public/login
 * Connexion rapide patient (téléphone + codePin)
 * Retourne un token JWT
 */
router.post('/login', publicController.login.bind(publicController))

// ════════════════════════════════
// ROUTES PROTÉGÉES (AVEC AUTH)
// ════════════════════════════════

/**
 * POST /api/public/numero
 * Obtenir un numéro (token JWT requis)
 */
router.post('/numero', authMiddleware, publicController.obtenirNumero.bind(publicController))

export default router
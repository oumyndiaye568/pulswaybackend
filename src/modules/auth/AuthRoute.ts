// import { Router } from 'express'
// import { AuthController } from './AuthController'
// import { InscriptionSchema } from './dto/inscription.dto'
// import { LoginSchema } from './dto/login.dto'

// const router = Router();
// const authController = new AuthController();

// // POST /api/auth/inscription
// router.post( '/inscription',validate(InscriptionSchema),authController.inscription.bind(authController));

// // POST /api/auth/login
// router.post('/login',validate(LoginSchema),authController.login.bind(authController));

// export default router;
import { Router } from 'express'
import { authController } from '../../container'
import { validate } from '../../midellwares/Validate.middelware'
import { authLimiter, inscriptionLimiter, resetPasswordLimiter } from '../../midellwares/RateLimit.middelware'
import { InscriptionSchema } from './dto/inscription.dto'
import { LoginSchema } from './dto/login.dto'

const router = Router();

// Rate limiting appliqué aux routes
router.post('/inscription', inscriptionLimiter, validate(InscriptionSchema), authController.inscription.bind(authController));

router.post('/login', authLimiter, validate(LoginSchema), authController.login.bind(authController));

// Route pour rafraichir le token
router.post('/refresh-token', authController.refreshToken.bind(authController));

// Route pour réinitialiser le mot de passe (à implémenter)
// router.post('/reset-password', resetPasswordLimiter, ...)

export default router;
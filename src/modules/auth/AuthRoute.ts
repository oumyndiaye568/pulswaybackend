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
import { InscriptionSchema } from './dto/inscription.dto'
import { LoginSchema } from './dto/login.dto'

const router = Router();

router.post('/inscription',validate(InscriptionSchema),authController.inscription.bind(authController));

router.post('/login',validate(LoginSchema),authController.login.bind(authController));

export default router;
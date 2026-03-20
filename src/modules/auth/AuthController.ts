// import { Request, Response, NextFunction } from 'express'
// import { AuthService } from './Authservice.ts'
// import { AuthRepository } from './AuthRepository'
// import { InscriptionSchema } from './dto/inscription.dto'
// import { LoginSchema } from './dto/login.dto'

// // Injection de dépendance
// const authRepository = new AuthRepository();
// const authService = new AuthService(authRepository);

// export class AuthController {

//   /**
//    * POST /api/auth/inscription
//    */
//   async inscription(req: Request, res: Response, next: NextFunction) {
//     try {
//       // 1. Valider les données avec Zod
//       const validation = InscriptionSchema.safeParse(req.body);

//       if (!validation.success) {
//         return sendError(res, 'Données invalides', 400, 
//           validation.error.issues.map(e => ({
//             field: e.path.join('.'),
//             message: e.message
//           }))
//         );
//       }

//       // 2. Appeler le service
//       const result = await authService.inscription(validation.data);

//       return sendSuccess(res, result, result.message, 201);

//     } catch (error) {
//       next(error); // passe l'erreur au error middleware
//     }
//   }

//   /**
//    * POST /api/auth/login
//    */
//   async login(req: Request, res: Response, next: NextFunction) {
//     try {
//       // 1. Valider les données avec Zod
//       const validation = LoginSchema.safeParse(req.body);

//       if (!validation.success) {
//         return sendError(res, 'Données invalides', 400,
//           validation.error.issues.map(e => ({
//             field: e.path.join('.'),
//             message: e.message
//           }))
//         );
//       }

//       // 2. Appeler le service
//       const result = await authService.login(validation.data);

//       return sendSuccess(res, result, result.message, 200);

//     } catch (error) {
//       next(error);
//     }
//   }
// }
import { Request, Response, NextFunction } from 'express'
import { AuthService } from './Authservice'
import { InscriptionSchema } from './dto/inscription.dto'
import { LoginSchema } from './dto/login.dto'
import { sendSuccess, sendError } from '../../utils/Reponse'

export class AuthController {

  // Injection de dépendance — reçoit le service
  constructor(private readonly service: AuthService) {}

  async inscription(req: Request, res: Response, next: NextFunction) {
    try {
      const validation = InscriptionSchema.safeParse(req.body);

      if (!validation.success) {
        return sendError(res, 'Données invalides', 400,
          validation.error.issues.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        );
      }

      const result = await this.service.inscription(validation.data);
      return sendSuccess(res, result, result.message, 201);

    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const validation = LoginSchema.safeParse(req.body);

      if (!validation.success) {
        return sendError(res, 'Données invalides', 400,
          validation.error.issues.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        );
      }

      const result = await this.service.login(validation.data);
      return sendSuccess(res, result, result.message, 200);

    } catch (error) {
      next(error);
    }
  }
}
// Request
//    ↓
// Controller → valide avec Zod
//    ↓
// Service → logique métier + AppError
//    ↓
// Repository → base de données
//    ↓
// Response → sendSuccess ou sendError
//    ↓
// Si erreur → next(error) → errorMiddleware
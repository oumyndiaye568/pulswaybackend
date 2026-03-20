import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { AppError, ErrorMessages } from '../utils/AppError'

// On étend Request pour ajouter user
export interface AuthRequest extends Request {
  user?: {
    id: number;
    role: string;
    telephone: string;
  };
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // Récupérer le token dans le header
  // Format attendu : "Bearer token"
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return next(AppError.unauthorized(ErrorMessages.AUTH.TOKEN_MISSING));
  }

  try {
    // Vérifier le token avec ACCESS_SECRET
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_SECRET as string
    ) as { id: number; role: string; telephone: string };

    // Ajouter les infos du user dans la requête
    req.user = decoded;
    next();

  } catch (error) {
    return next(AppError.unauthorized(ErrorMessages.AUTH.TOKEN_INVALID));
  }
};
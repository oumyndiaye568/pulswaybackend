import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { AppError, ErrorMessages } from '../utils/AppError'

export interface AuthRequest extends Request {
  user?: {
    id: number;
    role: string;
    telephone: string;
  };
}

export const authMiddleware = (
  req: Request & { user?: { id: number; role: string; telephone: string } },
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return next(AppError.unauthorized(ErrorMessages.AUTH.TOKEN_MISSING));
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_SECRET as string
    ) as { id: number; role: string; telephone: string };

    (req as AuthRequest).user = decoded;
    next();

  } catch (error) {
    return next(AppError.unauthorized(ErrorMessages.AUTH.TOKEN_INVALID));
  }
};
// src/middlewares/error.middleware.ts
import { Request, Response, NextFunction } from 'express'
import { AppError } from '../utils/AppError'

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(`[ERROR] ${err.message}`);

  // Si c'est une AppError on utilise son statusCode
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Erreur inconnue → 500
  return res.status(500).json({
    success: false,
    message: "Erreur interne du serveur",
  });
};
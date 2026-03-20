import { Response } from 'express'

export const sendSuccess = (
  res: Response,
  data: any,
  message: string = 'Succès',
  statusCode: number = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const sendError = (
  res: Response,
  message: string = 'Erreur serveur',
  statusCode: number = 500,
  errors?: any
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors: errors || null,
  });
};
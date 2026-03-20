import { Response, NextFunction } from 'express'
import { AuthRequest } from './Auth.middelware'
import { AppError, ErrorMessages } from '../utils/AppError'

export const roleMiddleware = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {

    if (!req.user) {
      return next(AppError.unauthorized(ErrorMessages.AUTH.UNAUTHORIZED));
    }

    if (!roles.includes(req.user.role)) {
      return next(AppError.forbidden(ErrorMessages.AUTH.FORBIDDEN));
    }

    next();
  };
};
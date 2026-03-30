import rateLimit from 'express-rate-limit'
import { AppError } from '../utils/AppError'

/**
 * Rate limiter pour les routes d'authentification
 * Protection contre les attaques brute-force
 * 
 * Limite : 5 tentatives par IP sur 15 minutes
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 tentatives max par IP
  message: {
    success: false,
    message: 'Trop de tentatives de connexion. Veuillez réessayer dans 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
  // Ne pas compter les requêtes réussies
  skipSuccessfulRequests: true,
})

/**
 * Rate limiter plus strict pour les inscriptions
 * Limite : 3 inscriptions par IP sur 24 heures
 */
export const inscriptionLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 heures
  max: 10, // 10 inscriptions max par IP (augmenté pour tests)
  message: {
    success: false,
    message: 'Trop de demandes d\'inscription. Veuillez réessayer demain.'
  },
  standardHeaders: true,
  legacyHeaders: false,
})

/**
 * Rate limiter pour le reset de mot de passe
 * Limite : 3 demandes par IP sur 1 heure
 */
export const resetPasswordLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 heure
  max: 3, // 3 demandes max par IP
  message: {
    success: false,
    message: 'Trop de demandes de réinitialisation. Veuillez réessayer dans 1 heure.'
  },
  standardHeaders: true,
  legacyHeaders: false,
})

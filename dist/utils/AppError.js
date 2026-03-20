"use strict";
/**
 * Classe d'erreur personnalisée centralisée
 * Tous les messages d'erreur de l'application sont ici
 */
// export class  AppError {
//   public statusCode: number;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessages = exports.AppError = void 0;
//   constructor(message: string, statusCode: number = 500) {
//     (message);
//     this.statusCode = statusCode;
//     this.name = 'Error';
//   }
//   static unauthorized(message: string) {
//     return new Error(message, 401);
//   }
//   static forbidden(message: string) {
//     return new Error(message, 403);
//   }
//   static notFound(message: string) {
//     return new Error(message, 404);
//   }
// }
class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message); // ← on passe uniquement le message à super
        this.message = message;
        this.statusCode = statusCode;
        this.name = 'AppError';
        // Nécessaire pour que instanceof fonctionne correctement avec TypeScript
        Object.setPrototypeOf(this, AppError.prototype);
    }
    static badRequest(message) {
        return new AppError(message, 400);
    }
    static unauthorized(message) {
        return new AppError(message, 401);
    }
    static forbidden(message) {
        return new AppError(message, 403);
    }
    static notFound(message) {
        return new AppError(message, 404);
    }
    static conflict(message) {
        return new AppError(message, 409);
    }
    static internal(message) {
        return new AppError(message, 500);
    }
}
exports.AppError = AppError;
/**
 * Tous les messages d'erreur centralisés
 */
exports.ErrorMessages = {
    // ── AUTH ──
    AUTH: {
        TELEPHONE_ALREADY_EXISTS: "Ce numéro de téléphone est déjà utilisé",
        INVALID_CREDENTIALS: "Numéro de téléphone ou code PIN incorrect",
        TOKEN_MISSING: "Token manquant",
        TOKEN_INVALID: "Token invalide ou expiré",
        UNAUTHORIZED: "Non authentifié",
        FORBIDDEN: "Accès refusé — permissions insuffisantes",
    },
    // ── PATIENT ──
    PATIENT: {
        NOT_FOUND: "Patient introuvable",
        ALREADY_COMPLETE: "L'inscription de ce patient est déjà complète",
        NOT_COMPLETE: "L'inscription de ce patient n'est pas encore complète",
    },
    // ── FILE ATTENTE ──
    FILE_ATTENTE: {
        NOT_FOUND: "File d'attente introuvable",
        ALREADY_IN_QUEUE: "Ce patient est déjà dans la file d'attente",
        SERVICE_NOT_FOUND: "Service introuvable",
    },
    // ── TICKET ──
    TICKET: {
        NOT_FOUND: "Ticket introuvable",
        ALREADY_EXISTS: "Un ticket existe déjà pour ce patient",
        EXPIRED: "Ce ticket a expiré",
    },
    // ── RENDEZ-VOUS ──
    RENDEZ_VOUS: {
        NOT_FOUND: "Rendez-vous introuvable",
        ALREADY_EXISTS: "Un rendez-vous existe déjà pour cette date et heure",
        INVALID_DATE: "La date du rendez-vous est invalide",
    },
    // ── SERVICE ──
    SERVICE: {
        NOT_FOUND: "Service introuvable",
        ALREADY_EXISTS: "Un service avec ce nom existe déjà",
    },
    // ── MEDECIN ──
    MEDECIN: {
        NOT_FOUND: "Médecin introuvable",
    },
    // ── ADMIN ──
    ADMIN: {
        NOT_FOUND: "Administrateur introuvable",
    },
    // ── SERVEUR ──
    SERVER: {
        INTERNAL_ERROR: "Erreur interne du serveur",
    }
};

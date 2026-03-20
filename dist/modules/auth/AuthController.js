"use strict";
// import { Request, Response, NextFunction } from 'express'
// import { AuthService } from './Authservice.ts'
// import { AuthRepository } from './AuthRepository'
// import { InscriptionSchema } from './dto/inscription.dto'
// import { LoginSchema } from './dto/login.dto'
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const inscription_dto_1 = require("./dto/inscription.dto");
const login_dto_1 = require("./dto/login.dto");
const Reponse_1 = require("../../utils/Reponse");
class AuthController {
    // Injection de dépendance — reçoit le service
    constructor(service) {
        this.service = service;
    }
    async inscription(req, res, next) {
        try {
            const validation = inscription_dto_1.InscriptionSchema.safeParse(req.body);
            if (!validation.success) {
                return (0, Reponse_1.sendError)(res, 'Données invalides', 400, validation.error.issues.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                })));
            }
            const result = await this.service.inscription(validation.data);
            return (0, Reponse_1.sendSuccess)(res, result, result.message, 201);
        }
        catch (error) {
            next(error);
        }
    }
    async login(req, res, next) {
        try {
            const validation = login_dto_1.LoginSchema.safeParse(req.body);
            if (!validation.success) {
                return (0, Reponse_1.sendError)(res, 'Données invalides', 400, validation.error.issues.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                })));
            }
            const result = await this.service.login(validation.data);
            return (0, Reponse_1.sendSuccess)(res, result, result.message, 200);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AuthController = AuthController;
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

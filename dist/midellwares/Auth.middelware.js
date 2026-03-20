"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = require("../utils/AppError");
const authMiddleware = (req, res, next) => {
    // Récupérer le token dans le header
    // Format attendu : "Bearer token"
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return next(AppError_1.AppError.unauthorized(AppError_1.ErrorMessages.AUTH.TOKEN_MISSING));
    }
    try {
        // Vérifier le token avec ACCESS_SECRET
        const decoded = jsonwebtoken_1.default.verify(token, process.env.ACCESS_SECRET);
        // Ajouter les infos du user dans la requête
        req.user = decoded;
        next();
    }
    catch (error) {
        return next(AppError_1.AppError.unauthorized(AppError_1.ErrorMessages.AUTH.TOKEN_INVALID));
    }
};
exports.authMiddleware = authMiddleware;

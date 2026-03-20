"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const AppError_1 = require("../utils/AppError");
const errorMiddleware = (err, req, res, next) => {
    console.error(`[ERROR] ${err.message}`);
    // Si c'est une AppError on utilise son statusCode
    if (err instanceof AppError_1.AppError) {
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
exports.errorMiddleware = errorMiddleware;

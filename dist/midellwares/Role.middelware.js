"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMiddleware = void 0;
const AppError_1 = require("../utils/AppError");
const roleMiddleware = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return next(AppError_1.AppError.unauthorized(AppError_1.ErrorMessages.AUTH.UNAUTHORIZED));
        }
        if (!roles.includes(req.user.role)) {
            return next(AppError_1.AppError.forbidden(AppError_1.ErrorMessages.AUTH.FORBIDDEN));
        }
        next();
    };
};
exports.roleMiddleware = roleMiddleware;

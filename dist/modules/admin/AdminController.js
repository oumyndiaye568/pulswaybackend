"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const createservice_dto_1 = require("./dto/createservice.dto");
const updateservice_dto_1 = require("./dto/updateservice.dto");
const createuser_dto_1 = require("./dto/createuser.dto");
const updateuser_dto_1 = require("./dto/updateuser.dto");
const Reponse_1 = require("../../utils/Reponse");
class AdminController {
    constructor(service) {
        this.service = service;
    }
    // ════════════════════════════════
    // GESTION DES SERVICES
    // ════════════════════════════════
    async getAllServices(req, res, next) {
        try {
            const services = await this.service.getAllServices();
            return (0, Reponse_1.sendSuccess)(res, services, "Liste des services récupérée", 200);
        }
        catch (error) {
            next(error);
        }
    }
    async getServiceById(req, res, next) {
        try {
            const id = Number(req.params.id);
            const service = await this.service.getServiceById(id);
            return (0, Reponse_1.sendSuccess)(res, service, "Service récupéré", 200);
        }
        catch (error) {
            next(error);
        }
    }
    async createService(req, res, next) {
        try {
            const validation = createservice_dto_1.CreateServiceSchema.safeParse(req.body);
            if (!validation.success) {
                return (0, Reponse_1.sendError)(res, 'Données invalides', 400, validation.error.issues.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                })));
            }
            const result = await this.service.createService(validation.data);
            return (0, Reponse_1.sendSuccess)(res, result, "Service créé avec succès", 201);
        }
        catch (error) {
            next(error);
        }
    }
    async updateService(req, res, next) {
        try {
            const id = Number(req.params.id);
            const validation = updateservice_dto_1.UpdateServiceSchema.safeParse(req.body);
            if (!validation.success) {
                return (0, Reponse_1.sendError)(res, 'Données invalides', 400, validation.error.issues.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                })));
            }
            const result = await this.service.updateService(id, validation.data);
            return (0, Reponse_1.sendSuccess)(res, result, "Service mis à jour avec succès", 200);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteService(req, res, next) {
        try {
            const id = Number(req.params.id);
            const result = await this.service.deleteService(id);
            return (0, Reponse_1.sendSuccess)(res, result, "Service supprimé avec succès", 200);
        }
        catch (error) {
            next(error);
        }
    }
    // ════════════════════════════════
    // GESTION DES UTILISATEURS
    // ════════════════════════════════
    async getAllUsers(req, res, next) {
        try {
            const users = await this.service.getAllUsers();
            return (0, Reponse_1.sendSuccess)(res, users, "Liste des utilisateurs récupérée", 200);
        }
        catch (error) {
            next(error);
        }
    }
    async getUserById(req, res, next) {
        try {
            const id = Number(req.params.id);
            const user = await this.service.getUserById(id);
            return (0, Reponse_1.sendSuccess)(res, user, "Utilisateur récupéré", 200);
        }
        catch (error) {
            next(error);
        }
    }
    async createUser(req, res, next) {
        try {
            const validation = createuser_dto_1.CreateUserSchema.safeParse(req.body);
            if (!validation.success) {
                return (0, Reponse_1.sendError)(res, 'Données invalides', 400, validation.error.issues.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                })));
            }
            const result = await this.service.createUser(validation.data);
            return (0, Reponse_1.sendSuccess)(res, result, result.message, 201);
        }
        catch (error) {
            next(error);
        }
    }
    async updateUser(req, res, next) {
        try {
            const id = Number(req.params.id);
            const validation = updateuser_dto_1.UpdateUserSchema.safeParse(req.body);
            if (!validation.success) {
                return (0, Reponse_1.sendError)(res, 'Données invalides', 400, validation.error.issues.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                })));
            }
            const result = await this.service.updateUser(id, validation.data);
            return (0, Reponse_1.sendSuccess)(res, result, result.message, 200);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteUser(req, res, next) {
        try {
            const id = Number(req.params.id);
            const result = await this.service.deleteUser(id);
            return (0, Reponse_1.sendSuccess)(res, result, result.message, 200);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AdminController = AdminController;

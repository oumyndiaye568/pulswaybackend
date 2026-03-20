"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRepository = void 0;
const prismaClient_1 = require("../../prismaClient");
const AppError_1 = require("../../utils/AppError");
class AdminRepository {
    // ════════════════════════════════
    // GESTION DES SERVICES
    // ════════════════════════════════
    async getAllServices() {
        return prismaClient_1.prisma.service.findMany({
            orderBy: { nom: 'asc' }
        });
    }
    async getServiceById(id) {
        return prismaClient_1.prisma.service.findUnique({
            where: { id }
        });
    }
    async getServiceByNom(nom) {
        return prismaClient_1.prisma.service.findUnique({
            where: { nom }
        });
    }
    async createService(data) {
        return prismaClient_1.prisma.service.create({
            data: {
                nom: data.nom,
                description: data.description,
                prixTicket: data.prixTicket,
            }
        });
    }
    async updateService(id, data) {
        return prismaClient_1.prisma.service.update({
            where: { id },
            data
        });
    }
    async deleteService(id) {
        await prismaClient_1.prisma.service.delete({
            where: { id }
        });
    }
    // ════════════════════════════════
    // GESTION DES UTILISATEURS
    // ════════════════════════════════
    async getAllUsers() {
        return prismaClient_1.prisma.user.findMany({
            where: {
                role: { in: ['MEDECIN', 'ACCUEIL'] }
            },
            include: {
                medecin: { include: { service: true } },
                accueil: { include: { service: true } },
            },
            orderBy: { createdAt: 'desc' }
        });
    }
    async getUserById(id) {
        return prismaClient_1.prisma.user.findUnique({
            where: { id },
            include: {
                medecin: { include: { service: true } },
                accueil: { include: { service: true } },
            }
        });
    }
    async getUserByEmail(email) {
        return prismaClient_1.prisma.user.findUnique({
            where: { email }
        });
    }
    //   async createUser(data: CreateUserDto, passwordChiffre: string): Promise<User> {
    //     return prisma.$transaction(async (tx) => {
    //       const user = await tx.user.create({
    //         data: {
    //           nom: data.nom,
    //           prenom: data.prenom,
    //           email: data.email,
    //           password: passwordChiffre,
    //           role: data.role,
    //         }
    //       });
    //       if (data.role === 'MEDECIN') {
    //         await tx.medecin.create({
    //           data: {
    //             userId: user.id,
    //             specialite: data.specialite || '',
    //             serviceId: data.serviceId,
    //           }
    //         });
    //       }
    //       if (data.role === 'ACCUEIL') {
    //         await tx.accueil.create({
    //           data: {
    //             userId: user.id,
    //             serviceId: data.serviceId,
    //           }
    //         });
    //       }
    //       return user;
    //     });
    //   }
    async createUser(data, passwordChiffre) {
        return prismaClient_1.prisma.$transaction(async (tx) => {
            // 1. Trouver le service par nom
            const service = await tx.service.findUnique({
                where: { nom: data.serviceNom }
            });
            if (!service) {
                throw AppError_1.AppError.notFound(AppError_1.ErrorMessages.SERVICE.NOT_FOUND);
            }
            // 2. Créer le User
            const user = await tx.user.create({
                data: {
                    nom: data.nom,
                    prenom: data.prenom,
                    email: data.email,
                    password: passwordChiffre,
                    role: data.role,
                }
            });
            // 3. Créer le profil selon le rôle
            if (data.role === 'MEDECIN') {
                await tx.medecin.create({
                    data: {
                        userId: user.id,
                        specialite: data.specialite || '',
                        serviceId: service.id, // ← on utilise l'id trouvé
                    }
                });
            }
            if (data.role === 'ACCUEIL') {
                await tx.accueil.create({
                    data: {
                        userId: user.id,
                        serviceId: service.id, // ← on utilise l'id trouvé
                    }
                });
            }
            return user;
        });
    }
    async updateUser(id, data) {
        return prismaClient_1.prisma.user.update({
            where: { id },
            data: {
                nom: data.nom,
                prenom: data.prenom,
                email: data.email,
                ...(data.password && { password: data.password }),
            }
        });
    }
    async deleteUser(id) {
        await prismaClient_1.prisma.user.delete({
            where: { id }
        });
    }
}
exports.AdminRepository = AdminRepository;

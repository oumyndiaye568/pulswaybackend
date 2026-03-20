"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const prismaClient_1 = require("../../prismaClient");
class AuthRepository {
    /**
     * Trouver un utilisateur par son numéro de téléphone
     */
    async findUserByTelephone(telephone) {
        return prismaClient_1.prisma.patient.findUnique({
            where: { telephone },
            include: { user: true }
        });
    }
    async findUserByEmail(email) {
        return prismaClient_1.prisma.user.findUnique({
            where: { email }
        });
    }
    /**
     * Créer un utilisateur + patient en même temps
     * On utilise une transaction pour garantir que les deux
     * sont créés ensemble — si l'un échoue, l'autre est annulé
     */
    async createPatient(telephone, codePin) {
        return prismaClient_1.prisma.$transaction(async (tx) => {
            // 1. Créer le User parent
            const user = await tx.user.create({
                data: {
                    telephone,
                    role: 'PATIENT',
                }
            });
            // 2. Créer le Patient lié au User
            const patient = await tx.patient.create({
                data: {
                    userId: user.id,
                    telephone,
                    codePin, // sera chiffré dans le service
                    estComplet: false,
                },
                include: { user: true }
            });
            return patient;
        });
    }
}
exports.AuthRepository = AuthRepository;

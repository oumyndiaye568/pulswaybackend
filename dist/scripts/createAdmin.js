"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../prismaClient");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
async function createAdmin() {
    const passwordChiffre = await bcryptjs_1.default.hash('admin123', 10);
    const admin = await prismaClient_1.prisma.user.create({
        data: {
            nom: 'Ndiaye',
            prenom: 'Ndeye Oumy',
            email: 'admin@pulseway.sn',
            password: passwordChiffre,
            role: 'ADMIN',
            admin: {
                create: {}
            }
        }
    });
    console.log('✅ Admin créé avec succès !');
    console.log('Email :', admin.email);
    console.log('Password : admin123');
    await prismaClient_1.prisma.$disconnect();
}
createAdmin();

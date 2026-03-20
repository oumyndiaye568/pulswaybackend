"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// import { PrismaClient } from '@prisma/client';
const prisma_1 = require("../generated/prisma");
/**
 * Client Prisma global unique
 * Évite d'avoir plusieurs connexions à la base de données
 */
exports.prisma = new prisma_1.PrismaClient();

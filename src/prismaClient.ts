// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../generated/prisma'

/**
 * Client Prisma global unique
 * Évite d'avoir plusieurs connexions à la base de données
 */
export const prisma = new PrismaClient();

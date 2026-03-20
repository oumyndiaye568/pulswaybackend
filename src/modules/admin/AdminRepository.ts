import { prisma } from '../../prismaClient'
import { Service, User } from '../../../generated/prisma'
import { CreateServiceDto } from './dto/createservice.dto'
import { UpdateServiceDto } from './dto/updateservice.dto'
import { CreateUserDto } from './dto/createuser.dto'
import { UpdateUserDto } from './dto/updateuser.dto'
import { AppError, ErrorMessages } from '../../utils/AppError'
import bcrypt from 'bcryptjs'

export class AdminRepository {

  // ════════════════════════════════
  // GESTION DES SERVICES
  // ════════════════════════════════

  async getAllServices(): Promise<Service[]> {
    return prisma.service.findMany({
      orderBy: { nom: 'asc' }
    });
  }

  async getServiceById(id: number): Promise<Service | null> {
    return prisma.service.findUnique({
      where: { id }
    });
  }

  async getServiceByNom(nom: string): Promise<Service | null> {
    return prisma.service.findUnique({
      where: { nom }
    });
  }

  async createService(data: CreateServiceDto): Promise<Service> {
  return prisma.service.create({
    data: {
      nom: data.nom,
      description: data.description,
      prixTicket: data.prixTicket,
    }
  });
}




  async updateService(id: number, data: UpdateServiceDto): Promise<Service> {
    return prisma.service.update({
      where: { id },
      data
    });
  }

  async deleteService(id: number): Promise<void> {
    await prisma.service.delete({
      where: { id }
    });
  }

  // ════════════════════════════════
  // GESTION DES UTILISATEURS
  // ════════════════════════════════

  async getAllUsers(): Promise<User[]> {
    return prisma.user.findMany({
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

  async getUserById(id: number): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
      include: {
        medecin: { include: { service: true } },
        accueil: { include: { service: true } },
      }
    });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
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
async createUser(data: CreateUserDto, passwordChiffre: string): Promise<User> {
  return prisma.$transaction(async (tx) => {

    // 1. Trouver le service par nom
    const service = await tx.service.findUnique({
      where: { nom: data.serviceNom }
    });

    if (!service) {
      throw AppError.notFound(ErrorMessages.SERVICE.NOT_FOUND);
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

  async updateUser(id: number, data: UpdateUserDto): Promise<User> {
    return prisma.user.update({
      where: { id },
      data: {
        nom: data.nom,
        prenom: data.prenom,
        email: data.email,
        ...(data.password && { password: data.password }),
      }
    });
  }

  async deleteUser(id: number): Promise<void> {
    await prisma.user.delete({
      where: { id }
    });
  }
}
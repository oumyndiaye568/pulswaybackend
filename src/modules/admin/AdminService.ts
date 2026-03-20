import bcrypt from 'bcryptjs'
import { AdminRepository } from './AdminRepository'
import { CreateServiceDto } from './dto/createservice.dto'
import { UpdateServiceDto } from './dto/updateservice.dto'
import { CreateUserDto } from './dto/createuser.dto'
import { UpdateUserDto } from './dto/updateuser.dto'
import { AppError, ErrorMessages } from '../../utils/AppError'

export class AdminService {

  constructor(private readonly repository: AdminRepository) {}

  // ════════════════════════════════
  // GESTION DES SERVICES
  // ════════════════════════════════

  async getAllServices() {
    return this.repository.getAllServices();
  }

  async getServiceById(id: number) {
    const service = await this.repository.getServiceById(id);

    if (!service) {
      throw AppError.notFound(ErrorMessages.SERVICE.NOT_FOUND);
    }

    return service;
  }

//   async createService(data: CreateServiceDto) {
//     // Vérifier si le service existe déjà
//     const serviceExistant = await this.repository.getServiceByNom(data.nom);

//     if (serviceExistant) {
//       throw AppError.conflict(ErrorMessages.SERVICE.ALREADY_EXISTS);
//     }

//     return this.repository.createService(data);
//   }
  
async createService(data: CreateServiceDto) {

  // 1. Vérifier si le service existe déjà
  const serviceExistant = await this.repository.getServiceByNom(data.nom);
  if (serviceExistant) {
    throw AppError.conflict(ErrorMessages.SERVICE.ALREADY_EXISTS);
  }

  // 2. Créer le service
  const service = await this.repository.createService(data);

  return {
    message: `Service ${data.nom} créé avec succès`,
    service,
  };
}
  async updateService(id: number, data: UpdateServiceDto) {
    // Vérifier si le service existe
    const service = await this.repository.getServiceById(id);

    if (!service) {
      throw AppError.notFound(ErrorMessages.SERVICE.NOT_FOUND);
    }

    // Vérifier si le nouveau nom existe déjà
    if (data.nom) {
      const serviceExistant = await this.repository.getServiceByNom(data.nom);

      if (serviceExistant && serviceExistant.id !== id) {
        throw AppError.conflict(ErrorMessages.SERVICE.ALREADY_EXISTS);
      }
    }

    return this.repository.updateService(id, data);
  }

  async deleteService(id: number) {
    // Vérifier si le service existe
    const service = await this.repository.getServiceById(id);

    if (!service) {
      throw AppError.notFound(ErrorMessages.SERVICE.NOT_FOUND);
    }

    return this.repository.deleteService(id);
  }

  // ════════════════════════════════
  // GESTION DES UTILISATEURS
  // ════════════════════════════════

  async getAllUsers() {
    return this.repository.getAllUsers();
  }

  async getUserById(id: number) {
    const user = await this.repository.getUserById(id);

    if (!user) {
      throw AppError.notFound(ErrorMessages.ADMIN.NOT_FOUND);
    }

    return user;
  }

async createUser(data: CreateUserDto) {

  // 1. Vérifier si l'email existe déjà
  const userExistant = await this.repository.getUserByEmail(data.email);
  if (userExistant) {
    throw AppError.conflict("Cet email est déjà utilisé");
  }

  // 2. Vérifier que specialite est fournie si role = MEDECIN
  if (data.role === 'MEDECIN' && !data.specialite) {
    throw AppError.badRequest("La spécialité est obligatoire pour un médecin");
  }

  // 3. Chiffrer le password
  const passwordChiffre = await bcrypt.hash(data.password, 10);

  // 4. Créer l'utilisateur
  const user = await this.repository.createUser(data, passwordChiffre);

  // 5. Ne pas renvoyer le password
  const { password, ...userSansPassword } = user;

  return {
    message: `${data.role === 'MEDECIN' ? 'Médecin' : 'Agent accueil'} créé avec succès`,
    user: userSansPassword,
  };
}

  async updateUser(id: number, data: UpdateUserDto) {
    // 1. Vérifier si l'utilisateur existe
    const user = await this.repository.getUserById(id);

    if (!user) {
      throw AppError.notFound(ErrorMessages.ADMIN.NOT_FOUND);
    }

    // 2. Chiffrer le password si fourni
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const userMisAJour = await this.repository.updateUser(id, data);

    // 3. Ne pas renvoyer le password
    const { password, ...userSansPassword } = userMisAJour;

    return {
      message: "Utilisateur mis à jour avec succès",
      user: userSansPassword,
    };
  }

  async deleteUser(id: number) {
    const user = await this.repository.getUserById(id);

    if (!user) {
      throw AppError.notFound(ErrorMessages.ADMIN.NOT_FOUND);
    }

    await this.repository.deleteUser(id);

    return { message: "Utilisateur supprimé avec succès" };
  }
}
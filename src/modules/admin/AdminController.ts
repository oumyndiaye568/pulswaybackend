import { Request, Response, NextFunction } from 'express'
import { AdminService } from './AdminService'
import { CreateServiceSchema } from './dto/createservice.dto'
import { UpdateServiceSchema } from './dto/updateservice.dto'
import { CreateUserSchema } from './dto/createuser.dto'
import { UpdateUserSchema } from './dto/updateuser.dto'
import { sendSuccess, sendError } from '../../utils/Reponse' 
export class AdminController {

  constructor(private readonly service: AdminService) {}

  // ════════════════════════════════
  // GESTION DES SERVICES
  // ════════════════════════════════

  async getAllServices(req: Request, res: Response, next: NextFunction) {
    try {
      const services = await this.service.getAllServices();
      return sendSuccess(res, services, "Liste des services récupérée", 200);
    } catch (error) {
      next(error);
    }
  }

  async getServiceById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const service = await this.service.getServiceById(id);
      return sendSuccess(res, service, "Service récupéré", 200);
    } catch (error) {
      next(error);
    }
  }

  async createService(req: Request, res: Response, next: NextFunction) {
    try {
      const validation = CreateServiceSchema.safeParse(req.body);

      if (!validation.success) {
        return sendError(res, 'Données invalides', 400,
          validation.error.issues.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        );
      }

      const result = await this.service.createService(validation.data);
      return sendSuccess(res, result, "Service créé avec succès", 201);
    } catch (error) {
      next(error);
    }
  }

  async updateService(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      const validation = UpdateServiceSchema.safeParse(req.body);

      if (!validation.success) {
        return sendError(res, 'Données invalides', 400,
          validation.error.issues.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        );
      }

      const result = await this.service.updateService(id, validation.data);
      return sendSuccess(res, result, "Service mis à jour avec succès", 200);
    } catch (error) {
      next(error);
    }
  }

  async deleteService(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const result = await this.service.deleteService(id);
      return sendSuccess(res, result, "Service supprimé avec succès", 200);
    } catch (error) {
      next(error);
    }
  }

  // ════════════════════════════════
  // GESTION DES UTILISATEURS
  // ════════════════════════════════

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.service.getAllUsers();
      return sendSuccess(res, users, "Liste des utilisateurs récupérée", 200);
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const user = await this.service.getUserById(id);
      return sendSuccess(res, user, "Utilisateur récupéré", 200);
    } catch (error) {
      next(error);
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const validation = CreateUserSchema.safeParse(req.body);

      if (!validation.success) {
        return sendError(res, 'Données invalides', 400,
          validation.error.issues.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        );
      }

      const result = await this.service.createUser(validation.data);
      return sendSuccess(res, result, result.message, 201);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      const validation = UpdateUserSchema.safeParse(req.body);

      if (!validation.success) {
        return sendError(res, 'Données invalides', 400,
          validation.error.issues.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        );
      }

      const result = await this.service.updateUser(id, validation.data);
      return sendSuccess(res, result, result.message, 200);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const result = await this.service.deleteUser(id);
      return sendSuccess(res, result, result.message, 200);
    } catch (error) {
      next(error);
    }
  }
}
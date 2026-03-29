import { prisma } from '../../prismaClient'
import { User, Patient } from '../../../generated/prisma'

export class AuthRepository {

  /**
   * Trouver un utilisateur par son numéro de téléphone
   */
  async findUserByTelephone(telephone: string): Promise<Patient | null> {
    return prisma.patient.findUnique({
      where: { telephone },
      include: { user: true }
    });
  }

    async findUserByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email }
    });
  }

  /**
   * Trouver un utilisateur par son ID
   * Utilisé pour le refresh token
   */
  async findUserById(id: number): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id }
    });
  }



  /**
   * Créer un utilisateur + patient en même temps
   * On utilise une transaction pour garantir que les deux
   * sont créés ensemble — si l'un échoue, l'autre est annulé
   */
  async createPatient(telephone: string, codePin: string): Promise<Patient> {
    return prisma.$transaction(async (tx) => {

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
          codePin,       // sera chiffré dans le service
          estComplet: false,
        },
        include: { user: true }
      });

      return patient;
    });
  }
}

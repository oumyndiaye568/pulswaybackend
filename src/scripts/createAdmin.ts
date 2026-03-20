import { prisma } from '../prismaClient'
import bcrypt from 'bcryptjs'

async function createAdmin() {
  const passwordChiffre = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.create({
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

  await prisma.$disconnect();
}

createAdmin();
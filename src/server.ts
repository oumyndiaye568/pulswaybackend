
import app from './app'
import {prisma} from './prismaClient'

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    // Test connexion Prisma
    await prisma.$connect();
    console.log('✅ Base de données connectée');

    app.listen(PORT, () => {
      console.log(`🚀 Serveur PulseWay démarré sur le port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Erreur de connexion à la base de données', error);
    process.exit(1);
  }
};

start();
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { patientSwagger } from './swagger/patient.swagger'
import { Express } from 'express'

// Import des docs
import { authSwagger } from './swagger/auth.swagger'
import { adminSwagger } from './swagger/admin.swagger'
import { publicSwagger } from './swagger/public.swagger'
import { medecinSwagger } from './swagger/medecin.swagger'
import { accueilSwagger } from './swagger/accueil.swagger'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PulseWay API',
      version: '1.0.0',
      description: 'Documentation de l\'API PulseWay — Système de gestion hospitalière',
    },
    servers: [
      {
        
    url: process.env.NODE_ENV === 'production' 
      ? 'https://pulswaybackend.onrender.com/api'
      : 'http://localhost:3010/api',
    description: process.env.NODE_ENV === 'production'
      ? 'Serveur de production'
      : 'Serveur local',
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Entrez votre access token JWT'
        }
      }
    },
    security: [{ bearerAuth: [] }],
    paths: {
      ...authSwagger,
      ...adminSwagger,
      ...patientSwagger,
      ...publicSwagger,
      ...medecinSwagger,
      ...accueilSwagger,
    }
  },
  apis: [],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('📚 Swagger disponible sur http://localhost:3010/api/docs');
};
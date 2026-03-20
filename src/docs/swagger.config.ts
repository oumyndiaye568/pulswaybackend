import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { Express } from 'express'

// Import des docs
import { authSwagger } from './swagger/auth.swagger'
import { adminSwagger } from './swagger/admin.swagger'

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
        url: 'http://localhost:3010/api',
        description: 'Serveur de développement',
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
    }
  },
  apis: [],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('📚 Swagger disponible sur http://localhost:3010/api/docs');
};
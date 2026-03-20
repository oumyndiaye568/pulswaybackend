"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// Import des docs
const auth_swagger_1 = require("./swagger/auth.swagger");
const admin_swagger_1 = require("./swagger/admin.swagger");
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
            ...auth_swagger_1.authSwagger,
            ...admin_swagger_1.adminSwagger,
        }
    },
    apis: [],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const setupSwagger = (app) => {
    app.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    console.log('📚 Swagger disponible sur http://localhost:3010/api/docs');
};
exports.setupSwagger = setupSwagger;

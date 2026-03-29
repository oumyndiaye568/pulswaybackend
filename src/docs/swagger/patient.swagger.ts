export const patientSwagger = {

  '/patient/services': {
    get: {
      tags: ['Patient - Services'],
      summary: 'Lister tous les services disponibles (public)',
      responses: {
        200: { description: 'Liste des services récupérée' }
      }
    }
  },

  '/patient/services/{id}': {
    get: {
      tags: ['Patient - Services'],
      summary: 'Détail d\'un service (public)',
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'integer' }
      }],
      responses: {
        200: { description: 'Service récupéré' },
        404: { description: 'Service introuvable' }
      }
    }
  },

  '/patient/services/{id}/choisir': {
    post: {
      tags: ['Patient - Services'],
      summary: 'Choisir un service et obtenir un numéro dans la file',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'integer' }
      }],
      responses: {
        201: {
          description: 'Numéro dans la file obtenu',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: true },
                  message: { type: 'string', example: 'Vous êtes dans la file d\'attente' },
                  data: {
                    type: 'object',
                    properties: {
                      numero: { type: 'number', example: 5 },
                      service: { type: 'string', example: 'Radiologie' },
                      estPrioritaire: { type: 'boolean', example: false },
                      statut: { type: 'string', example: 'EN_ATTENTE' }
                    }
                  }
                }
              }
            }
          }
        },
        404: { description: 'Service introuvable' }
      }
    }
  },

  '/patient/file-attente': {
    get: {
      tags: ['Patient - File d\'attente'],
      summary: 'Voir son numéro dans la file d\'attente',
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: 'File d\'attente récupérée' },
        404: { description: 'Pas dans une file d\'attente' }
      }
    }
  },

  '/patient/rendez-vous': {
    get: {
      tags: ['Patient - Rendez-vous'],
      summary: 'Voir ses rendez-vous',
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: 'Rendez-vous récupérés' },
        401: { description: 'Non authentifié' }
      }
    }
  }
}
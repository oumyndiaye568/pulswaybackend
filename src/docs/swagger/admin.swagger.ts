export const adminSwagger = {

  '/admin/services': {
    get: {
      tags: ['Admin - Services'],
      summary: 'Lister tous les services',
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: 'Liste des services récupérée' },
        401: { description: 'Non authentifié' },
        403: { description: 'Accès refusé' }
      }
    },
  
    post: {
  tags: ['Admin - Services'],
  summary: 'Créer un service',
  security: [{ bearerAuth: [] }],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['nom', 'prixTicket'],
          properties: {
            nom: { type: 'string', example: 'Radiologie' },
            description: { type: 'string', example: 'Service de radiologie' },
            prixTicket: { type: 'number', example: 5000 }
          }
        }
      }
    }
  },
  responses: {
    201: { description: 'Service créé avec succès' },
    400: { description: 'Données invalides' },
    409: { description: 'Service déjà existant' }
  }
}



  },

  '/admin/services/{id}': {
    get: {
      tags: ['Admin - Services'],
      summary: 'Récupérer un service par ID',
      security: [{ bearerAuth: [] }],
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
    },
    put: {
      tags: ['Admin - Services'],
      summary: 'Modifier un service',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'integer' }
      }],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                nom: { type: 'string' },
                description: { type: 'string' },
                prixTicket: { type: 'number' }
              }
            }
          }
        }
      },
      responses: {
        200: { description: 'Service mis à jour' },
        404: { description: 'Service introuvable' }
      }
    },
    delete: {
      tags: ['Admin - Services'],
      summary: 'Supprimer un service',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'integer' }
      }],
      responses: {
        200: { description: 'Service supprimé' },
        404: { description: 'Service introuvable' }
      }
    }
  },

  '/admin/users': {
    get: {
      tags: ['Admin - Users'],
      summary: 'Lister tous les utilisateurs',
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: 'Liste des utilisateurs récupérée' }
      }
    },
    post: {
      tags: ['Admin - Users'],
      summary: 'Créer un médecin ou agent accueil',
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['nom', 'prenom', 'email', 'password', 'role', 'serviceId'],
              properties: {
                nom: { type: 'string', example: 'Diallo' },
                prenom: { type: 'string', example: 'Amadou' },
                email: { type: 'string', example: 'amadou@pulseway.sn' },
                password: { type: 'string', example: 'motdepasse123' },
                role: { type: 'string', enum: ['MEDECIN', 'ACCUEIL'] },
                serviceId: { type: 'integer', example: 1 },
                specialite: { type: 'string', example: 'Cardiologie' }
              }
            }
          }
        }
      },
      responses: {
        201: { description: 'Utilisateur créé avec succès' },
        400: { description: 'Données invalides' },
        409: { description: 'Email déjà utilisé' }
      }
    }
  },

  '/admin/users/{id}': {
    get: {
      tags: ['Admin - Users'],
      summary: 'Récupérer un utilisateur par ID',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'integer' }
      }],
      responses: {
        200: { description: 'Utilisateur récupéré' },
        404: { description: 'Utilisateur introuvable' }
      }
    },
    put: {
      tags: ['Admin - Users'],
      summary: 'Modifier un utilisateur',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'integer' }
      }],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                nom: { type: 'string' },
                prenom: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
                serviceId: { type: 'integer' },
                specialite: { type: 'string' }
              }
            }
          }
        }
      },
      responses: {
        200: { description: 'Utilisateur mis à jour' },
        404: { description: 'Utilisateur introuvable' }
      }
    },
    delete: {
      tags: ['Admin - Users'],
      summary: 'Supprimer un utilisateur',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'integer' }
      }],
      responses: {
        200: { description: 'Utilisateur supprimé' },
        404: { description: 'Utilisateur introuvable' }
      }
    }
  }
};
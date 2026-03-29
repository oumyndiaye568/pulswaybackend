export const publicSwagger = {
  '/public/services': {
    get: {
      tags: ['Patient - Services'],
      summary: 'Liste des services disponibles pour un patient',
      description: 'Récupère la liste des services médicaux. Utilisé après que le patient clique sur le lien SMS.',
      parameters: [
        {
          name: 'patientId',
          in: 'query',
          required: true,
          description: 'ID du patient (envoyé dans le lien SMS)',
          schema: {
            type: 'integer',
            example: 5
          }
        }
      ],
      responses: {
        200: {
          description: 'Liste des services',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: true },
                  data: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: { type: 'number', example: 1 },
                        nom: { type: 'string', example: 'Cardiologie' },
                        description: { type: 'string', example: 'Consultations cardiologiques' },
                        prix: { type: 'number', example: 5000 }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        400: { description: 'patientId requis' },
        404: { description: 'Patient non trouvé' }
      }
    }
  },

  '/public/login': {
    post: {
      tags: ['Patient - Services'],
      summary: 'Connexion patient par codePin - retourne token + liste des services',
      description: 'Le patient entre son codePin et reçoit le token JWT + la liste des services',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['patientId', 'codePin'],
              properties: {
                patientId: {
                  type: 'integer',
                  example: 5,
                  description: 'ID du patient (envoyé dans le lien SMS)'
                },
                codePin: {
                  type: 'string',
                  example: '1234',
                  description: 'Code PIN à 4 chiffres'
                }
              }
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Connexion réussie - retourne token + services',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: true },
                  message: { type: 'string', example: 'Connexion réussie - voici les services disponibles' },
                  data: {
                    type: 'object',
                    properties: {
                      token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
                      patientId: { type: 'number', example: 5 },
                      patient: {
                        type: 'object',
                        properties: {
                          telephone: { type: 'string', example: '771234567' },
                          estComplet: { type: 'boolean', example: false }
                        }
                      },
                      services: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            id: { type: 'number', example: 1 },
                            nom: { type: 'string', example: 'Cardiologie' },
                            description: { type: 'string', example: 'Consultations cardiologiques' },
                            prix: { type: 'number', example: 5000 }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        401: { description: 'Code PIN incorrect' },
        404: { description: 'Patient non trouvé' }
      }
    }
  },

  '/public/numero': {
    post: {
      tags: ['Patient - File d\'attente'],
      summary: 'Obtenir un numéro dans la file d\'attente',
      description: 'Génère un numéro de ticket pour le patient dans le service choisi.',
      security: [
        { bearerAuth: [] }
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['patientId', 'serviceId'],
              properties: {
                patientId: {
                  type: 'integer',
                  example: 5,
                  description: 'ID du patient'
                },
                serviceId: {
                  type: 'integer',
                  example: 1,
                  description: 'ID du service médicale'
                }
              }
            }
          }
        }
      },
      responses: {
        201: {
          description: 'Numéro de ticket généré',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: true },
                  message: { type: 'string', example: 'Numéro attribué avec succès' },
                  data: {
                    type: 'object',
                    properties: {
                      numero: { type: 'string', example: 'A001' },
                      service: { type: 'string', example: 'Cardiologie' },
                      position: { type: 'number', example: 3 },
                      tempsEstime: { type: 'number', example: 30 }
                    }
                  }
                }
              }
            }
          }
        },
        400: { description: 'Données invalides' },
        401: { description: 'Non autorisé - token requis' },
        404: { description: 'Patient ou service non trouvé' }
      }
    }
  }
};

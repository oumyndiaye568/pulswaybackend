export const authSwagger = {
  '/auth/inscription': {
    post: {
      tags: ['Auth'],
      summary: 'Inscription d\'un nouveau patient',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['telephone', 'codePin'],
              properties: {
                telephone: {
                  type: 'string',
                  example: '771234567',
                  description: 'Numéro de téléphone (9-15 chiffres)'
                },
                codePin: {
                  type: 'string',
                  example: '1234',
                  description: 'Code PIN (exactement 4 chiffres)'
                }
              }
            }
          }
        }
      },
      responses: {
        201: {
          description: 'Inscription réussie',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: true },
                  message: { type: 'string', example: 'Inscription réussie !' },
                  data: {
                    type: 'object',
                    properties: {
                      patientId: { type: 'number', example: 1 }
                    }
                  }
                }
              }
            }
          }
        },
        400: { description: 'Données invalides' },
        409: { description: 'Numéro de téléphone déjà utilisé' }
      }
    }
  },

  '/auth/login': {
    post: {
      tags: ['Auth'],
      summary: 'Connexion — Patient (téléphone + codePin) ou Staff (email + password)',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              oneOf: [
                {
                  title: 'Patient',
                  type: 'object',
                  required: ['telephone', 'codePin'],
                  properties: {
                    telephone: {
                      type: 'string',
                      example: '771234567',
                      description: 'Numéro de téléphone du patient'
                    },
                    codePin: {
                      type: 'string',
                      example: '1234',
                      description: 'Code PIN à 4 chiffres'
                    }
                  }
                },
                {
                  title: 'Staff (Admin / Médecin / Accueil)',
                  type: 'object',
                  required: ['email', 'password'],
                  properties: {
                    email: {
                      type: 'string',
                      example: 'admin@pulseway.sn',
                      description: 'Email du staff'
                    },
                    password: {
                      type: 'string',
                      example: 'admin123',
                      description: 'Mot de passe (6 caractères min)'
                    }
                  }
                }
              ]
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Connexion réussie',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean', example: true },
                  message: { type: 'string', example: 'Connexion réussie' },
                  data: {
                    type: 'object',
                    properties: {
                      accessToken: { type: 'string' },
                      refreshToken: { type: 'string' },
                      user: {
                        type: 'object',
                        properties: {
                          id: { type: 'number' },
                          role: { type: 'string', example: 'ADMIN' },
                          email: { type: 'string' },
                          nom: { type: 'string' },
                          prenom: { type: 'string' }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        401: { description: 'Identifiants incorrects' }
      }
    }
  }
};
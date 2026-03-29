export const medecinSwagger = {
  '/medecin/profile': {
    get: {
      tags: ['Médecin - Profil'],
      summary: 'Récupérer le profil du médecin connecté',
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: 'Profil récupéré' },
        401: { description: 'Non authentifié' }
      }
    }
  },

  '/medecin/patients': {
    get: {
      tags: ['Médecin - Patients'],
      summary: 'Liste des patients du jour pour le médecin',
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: 'Liste des patients récupérée' },
        401: { description: 'Non authentifié' }
      }
    }
  },

  '/medecin/file-attente': {
    get: {
      tags: ['Médecin - File d\'attente'],
      summary: 'Voir la file d\'attente du service du médecin',
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: 'File d\'attente récupérée' },
        401: { description: 'Non authentifié' }
      }
    }
  },

  '/medecin/file-attente/{id}/appeler': {
    post: {
      tags: ['Médecin - File d\'attente'],
      summary: 'Appeler le patient suivant',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        description: 'ID du patient dans la file d\'attente',
        schema: { type: 'integer' }
      }],
      responses: {
        200: { description: 'Patient appelé' },
        404: { description: 'Patient non trouvé' }
      }
    }
  },

  '/medecin/file-attente/{id}/terminer': {
    post: {
      tags: ['Médecin - File d\'attente'],
      summary: 'Terminer la consultation et libérer la place',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        description: 'ID du patient dans la file d\'attente',
        schema: { type: 'integer' }
      }],
      responses: {
        200: { description: 'Consultation terminée' },
        404: { description: 'Patient non trouvé' }
      }
    }
  },

  '/medecin/consultations': {
    get: {
      tags: ['Médecin - Consultations'],
      summary: 'Liste des consultations du médecin',
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: 'Consultations récupérées' },
        401: { description: 'Non authentifié' }
      }
    },
    post: {
      tags: ['Médecin - Consultations'],
      summary: 'Créer une consultation',
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['patientId', 'diagnostic'],
              properties: {
                patientId: { type: 'integer', example: 1 },
                diagnostic: { type: 'string', example: 'Grippe saisonnière' },
                observations: { type: 'string', example: 'Fièvre depuis 2 jours' }
              }
            }
          }
        }
      },
      responses: {
        201: { description: 'Consultation créée' },
        400: { description: 'Données invalides' }
      }
    }
  },

  '/medecin/consultations/{id}': {
    get: {
      tags: ['Médecin - Consultations'],
      summary: 'Détail d\'une consultation',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'integer' }
      }],
      responses: {
        200: { description: 'Consultation récupérée' },
        404: { description: 'Consultation non trouvée' }
      }
    }
  },

  '/medecin/consultations/{id}/ordonannce': {
    post: {
      tags: ['Médecin - Consultations'],
      summary: 'Ajouter une prescription à une consultation',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'integer' }
      }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['medicaments'],
              properties: {
                medicaments: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      nom: { type: 'string', example: 'Paracétamol' },
                      dosage: { type: 'string', example: '500mg' },
                      frequence: { type: 'string', example: '3 fois par jour' },
                      duree: { type: 'string', example: '5 jours' }
                    }
                  }
                }
              }
            }
          }
        }
      },
      responses: {
        201: { description: 'Ordonnance créée' },
        400: { description: 'Données invalides' }
      }
    }
  },

  '/medecin/referer': {
    post: {
      tags: ['Médecin - Patients'],
      summary: 'Référer un patient vers un autre service',
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['patientId', 'serviceId', 'motif'],
              properties: {
                patientId: { type: 'integer', example: 1 },
                serviceId: { type: 'integer', example: 2 },
                motif: { type: 'string', example: 'Examen complémentaire nécessaire' }
              }
            }
          }
        }
      },
      responses: {
        201: { description: 'Patient référé' },
        400: { description: 'Données invalides' }
      }
    }
  },

  '/medecin/rendez-vous': {
    get: {
      tags: ['Médecin - Rendez-vous'],
      summary: 'Liste des rendez-vous du médecin',
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: 'Rendez-vous récupérés' },
        401: { description: 'Non authentifié' }
      }
    }
  },

  '/medecin/rendez-vous/{id}': {
    put: {
      tags: ['Médecin - Rendez-vous'],
      summary: 'Mettre à jour le statut d\'un rendez-vous',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'integer' }
      }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['statut'],
              properties: {
                statut: { type: 'string', enum: ['CONFIRME', 'ANNULE', 'TERMINE'] }
              }
            }
          }
        }
      },
      responses: {
        200: { description: 'Statut mis à jour' },
        400: { description: 'Données invalides' }
      }
    }
  }
};

export const accueilSwagger = {
  '/accueil/profile': {
    get: {
      tags: ['Accueil - Profil'],
      summary: 'Récupérer le profil de l\'agent d\'accueil',
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: 'Profil récupéré' },
        401: { description: 'Non authentifié' }
      }
    }
  },

  '/accueil/file-attente/search': {
    get: {
      tags: ['Accueil - File d\'attente'],
      summary: 'Rechercher un patient par numéro de ticket',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'numero',
        in: 'query',
        required: true,
        description: 'Numéro du ticket',
        schema: { type: 'string', example: 'A001' }
      }],
      responses: {
        200: { description: 'Patient trouvé' },
        404: { description: 'Patient non trouvé' }
      }
    }
  },

  '/accueil/services/{serviceId}/prix': {
    get: {
      tags: ['Accueil - Services'],
      summary: 'Voir le prix d\'un service',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'serviceId',
        in: 'path',
        required: true,
        schema: { type: 'integer' }
      }],
      responses: {
        200: { description: 'Prix du service récupéré' },
        404: { description: 'Service non trouvé' }
      }
    }
  },

  '/accueil/tickets': {
    post: {
      tags: ['Accueil - File d\'attente'],
      summary: 'Créer un ticket avec paiement',
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['patientId', 'serviceId', 'montant'],
              properties: {
                patientId: { type: 'integer', example: 1 },
                serviceId: { type: 'integer', example: 1 },
                montant: { type: 'number', example: 5000 }
              }
            }
          }
        }
      },
      responses: {
        201: { description: 'Ticket créé' },
        400: { description: 'Données invalides' }
      }
    }
  },

  '/accueil/tickets/{id}/payment': {
    put: {
      tags: ['Accueil - File d\'attente'],
      summary: 'Mettre à jour le statut du paiement',
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
              required: ['paye'],
              properties: {
                paye: { type: 'boolean', example: true }
              }
            }
          }
        }
      },
      responses: {
        200: { description: 'Paiement mis à jour' },
        404: { description: 'Ticket non trouvé' }
      }
    }
  },

  '/accueil/referers': {
    get: {
      tags: ['Accueil - Référés'],
      summary: 'Liste des patients référés par un médecin',
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: 'Liste récupérée' },
        401: { description: 'Non authentifié' }
      }
    }
  },

  '/accueil/referers/{refererId}/notifier': {
    post: {
      tags: ['Accueil - Référés'],
      summary: 'Notifier un patient référé',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'refererId',
        in: 'path',
        required: true,
        schema: { type: 'integer' }
      }],
      responses: {
        200: { description: 'Patient notifié' },
        404: { description: 'Référé non trouvé' }
      }
    }
  },

  '/accueil/rendez-vous': {
    get: {
      tags: ['Accueil - Rendez-vous'],
      summary: 'Liste des rendez-vous',
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: 'Rendez-vous récupérés' },
        401: { description: 'Non authentifié' }
      }
    },
    post: {
      tags: ['Accueil - Rendez-vous'],
      summary: 'Créer un rendez-vous',
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['patientId', 'medecinId', 'dateHeure'],
              properties: {
                patientId: { type: 'integer', example: 1 },
                medecinId: { type: 'integer', example: 2 },
                dateHeure: { type: 'string', example: '2024-03-20T10:00:00Z' }
              }
            }
          }
        }
      },
      responses: {
        201: { description: 'Rendez-vous créé' },
        400: { description: 'Données invalides' }
      }
    }
  },

  '/accueil/rendez-vous/{id}/statut': {
    put: {
      tags: ['Accueil - Rendez-vous'],
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
                statut: { type: 'string', enum: ['CONFIRME', 'ANNULE', 'TERMINE', 'ABSENT'] }
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
  },

  '/accueil/file-attente': {
    get: {
      tags: ['Accueil - File d\'attente'],
      summary: 'Voir toute la file d\'attente',
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: 'File d\'attente récupérée' },
        401: { description: 'Non authentifié' }
      }
    }
  },

  '/accueil/file-attente/{id}/valider': {
    post: {
      tags: ['Accueil - File d\'attente'],
      summary: 'Valider un patient (passer de EN_ATTENTE à VALIDE)',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        description: 'ID de l\'entrée dans la file d\'attente',
        schema: { type: 'integer' }
      }],
      responses: {
        200: { description: 'Patient validé' },
        404: { description: 'Patient non trouvé' }
      }
    }
  },

  '/accueil/patients/{id}/completer': {
    post: {
      tags: ['Accueil - Patients'],
      summary: 'Compléter le profil d\'un patient (nom, prenom, age)',
      description: 'L\'accueil termine l\'inscription quand le patient présente son numéro',
      security: [{ bearerAuth: [] }],
      parameters: [{
        name: 'id',
        in: 'path',
        required: true,
        description: 'ID du patient',
        schema: { type: 'integer' }
      }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['nom', 'prenom', 'age'],
              properties: {
                nom: { type: 'string', example: 'Ndiaye' },
                prenom: { type: 'string', example: 'Oumy' },
                age: { type: 'number', example: 25 }
              }
            }
          }
        }
      },
      responses: {
        200: { description: 'Inscription complétée' },
        400: { description: 'Données invalides' },
        404: { description: 'Patient non trouvé' }
      }
    }
  }
};

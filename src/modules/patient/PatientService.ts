import { PatientRepository } from './PatientRepository'
import { AppError } from '../../utils/AppError'

export class PatientService {
  constructor(private readonly repository: PatientRepository) {}

  // ════════════════════════════════
  // PROFIL
  // ════════════════════════════════

  async getProfile(patientId: number) {
    const patient = await this.repository.getById(patientId)
    if (!patient) {
      throw AppError.notFound('Patient non trouvé')
    }
    return patient
  }

  async updateProfile(patientId: number, data: {
    nom?: string
    prenom?: string
    age?: number
  }) {
    const patient = await this.repository.getById(patientId)
    if (!patient) {
      throw AppError.notFound('Patient non trouvé')
    }

    if (data.age !== undefined) {
      return this.repository.updatePrioritaire(patientId, data.age)
    }

    return this.repository.updateProfile(patientId, data)
  }

  // ════════════════════════════════
  // SERVICES (ITINÉRAIRE)
  // ════════════════════════════════

  /**
   * Récupérer tous les services disponibles (pour l'itinéraire)
   */
  async getAllServices() {
    return this.repository.getAllServices()
  }

  /**
   * Récupérer un service par ID (détails + localisation + médecins)
   */
  async getServiceById(serviceId: number) {
    const service = await this.repository.getServiceById(serviceId)
    if (!service) {
      throw AppError.notFound('Service non trouvé')
    }
    return service
  }

  // ════════════════════════════════
  // FILE D'ATTENTE
  // ════════════════════════════════

  /**
   * Obtenir un numéro (détection automatique RDV vs SPONTANE)
   */
  async obtenirNumero(patientId: number, serviceId: number) {
    // Vérifier que le service existe
    const service = await this.repository.getServiceById(serviceId)
    if (!service) {
      throw AppError.notFound('Service non trouvé')
    }

    // Vérifier que le patient existe
    const patient = await this.repository.getById(patientId)
    if (!patient) {
      throw AppError.notFound('Patient non trouvé')
    }

    // Entrer dans la file avec détection automatique
    const fileAttente = await this.repository.entrerEnFile(patientId, serviceId)

    // Si le patient est entré via RDV, récupérer les infos du RDV
    let rendezVousInfo = null
    if (fileAttente.typeEntree === 'RDV') {
      const rdv = await this.repository.getRendezVousAujourdhui(patientId, serviceId)
      if (rdv) {
        rendezVousInfo = {
          medecin: rdv.medecin.user.nom + ' ' + rdv.medecin.user.prenom,
          specialite: rdv.medecin.specialite,
          heureRDV: rdv.heure,
        }
      }
    }

    // Préparer le message selon le type
    const typeMessage = fileAttente.typeEntree === 'RDV' 
      ? 'RDV confirmé - Validation rapide'
      : 'Sans RDV - Veuillez vous présenter à l\'accueil'

    return {
      message: `Vous êtes dans la file d'attente du service ${service.nom}`,
      numero: fileAttente.numero,
      service: service.nom,
      localisation: service.localisation || 'Non spécifiée',
      estPrioritaire: fileAttente.estPrioritaire,
      typeEntree: fileAttente.typeEntree,
      typeMessage: typeMessage,
      statut: fileAttente.statut,
      // Si RDV, inclure les infos du médecin
      ...(rendezVousInfo && rendezVousInfo),
    }
  }

  /**
   * Voir son numéro dans la file
   */
  async getFileAttente(patientId: number) {
    const fileAttente = await this.repository.getFileAttente(patientId)

    if (!fileAttente) {
      throw AppError.notFound('Vous n\'êtes pas dans une file d\'attente')
    }

    // Calculer la position
    const position = await this.repository.getPositionFile(patientId, fileAttente.serviceId)

    return {
      ...fileAttente,
      position,
      typeMessage: fileAttente.typeEntree === 'RDV' 
        ? 'RDV confirmé - Validation rapide'
        : 'Sans RDV - Veuillez vous présenter à l\'accueil',
    }
  }

  /**
   * Annuler son numéro (quitter la file)
   */
  async annulerNumero(patientId: number) {
    const fileAttente = await this.repository.getFileAttente(patientId)
    if (!fileAttente) {
      throw AppError.notFound('Vous n\'êtes pas dans une file d\'attente')
    }

    // Supprimer la file d'attente
    await this.repository.supprimerFileAttente(patientId)

    return { message: 'Votre numéro a été annulé' }
  }

  // ════════════════════════════════
  // RENDEZ-VOUS
  // ════════════════════════════════

  /**
   * Voir ses rendez-vous
   */
  async getRendezVous(patientId: number) {
    return this.repository.getRendezVous(patientId)
  }

  /**
   * Obtenir un RDV par ID
   */
  async getRendezVousById(rdvId: number) {
    return this.repository.getRendezVousById(rdvId)
  }

  // ════════════════════════════════
  // DOSSIER
  // ════════════════════════════════

  async checkDossierComplet(patientId: number) {
    const patient = await this.repository.getById(patientId)
    if (!patient) {
      throw AppError.notFound('Patient non trouvé')
    }

    return {
      estComplet: patient.estComplet,
      age: patient.age,
      estPrioritaire: patient.estPrioritaire
    }
  }

  // ════════════════════════════════
  // GUIDAGE (CARTE / VOIX)
  // ════════════════════════════════

  /**
   * Obtenir les informations de guidage pour un service
   * Utilisé pour l'option Carte (texte) ou Voix (audio)
   */
  async getGuidage(serviceId: number) {
    const service = await this.repository.getServiceById(serviceId)
    if (!service) {
      throw AppError.notFound('Service non trouvé')
    }

    const localisation = service.localisation || 'Non spécifiée'
    
    // Formater les instructions pour le guidage
    const instructions = `Rendez-vous au service ${service.nom}. ${localisation}`
    
    return {
      service: {
        id: service.id,
        nom: service.nom,
        localisation: localisation,
      },
      // Instructions formatées pour le frontend
      instructions: {
        texte: instructions,
        // Le frontend peut utiliser cette texte pour la synthèse vocale
        pourVoix: `Allez au ${service.nom}. ${localisation.replace(/,/g, ', ')}`
      }
    }
  }
}

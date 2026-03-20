import twilio from 'twilio'

/**
 * Service d'envoi de SMS via Twilio
 * Utilisé pour envoyer le lien d'accès aux services après inscription
 */
export class SmsService {
  private client: twilio.Twilio | null = null
  private fromNumber: string

  constructor() {
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    this.fromNumber = process.env.TWILIO_PHONE_NUMBER || ''

    // Initialiser le client Twilio seulement si les credentials sont configurés
    if (accountSid && authToken && accountSid !== 'votre_account_sid') {
      this.client = twilio(accountSid, authToken)
    }
  }

  /**
   * Envoyer un SMS avec le lien vers les services
   * @param telephone - Numéro du destinataire
   * @param patientId - ID du patient pour le lien
   */
  async envoyerLienServices(telephone: string, patientId: number): Promise<boolean> {
    const baseUrl = process.env.BASE_URL_PROD || process.env.BASE_URL || 'http://localhost:3010'
    const lien = `${baseUrl}/patient/services?token=${patientId}`
    
    const message = `Bienvenue sur PulseWay ! Cliquez ici pour acceder aux services: ${lien}`

    return this.envoyerSms(telephone, message)
  }

  /**
   * Envoyer un SMS de notification
   * @param telephone - Numéro du destinataire
   * @param message - Contenu du message
   */
  async envoyerNotification(telephone: string, message: string): Promise<boolean> {
    return this.envoyerSms(telephone, message)
  }

  /**
   * Méthode privée pour envoyer un SMS
   */
  private async envoyerSms(to: string, message: string): Promise<boolean> {
    // Si Twilio n'est pas configuré, on simule l'envoi en console
    if (!this.client) {
      console.log(`[SMS SIMULÉ] Vers: ${to}`)
      console.log(`[SMS SIMULÉ] Message: ${message}`)
      console.log('[SMS] ⚠️ Twilio non configuré. Ajoutez vos credentials dans .env')
      return true // Retourne true pour ne pas bloquer le flux
    }

    try {
      // Formater le numéro (ajouter + si absent)
      const formattedTo = to.startsWith('+') ? to : `+${to}`

      const result = await this.client.messages.create({
        body: message,
        from: this.fromNumber,
        to: formattedTo
      })

      console.log(`[SMS] Envoyé avec succès! SID: ${result.sid}`)
      return true
    } catch (error) {
      console.error('[SMS] Erreur lors de l\'envoi:', error)
      return false
    }
  }
}

// Export d'une instance unique
export const smsService = new SmsService()

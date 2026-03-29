import { Response } from 'express';

interface SSEClient {
  id: string;
  res: Response;
  serviceId?: number;
}

export class SSEService {
  private clients: Map<string, SSEClient> = new Map();
  private idCounter: number = 0;

  // ════════════════════════════════
  // GESTION DES CONNEXIONS CLIENTS
  // ════════════════════════════════

  /**
   * Ajouter un client SSE
   */
  addClient(res: Response, serviceId?: number): string {
    const clientId = `sse-${++this.idCounter}-${Date.now()}`;
    
    this.clients.set(clientId, {
      id: clientId,
      res,
      serviceId,
    });

    console.log(`[SSE] Client ${clientId} connecté${serviceId ? ` pour le service ${serviceId}` : ''}`);

    // Nettoyer quand la connexion se ferme
    res.on('close', () => {
      this.removeClient(clientId);
    });

    return clientId;
  }

  /**
   * Supprimer un client SSE
   */
  removeClient(clientId: string): void {
    const client = this.clients.get(clientId);
    if (client) {
      this.clients.delete(clientId);
      console.log(`[SSE] Client ${clientId} déconnecté`);
    }
  }

  // ════════════════════════════════
  // ENVOI DES ÉVÉNEMENTS
  // ════════════════════════════════

  /**
   * Envoyer un événement à tous les clients d'un service spécifique
   */
  broadcastToService(serviceId: number, event: string, data: unknown): void {
    this.clients.forEach((client) => {
      if (client.serviceId === serviceId || !client.serviceId) {
        this.sendEvent(client, event, data);
      }
    });
  }

  /**
   * Envoyer un événement à tous les clients
   */
  broadcast(event: string, data: unknown): void {
    this.clients.forEach((client) => {
      this.sendEvent(client, event, data);
    });
  }

  /**
   * Envoyer un événement à un client spécifique
   */
  private sendEvent(client: SSEClient, event: string, data: unknown): void {
    try {
      client.res.write(`event: ${event}\n`);
      client.res.write(`data: ${JSON.stringify(data)}\n\n`);
    } catch (error) {
      console.error(`[SSE] Erreur lors de l'envoi au client ${client.id}:`, error);
      this.removeClient(client.id);
    }
  }

  // ════════════════════════════════
  // GESTION DES DONNÉES EN TEMPS RÉEL
  // ════════════════════════════════

  /**
   *Notifier une mise à jour de file d'attente pour un service
   */
  notifyFileAttenteUpdate(serviceId: number, fileAttente: unknown): void {
    this.broadcastToService(serviceId, 'file-attente-update', {
      serviceId,
      fileAttente,
      timestamp: new Date().toISOString(),
    });
  }

  /**
   *Notifier un nouveau patient dans la file
   */
  notifyNewPatient(serviceId: number, patient: unknown): void {
    this.broadcastToService(serviceId, 'new-patient', {
      serviceId,
      patient,
      timestamp: new Date().toISOString(),
    });
  }

  /**
   *Notifier un patient appelé (passé au prochain)
   */
  notifyPatientCalled(serviceId: number, patient: unknown): void {
    this.broadcastToService(serviceId, 'patient-called', {
      serviceId,
      patient,
      timestamp: new Date().toISOString(),
    });
  }

  /**
   *Notifier un patient terminé
   */
  notifyPatientFinished(serviceId: number, patient: unknown): void {
    this.broadcastToService(serviceId, 'patient-finished', {
      serviceId,
      patient,
      timestamp: new Date().toISOString(),
    });
  }

  // ════════════════════════════════
  // STATISTIQUES
  // ════════════════════════════════

  /**
   * Obtenir le nombre de clients connectés
   */
  getConnectedClientsCount(): number {
    return this.clients.size;
  }

  /**
   * Obtenir les clients par service
   */
  getClientsByService(serviceId: number): number {
    let count = 0;
    this.clients.forEach((client) => {
      if (client.serviceId === serviceId) {
        count++;
      }
    });
    return count;
  }
}

// Instance singleton du service SSE
export const sseService = new SSEService();
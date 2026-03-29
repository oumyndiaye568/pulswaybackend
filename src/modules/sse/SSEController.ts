import { Request, Response } from 'express';
import { sseService } from './SSEService';
import { prisma } from '../../prismaClient';

export class SSEController {

  // ════════════════════════════════
  // STREAM SSE POUR UN SERVICE
  // ════════════════════════════════

  /**
   * Ouvrir un stream SSE pour un service spécifique
   * GET /api/sse/file-attente/:serviceId
   */
  async streamFileAttente(req: Request, res: Response): Promise<void> {
    try {
      const serviceIdParam = req.params.serviceId;
      const serviceId = typeof serviceIdParam === 'string' ? parseInt(serviceIdParam) : NaN;

      if (isNaN(serviceId)) {
        res.status(400).json({ error: 'ID de service invalide' });
        return;
      }

      // Configurer les headers SSE
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      res.setHeader('X-Accel-Buffering', 'no'); // Désactiver le buffering nginx

      // Ajouter le client au service SSE
      const clientId = sseService.addClient(res, serviceId);

      // Envoyer un message de confirmation
      res.write(`event: connected\n`);
      res.write(`data: ${JSON.stringify({ 
        clientId, 
        serviceId, 
        message: 'Connecté au stream de file d\'attente' 
      })}\n\n`);

      // Envoyer l'état initial de la file d'attente
      const fileAttente = await this.getFileAttenteData(serviceId);
      res.write(`event: file-attente-update\n`);
      res.write(`data: ${JSON.stringify({
        serviceId,
        fileAttente,
        timestamp: new Date().toISOString()
      })}\n\n`);

    } catch (error) {
      console.error('[SSE] Erreur lors du stream:', error);
      res.status(500).json({ error: 'Erreur interne du serveur' });
    }
  }

  // ════════════════════════════════
  // STREAM SSE GLOBAL (TOUS LES SERVICES)
  // ════════════════════════════════

  /**
   * Ouvrir un stream SSE global (pour l'admin)
   * GET /api/sse/global
   */
  async streamGlobal(req: Request, res: Response): Promise<void> {
    try {
      // Configurer les headers SSE
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      res.setHeader('X-Accel-Buffering', 'no');

      // Ajouter le client sans service spécifique
      const clientId = sseService.addClient(res);

      // Envoyer un message de confirmation
      res.write(`event: connected\n`);
      res.write(`data: ${JSON.stringify({ 
        clientId, 
        message: 'Connecté au stream global' 
      })}\n\n`);

      // Envoyer les statistiques globales initiales
      const stats = await this.getGlobalStats();
      res.write(`event: global-stats\n`);
      res.write(`data: ${JSON.stringify({
        stats,
        timestamp: new Date().toISOString()
      })}\n\n`);

    } catch (error) {
      console.error('[SSE] Erreur lors du stream global:', error);
      res.status(500).json({ error: 'Erreur interne du serveur' });
    }
  }

  // ════════════════════════════════
  // ENDPOINT DE TEST
  // ════════════════════════════════

  /**
   * Tester l'envoi d'une notification SSE
   * POST /api/sse/test
   */
  async testNotification(req: Request, res: Response): Promise<void> {
    try {
      const { serviceId, event, data } = req.body;

      if (serviceId) {
        sseService.broadcastToService(serviceId, event || 'test', data);
      } else {
        sseService.broadcast(event || 'test', data);
      }

      res.json({ 
        success: true, 
        message: `Notification '${event}' envoyée`,
        connectedClients: sseService.getConnectedClientsCount()
      });
    } catch (error) {
      console.error('[SSE] Erreur lors du test:', error);
      res.status(500).json({ error: 'Erreur interne du serveur' });
    }
  }

  // ════════════════════════════════
  // STATISTIQUES
  // ════════════════════════════════

  /**
   * Obtenir les statistiques globales
   */
  private async getGlobalStats() {
    const [totalServices, totalFileAttente, totalEnCours, totalUrgences] = await Promise.all([
      prisma.service.count(),
      prisma.fileAttente.count({ where: { statut: { in: ['EN_ATTENTE', 'VALIDE'] } } }),
      prisma.fileAttente.count({ where: { statut: 'EN_COURS' } }),
      prisma.fileAttente.count({ where: { statut: 'URGENCE' } })
    ]);

    return {
      totalServices,
      totalFileAttente,
      totalEnCours,
      totalUrgences
    };
  }

  /**
   * Obtenir les données de la file d'attente pour un service
   */
  private async getFileAttenteData(serviceId: number) {
    const fileAttente = await prisma.fileAttente.findMany({
      where: { 
        serviceId,
        statut: { in: ['EN_ATTENTE', 'VALIDE', 'EN_COURS', 'URGENCE'] }
      },
      include: {
        patient: {
          include: {
            user: {
              select: { nom: true, prenom: true }
            }
          }
        }
      },
      orderBy: [
        { estPrioritaire: 'desc' },
        { heurePrise: 'asc' }
      ]
    });

    return fileAttente.map(fa => ({
      id: fa.id,
      numero: fa.numero,
      statut: fa.statut,
      estPrioritaire: fa.estPrioritaire,
      typeEntree: fa.typeEntree,
      heurePrise: fa.heurePrise,
      patient: {
        id: fa.patient.id,
        nom: fa.patient.user.nom,
        prenom: fa.patient.user.prenom
      }
    }));
  }
}

// Export singleton
export const sseController = new SSEController();
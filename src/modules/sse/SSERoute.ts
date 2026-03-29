import { Router } from 'express';
import { sseController } from './SSEController';

const router = Router();

// ════════════════════════════════
// ROUTES SSE (Server-Sent Events)
// ════════════════════════════════

/**
 * @route GET /api/sse/file-attente/:serviceId
 * @desc Ouvrir un stream SSE pour un service spécifique
 * @access Public (ou protégé selon le besoin)
 */
// Pas de middleware d'auth pour le stream SSE (géré différemment)
// Le client SSE ne peut pas être géré par le middleware JWT standard
router.get('/file-attente/:serviceId', sseController.streamFileAttente.bind(sseController));

/**
 * @route GET /api/sse/global
 * @desc Ouvrir un stream SSE global pour les statistiques
 * @access Public
 */
router.get('/global', sseController.streamGlobal.bind(sseController));

/**
 * @route POST /api/sse/test
 * @desc Tester l'envoi de notifications SSE
 * @access Admin seulement (protégé)
 */
// TODO: Ajouter le middleware d'auth si nécessaire
router.post('/test', sseController.testNotification.bind(sseController));

export default router;
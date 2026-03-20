import { Router } from 'express'
import { adminController } from '../../container'
import { authMiddleware } from '../../midellwares/Auth.middelware'
import { roleMiddleware } from '../../midellwares/Role.middelware'

const router = Router();

// Protection de toutes les routes admin
router.use(authMiddleware);
router.use(roleMiddleware('ADMIN'));

// ── SERVICES ──
router.get('/services', adminController.getAllServices.bind(adminController));
router.get('/services/:id', adminController.getServiceById.bind(adminController));
router.post('/services', adminController.createService.bind(adminController));
router.put('/services/:id', adminController.updateService.bind(adminController));
router.delete('/services/:id', adminController.deleteService.bind(adminController));

// ── USERS ──
router.get('/users', adminController.getAllUsers.bind(adminController));
router.get('/users/:id', adminController.getUserById.bind(adminController));
router.post('/users', adminController.createUser.bind(adminController)); // ← rétabli
router.put('/users/:id', adminController.updateUser.bind(adminController));
router.delete('/users/:id', adminController.deleteUser.bind(adminController));

export default router;


// Route → Controller → Service → Repository → DB

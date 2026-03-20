"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const container_1 = require("../../container");
const Auth_middelware_1 = require("../../midellwares/Auth.middelware");
const Role_middelware_1 = require("../../midellwares/Role.middelware");
const router = (0, express_1.Router)();
// Protection de toutes les routes admin
router.use(Auth_middelware_1.authMiddleware);
router.use((0, Role_middelware_1.roleMiddleware)('ADMIN'));
// ── SERVICES ──
router.get('/services', container_1.adminController.getAllServices.bind(container_1.adminController));
router.get('/services/:id', container_1.adminController.getServiceById.bind(container_1.adminController));
router.post('/services', container_1.adminController.createService.bind(container_1.adminController));
router.put('/services/:id', container_1.adminController.updateService.bind(container_1.adminController));
router.delete('/services/:id', container_1.adminController.deleteService.bind(container_1.adminController));
// ── USERS ──
router.get('/users', container_1.adminController.getAllUsers.bind(container_1.adminController));
router.get('/users/:id', container_1.adminController.getUserById.bind(container_1.adminController));
router.post('/users', container_1.adminController.createUser.bind(container_1.adminController)); // ← rétabli
router.put('/users/:id', container_1.adminController.updateUser.bind(container_1.adminController));
router.delete('/users/:id', container_1.adminController.deleteUser.bind(container_1.adminController));
exports.default = router;
// Route → Controller → Service → Repository → DB

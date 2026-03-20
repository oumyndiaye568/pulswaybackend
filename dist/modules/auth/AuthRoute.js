"use strict";
// import { Router } from 'express'
// import { AuthController } from './AuthController'
// import { InscriptionSchema } from './dto/inscription.dto'
// import { LoginSchema } from './dto/login.dto'
Object.defineProperty(exports, "__esModule", { value: true });
// const router = Router();
// const authController = new AuthController();
// // POST /api/auth/inscription
// router.post( '/inscription',validate(InscriptionSchema),authController.inscription.bind(authController));
// // POST /api/auth/login
// router.post('/login',validate(LoginSchema),authController.login.bind(authController));
// export default router;
const express_1 = require("express");
const container_1 = require("../../container");
const Validate_middelware_1 = require("../../midellwares/Validate.middelware");
const inscription_dto_1 = require("./dto/inscription.dto");
const login_dto_1 = require("./dto/login.dto");
const router = (0, express_1.Router)();
router.post('/inscription', (0, Validate_middelware_1.validate)(inscription_dto_1.InscriptionSchema), container_1.authController.inscription.bind(container_1.authController));
router.post('/login', (0, Validate_middelware_1.validate)(login_dto_1.LoginSchema), container_1.authController.login.bind(container_1.authController));
exports.default = router;

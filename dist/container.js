"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = exports.authController = void 0;
// ── Auth ──
const AuthRepository_1 = require("./modules/auth/AuthRepository");
const Authservice_1 = require("./modules/auth/Authservice");
const AuthController_1 = require("./modules/auth/AuthController");
// ── Admin ──
const AdminRepository_1 = require("./modules/admin/AdminRepository");
const AdminService_1 = require("./modules/admin/AdminService");
const AdminController_1 = require("./modules/admin/AdminController");
// ── Repositories ──
const authRepository = new AuthRepository_1.AuthRepository();
const adminRepository = new AdminRepository_1.AdminRepository();
// ── Services ──
const authService = new Authservice_1.AuthService(authRepository);
const adminService = new AdminService_1.AdminService(adminRepository);
// ── Controllers ──
exports.authController = new AuthController_1.AuthController(authService);
exports.adminController = new AdminController_1.AdminController(adminService);

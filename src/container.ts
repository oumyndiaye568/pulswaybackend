// ── Auth ──
import { AuthRepository } from './modules/auth/AuthRepository'
import { AuthService } from './modules/auth/Authservice'
import { AuthController } from './modules/auth/AuthController'

// ── Admin ──
import { AdminRepository } from './modules/admin/AdminRepository'
import { AdminService } from './modules/admin/AdminService'
import { AdminController } from './modules/admin/AdminController'

// ── Repositories ──
const authRepository = new AuthRepository();
const adminRepository = new AdminRepository();

// ── Services ──
const authService = new AuthService(authRepository);
const adminService = new AdminService(adminRepository);

// ── Controllers ──
export const authController = new AuthController(authService);
export const adminController = new AdminController(adminService);

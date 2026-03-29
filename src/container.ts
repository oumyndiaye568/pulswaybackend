// ── Auth ──
import { AuthRepository } from './modules/auth/AuthRepository'
import { AuthService } from './modules/auth/Authservice'
import { AuthController } from './modules/auth/AuthController'

// ── Admin ──
import { AdminRepository } from './modules/admin/AdminRepository'
import { AdminService } from './modules/admin/AdminService'
import { AdminController } from './modules/admin/AdminController'

// ── Patient ──
import { PatientRepository } from './modules/patient/PatientRepository'
import { PatientService } from './modules/patient/PatientService'
import { PatientController } from './modules/patient/PatientController'

// ── Repositories ──
const authRepository = new AuthRepository();
const adminRepository = new AdminRepository();
const patientRepository = new PatientRepository();

// ── Services ──
const authService = new AuthService(authRepository);
const adminService = new AdminService(adminRepository);
const patientService = new PatientService(patientRepository);

// ── Controllers ──
export const authController = new AuthController(authService);
export const adminController = new AdminController(adminService);
export const patientController = new PatientController(patientService);


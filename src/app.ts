import express from 'express'
import authRoutes from './modules/auth/AuthRoute'
import adminRoutes from './modules/admin/AdminRoute'
import patientRoutes from './modules/patient/PatientRoute'
import { setupSwagger } from './docs/swagger.config'
import { errorMiddleware } from './midellwares/Errors.middelware'

// Ajoute cette ligne dans app.ts
// import cors from 'cors'
// import helmet from 'helmet'
// import morgan from 'morgan'
// import { errorMiddleware } from './middlewares/error.middleware'

 const app = express();

// ── Middlewares globaux ──
// app.use(helmet());
// app.use(cors());
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ──
app.use('/api/auth', authRoutes);
app.use('/api/patient', patientRoutes);
// app.use('/api/accueil', accueilRoutes);
// app.use('/api/medecin', medecinRoutes);
app.use('/api/admin', adminRoutes);

// ── Health check ──
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'PulseWay API is running 🚀' });
});

// ── Swagger ──
setupSwagger(app);


// ── Gestion des erreurs globale ──
app.use(errorMiddleware);

export default app;
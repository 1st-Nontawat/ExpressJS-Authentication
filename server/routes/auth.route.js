import express from 'express';
const router = express.Router();

// controller
import { register, login } from '../controller/auth.controller.js';
import { Validate, registerSchema, loginSchema } from '../utils/validator.js';





// Endpoint  http://localhost:8000/auth/register
router.post('/register', Validate(registerSchema), register);

// Endpoint  http://localhost:8000/auth/login
router.post('/login', Validate(loginSchema), login);

export default router;
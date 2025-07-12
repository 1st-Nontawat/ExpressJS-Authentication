import express from 'express';
const router = express.Router();

// controller
import { register, login } from '../controller/auth.controller.js';


// Endpoint  http://localhost:8000/auth/register
router.post('/register', register); 

// Endpoint  http://localhost:8000/auth/login
router.post('/login', login);

   


export default router;
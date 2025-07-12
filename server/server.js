import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/auth.route.js';



const app = express();


// Middleware
app.use(cors());
app.use(morgan('dev'));


// routing

app.use('/auth', authRoutes);

const PORT = 8000;


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));






import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';



const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


// routing

app.use('/auth', authRoutes);

// Error handling
app.use((err, req, res, next) => {
    // console.error(err);
    res.status(err.code || 500).json({ message: err.message || 'Internal Server Error' });
});

const PORT = 8000;


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));






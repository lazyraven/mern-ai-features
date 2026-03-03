import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import 'express-async-errors';

import connectDB from './config/db.js';
import userRoutes from './modules/user/routes/userRoutes.js';
import projectRoutes from './modules/project/routes/projectRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// feature modules mounted by aggregate API paths
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

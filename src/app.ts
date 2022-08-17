import cors from 'cors';
import express, { json } from 'express';

import AppRoutes from './routes/index.js';

const app = express();
app.use(cors());
app.use(json());
app.use(AppRoutes);

export default app;
import express from 'express';
import cors from 'cors';
import skillRoute from './routes/skill/skillRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/skills', skillRoute);

export default app;


import express from 'express';
import cors from 'cors';
import skillRoute from './routes/skill/skillRoute.js';
import projectRouter from './routes/project/projectRoute.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/skills', skillRoute);
app.use('/api/projects', projectRouter);


export default app;


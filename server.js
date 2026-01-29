import 'dotenv/config';   // 👈 MUST be first
import express from 'express';
import next from 'next';
import backendApp from './backend/app.js';
import { connectDB } from './backend/config/db.js';

const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

await nextApp.prepare();
await connectDB();

const server = express();
const PORT = process.env.PORT || 3000;

// mount backend first
server.use(backendApp);

// let Next.js handle frontend routes
server.use((req, res) => handle(req, res));

server.listen(PORT, () => {
  console.log(`Next.js + Express running on http://localhost:${PORT}`);
});

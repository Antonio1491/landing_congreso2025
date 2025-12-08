#!/usr/bin/env node

import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 5000;
const isDev = process.env.NODE_ENV === 'development';

async function startServer() {
  if (isDev) {
    console.log('🔧 Starting development server with Vite...');
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    console.log('🚀 Starting production server...');
    const staticPath = path.resolve(__dirname, '../dist/public');
    console.log(`📁 Serving static files from: ${staticPath}`);

    app.use(express.static(staticPath));

    const historyApiFallback = (req: Request, res: Response, next: NextFunction) => {
      if (req.method !== 'GET' || req.path.includes('.') || req.path.startsWith('/api')) {
        return next();
      }
      res.sendFile(path.resolve(staticPath, 'index.html'));
    };

    app.use(historyApiFallback);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`✨ Server running on port ${port}`);
    console.log(`🌐 Mode: ${isDev ? 'development' : 'production'}`);
  });
}

startServer();

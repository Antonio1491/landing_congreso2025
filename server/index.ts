#!/usr/bin/env node

import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 5000;
const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  // Development mode - proxy to Vite
  console.log('🔧 Starting in development mode...');
  console.log('📦 Proxying to Vite dev server on port 5173');
  
  // Simple proxy to Vite dev server
  app.use('/', (req: Request, res: Response) => {
    const viteUrl = `http://localhost:5173${req.url}`;
    fetch(viteUrl)
      .then(response => response.text())
      .then(html => {
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
      })
      .catch(() => {
        res.status(500).send('Vite dev server not available. Please run: vite --port 5173');
      });
  });
} else {
  // Production mode - serve static files
  console.log('🚀 Starting in production mode...');
  const staticPath = path.resolve(__dirname, '../dist/public');
  console.log(`📁 Serving static files from: ${staticPath}`);
  
  // Serve static files
  app.use(express.static(staticPath));
  
  // Handle SPA routing - serve index.html for non-static routes
  app.use((req: Request, res: Response) => {
    res.sendFile(path.resolve(staticPath, 'index.html'));
  });
}

app.listen(port, '0.0.0.0', () => {
  console.log(`✨ Server running on port ${port}`);
  if (isDev) {
    console.log('🔧 Development mode: Proxying to Vite');
  } else {
    console.log('🚀 Production mode: Serving built files');
  }
});
#!/usr/bin/env node

// Frontend-only server redirect
// This project has been converted to frontend-only
// The server now just starts Vite on the required port

import { spawn } from 'child_process';

console.log('🌐 Starting frontend-only application...');
console.log('📦 Project converted from fullstack to frontend-only');

const vite = spawn('npx', ['vite', '--config', 'vite.config.local.ts', '--host', '0.0.0.0', '--port', '5000'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

vite.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
  process.exit(code);
});

vite.on('error', (err) => {
  console.error('Failed to start Vite:', err);
  process.exit(1);
});
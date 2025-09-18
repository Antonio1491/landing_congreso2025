import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.replit.dev',
      '.spock.replit.dev',
      'ced7e7f9-6da4-47dc-9bcf-c42d9cea0210-00-q5o221s0keeg.spock.replit.dev'
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
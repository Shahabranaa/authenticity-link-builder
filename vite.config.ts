import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,      // Changed from 5173
    strictPort: true,
    host: true,      // Listen on all addresses
    open: true       // Open browser on server start
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
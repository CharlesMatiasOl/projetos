import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      // redirige /api y /download al backend
      '/api':      'http://localhost:3001',
      '/download': 'http://localhost:3001'
    }
  }
});

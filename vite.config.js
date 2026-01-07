import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows access from network
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['weather-app-axgt.onrender.com'],
  }
});

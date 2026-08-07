// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      // Permite exponer el dev server a través de túneles ngrok (subdominio cambia cada sesión)
      allowedHosts: [".ngrok-free.app"],
    },
  },
});

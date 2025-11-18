import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true,      // permite conexiones externas
    port: 4321       // opcional, solo para mantener claro el puerto
  }
});


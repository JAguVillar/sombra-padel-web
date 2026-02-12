// @ts-check
import { defineConfig } from 'astro/config';
import path from "node:path";

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sombra-padel.vercel.app', // TODO: Cambiar a dominio final cuando esté disponible
  integrations: [sitemap()],
  server: {
    host: true, // o "0.0.0.0"
    port: 4321, // opcional, si querés forzar un puerto
  },
   devToolbar: {
    enabled: false
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    plugins: [tailwindcss()]
  }
});
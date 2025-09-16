// @ts-check
import { defineConfig } from 'astro/config';
import path from "node:path";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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
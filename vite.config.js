import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import htmlInject from 'vite-plugin-html-inject';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'chi-siamo.html'),
        doors: resolve(__dirname, 'porte.html'),
        grilles: resolve(__dirname, 'grate.html'),
        works: resolve(__dirname, 'i-nostri-lavori.html'),
        tapparelle: resolve(__dirname, 'tapparelle.html'),
        windows: resolve(__dirname, 'finestre.html'),
        zanzariere: resolve(__dirname, 'zanzariere.html'),
      },
    },
  },
  plugins: [
    tailwindcss(),
    htmlInject()
  ]
});

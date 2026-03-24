import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Asegúrate de que esta línea esté presente

export default defineConfig({
  integrations: [tailwind()], // Y esta también
});
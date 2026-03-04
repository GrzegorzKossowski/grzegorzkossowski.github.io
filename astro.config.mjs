import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://grzegorzkossowski.github.io', // Lub Twoja własna domena
  base: '/', // Jeśli to Twoja główna strona (uzytkownik.github.io), zostaw '/'
  prefetch: true,
  vite: {
    plugins: [tailwindcss()]
  }
});
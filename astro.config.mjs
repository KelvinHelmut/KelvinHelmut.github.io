import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindv4 from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://kelvinhelmut.github.io',
    base: '/',
    integrations: [
        react()
    ],
    vite: {
        plugins: [tailwindv4()]
    },
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true
        }
    }
});

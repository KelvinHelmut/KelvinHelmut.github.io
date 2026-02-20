import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindv4 from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://kelvinhelmut.github.io',
    base: '/',
    integrations: [
        react(),
        sitemap()
    ],
    vite: {
        plugins: [tailwindv4()]
    },
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: false,
            redirectToDefaultLocale: true
        }
    }
});

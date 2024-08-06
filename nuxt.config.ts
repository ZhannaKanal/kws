// https://nuxt.com/docs/api/configuration/nuxt-config
import { acceptHMRUpdate } from "pinia";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icons",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxtjs/i18n",
    'vue3-carousel-nuxt',
    '@pinia/nuxt',
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  i18n: {
    vueI18n: './i18n/index.js',
  },
  imports: {
    dirs: ['store'], // Example placement, adjust based on actual usage
  }
});

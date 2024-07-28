// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/meer-sagor.github.io',
    head: {
      title: 'Meer Sagor',
      htmlAttrs: {
        lang: 'en'
      }
    },
    rootId: 'meer',
    rootTag: 'main'
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  nitro: {
    preset: 'github-pages',
  },
  modules: [
    '@nuxt/ui',
    '@hypernym/nuxt-gsap',
    '@nuxt/eslint',
    '@nuxtjs/html-validator',
    '@nuxt/fonts',
  ],
  colorMode: {
    preference: 'dark',
  },
  gsap: {
    provide: false,
    composables: true,
  },
});

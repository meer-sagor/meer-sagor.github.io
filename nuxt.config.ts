// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/meer-sagor.github.io',
    head: {
      title: 'Meer Sagor',
      link: [
        {
          rel: 'icon', type: 'image/x-icon', href:'/favicon.ico'
        }
      ],
      htmlAttrs: {
        lang: 'en',
         class:'h-full w-full'
      },
      bodyAttrs:{
        class:'h-full w-full'
      }
    },
    // rootId: 'meer',
    rootTag: 'main',
    rootAttrs:{
      class: 'h-full w-full',
      id: 'meer',
    }
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
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Meer Sagor',
      meta: [
        {
          name: 'description',
          content:
            "I'm a dedicated JavaScript developer with expertise in Vue.js, React.js, Next.js, and Nuxt.js. With extensive experience in SaaS-based product development, I've successfully built and maintained applications used by businesses worldwide.",
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
    rootTag: 'main',
    rootAttrs: {
      id: 'meer',
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    '@hypernym/nuxt-gsap',
    '@nuxt/eslint',
    '@nuxtjs/html-validator',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    'nuxt-lenis',
  ],
  colorMode: {
    preference: 'dark',
  },
  gsap: {
    provide: false,
    composables: true,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
});

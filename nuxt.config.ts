// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      // link: [
      //   {
      //     rel: 'icon',
      //     type: 'image/x-icon',
      //     href: '/favicon.ico',
      //   },
      // ],
      htmlAttrs: {
        lang: 'en'
      },
    },
    rootTag: 'main',
    rootAttrs: {
      id: 'meer',
    },
  },
  site:{
    url: 'https://meersagor.com',
    name: "Meer Sagor",
  },
  seo:{
    meta:{
      author: "Meer Sagor",
      title: 'Meer Sagor',
      description: "I'm a dedicated JavaScript developer with expertise in Vue.js, React.js, Next.js, and Nuxt.js. With extensive experience in SaaS-based product development, I've successfully built and maintained applications used by businesses worldwide.",
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  // @hypernym/nuxt-gsap
  modules: ['@nuxtjs/seo', '@nuxt/ui', '@nuxt/eslint', '@nuxtjs/html-validator', '@nuxt/fonts', '@vueuse/nuxt', 'nuxt-lenis', '@nuxt/image'],
  colorMode: {
    preference: 'dark',
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt"],
    },
  },
});
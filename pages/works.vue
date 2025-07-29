<script setup lang="ts">
import type {Projects} from "~/@types/Projects";



const projects = ref<Projects[]>([
  {
    name: 'Events In Minutes',
    description: "<ul>\n" +
        "    <li><strong>Technology Stack:</strong> Proficient in AstroJS</li>\n" +
        "    <li><strong>New Technology:</strong> Learning new technologies based on project needs</li>\n" +
        "    <li><strong>Event Management:</strong> Fast, seamless booking of diverse team-building events in San Francisco. Simplifies planning and unites teams effortlessly</li>\n" +
        "    <li><strong>Payment Integration:</strong> Implementing global payment methods like Stripe</li>\n" +
        "</ul>",
    technology: ['AstroJS', 'Vuejs',"VueUse","TypeScript", "NuxtJs", 'Shadcn UI' ,"Tailwind CSS"],
    thumbnail: "works/events_in_minutes.webp",
    liveLink: "https://eventsinminutes.com"
  },
  {
    name: 'Crowdfundly for Creators',
    description: "<ul>\n" +
        "    <li><strong>Technology Stack: </strong>Proficient in Vue.js (2 &amp; 3), Nuxt.js (2 &amp; 3), Vuex, and Pinia.</li>\n" +
        "    <li><strong>Bridge Setup:</strong> Connecting two applications into a unified system.</li>\n" +
        "    <li><strong>SaaS-Based: </strong>Delivering software via the cloud on a subscription model.</li>\n" +
        "    <li><strong>Payment Integration:</strong> Implementing global payment methods like Stripe and PayPal.</li>\n" +
        "</ul>",
    technology: ['Vuejs-2', "Vuejs-3", "NuxtJs 3", "VueUse", "TypeScript", "Pinia", "VueX", "Vue-Query", "Chart.js", "SCSS", "Tailwind CSS", "Shell Script", "Docker"],
    thumbnail: "works/crowdfundly-opengraph-image.png",
    liveLink: "https://crowdfundly.com"
  },
  {
    name: 'ReviewX',
    description: "<ul>\n" +
        "    <li><strong>Technology Stack:</strong> Proficient in Alpine.js and Symfony Twig</li>\n" +
        "    <li><strong>Cloud-Based Plugin:</strong> WordPress plugin for streamlined review management.</li>\n" +
        "    <li><strong>Frontend Architecture:</strong> Implemented Monorepo architecture for efficient code management.</li>\n" +
        "    <li><strong>Payment Integration:</strong> Implementing global payment methods like Stripe and PayPal.</li>\n" +
        "</ul>",
    technology: ['Vuejs',"VueUse","TypeScript", "Vue-Query", "Pinia", "Alpine.js", "Twig", "Tailwind CSS", "Shell Script", "Docker"],
    thumbnail: "works/woocommerce-reviewxs-plugin-with-multicriteria-support.png",
    liveLink: "https://reviewx.io"
  },


  {
    name: 'Distributor Management (Paikari)',
    description: "<ul>\n" +
        "    <li><strong>Technology Stack:</strong> Proficient in RTK Query &amp; React Hook Form</li>\n" +
        "</ul>",
    technology: ['TypeScript', "NextJs", "RTK Query", "Redux", "Toolkit", "React Hook Form", "Tailwind CSS", "Material UI"],
    thumbnail: "works/paikari_management.png",
    liveLink: "https://hishabee.io/paikari"
  },



  {
    name: 'Vivid Customs',
    description: "<ul>\n" +
        "    <li><strong>Technology Stack: </strong>Proficient in FabricJs</li>\n" +
        "    <li><strong>E-Commerce Website:</strong> Developed a fully dynamic and functional e-commerce site for custom t-shirt design.</li>\n" +
        "    <li><strong>Payment Integration:</strong> Implementing global payment methods like PayPal.</li>\n" +
        "</ul>",
    technology: ["NuxtJs 3", "VueUse", "TypeScript", "Pinia", "Chart.js", "PrimeVue", "Bootstrap", "SCSS"],
    thumbnail: "works/StartDesigning.png",
    liveLink: "https://vividcustoms.com"
  },

  {
    name: 'Vivid Customs Admin',
    description: "<ul>\n" +
        "    <li><strong>Technology Stack: </strong>Proficient in PrimeVue, PrimeFlex</li>\n" +
        "    <li><strong>E-Commerce Admin Panel:</strong> Developed a fully dynamic and functional e-commerce admin site.</li>\n" +
        "    <li><strong>Payment Gateway:</strong> Support global payment methods like PayPal, Stripe</li>\n" +
        "</ul>",
    technology: ["NuxtJs 3", "VueUse", "TypeScript", "Chart.js", "PrimeVue", "PrimeFlex"],
    thumbnail: "works/Vividcustoms-Admin-Panel.png",
    liveLink: null
  },
])

const shuffledProjects = computed(() => shuffleArray(projects.value))
</script>

<template>
  <UContainer class="mb-[40px] space-y-3">
    <div class="text-center">
      <h1 class="text-3xl lg:text-4xl">Projects</h1>
      <p class="text-gray-400 italic ">A list of projects I've worked on</p>
    </div>
    <Divider/>
    <div class="md:columns-2 lg:columns-3 gap-[24px] space-y-[24px]">
    <ProjectCard v-for="work in shuffledProjects" :key="work.name" :work="work" :is-shuffling="false" :index="0" />
  </div>
  </UContainer>
</template>

<style scoped>

</style>
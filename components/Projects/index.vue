<script lang="ts" setup>
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
</script>

<template>
  <div class="md:columns-2 lg:columns-3 gap-[24px] space-y-[24px]">
    <div v-for="work in projects" :key="work.name" class="space-y-[12px] border rounded-lg overflow-hidden self-start">
      <NuxtImg v-if="work.thumbnail" :src="work.thumbnail" class="w-full" alt="Crowdfundly for Creators"/>
      <div class="space-y-[12px] px-[16px] md:px-[24px] pb-[16px] md:pb-[24px]" :class="`${!work.thumbnail && 'pt-[16px] md:pt-[24px]'}`">
        <h2 class="flex items-center gap-[16px] font-bold text-[20px]">
          {{ work.name }}
          <NuxtLink :aria-label="work.name" :to="work.liveLink" target="_blank" v-if="work.liveLink">
            <UIcon name="lucide:external-link" />
          </NuxtLink>
        </h2>
        <div  class="flex gap-[8px] flex-wrap">
          <div v-for="tech in work.technology" class="flex items-center rounded-full border border-white/10 bg-zinc-900/80 px-[8px] py-[4px] backdrop-blur-3xl text-[12px]">
            {{ tech }}
          </div>
        </div>
        <div class="text-[12px] work_description" v-html="work.description"></div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.work_description :deep(ul) {
  margin-left: 24px;
  list-style: disc;
}
</style>
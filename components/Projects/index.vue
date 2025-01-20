<script lang="ts" setup>
import type {Projects} from "~/@types/Projects";

const projects = ref<Projects[]>([
  {
    name: 'ReviewX',
    description: "<ul>\n" +
        "    <li><strong>Technology Stack:</strong> Proficient in Alpine.js and Symfony Twig</li>\n" +
        "    <li><strong>Cloud-Based Plugin:</strong> WordPress plugin for streamlined review management.</li>\n" +
        "    <li><strong>Frontend Architecture:</strong> Implemented Monorepo architecture for efficient code management.</li>\n" +
        "    <li><strong>Payment Integration:</strong> Implementing global payment methods like Stripe and PayPal.</li>\n" +
        "</ul>",
    technology: ['Vuejs',"VueUse","TypeScript", "Vue-Query", "Pinia", "Alpine.js", "Twig", "Tailwind CSS", "Shell Script", "Docker"],
    thumbnail: "works/woocommerce-reviewxs-plugin-with-multicriteria-support.png"
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
    thumbnail: "works/crowdfundly-opengraph-image.png"
  },
  {
    name: 'Vivid Customs',
    description: "<ul>\n" +
        "    <li><strong>Technology Stack: </strong>Proficient in FabricJs</li>\n" +
        "    <li><strong>E-Commerce Website:</strong> Developed a fully dynamic and functional e-commerce site for custom t-shirt design.</li>\n" +
        "    <li><strong>Payment Integration:</strong> Implementing global payment methods like PayPal.</li>\n" +
        "</ul>",
    technology: ["NuxtJs 3", "VueUse", "TypeScript", "Pinia", "Chart.js", "PrimeVue", "Bootstrap", "SCSS"],
    thumbnail: "works/StartDesigning.png"
  },
  {
    name: 'Distributor Management (Paikari)',
    description: "<ul>\n" +
        "    <li><strong>Technology Stack:</strong> Proficient in RTK Query &amp; React Hook Form</li>\n" +
        "</ul>",
    technology: ['TypeScript', "NextJs", "RTK Query", "Redux", "Toolkit", "React Hook Form", "Tailwind CSS", "Material UI"]
  }
])
</script>

<template>
  <div class="grid grid-cols-12 gap-[12px]">
    <div v-for="work in projects" :key="work.name" class="col-span-12 md:col-span-6 space-y-[12px] border rounded-lg overflow-hidden self-start">
      <NuxtImg v-if="work.thumbnail" :src="work.thumbnail" alt="Crowdfundly for Creators"/>
      <div class="space-y-[12px] px-[16px] md:px-[24px] pb-[16px] md:pb-[24px]" :class="`${!work.thumbnail && 'pt-[16px] md:pt-[24px]'}`">
        <h2 class="flex items-center gap-[16px] font-bold text-[20px]">
          {{ work.name }}
<!--          <UIcon name="lucide:external-link"/>-->
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
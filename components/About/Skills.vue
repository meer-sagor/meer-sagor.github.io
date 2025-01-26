<script lang="ts" setup>
const skillIcons = ref([
  "devicon:javascript",
  "devicon:typescript",
  "devicon:react",
  "devicon:nextjs",
  "devicon:vuejs",
  "devicon:nuxtjs",
  "devicon:redux",
  "logos:pinia",
  "devicon:chartjs",
  "devicon:vuetify",
  "devicon:tailwindcss",
  "devicon:html5",
  "devicon:css3",
  "devicon:sass",
  "devicon:bootstrap",
  "devicon:antdesign",
  "devicon:materialui",
  "devicon:nodejs",
  "devicon:nestjs",
  "devicon:mongodb",
  "devicon:mysql",
  "devicon:postgresql",
  "devicon:sequelize",
  "devicon-plain:powershell",
  "devicon:docker",
  "devicon:git",
  "devicon-plain:githubcodespaces",
  "devicon:gitlab",
  "devicon:yarn",
  "devicon:vercel",
  "devicon:netlify",
  "devicon:figma",
  "devicon:vscode",
  "devicon:webstorm",
  "devicon:postman",
])


const transformedSkills = computed(()=> {
 return skillIcons.value.map((icon) => {
    const [prefix, name] = icon.split(":");
    return {
      icon,
      name: name || prefix, // Handle cases where there's no ":" in the icon name
    };
  });
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="mb-6 flex flex-col gap-1">
      <h3 class="text-white-shadow font-newsreader italic text-3xl">Stack</h3>
      <p>Some of the software and technologies I use on a daily basis</p>
    </div>
    <div class="flex flex-wrap gap-4 mb-9">
      <div v-for="icon in transformedSkills" :key="icon.name" class="before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))] relative transform-gpu overflow-hidden rounded-lg">
        <div class="absolute inset-x-0 bottom-0 top-0 rounded-t-lg bg-gradient-to-b from-white/20 to-transparent"></div>
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        <div class="absolute inset-px rounded-lg bg-zinc-950"></div>
        <div class="absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]"></div>
        <div class="relative flex h-full flex-col">
          <div class="p-4">
            <UIcon :name="icon.icon" class="size-9" :title="icon.name"/>
<!--            Vuejs-->
<!--            <span alt="Nuxt logo" aria-hidden="true" aria-label="Nuxt logo" class="iconify i-custom:nuxt size-9" font-controlled="false"></span>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
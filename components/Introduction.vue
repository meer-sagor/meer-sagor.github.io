<script lang="ts" setup>
const socialLinks = ref([
  {
    name: "Facebook",
    to: 'https://www.facebook.com/meer.msagor',
    icon: 'basil:facebook-solid'
  },
  {
    name: "Linkedin",
    to: 'https://www.linkedin.com/in/meer-sagor',
    icon: 'ri:linkedin-fill'
  },
  {
    name: "Github",
    to: 'https://www.github.com/meer-sagor',
    icon: 'proicons:github'
  }
])

const openToAvailable = ref(false)
</script>

<template>
  <UContainer class="space-y-[24px] md:space-y-0">
    <NuxtImg alt="Meer Sagor" class="rounded-full m-auto mb-[20px]" height="156" src="https://avatars.githubusercontent.com/u/78520766?v=4"
             width="156"/>
    <div class="flex flex-col items-center justify-center gap-[20px]">
      <h1 class="mx-auto font-medium text-center text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-3xl text-transparent lg:max-w-3xl lg:text-4xl">
        The efficiency of one, the talent of three. Why look elsewhere?</h1>
      <p class="mx-auto mt-4 max-w-xl text-center text-lg antialiased text-white/60">I enjoy the challenge of
        transforming complex design concepts into functional web applications and working collaboratively with other
        developers and designers.</p>

      <div v-if="openToAvailable" class="flex items-center rounded-full border border-white/10 bg-zinc-900/80 px-5 py-2 backdrop-blur-3xl mt-2"
           data-animate="" style="--stagger: 2;">
          <span class="relative flex size-3">
            <span class="absolute inline-flex size-full animate-ping rounded-full opacity-75 bg-green-600/80"></span>
            <span class="relative inline-flex size-3 scale-90 rounded-full bg-green-500/80"></span>
          </span>
        <span class="ml-2 text-sm font-medium text-green-500/80">Available for new opportunities</span>
      </div>

      <NuxtImg src="https://github-readme-stats.vercel.app/api/top-langs?username=meer-sagor&show_icons=true&locale=en&layout=compact&theme=chartreuse-dark" alt="most use language" width="300" height="165"/>

      <div class="flex justify-center gap-[12px] items-center mt-[16px] mb-[20px]">
        <NuxtLink v-for="social in socialLinks" :key="social.to" :aria-label="social.name" class="bg-primary-500 rounded-full size-[40px] flex justify-center items-center" target="_blank" :to="social.to">
          <UIcon class="size-[30px]" :name="social.icon"/>
        </NuxtLink>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>

</style>
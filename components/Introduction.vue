<script setup lang="ts">

</script>

<template>
  <div class="flex justify-center items-center h-screen relative">
    <UContainer class="space-y-[24px] md:space-y-0">
      <NuxtImg src="https://avatars.githubusercontent.com/u/78520766?v=4"  alt="Meer Sagor" width="156" height="156" class="rounded-full m-auto mb-[20px]" />
      <div class="flex flex-col items-center justify-center gap-[20px]">
        <h1 class="mx-auto font-medium text-center text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-3xl text-transparent lg:max-w-3xl lg:text-4xl">The efficiency of one, the talent of three. Why look elsewhere?</h1>
        <p class="mt-[8px] mx-auto mt-4 max-w-xl text-center text-lg antialiased text-white/60">I enjoy the challenge of transforming complex design concepts into functional web applications and working collaboratively with other developers and designers.</p>

        <div class="flex items-center rounded-full border border-white/10 bg-zinc-900/80 px-5 py-2 backdrop-blur-3xl mt-2" data-animate="" style="--stagger: 2;"><span class="relative flex size-3"><span class="absolute inline-flex size-full animate-ping rounded-full opacity-75 bg-green-600/80"></span><span class="relative inline-flex size-3 scale-90 rounded-full bg-green-500/80"></span></span><span class="ml-2 text-sm font-medium text-green-500/80">Available for new opportunities</span></div>

        <div class="flex justify-center gap-[12px] items-center mt-[16px]">
          <NuxtLink to="https://www.facebook.com/meer.msagor" target="_blank" class="bg-primary-500 rounded-full size-[40px] block" aria-label="Facebook">
            <UIcon name="basil:facebook-solid" class="size-[40px]" />
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/meer-sagor" target="_blank" class="bg-primary-500 rounded-full size-[40px] flex justify-center items-center" aria-label="Linkedin">
            <UIcon name="ri:linkedin-fill" class="size-[30px]" />
          </NuxtLink>
          <NuxtLink to="https://www.github.com/meer-sagor" target="_blank" class="bg-primary-500 rounded-full size-[40px] flex justify-center items-center" aria-label="Github">
            <UIcon name="proicons:github" class="size-[30px]" />
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>

</style>
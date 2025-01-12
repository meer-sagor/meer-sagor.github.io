<script setup lang="ts">

</script>

<template>
<div class="flex justify-center items-center h-screen relative">
  <UContainer class="grid grid-cols-12 space-y-[24px] md:space-y-0">
    <div class="col-span-12 md:col-span-8">
      <h1 class="text-[1.5rem]">👋 Hello I'M <span class="text-primary-500">Meer Sagor</span> </h1>
      <h2 class="text-[3rem]">Frontend Engineer</h2>
      <p class="mt-[8px] text-[1.5rem]">I enjoy the challenge of transforming complex design concepts into functional web applications and working collaboratively with other developers and designers.</p>

      <div class="flex gap-[12px] items-center mt-[16px]">
        <NuxtLink to="https://www.facebook.com/meer.msagor" target="_blank" class="bg-primary-500 rounded-full size-[40px] block">
          <UIcon name="basil:facebook-solid" class="size-[40px]" />
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/meer-sagor" target="_blank" class="bg-primary-500 rounded-full size-[40px] flex justify-center items-center">
          <UIcon name="ri:linkedin-fill" class="size-[30px]" />
        </NuxtLink>
        <NuxtLink to="https://www.github.com/meer-sagor" target="_blank" class="bg-primary-500 rounded-full size-[40px] flex justify-center items-center">
          <UIcon name="proicons:github" class="size-[30px]" />
        </NuxtLink>
      </div>
    </div>
    <div class="col-span-12 md:col-span-4">
      <NuxtImg src="https://avatars.githubusercontent.com/u/78520766?v=4"  alt="Meer Sagor" width="256" height="256" class="rounded-md" />
    </div>
   <ScrollDown/>
  </UContainer>
</div>
</template>

<style scoped>

</style>
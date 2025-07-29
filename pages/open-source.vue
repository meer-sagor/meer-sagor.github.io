<script setup lang="ts">

</script>

<template>
  <UContainer class="mb-[40px] space-y-3">
    <div class="text-center">
      <h1 class="text-3xl lg:text-4xl">Open <span class="text-primary-500">Source</span></h1>
      <p class="text-gray-400 italic">My contributions to the open-source community</p>
    </div>
    <Divider/>
    <OpenSource class=""/>
    
    <!-- Live data note -->
    <div class="text-center mt-8">
      <p class="text-sm text-gray-400">
        <UIcon name="lucide:zap" class="w-4 h-4 inline mr-1" />
        Data is fetched live from NPM registry
      </p>
    </div>
    
    <!-- Contribution Section -->
    <Divider/>
    <div class="text-center space-y-4">
      <h2 class="text-2xl font-semibold">Want to Contribute?</h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        I believe in the power of open source and community collaboration. If you find any of my packages useful or want to contribute improvements, feel free to check out the repositories and submit pull requests!
      </p>
      <div class="flex justify-center gap-4">
        <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
          <UIcon name="lucide:mail" class="w-5 h-5" />
          Get in Touch
        </NuxtLink>
        <NuxtLink to="https://github.com/meer-sagor" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors">
          <UIcon name="lucide:github" class="w-5 h-5" />
          View GitHub
        </NuxtLink>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>

</style>
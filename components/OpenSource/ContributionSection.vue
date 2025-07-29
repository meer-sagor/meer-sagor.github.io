<script lang="ts" setup>
// No props needed for this component as it's static content
</script>

<template>
  <div class="text-center space-y-4">
    <h2 class="text-2xl font-semibold">Want to Contribute?</h2>
    <p class="text-gray-400 max-w-2xl mx-auto">
      I believe in the power of open source and community collaboration. If you find any of my packages useful or want to contribute improvements, feel free to check out the repositories and submit pull requests!
    </p>
    <div class="flex justify-center gap-4">
      <NuxtLink 
        to="/contact" 
        class="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
      >
        <UIcon name="lucide:mail" class="w-5 h-5" />
        Get in Touch
      </NuxtLink>
      <NuxtLink 
        to="https://github.com/meer-sagor" 
        target="_blank" 
        class="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
      >
        <UIcon name="lucide:github" class="w-5 h-5" />
        View GitHub
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here if needed */
</style> 
<script lang="ts" setup>
import type { OpenSource } from '~/@types/OpenSource';

defineProps<{
  openSourceProjectsWithData: OpenSource[]
  isLoading: boolean
  hasError: boolean
}>()


</script>

<template>

  <!-- Loading state -->
  <div v-if="isLoading" class="flex justify-center items-center py-12">
    <div class="text-center">
      <UIcon name="lucide:loader-2" class="w-8 h-8 mx-auto mb-4 animate-spin text-primary-500" />
      <p class="text-gray-400">Loading open source projects...</p>
    </div>
  </div>

  

  <!-- Error state -->
  <div v-else-if="hasError" class="text-center py-12">
    <UIcon name="lucide:alert-circle" class="w-12 h-12 mx-auto mb-4 text-red-500" />
    <h3 class="text-lg font-semibold mb-2">Failed to load projects</h3>
    <p class="text-gray-400 mb-4">Unable to fetch data from NPM registry</p>
    <p class="text-sm text-gray-500">Please try refreshing the page</p>
  </div>

  

  <!-- Projects grid -->
  <div v-else class="md:columns-2 lg:columns-3 gap-[24px] space-y-[24px]">
    <OpenSourceCard 
      v-for="(project, index) in openSourceProjectsWithData" 
      :key="project.name"
      :project="project"
      :index="index"
    />
  </div>
</template>
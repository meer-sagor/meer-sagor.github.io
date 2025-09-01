<script lang="ts" setup>
import type { OpenSource } from '~/@types/OpenSource';

defineProps<{
  openSourceProjectsWithData: OpenSource[]
  isLoading: boolean
  hasError: boolean
}>()

// Create skeleton data for loading state
const skeletonCount = 3 // Number of skeleton cards to show
</script>

<template>
  <!-- Loading state with skeleton cards -->
  <div v-if="isLoading" class="md:columns-2 lg:columns-3 gap-[24px] space-y-[24px]">
    <OpenSourceSkeletonCard 
      v-for="index in skeletonCount" 
      :key="`skeleton-${index}`"
      :index="index - 1"
    />
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
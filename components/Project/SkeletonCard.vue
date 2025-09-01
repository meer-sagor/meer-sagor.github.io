<script lang="ts" setup>
interface Props {
  index: number
}

const props = defineProps<Props>()
</script>

<template>
  <div class="space-y-[12px] border rounded-lg overflow-hidden self-start animate-fade-in"
       :style="{ animationDelay: `${props.index * 0.1}s` }">
    <!-- Skeleton thumbnail -->
    <div class="w-full h-48 bg-gradient-to-br from-gray-700/20 to-gray-600/20 flex items-center justify-center">
      <div class="w-16 h-16 bg-gray-600/30 rounded-lg animate-pulse"></div>
    </div>
    
    <div class="space-y-[12px] px-[16px] md:px-[24px] pb-[16px] md:pb-[24px]">
      <!-- Title and external link skeleton -->
      <div class="flex items-center gap-[16px]">
        <div class="w-32 h-6 bg-gray-600/30 rounded animate-pulse"></div>
        <div class="w-5 h-5 bg-gray-600/30 rounded animate-pulse"></div>
      </div>
      
      <!-- Technology tags skeleton -->
      <div class="flex gap-[8px] flex-wrap">
        <div class="w-16 h-6 bg-gray-600/30 rounded-full animate-pulse"></div>
        <div class="w-20 h-6 bg-gray-600/30 rounded-full animate-pulse"></div>
        <div class="w-14 h-6 bg-gray-600/30 rounded-full animate-pulse"></div>
        <div class="w-18 h-6 bg-gray-600/30 rounded-full animate-pulse"></div>
        <div class="w-12 h-6 bg-gray-600/30 rounded-full animate-pulse"></div>
      </div>
      
      <!-- Description skeleton -->
      <div class="space-y-2">
        <div class="w-full h-3 bg-gray-600/30 rounded animate-pulse"></div>
        <div class="w-3/4 h-3 bg-gray-600/30 rounded animate-pulse"></div>
        <div class="w-1/2 h-3 bg-gray-600/30 rounded animate-pulse"></div>
        <div class="w-5/6 h-3 bg-gray-600/30 rounded animate-pulse"></div>
        <div class="w-2/3 h-3 bg-gray-600/30 rounded animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}
</style>

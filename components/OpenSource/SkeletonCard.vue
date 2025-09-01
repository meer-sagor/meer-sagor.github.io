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
      <div class="text-center space-y-2">
        <div class="w-16 h-16 mx-auto bg-gray-600/30 rounded-lg animate-pulse"></div>
        <div class="w-24 h-3 bg-gray-600/30 rounded animate-pulse"></div>
      </div>
    </div>
    
    <div class="space-y-[12px] px-[16px] md:px-[24px] pb-[16px] md:pb-[24px]">
      <!-- Title and icons skeleton -->
      <div class="flex items-center justify-between gap-[16px]">
        <div class="w-32 h-6 bg-gray-600/30 rounded animate-pulse"></div>
        <div class="flex gap-2">
          <div class="w-5 h-5 bg-gray-600/30 rounded animate-pulse"></div>
          <div class="w-5 h-5 bg-gray-600/30 rounded animate-pulse"></div>
          <div class="w-5 h-5 bg-gray-600/30 rounded animate-pulse"></div>
        </div>
      </div>

      <!-- Package name and author skeleton -->
      <div class="flex flex-wrap gap-2 text-xs">
        <div class="flex items-center gap-1">
          <div class="w-3 h-3 bg-gray-600/30 rounded animate-pulse"></div>
          <div class="w-28 h-3 bg-gray-600/30 rounded animate-pulse"></div>
        </div>
        <div class="flex items-center gap-1">
          <div class="w-3 h-3 bg-gray-600/30 rounded animate-pulse"></div>
          <div class="w-20 h-3 bg-gray-600/30 rounded animate-pulse"></div>
        </div>
      </div>
      
      <!-- Stats skeleton -->
      <div class="flex flex-wrap gap-2 text-xs">
        <div class="flex items-center gap-1">
          <div class="w-3 h-3 bg-gray-600/30 rounded animate-pulse"></div>
          <div class="w-20 h-3 bg-gray-600/30 rounded animate-pulse"></div>
        </div>
        <div class="flex items-center gap-1">
          <div class="w-3 h-3 bg-gray-600/30 rounded animate-pulse"></div>
          <div class="w-14 h-3 bg-gray-600/30 rounded animate-pulse"></div>
        </div>
        <div class="flex items-center gap-1">
          <div class="w-3 h-3 bg-gray-600/30 rounded animate-pulse"></div>
          <div class="w-12 h-3 bg-gray-600/30 rounded animate-pulse"></div>
        </div>
        <div class="flex items-center gap-1">
          <div class="w-3 h-3 bg-gray-600/30 rounded animate-pulse"></div>
          <div class="w-24 h-3 bg-gray-600/30 rounded animate-pulse"></div>
        </div>
      </div>
      
      <!-- Live data indicator skeleton -->
      <div class="flex items-center gap-1 text-xs">
        <div class="w-3 h-3 bg-green-600/30 rounded animate-pulse"></div>
        <div class="w-28 h-3 bg-green-600/30 rounded animate-pulse"></div>
      </div>

      <!-- Keywords skeleton -->
      <div class="flex gap-[8px] flex-wrap">
        <div class="w-16 h-6 bg-gray-600/30 rounded-full animate-pulse"></div>
        <div class="w-20 h-6 bg-gray-600/30 rounded-full animate-pulse"></div>
        <div class="w-14 h-6 bg-gray-600/30 rounded-full animate-pulse"></div>
        <div class="w-18 h-6 bg-gray-600/30 rounded-full animate-pulse"></div>
      </div>
      
      <!-- Description skeleton -->
      <div class="space-y-2 text-[12px]">
        <div class="w-full h-3 bg-gray-600/30 rounded animate-pulse"></div>
        <div class="w-3/4 h-3 bg-gray-600/30 rounded animate-pulse"></div>
        <div class="w-1/2 h-3 bg-gray-600/30 rounded animate-pulse"></div>
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

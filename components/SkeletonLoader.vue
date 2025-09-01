<script lang="ts" setup>
interface Props {
  type?: 'text' | 'title' | 'avatar' | 'button' | 'card' | 'image'
  width?: string
  height?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  width: '100%',
  height: '1rem',
  className: ''
})
</script>

<template>
  <div 
    :class="[
      'animate-pulse bg-gray-600/30 rounded',
      props.className
    ]"
    :style="{
      width: props.width,
      height: props.height
    }"
  >
    <!-- For image type, add a placeholder icon -->
    <div v-if="props.type === 'image'" class="w-full h-full flex items-center justify-center">
      <UIcon name="lucide:image" class="w-8 h-8 text-gray-500/50" />
    </div>
  </div>
</template>

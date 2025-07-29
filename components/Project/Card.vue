<script setup lang="ts">
import type { Projects } from '~/@types/Projects';

defineProps<{
  work: Projects
  isShuffling: boolean
  index: number
}>()

</script>

<template>
  <div class="space-y-[12px] border rounded-lg overflow-hidden self-start">
    <NuxtImg v-if="work.thumbnail" :src="work.thumbnail" class="w-full" alt="Crowdfundly for Creators" />
    <div class="space-y-[12px] px-[16px] md:px-[24px] pb-[16px] md:pb-[24px]"
      :class="`${!work.thumbnail && 'pt-[16px] md:pt-[24px]'}`">
      <h2 class="flex items-center gap-[16px] font-bold text-[20px]">
        {{ work.name }}
        <NuxtLink :aria-label="work.name" :to="work.liveLink" target="_blank" v-if="work.liveLink">
          <UIcon name="lucide:external-link" />
        </NuxtLink>
      </h2>
      <div class="flex gap-[8px] flex-wrap">
        <div v-for="tech in work.technology"
          class="flex items-center rounded-full border border-white/10 bg-zinc-900/80 px-[8px] py-[4px] backdrop-blur-3xl text-[12px]">
          {{ tech }}
        </div>
      </div>
      <div class="text-[12px] work_description" v-html="work.description"></div>
    </div>
  </div>
</template>
<style scoped>
.work_description :deep(ul) {
  margin-left: 24px;
  list-style: disc;
}
</style>
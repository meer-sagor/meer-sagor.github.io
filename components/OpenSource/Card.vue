<script lang="ts" setup>
import type { OpenSource } from "~/@types/OpenSource";

interface Props {
  project: OpenSource
  index: number
}

const props = defineProps<Props>()
</script>

<template>
  <div class="space-y-[12px] border rounded-lg overflow-hidden self-start animate-fade-in hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
       :style="{ animationDelay: `${props.index * 0.2}s` }">
    <!-- Custom thumbnail or placeholder icon -->
    <div class="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
      <div class="text-center">
        <UIcon name="lucide:package" class="w-16 h-16 mx-auto mb-2 text-blue-400" />
        <p class="text-sm text-gray-400">{{ project.name }}</p>
      </div>
    </div>
    
    <div class="space-y-[12px] px-[16px] md:px-[24px] pb-[16px] md:pb-[24px]">
      <h2 class="flex items-center gap-[16px] font-bold text-[20px]">
        {{ project.name }}
        <div class="flex gap-2">
          <NuxtLink :aria-label="`View ${project.name} on NPM`"
                    :to="`https://www.npmjs.com/package/${project.npmPackage}`" target="_blank"
                    v-if="project.npmPackage">
            <UIcon name="logos:npm-icon" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink :aria-label="`View ${project.name} on GitHub`" :to="project.githubRepo"
                    target="_blank" v-if="project.githubRepo">
            <UIcon name="lucide:github" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink :aria-label="`View ${project.name} documentation`" :to="project.documentation"
                    target="_blank" v-if="project.documentation">
            <UIcon name="lucide:external-link" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </h2>
      
      <!-- Package name and author with animations -->
      <div class="flex flex-wrap gap-2 text-xs text-gray-400">
        <div v-if="project.npmPackage" class="flex items-center gap-1 animate-fade-in">
          <UIcon name="lucide:package" class="w-3 h-3 animate-pulse" />
          <span class="font-mono text-blue-300 animate-glow">{{ project.npmPackage }}</span>
        </div>
        <div v-if="project.author" class="flex items-center gap-1 animate-fade-in">
          <UIcon name="lucide:user" class="w-3 h-3" />
          <span class="text-green-300">{{ project.author }}</span>
        </div>
      </div>
      
      <!-- Package Stats with subtle animations -->
      <div class="flex flex-wrap gap-2 text-xs text-gray-400">
        <div v-if="project.weeklyDownloads" class="flex items-center gap-1 animate-fade-in">
          <UIcon name="lucide:download" class="w-3 h-3 animate-bounce" />
          <span class="font-mono">{{ project.weeklyDownloads.toLocaleString() }}/week</span>
        </div>
        <div v-if="project.version" class="flex items-center gap-1 animate-fade-in">
          <UIcon name="lucide:tag" class="w-3 h-3 animate-pulse" />
          <span class="font-mono">v{{ project.version }}</span>
        </div>
        <div v-if="project.license" class="flex items-center gap-1 animate-fade-in">
          <UIcon name="lucide:shield" class="w-3 h-3" />
          <span>{{ project.license }}</span>
        </div>
        <div v-if="project.lastUpdated" class="flex items-center gap-1 animate-fade-in">
          <UIcon name="lucide:calendar" class="w-3 h-3" />
          <span>{{ new Date(project.lastUpdated).toLocaleDateString() }}</span>
        </div>
      </div>
      
      <!-- Live data indicator with flash animation -->
      <div v-if="project.npmPackage" class="flex items-center gap-1 text-xs text-green-400">
        <div class="relative">
          <UIcon name="lucide:zap" class="w-3 h-3 animate-pulse" />
          <div class="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
        </div>
        <span class="animate-pulse">Live data from NPM</span>
      </div>

      <!-- Keywords from NPM with animations -->
      <div v-if="project.keywords && project.keywords.length > 0" class="flex gap-[8px] flex-wrap">
        <div v-for="(keyword, index) in project.keywords.slice(0, 6)" :key="keyword" 
             class="flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-[8px] py-[4px] backdrop-blur-3xl text-[12px] text-blue-300 animate-fade-in"
             :style="{ animationDelay: `${0.5 + index * 0.1}s` }">
          #{{ keyword }}
        </div>
        <div v-if="project.keywords.length > 6" 
             class="flex items-center rounded-full border border-gray-500/20 bg-gray-500/10 px-[8px] py-[4px] backdrop-blur-3xl text-[12px] text-gray-400 animate-fade-in"
             style="animation-delay: 1.1s">
          +{{ project.keywords.length - 6 }} more
        </div>
      </div>
      
      <div class="text-[12px] text-gray-300 leading-relaxed">
        {{ project.description }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom animations for live data feel */
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

@keyframes glow {
  0%,
  100% {
    text-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

/* Stagger animation delays for stats */
.animate-fade-in:nth-child(1) {
  animation-delay: 0.1s;
}

.animate-fade-in:nth-child(2) {
  animation-delay: 0.2s;
}

.animate-fade-in:nth-child(3) {
  animation-delay: 0.3s;
}

.animate-fade-in:nth-child(4) {
  animation-delay: 0.4s;
}
</style> 
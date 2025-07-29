<script lang="ts" setup>
import type { NpmPackageData, OpenSource } from "~/@types/OpenSource";



// Define your open source projects with their NPM package names
const openSourceProjects = ref<OpenSource[]>([
  {
    name: 'Wavesurfer Vue',
    description: "A Vue.js wrapper for WaveSurfer.js, providing easy integration of audio waveform visualization in Vue applications. Features include customizable waveforms, real-time audio playback, and responsive design.",
    npmPackage: "@meersagor/wavesurfer-vue",
    githubRepo: "https://github.com/meer-sagor/wavesurfer-vue",
    documentation: null,
    weeklyDownloads: 0,
    version: "0.0.0",
    license: "MIT",
    lastUpdated: "",
    author: "",
    keywords: []
  },
  // Add more open source projects here as you create them
])

// Fetch real-time data from NPM
const fetchNpmData = async () => {
  isLoading.value = true
  hasError.value = false
  
  try {
    const updatedProjects = await Promise.all(
      openSourceProjects.value.map(async (project) => {
        if (!project.npmPackage) return project
        
        try {
          const npmData = await $fetch<NpmPackageData>(`/api/npm-package/${encodeURIComponent(project.npmPackage)}`)
          console.log('npmData', npmData);
          
          return {
            ...project,
            weeklyDownloads: npmData.weeklyDownloads,
            version: npmData.version,
            license: npmData.license,
            lastUpdated: npmData.lastUpdated,
            description: project.description || npmData.description,
            author: npmData.author,
            keywords: npmData.keywords,
            // Extract GitHub repo from NPM repository field if not already set
            githubRepo: project.githubRepo || npmData.repository.replace('git+https://github.com/', 'https://github.com/').replace('.git', ''),
            // Use NPM homepage as documentation if not already set
            documentation: project.documentation || npmData.homepage || `https://www.npmjs.com/package/${project.npmPackage}`
          }
        } catch (error) {
          console.warn(`Failed to fetch NPM data for ${project.npmPackage}:`, error)
          return project
        }
      })
    )
    
    openSourceProjects.value = updatedProjects
  } catch (error) {
    console.error('Failed to fetch NPM data:', error)
    hasError.value = true
  } finally {
    isLoading.value = false
  }
}

// Fetch data on component mount
onMounted(() => {
  fetchNpmData()
})

// Loading and error states
const isLoading = ref(true)
const hasError = ref(false)
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
    <button @click="fetchNpmData"
        class="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
        Try Again
    </button>
  </div>

  <!-- Projects grid -->
  <div v-else class="md:columns-2 lg:columns-3 gap-[24px] space-y-[24px]">
    <OpenSourceCard 
      v-for="(project, index) in openSourceProjects" 
      :key="project.name"
      :project="project"
      :index="index"
    />
  </div>
</template>


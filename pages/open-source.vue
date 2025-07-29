<script setup lang="ts">
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
  {
    name: 'JS Composable',
    description: "JS-Composable is a lightweight utility library designed to provide practical helper methods that simplify real-world use cases. Tailored for Node.js projects, it includes a versatile set of functions to streamline repetitive tasks and support common development needs.",
    npmPackage: "@meersagor/js-composable",
    githubRepo: "https://github.com/meer-sagor/js-composable",
    documentation: null,
    weeklyDownloads: 0,
    version: "0.0.0",
    license: "MIT",
    lastUpdated: "",
    author: "",
    keywords: []
  },
  {
    name: 'Gearup CLI',
    description: "The gearup CLI is a tool designed to simplify and speed up the setup process for development environments. It automates the installation of essential tools, saving time and reducing manual effort.",
    npmPackage: "gearup-cli",
    githubRepo: "https://github.com/meer-sagor/GearUp-Cli",
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

// Fetch data for all packages using Promise.all with useAsyncData
const { data: npmPackagesData, pending, error } = await useAsyncData(
  'npm-packages',
  async () => {
    const packagesWithNpmData = await Promise.all(
      openSourceProjects.value.map(async (project) => {
        if (!project.npmPackage) return { project, npmData: null }
        
        try {
          const npmData = await $fetch<NpmPackageData>(`/api/npm-package/${encodeURIComponent(project.npmPackage)}`)
          return { project, npmData }
        } catch (error) {
          console.warn(`Failed to fetch NPM data for ${project.npmPackage}:`, error)
          return { project, npmData: null }
        }
      })
    )
    return packagesWithNpmData
  }
)

// Computed property to merge static and dynamic data
const openSourceProjectsWithData = computed(() => {
  if (!npmPackagesData.value) return openSourceProjects.value
  
  return npmPackagesData.value.map(({ project, npmData }) => {
    if (!npmData) return project
    
    return {
      ...project,
      weeklyDownloads: npmData.weeklyDownloads || 0,
      version: npmData.version || "0.0.0",
      license: npmData.license || "MIT",
      lastUpdated: npmData.lastUpdated || "",
      description: project.description || npmData.description || "",
      author: npmData.author || "",
      keywords: npmData.keywords || [],
      // Extract GitHub repo from NPM repository field if not already set
      githubRepo: project.githubRepo || (npmData.repository ? npmData.repository.replace('git+https://github.com/', 'https://github.com/').replace('.git', '') : ''),
      // Use NPM homepage as documentation if not already set
      documentation: project.documentation || npmData.homepage || `https://www.npmjs.com/package/${project.npmPackage}`
    }
  })
})

// Loading and error states
const isLoading = computed(() => pending.value)
const hasError = computed(() => !!error.value)
</script>

<template>
  <UContainer class="mb-[40px] space-y-3">
    <div class="text-center">
      <h1 class="text-3xl lg:text-4xl">Open <span class="text-primary-500">Source</span></h1>
      <p class="text-gray-400 italic">My contributions to the open-source community</p>
    </div>
    <Divider/>
    <OpenSource 
      :openSourceProjectsWithData="openSourceProjectsWithData" 
      :isLoading="isLoading" 
      :hasError="hasError" 
    />
    
    <!-- Live data note -->
    <div class="text-center mt-8">
      <p class="text-sm text-gray-400">
        <UIcon name="lucide:zap" class="w-4 h-4 inline mr-1" />
        Data is fetched live from NPM registry
      </p>
    </div>
    
    <!-- Contribution Section -->
    <Divider/>
    <OpenSourceContributionSection />
  </UContainer>
</template>

<style scoped>

</style>
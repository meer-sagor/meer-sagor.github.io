interface NpmPackageResponse {
  name: string
  description?: string
  'dist-tags': {
    latest: string
  }
  versions: {
    [version: string]: {
      description?: string
      license?: string
      repository?: {
        url: string
      }
      homepage?: string
      keywords?: string[]
      author?: {
        name: string
      } | string
      maintainers?: any[]
      dependencies?: Record<string, string>
      devDependencies?: Record<string, string>
      peerDependencies?: Record<string, string>
    }
  }
  time: {
    [version: string]: string
    modified: string
  }
  readme?: string
}

interface NpmStatsResponse {
  downloads: number
}

export default defineEventHandler(async (event) => {
  const packageName = getRouterParam(event, 'name')
  
  if (!packageName) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Package name is required'
    })
  }

  try {
    // Fetch package data from NPM registry
    const response = await $fetch<NpmPackageResponse>(`https://registry.npmjs.org/${packageName}`)
    
    if (!response) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Package not found'
      })
    }

    // Extract the latest version data
    const latestVersion = response['dist-tags']?.latest
    const latestData = response.versions?.[latestVersion]
    
    if (!latestData) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Latest version not found'
      })
    }

    // Get download stats from NPM stats API
    let weeklyDownloads = 0
    try {
      const statsResponse = await $fetch<NpmStatsResponse>(`https://api.npmjs.org/downloads/point/last-week/${packageName}`)
      weeklyDownloads = statsResponse.downloads || 0
    } catch (statsError) {
      console.warn(`Could not fetch download stats for ${packageName}:`, statsError)
    }

    // Format the response
    const packageData = {
      name: response.name,
      description: latestData.description || '',
      version: latestVersion,
      license: latestData.license || 'Unknown',
      repository: latestData.repository?.url || '',
      homepage: latestData.homepage || '',
      keywords: latestData.keywords || [],
      author: typeof latestData.author === 'string' ? latestData.author : latestData.author?.name || '',
      maintainers: latestData.maintainers || [],
      weeklyDownloads,
      lastUpdated: response.time?.[latestVersion] || response.time?.modified || '',
      dependencies: Object.keys(latestData.dependencies || {}),
      devDependencies: Object.keys(latestData.devDependencies || {}),
      peerDependencies: Object.keys(latestData.peerDependencies || {}),
      readme: response.readme || ''
    }

    return packageData
  } catch (error: any) {
    console.error(`Error fetching NPM package ${packageName}:`, error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to fetch package data'
    })
  }
}) 
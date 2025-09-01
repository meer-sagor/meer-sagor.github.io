import type { NpmPackageData } from "~/@types/OpenSource";

/**
 * Fetches NPM package data directly from the NPM registry
 * @param packageName - The name of the NPM package
 * @returns Promise<NpmPackageData | null> - Package data or null if not found
 */
export const fetchNpmPackageData = async (packageName: string): Promise<NpmPackageData | null> => {
  try {
    // Fetch package data from NPM registry
    const response = await $fetch<any>(`https://registry.npmjs.org/${packageName}`)
    
    if (!response || response.error) {
      console.warn(`Package not found: ${packageName}`)
      return null
    }

    // Extract the latest version data
    const latestVersion = response['dist-tags']?.latest
    const latestData = response.versions?.[latestVersion]
    
    if (!latestData) {
      console.warn(`No latest version data for ${packageName}`)
      return null
    }

    // Get download stats from NPM stats API
    let weeklyDownloads = 0
    try {
      const statsResponse = await fetchPackageDownloads(packageName)
      weeklyDownloads = statsResponse || 0
    } catch (statsError) {
      console.warn(`Could not fetch download stats for ${packageName}:`, statsError)
    }

    // Format the response
    return {
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
  } catch (error: any) {
    console.warn(`Failed to fetch NPM data for ${packageName}:`, error)
    return null
  }
}

/**
 * Fetches multiple NPM packages data
 * @param packageNames - Array of package names
 * @returns Promise<Array<{ packageName: string, data: NpmPackageData | null }>>
 */
export const fetchMultipleNpmPackages = async (packageNames: string[]) => {
  const results = await Promise.all(
    packageNames.map(async (packageName) => {
      const data = await fetchNpmPackageData(packageName)
      return { packageName, data }
    })
  )
  return results
}

/**
 * Fetches download statistics for a package
 * @param packageName - The name of the NPM package
 * @returns Promise<number> - Weekly download count
 */
export const fetchPackageDownloads = async (packageName: string): Promise<number> => {
  try {
    const statsResponse = await $fetch<{ downloads: number }>(`https://api.npmjs.org/downloads/point/last-week/${packageName}`)
    return statsResponse.downloads || 0
  } catch (error) {
    console.warn(`Could not fetch download stats for ${packageName}:`, error)
    return 0
  }
}

/**
 * Fetches basic package info (name, version, description)
 * @param packageName - The name of the NPM package
 * @returns Promise<{ name: string, version: string, description: string } | null>
 */
export const fetchBasicPackageInfo = async (packageName: string) => {
  try {
    const response = await $fetch<any>(`https://registry.npmjs.org/${packageName}`)
    
    if (!response || response.error) return null

    const latestVersion = response['dist-tags']?.latest
    const latestData = response.versions?.[latestVersion]
    
    if (!latestData) return null

    return {
      name: response.name,
      version: latestVersion,
      description: latestData.description || ''
    }
  } catch (error) {
    console.warn(`Failed to fetch basic info for ${packageName}:`, error)
    return null
  }
}

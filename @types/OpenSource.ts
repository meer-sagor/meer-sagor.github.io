export type OpenSource = {
    name: string
    description: string
    npmPackage?: string
    githubRepo?: string
    documentation?: string | null
    weeklyDownloads?: number
    version?: string
    license?: string
    lastUpdated?: string
    author?: string
    keywords?: string[]
}

export interface NpmPackageData {
    name: string
    description: string
    version: string
    license: string
    repository: string
    homepage: string
    keywords: string[]
    author: string
    maintainers: Maintainer[]
    weeklyDownloads: number
    lastUpdated: string
    dependencies: string[]
    devDependencies: string[]
    peerDependencies: any[]
    readme: string
  }
  interface Maintainer {
    name: string
    email: string
  }
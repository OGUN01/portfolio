export type ProjectTag = 'Web' | 'AI' | 'Mobile' | 'Full Stack'

export interface Screenshot {
  url: string
  alt: string
  caption?: string
}

export interface Technology {
  name: string
  icon: string // URL or icon component name
}

export interface Project {
  id: string
  title: string
  description: string
  screenshots: Screenshot[]
  technologies: Technology[]
  tags: ProjectTag[]
  demoUrl?: string
  codeUrl?: string
  featured?: boolean
}

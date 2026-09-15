import type { Category, LanguageCode } from './dictionaries'

import sabuo from './projects/sabuo'
import protofall from './projects/protofall'
import kemang from './projects/kemang'
import journease from './projects/journease'
import unpaklink from './projects/unpaklink'
import wanderercalls from './projects/wanderercalls'

// =========================================================
// PROJECT TYPES
// =========================================================

export interface ProjectDate {
  year: number
  month?: number
}

export type ProjectLinkType =
  | 'repository'
  | 'youtube'
  | 'demo'
  | 'design'
  | 'external'

export interface ProjectLink {
  type: ProjectLinkType
  label: string
  url: string
}

export interface ProjectTranslation {
  title?: string
  description?: string
}

export interface ProjectData {
  id: string
  category: Category
  date: ProjectDate
  image: string
  tags: string[]
  tone: 'lime' | 'blue' | 'pink' | 'purple' | 'orange' | 'cyan' | 'yellow' | 'red' | 'brown'
  links: ProjectLink[]
  translations: Record<string, ProjectTranslation>
}

export interface Project extends ProjectData {
  title: string
  description: string
}


// =========================================================
// ALL PROJECTS
// =========================================================

export const projects: ProjectData[] = [
  sabuo,
  protofall,
  kemang,
  journease,
  unpaklink,
  wanderercalls
].sort((a, b) => {
  const yearDifference = b.date.year - a.date.year

  if (yearDifference !== 0) {
    return yearDifference
  }

  return (b.date.month ?? 0) - (a.date.month ?? 0)
})


// =========================================================
// GET PROJECTS BY LANGUAGE
// =========================================================

export function getProjects(
  language: LanguageCode | string
): Project[] {
  return projects.map((project) => {
    const translation =
      project.translations[language] ??
      project.translations.en ??
      project.translations.id ??
      {}

    return {
      ...project,
      title: translation.title ?? project.id,
      description: translation.description ?? '',
    }
  })
}
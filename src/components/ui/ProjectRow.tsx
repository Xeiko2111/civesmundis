import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import clsx from 'clsx'
import type { Project } from '@/data/projects'
import { getProjectImage } from '@/lib/images'
import { PlaceholderImage } from './PlaceholderImage'

const objectPositionClass = {
  top: 'object-top',
  center: 'object-center',
  bottom: 'object-bottom',
} as const

/**
 * Fila editorial de proyecto: tipografía a ancho completo, con una imagen
 * grande que se despliega DEBAJO de la fila al pasar el cursor por encima
 * (en vez de una miniatura al lado o flotando junto al puntero).
 */
export function ProjectRow({ project }: { project: Project }) {
  const image = getProjectImage(project.image)

  return (
    <Link to={`/proyectos/${project.slug}`} className="group block border-b border-ink-200 py-7">
      <div className="flex flex-col items-baseline justify-between gap-2 md:flex-row md:items-center md:gap-6">
        <span className="w-32 shrink-0 text-xs font-semibold uppercase tracking-widest text-ink-400">
          {project.country}
          {project.location ? ` · ${project.location}` : ''}
        </span>

        <span className="flex-1 font-display text-2xl text-ink-900 transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange md:text-4xl">
          {project.name}
        </span>

        <span className="hidden max-w-xs text-sm text-ink-500 lg:block">{project.summary}</span>
        <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-ink-300">
          {project.status === 'activo' ? 'Activo' : 'Archivo'}
        </span>
        <ArrowUpRight
          size={20}
          className="shrink-0 text-ink-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange"
        />
      </div>

      <div className="max-h-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:mt-6 group-hover:max-h-[26rem]">
        {image ? (
          <img
            src={image}
            alt={project.name}
            className={clsx(
              'h-56 w-full rounded-2xl object-cover md:h-96',
              objectPositionClass[project.imagePosition ?? 'top'],
            )}
          />
        ) : (
          <div className="h-56 rounded-2xl md:h-96">
            <PlaceholderImage label={project.name} className="rounded-2xl" />
          </div>
        )}
      </div>
    </Link>
  )
}

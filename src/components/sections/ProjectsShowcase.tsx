import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { activeProjects } from '@/data/projects'
import { ProjectRow } from '@/components/ui/ProjectRow'
import { useLanguage } from '@/i18n/LanguageContext'

/**
 * Listado editorial de proyectos: filas tipográficas a ancho completo con
 * imagen flotante que sigue al cursor al hacer hover, en lugar de una
 * cuadrícula de tarjetas.
 */
export function ProjectsShowcase() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-28 md:py-40">
      <div className="container-page">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 border-b border-ink-200 pb-8 md:flex-row md:items-end">
          <h2 className="font-display text-4xl text-ink-900 md:text-6xl">{t.projects.title}</h2>
          <Link to="/cooperacion" className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-orange">
            {t.projects.cta}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div>
          {activeProjects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

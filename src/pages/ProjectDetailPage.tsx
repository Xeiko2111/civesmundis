import { Link, useParams } from 'react-router-dom'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, MapPin, Calendar, Wallet, Users, Building2, Landmark } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Reveal } from '@/components/ui/Reveal'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { allCooperationProjects } from '@/data/projects'
import { getProjectImage } from '@/lib/images'
import NotFoundPage from './NotFoundPage'

/**
 * Ficha de proyecto como recorrido editorial de secciones a pantalla
 * completa (hero, localización, contexto, objetivos, organizaciones,
 * financiadores, galería), en vez de un artículo con sidebar de datos.
 * Las secciones para las que la auditoría no documenta contenido real
 * (personas, impacto, resultados, financiadores por proyecto) se omiten
 * en vez de rellenarse con texto inventado.
 */
export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = allCooperationProjects.find((p) => p.slug === slug)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1])

  if (!project) return <NotFoundPage />

  const image = getProjectImage(project.image)

  const facts = [
    project.duration && { icon: Calendar, label: 'Duración', value: project.duration },
    project.budget && { icon: Wallet, label: 'Presupuesto', value: project.budget },
    project.beneficiaries && { icon: Users, label: 'Beneficiarios', value: project.beneficiaries },
  ].filter(Boolean) as { icon: typeof Calendar; label: string; value: string }[]

  return (
    <>
      <Seo title={`${project.name} — Cives Mundi`} description={project.summary} />

      {/* HERO */}
      <section ref={heroRef} className="relative flex min-h-[80vh] items-end overflow-hidden bg-ink-950 pt-32">
        <motion.div style={{ scale: imgScale }} className="absolute inset-0">
          {image ? (
            <img src={image} alt={project.name} className="h-full w-full object-cover opacity-50" />
          ) : (
            <PlaceholderImage label={project.name} className="opacity-60" />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/30" />
        <div className="container-page relative pb-16">
          <Reveal>
            <Link to="/cooperacion" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white">
              <ArrowLeft size={16} /> Volver a proyectos
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.3em] text-orange-corp">
              {project.status === 'activo' ? 'Proyecto activo' : 'Proyecto finalizado'}
            </span>
            <h1 className="mt-4 font-display text-[10vw] leading-[0.95] text-white md:text-display-lg">{project.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/75">{project.summary}</p>
          </Reveal>
        </div>
      </section>

      {/* LOCALIZACIÓN */}
      <section className="border-b border-ink-100 bg-white py-14">
        <div className="container-page flex flex-wrap items-center justify-between gap-6">
          <span className="inline-flex items-center gap-3 text-2xl text-ink-900 md:text-3xl">
            <MapPin size={22} className="text-orange" />
            <span className="font-display">{[project.country, project.location].filter(Boolean).join(' · ')}</span>
          </span>
          {facts.length > 0 && (
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-center gap-2 text-sm text-ink-600">
                  <fact.icon size={16} className="text-ink-400" />
                  <span className="text-ink-400">{fact.label}:</span>
                  <span className="font-medium text-ink-800">{fact.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CONTEXTO */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-page max-w-3xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">Contexto</span>
            <p className="mt-6 font-display text-2xl leading-snug text-ink-900 md:text-3xl">{project.description}</p>
          </Reveal>
        </div>
      </section>

      {/* OBJETIVOS */}
      {(project.generalObjective || project.specificObjective) && (
        <section className="border-t border-ink-100 bg-ink-50 py-24 md:py-32">
          <div className="container-page">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">Objetivos</span>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
              {project.generalObjective && (
                <Reveal delay={0.1}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">Objetivo general</p>
                  <p className="mt-3 font-display text-xl text-ink-900 md:text-2xl">{project.generalObjective}</p>
                </Reveal>
              )}
              {project.specificObjective && (
                <Reveal delay={0.15}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">Objetivo específico</p>
                  <p className="mt-3 font-display text-xl text-ink-900 md:text-2xl">{project.specificObjective}</p>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* GALERÍA */}
      <section className="bg-ink-950 py-4">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          {image ? (
            <img src={image} alt={project.name} className="h-full w-full object-cover" />
          ) : (
            <PlaceholderImage label={`Galería — ${project.name}`} />
          )}
        </div>
      </section>

      {/* ORGANIZACIONES */}
      {project.organizations && (
        <section className="border-t border-ink-100 bg-white py-24 md:py-32">
          <div className="container-page">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange">
                <Building2 size={14} /> Organizaciones y contrapartes
              </span>
            </Reveal>
            <div className="mt-8 border-t border-ink-200">
              {project.organizations.map((org, i) => (
                <Reveal key={org} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="flex items-center justify-between border-b border-ink-200 py-6">
                    <span className="font-display text-xl text-ink-900 md:text-2xl">{org}</span>
                    <span className="text-xs uppercase tracking-widest text-ink-400">
                      {i === 0 ? 'Coordinación' : 'Contraparte local'}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINANCIADORES (por proyecto, cuando la auditoría los documenta) */}
      {project.funders && project.funders.length > 0 && (
        <section className="border-t border-ink-100 bg-ink-50 py-24">
          <div className="container-page">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange">
                <Landmark size={14} /> Financiadores
              </span>
            </Reveal>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
              {project.funders.map((f) => (
                <span key={f} className="font-display text-lg text-ink-800">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CIERRE */}
      <section className="border-t border-ink-100 bg-white py-24 md:py-32">
        <div className="container-page max-w-2xl">
          <Reveal>
            <p className="font-display text-3xl text-ink-900 md:text-4xl">
              ¿Quieres saber más sobre este proyecto o colaborar con Cives Mundi?
            </p>
            <div className="mt-8">
              <MagneticButton to="/contacto">Contactar</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

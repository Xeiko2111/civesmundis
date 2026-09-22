import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowUpRight } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/sections/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectRow } from '@/components/ui/ProjectRow'
import { Marquee } from '@/components/ui/Marquee'
import { activeProjects, allCooperationProjects } from '@/data/projects'
import { contrapartes } from '@/data/countries'
import { heroImages } from '@/lib/images'
import { useLanguage } from '@/i18n/LanguageContext'

export default function CooperacionPage() {
  const [query, setQuery] = useState('')
  const [country, setCountry] = useState('todos')
  const { t } = useLanguage()

  const countries = useMemo(
    () => Array.from(new Set(allCooperationProjects.map((p) => p.country))).sort(),
    [],
  )

  const filtered = useMemo(() => {
    return allCooperationProjects.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase())
      const matchesCountry = country === 'todos' || p.country === country
      return matchesQuery && matchesCountry
    })
  }, [query, country])

  return (
    <>
      <Seo
        title="Cooperación al Desarrollo — Cives Mundi"
        description="Proyectos activos e histórico de cooperación al desarrollo de Cives Mundi en más de 20 países."
      />
      <PageHero
        eyebrow={t.pages.cooperacion.eyebrow}
        title={t.pages.cooperacion.title}
        description={t.pages.cooperacion.description}
        image={heroImages.mundoBg}
      />

      <section className="bg-white py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">{t.projects.eyebrow}</span>
            <h2 className="mt-4 font-display text-display-md text-ink-900">{t.projects.title}</h2>
          </Reveal>
          <div className="mt-14 border-t border-ink-200">
            {activeProjects.map((p) => (
              <ProjectRow key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="historico" className="bg-ink-50 py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">Archivo</span>
            <h2 className="mt-4 font-display text-display-md text-ink-900">Histórico de proyectos</h2>
            <p className="mt-4 max-w-2xl text-ink-600">
              Un catálogo filtrable de los proyectos de cooperación ejecutados a lo largo de los años.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex flex-col gap-8 border-b border-ink-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="relative flex-1 border-b border-ink-300">
              <Search size={16} className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-ink-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar proyecto…"
                className="w-full bg-transparent py-3 pl-7 pr-4 text-lg text-ink-800 outline-none placeholder:text-ink-400"
              />
            </div>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border-b border-ink-300 bg-transparent px-1 py-3 text-sm uppercase tracking-widest text-ink-800 outline-none"
            >
              <option value="todos">Todos los países</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </Reveal>

          <div className="mt-2">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i * 0.03, 0.3)}>
                <Link
                  to={`/proyectos/${p.slug}`}
                  className="group flex flex-col justify-between gap-2 border-b border-ink-200 py-6 sm:flex-row sm:items-center"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-ink-400">
                      {p.country}
                      {p.location ? ` · ${p.location}` : ''} · {p.status === 'activo' ? 'Activo' : 'Finalizado'}
                    </span>
                    <h3 className="mt-1 font-display text-xl text-ink-900 transition-colors group-hover:text-orange">
                      {p.name}
                    </h3>
                  </div>
                  <p className="max-w-md text-sm text-ink-500">{p.summary}</p>
                </Link>
              </Reveal>
            ))}
            {filtered.length === 0 && <p className="py-12 text-center text-ink-400">No se han encontrado proyectos.</p>}
          </div>
        </div>
      </section>

      <section id="contrapartes" className="bg-white py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">+28 países</span>
            <h2 className="mt-4 font-display text-display-md text-ink-900">Contrapartes</h2>
            <p className="mt-4 max-w-2xl text-ink-600">
              Socios locales con los que Cives Mundi trabaja en todo el mundo.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-y border-ink-200 py-6">
          <Marquee pauseOnHover={false} speed="slow">
            {contrapartes.map((c) => (
              <span key={c.name} className="mx-6 inline-flex items-baseline gap-3 whitespace-nowrap">
                <span className="font-display text-2xl text-ink-900 md:text-4xl">{c.name}</span>
                <span className="text-sm uppercase tracking-widest text-ink-400">{c.country}</span>
                <ArrowUpRight size={16} className="text-ink-300" />
              </span>
            ))}
          </Marquee>
        </div>
      </section>
    </>
  )
}

import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/sections/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Counter } from '@/components/ui/Counter'
import { FlipCard } from '@/components/ui/FlipCard'
import { team } from '@/data/team'
import { teamImages, heroImages } from '@/lib/images'
import { globalStats } from '@/data/countries'
import { useLanguage } from '@/i18n/LanguageContext'

const identityColors = [
  { name: 'Naranja corporativo', hex: '#FF9B16' },
  { name: 'Azul corporativo', hex: '#0083D7' },
  { name: 'Naranja vivo', hex: '#FF9108' },
  { name: 'Naranja web', hex: '#FF6600' },
  { name: 'Negro pálido', hex: '#2D2D2D' },
  { name: 'Blanco', hex: '#FFFFFF' },
]

export default function NosotrxsPage() {
  const { t } = useLanguage()

  return (
    <>
      <Seo title="Nosotrxs — Cives Mundi" description="Equipo, identidad corporativa y más de tres décadas de experiencia de Cives Mundi." />
      <PageHero
        eyebrow={t.pages.nosotrxs.eyebrow}
        title={t.pages.nosotrxs.title}
        description={t.pages.nosotrxs.description}
        image={heroImages.fondoHueco}
      />

      <section className="bg-white py-24">
        <div className="container-page grid grid-cols-2 gap-8 border-y border-ink-100 py-12 md:grid-cols-4">
          {[
            { value: globalStats.projects, label: 'Proyectos' },
            { value: 40, label: 'Financiadores', suffix: '+' },
            { value: globalStats.contrapartes, label: 'Contrapartes' },
            { value: 6, label: 'Personas en el equipo' },
          ].map((s) => (
            <Reveal key={s.label}>
              <p className="font-display text-4xl text-blue">
                <Counter value={s.value} suffix={s.suffix ?? ''} />
              </p>
              <p className="mt-2 text-sm text-ink-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">Equipo de trabajo</span>
            <h2 className="mt-4 font-display text-display-md text-ink-900">Las personas son importantes</h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.slug} delay={Math.min(i * 0.06, 0.4)}>
                <FlipCard image={teamImages[member.image]} name={member.name} role={member.role} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-24">
        <div className="container-page">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">Identidad corporativa</span>
            <h2 className="mt-4 font-display text-display-md text-ink-900">El símbolo de Cives Mundi</h2>
            <p className="mt-5 max-w-2xl text-ink-600">
              CIVES MUNDI procede del latín y significa "Ciudadanos del Mundo". El símbolo representa el mundo: el
              azul representa el agua de los océanos, el naranja representa los continentes, y las cuatro bandas
              representan trópicos y meridianos.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-px overflow-hidden bg-ink-200">
            {identityColors.map((c) => (
              <Reveal key={c.hex} className="w-1/2 sm:w-1/3 md:w-1/6">
                <div className="bg-white">
                  <div className="h-20" style={{ backgroundColor: c.hex }} />
                  <div className="bg-white p-3">
                    <p className="text-xs font-semibold text-ink-800">{c.name}</p>
                    <p className="text-xs text-ink-400">{c.hex}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-ink-200 pt-10 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">Tipografía corporativa</p>
              <p className="mt-2 font-display text-lg text-ink-900">Futura</p>
              <p className="mt-1 text-sm text-ink-500">Futura Lt BT (pesos finos) · Futura Hv BT (negritas)</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">Tipografía online</p>
              <p className="mt-2 font-display text-lg text-ink-900">Verdana / Arial</p>
              <p className="mt-1 text-sm text-ink-500">Complementaria: familia Swis721</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

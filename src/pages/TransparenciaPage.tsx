import { Download, ShieldCheck, Landmark } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/sections/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Marquee } from '@/components/ui/Marquee'
import { audits, evaluations, memories } from '@/data/transparency'
import { funders } from '@/data/funders'
import { funderImages } from '@/lib/images'
import { heroImages } from '@/lib/images'
import { useLanguage } from '@/i18n/LanguageContext'

/** Fila de documento editorial: sin tarjeta, solo tipografía + acción de descarga. */
function DocRow({ name, year, type }: { name: string; year: number; type: string }) {
  return (
    <button className="group flex w-full items-center justify-between gap-6 border-b border-ink-200 py-6 text-left transition-colors">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">
          {type} · {year}
        </p>
        <p className="mt-1 font-display text-xl text-ink-900 transition-colors group-hover:text-orange md:text-2xl">{name}</p>
      </div>
      <span className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink-400 transition-colors group-hover:text-orange">
        Descargar <Download size={16} />
      </span>
    </button>
  )
}

export default function TransparenciaPage() {
  const { t } = useLanguage()

  return (
    <>
      <Seo title="Transparencia — Cives Mundi" description="Memorias, auditorías, evaluaciones y financiadores de Cives Mundi." />
      <PageHero
        eyebrow={t.pages.transparencia.eyebrow}
        title={t.pages.transparencia.title}
        description={t.pages.transparencia.description}
        image={heroImages.fondoMemorias}
      />

      <section id="memorias" className="scroll-mt-24 bg-white py-24">
        <div className="container-page">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">Memorias</span>
            <h2 className="mt-4 font-display text-display-md text-ink-900">Memorias de actividades</h2>
          </Reveal>
          <div className="mt-12 border-t border-ink-200">
            {memories.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <DocRow {...m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="auditorias" className="scroll-mt-24 bg-ink-50 py-24">
        <div className="container-page">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">2005 — 2024</span>
            <h2 className="mt-4 font-display text-display-md text-ink-900">Auditorías contables</h2>
            <p className="mt-4 max-w-2xl text-ink-600">
              La importancia de la transparencia se plasma en auditorías externas realizadas ininterrumpidamente
              desde 2005.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 border-y border-ink-200 py-6">
          <Marquee pauseOnHover speed="slow">
            {audits.map((a) => (
              <button
                key={a.year}
                className="group mx-3 inline-flex items-center gap-3 whitespace-nowrap border-b border-transparent pb-1 transition-colors hover:border-orange"
              >
                <span className="font-display text-3xl text-ink-900 group-hover:text-orange md:text-4xl">{a.year}</span>
                <Download size={16} className="text-ink-300 group-hover:text-orange" />
              </button>
            ))}
          </Marquee>
        </div>
      </section>

      <section id="evaluaciones" className="scroll-mt-24 bg-white py-24">
        <div className="container-page">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">Evaluaciones</span>
            <h2 className="mt-4 font-display text-display-md text-ink-900">Evaluaciones externas</h2>
          </Reveal>
          <div className="mt-12 border-t border-ink-200">
            {evaluations.map((e, i) => (
              <Reveal key={`${e.name}-${e.year}`} delay={Math.min(i * 0.04, 0.4)}>
                <DocRow {...e} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="financiadores" className="scroll-mt-24 bg-ink-50 py-24">
        <div className="container-page">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">+40 instituciones</span>
            <h2 className="mt-4 font-display text-display-md text-ink-900">Financiadores</h2>
          </Reveal>
        </div>
        <div className="mt-12 border-y border-ink-200 py-8">
          <Marquee pauseOnHover={false}>
            {funders.map((f) => (
              <div
                key={f.name}
                className="flex h-16 w-40 shrink-0 items-center justify-center grayscale transition-all duration-500 hover:grayscale-0"
              >
                <img src={funderImages[f.image]} alt={f.name} className="max-h-12 max-w-full object-contain" />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section id="privacidad" className="scroll-mt-24 bg-white py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange">
              <ShieldCheck size={14} /> Privacidad
            </span>
            <h2 className="mt-4 font-display text-display-md text-ink-900">Protección de datos</h2>
            <p className="mt-5 text-ink-600">
              ONGD Cives Mundi trata los datos personales conforme a la normativa vigente de protección de datos. Para
              consultar la política de privacidad completa o ejercer tus derechos, escribe a{' '}
              <a href="mailto:civesmundi@civesmundi.es" className="font-medium text-orange">
                civesmundi@civesmundi.es
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 flex items-center gap-3 border-t border-ink-100 pt-6 text-sm text-ink-600">
            <Landmark size={18} className="shrink-0 text-orange" />
            ONGD Cives Mundi · Eduardo Saavedra 38, 42004 Soria (España) · +34 975 23 31 69
          </Reveal>
        </div>
      </section>
    </>
  )
}

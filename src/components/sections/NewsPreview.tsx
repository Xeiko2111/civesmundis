import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { news } from '@/data/news'
import { formatDateShort } from '@/lib/format'
import { Reveal } from '@/components/ui/Reveal'
import { useLanguage } from '@/i18n/LanguageContext'

/**
 * Listado editorial de actualidad: filas tipográficas a ancho completo,
 * sin tarjetas ni miniaturas. Cives Mundi no documenta fotografías propias
 * por noticia en la auditoría de contenido, así que en vez de inventar
 * imágenes el foco recae por completo en la tipografía y el ritmo de scroll.
 */
export function NewsPreview() {
  const { t } = useLanguage()

  return (
    <section className="bg-ink-50 py-28 md:py-40">
      <div className="container-page">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 border-b border-ink-200 pb-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">{t.news.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-display-md text-ink-900">{t.news.title}</h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/actualidad"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-orange"
            >
              {t.news.cta}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div>
          {news.slice(0, 5).map((item) => (
            <Link
              key={item.slug}
              to={`/actualidad/${item.slug}`}
              className="group flex flex-col gap-2 border-b border-ink-200 py-7 md:flex-row md:items-center md:gap-8"
              data-cursor="LEER"
            >
              <span className="w-40 shrink-0 text-xs font-semibold uppercase tracking-widest text-ink-400">
                {item.category} · {formatDateShort(item.date)}
              </span>
              <span className="flex-1 font-display text-2xl text-ink-900 transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange md:text-3xl">
                {item.title}
              </span>
              <span className="hidden max-w-sm text-sm text-ink-500 lg:block">{item.excerpt}</span>
              <ArrowUpRight
                size={20}
                className="shrink-0 text-ink-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

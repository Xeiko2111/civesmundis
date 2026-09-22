import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/sections/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { news, newsCategories } from '@/data/news'
import { events } from '@/data/events'
import { formatDate, formatDateShort } from '@/lib/format'
import { heroImages } from '@/lib/images'
import { useLanguage } from '@/i18n/LanguageContext'

export default function ActualidadPage() {
  const [tab, setTab] = useState<'noticias' | 'eventos'>('noticias')
  const [category, setCategory] = useState('todas')
  const { t } = useLanguage()

  const filteredNews = news.filter((n) => category === 'todas' || n.category === category)

  return (
    <>
      <Seo title="Actualidad — Cives Mundi" description="Noticias y eventos de Cives Mundi: cooperación, repoblación e innovación social." />
      <PageHero
        eyebrow={t.pages.actualidad.eyebrow}
        title={t.pages.actualidad.title}
        description={t.pages.actualidad.description}
        image={heroImages.fondoMemorias}
      />

      <section className="bg-white pt-16">
        <div className="container-page flex gap-10 border-b border-ink-200">
          {(['noticias', 'eventos'] as const).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setTab(tabKey)}
              className={`relative pb-5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                tab === tabKey ? 'text-ink-900' : 'text-ink-400 hover:text-ink-600'
              }`}
            >
              {tabKey === 'noticias' ? t.nav.actualidadSub1 : t.nav.actualidadSub2}
              {tab === tabKey && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-orange" />}
            </button>
          ))}
        </div>
      </section>

      {tab === 'noticias' ? (
        <section className="bg-white py-16 pb-28">
          <div className="container-page">
            <Reveal className="mb-4 flex flex-wrap gap-x-6 gap-y-3 border-b border-ink-100 pb-8 text-sm">
              <button
                onClick={() => setCategory('todas')}
                className={`font-semibold uppercase tracking-wider transition-colors ${
                  category === 'todas' ? 'text-orange' : 'text-ink-400 hover:text-ink-800'
                }`}
              >
                Todas
              </button>
              {newsCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`font-semibold uppercase tracking-wider transition-colors ${
                    category === c ? 'text-orange' : 'text-ink-400 hover:text-ink-800'
                  }`}
                >
                  {c}
                </button>
              ))}
            </Reveal>

            <div>
              {filteredNews.map((item, i) => (
                <Reveal key={item.slug} delay={Math.min(i * 0.03, 0.3)}>
                  <Link
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
                </Reveal>
              ))}
              {filteredNews.length === 0 && <p className="py-12 text-center text-ink-400">No hay noticias en esta categoría.</p>}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white py-16 pb-28">
          <div className="container-page">
            {events.map((event, i) => (
              <Reveal key={event.slug} delay={0.1 * i} className="border-b border-ink-200 py-10 first:pt-0">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-orange">
                      {event.status === 'realizado' ? 'Realizado' : 'Próximo'}
                    </span>
                    <h3 className="mt-2 font-display text-3xl text-ink-900 md:text-4xl">{event.name}</h3>
                    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-500">
                      <span>
                        {formatDate(event.date)}
                        {event.endDate ? ` — ${formatDate(event.endDate)}` : ''}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} /> {event.location}
                      </span>
                    </p>
                    <p className="mt-5 max-w-xl text-ink-600">{event.description}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-orange">
                    More info <ArrowUpRight size={14} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Reveal } from '@/components/ui/Reveal'
import { SplitText } from '@/components/ui/SplitText'
import { news } from '@/data/news'
import { formatDate } from '@/lib/format'
import NotFoundPage from './NotFoundPage'

export default function NewsDetailPage() {
  const { slug } = useParams()
  const item = news.find((n) => n.slug === slug)

  if (!item) return <NotFoundPage />

  return (
    <>
      <Seo title={`${item.title} — Cives Mundi`} description={item.excerpt} />
      <article className="bg-white pt-40">
        <div className="container-page max-w-3xl">
          <Reveal>
            <Link to="/actualidad" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-orange">
              <ArrowLeft size={16} /> Volver a actualidad
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="mt-10 block text-xs font-semibold uppercase tracking-widest text-orange">
              {item.category} · {formatDate(item.date)}
            </span>
          </Reveal>
          <SplitText as="h1" text={item.title} className="mt-5 block font-display text-4xl leading-[1.05] text-ink-900 md:text-6xl" />
          {item.author && (
            <Reveal delay={0.3}>
              <p className="mt-6 text-sm text-ink-400">Por {item.author}</p>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.35} className="container-page mt-16 max-w-3xl border-t border-ink-100 pb-32 pt-12">
          <p className="text-xl leading-relaxed text-ink-700">{item.excerpt}</p>
          <p className="mt-6 leading-relaxed text-ink-600">
            Este artículo forma parte del archivo editorial de Cives Mundi. Para conocer el contenido íntegro y
            actualizado, consulta la publicación original en la web de la organización.
          </p>
        </Reveal>
      </article>
    </>
  )
}

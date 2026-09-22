import { Link } from 'react-router-dom'
import { funders } from '@/data/funders'
import { funderImages } from '@/lib/images'
import { Marquee } from '@/components/ui/Marquee'
import { Reveal } from '@/components/ui/Reveal'
import { useLanguage } from '@/i18n/LanguageContext'

export function FundersMarquee() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-20">
      <div className="container-page mb-10 flex items-end justify-between border-t border-ink-100 pt-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-400">{t.funders.eyebrow}</span>
          <p className="mt-3 font-display text-2xl text-ink-900">{t.funders.title}</p>
        </Reveal>
        <Link to="/transparencia#financiadores" className="hidden shrink-0 text-sm font-semibold text-ink-900 hover:text-orange md:block">
          {t.funders.cta}
        </Link>
      </div>

      <Marquee pauseOnHover={false}>
        {funders.map((f) => (
          <div
            key={f.name}
            className="flex h-16 w-40 shrink-0 items-center justify-center grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
          >
            <img src={funderImages[f.image]} alt={f.name} className="max-h-12 max-w-full object-contain" />
          </div>
        ))}
      </Marquee>
    </section>
  )
}

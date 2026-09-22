import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SplitText } from '@/components/ui/SplitText'
import { FacebookIcon, TwitterIcon } from '@/components/ui/SocialIcons'
import { useLanguage } from '@/i18n/LanguageContext'

/**
 * Cierre cinematográfico a pantalla casi completa: tipografía protagonista
 * + un único gesto de cierre, en vez del footer clásico en columnas de
 * bloques con blobs de color.
 */
export function Footer() {
  const { t } = useLanguage()

  const columns = [
    {
      title: t.footer.navTitle,
      links: [
        { label: t.nav.cooperacion, to: '/cooperacion' },
        { label: t.nav.repoblacion, to: '/repoblacion-e-innovacion' },
        { label: t.nav.actualidad, to: '/actualidad' },
        { label: t.nav.transparencia, to: '/transparencia' },
        { label: t.nav.nosotrxs, to: '/nosotrxs' },
      ],
    },
    {
      title: t.footer.transparencyTitle,
      links: [
        { label: t.nav.transparenciaSub1, to: '/transparencia#memorias' },
        { label: t.nav.transparenciaSub2, to: '/transparencia#auditorias' },
        { label: t.nav.transparenciaSub3, to: '/transparencia#evaluaciones' },
        { label: t.nav.transparenciaSub4, to: '/transparencia#financiadores' },
        { label: t.footer.privacidad, to: '/privacidad' },
      ],
    },
  ]

  return (
    <footer className="relative flex min-h-[90vh] flex-col justify-between overflow-hidden bg-ink-950 text-ink-300">
      <div className="container-page flex flex-1 flex-col justify-center pt-28">
        <SplitText
          as="p"
          className="mt-4 max-w-4xl font-display text-[12vw] leading-[0.95] text-white md:text-[7vw]"
          text={t.footer.title}
        />
        <Reveal delay={0.3} className="mt-10 max-w-xl text-ink-400">
          <p>{t.footer.body}</p>
        </Reveal>
        <Reveal delay={0.4} className="mt-10">
          <Link
            to="/contacto"
            data-cursor="ESCRIBIR"
            className="group inline-flex items-center gap-3 text-lg font-semibold text-white"
          >
            <span className="border-b border-white/30 pb-1 transition-colors group-hover:border-orange group-hover:text-orange">
              {t.footer.cta}
            </span>
            <ArrowUpRight size={22} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </Reveal>
      </div>

      <div className="container-page relative border-t border-white/10">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-lg uppercase tracking-widest text-white">Cives Mundi</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              ONGD con sede en Soria que desde 1987 trabaja en cooperación internacional al desarrollo, repoblación
              de la España rural e innovación social frente al reto demográfico.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://facebook.com/civesmundi"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink-300 transition-colors hover:border-orange hover:text-orange"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://twitter.com/ongcivesmundi"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink-300 transition-colors hover:border-orange hover:text-orange"
              >
                <TwitterIcon size={16} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-500">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-ink-300 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 py-8 text-sm text-ink-500 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} /> Eduardo Saavedra 38, 42004 Soria
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={14} /> +34 975 23 31 69
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail size={14} /> civesmundi@civesmundi.es
            </span>
          </div>
          <p>© ONGD Cives Mundi {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

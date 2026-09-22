import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { heroImages } from '@/lib/images'
import { useLanguage } from '@/i18n/LanguageContext'

/**
 * Composición asimétrica de "broken grid": el texto ocupa el ancho completo
 * y la imagen flota superpuesta, desplazada del eje, en vez de vivir dentro
 * de una tarjeta con esquinas redondeadas.
 */
export function CausesCTA() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-40">
      <div className="container-page relative">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">{t.causes.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-display-md text-ink-900">{t.causes.title}</h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-16 lg:grid-cols-12">
          <StaggerGroup className="flex flex-col lg:col-span-7">
            {t.causes.list.map((cause, i) => (
              <StaggerItem key={cause}>
                <div className="flex items-baseline gap-6 border-b border-ink-100 py-6">
                  <span className="font-display text-sm text-orange">0{i + 1}</span>
                  <p className="text-lg text-ink-800 md:text-xl">{cause}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="relative mt-16 lg:col-span-5 lg:mt-0">
            <Reveal delay={0.2} className="relative ml-auto aspect-[3/4] w-full max-w-sm overflow-hidden lg:-translate-y-10">
              <img
                src={heroImages.socios}
                alt="Comunidad de personas socias y voluntarias de Cives Mundi"
                className="h-full w-full object-cover"
              />
            </Reveal>
            <Reveal delay={0.4} className="mt-10 flex flex-wrap gap-4 lg:justify-end">
              <MagneticButton to="/contacto">{t.causes.cta1}</MagneticButton>
              <MagneticButton to="/contacto" variant="outline">
                {t.causes.cta2}
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

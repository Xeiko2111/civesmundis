import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/sections/PageHero'
import { RuralAtlas } from '@/components/sections/RuralAtlas'
import { heroImages } from '@/lib/images'
import { useLanguage } from '@/i18n/LanguageContext'

export default function RepoblacionInnovacionPage() {
  const { t } = useLanguage()

  return (
    <>
      <Seo
        title="Repoblación e Innovación Social — Cives Mundi"
        description="En la vanguardia de la repoblación e innovación social para el reto demográfico: El Hueco, Presura, RuralCar y otras iniciativas."
      />
      <PageHero
        eyebrow={t.pages.repoblacion.eyebrow}
        title={t.pages.repoblacion.title}
        description={t.pages.repoblacion.description}
        image={heroImages.fondoHueco}
      />

      <RuralAtlas />
    </>
  )
}

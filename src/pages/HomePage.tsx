import { Hero } from '@/components/sections/Hero'
import { AboutEditorial } from '@/components/sections/AboutEditorial'
import { StickyStats } from '@/components/sections/StickyStats'
import { AccordionGallery } from '@/components/sections/AccordionGallery'
import { ProjectsShowcase } from '@/components/sections/ProjectsShowcase'
import { CausesCTA } from '@/components/sections/CausesCTA'
import { NewsPreview } from '@/components/sections/NewsPreview'
import { GlobalPresence } from '@/components/sections/GlobalPresence'
import { WorldMapExplorer } from '@/components/sections/WorldMapExplorer'
import { FundersMarquee } from '@/components/sections/FundersMarquee'
import { Seo } from '@/components/Seo'

export default function HomePage() {
  return (
    <>
      <Seo
        title="Cives Mundi — Ciudadanos del mundo"
        description="ONGD con sede en Soria. Cooperación internacional, repoblación de la España rural e innovación social frente al reto demográfico desde 1987."
      />
      <Hero />
      <AboutEditorial />
      <StickyStats />
      <AccordionGallery />
      <ProjectsShowcase />
      <CausesCTA />
      <NewsPreview />
      <GlobalPresence />
      <WorldMapExplorer />
      <FundersMarquee />
    </>
  )
}

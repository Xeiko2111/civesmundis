import type { ReactNode } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { PageTransition } from '@/components/layout/PageTransition'
import HomePage from '@/pages/HomePage'
import CooperacionPage from '@/pages/CooperacionPage'
import RepoblacionInnovacionPage from '@/pages/RepoblacionInnovacionPage'
import ActualidadPage from '@/pages/ActualidadPage'
import NewsDetailPage from '@/pages/NewsDetailPage'
import ProjectDetailPage from '@/pages/ProjectDetailPage'
import TransparenciaPage from '@/pages/TransparenciaPage'
import NosotrxsPage from '@/pages/NosotrxsPage'
import ContactoPage from '@/pages/ContactoPage'
import PrivacidadPage from '@/pages/PrivacidadPage'
import NotFoundPage from '@/pages/NotFoundPage'

export default function App() {
  const location = useLocation()

  return (
    <Routes location={location}>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <AnimatePresence mode="wait">
              <PageTransition key={location.pathname}>
                <HomePage />
              </PageTransition>
            </AnimatePresence>
          }
        />
        <Route path="/cooperacion" element={<Wrapped>{<CooperacionPage />}</Wrapped>} />
        <Route path="/repoblacion-e-innovacion" element={<Wrapped>{<RepoblacionInnovacionPage />}</Wrapped>} />
        <Route path="/actualidad" element={<Wrapped>{<ActualidadPage />}</Wrapped>} />
        <Route path="/actualidad/:slug" element={<Wrapped>{<NewsDetailPage />}</Wrapped>} />
        <Route path="/proyectos/:slug" element={<Wrapped>{<ProjectDetailPage />}</Wrapped>} />
        <Route path="/transparencia" element={<Wrapped>{<TransparenciaPage />}</Wrapped>} />
        <Route path="/nosotrxs" element={<Wrapped>{<NosotrxsPage />}</Wrapped>} />
        <Route path="/contacto" element={<Wrapped>{<ContactoPage />}</Wrapped>} />
        <Route path="/privacidad" element={<Wrapped>{<PrivacidadPage />}</Wrapped>} />
        <Route path="*" element={<Wrapped>{<NotFoundPage />}</Wrapped>} />
      </Route>
    </Routes>
  )
}

function Wrapped({ children }: { children: ReactNode }) {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>{children}</PageTransition>
    </AnimatePresence>
  )
}

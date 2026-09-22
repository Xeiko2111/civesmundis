import { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollProgress } from './ScrollProgress'
import { LoadingScreen } from '@/components/ui/LoadingScreen'

export function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return (
    <div className="relative min-h-screen bg-white">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

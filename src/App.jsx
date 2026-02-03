import React, { useEffect, useState } from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import TrustBar from './pages/TrustBar'
import ProblemSolution from './pages/ProblemSolution'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import FinalCta from './pages/FinalCta'
import Footer from './pages/Footer'
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  const [activeSection, setActiveSection] = useState('bosh-sahifa')

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.1 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]')
    if (!revealElements.length) return

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    revealElements.forEach((el) => revealObserver.observe(el))

    return () => revealObserver.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  )
}

export default App

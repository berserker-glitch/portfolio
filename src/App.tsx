import { useEffect, useLayoutEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'val-gsap-from-window' // Will import proper gsap below
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import BootSequence from './components/BootSequence'
import CommandPalette from './components/CommandPalette'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SkillsConstellation from './components/SkillsConstellation'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  // Setup Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <div className="min-h-screen w-full bg-background text-foreground relative selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <BootSequence />
      <CommandPalette />

      <main className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <Navbar />
        <Hero />
        <Projects />
        <SkillsConstellation />
      </main>

      <Footer />
    </div>
  )
}

export default App

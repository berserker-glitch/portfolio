import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'

import CommandPalette from './components/CommandPalette'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SkillsConstellation from './components/SkillsConstellation'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const cursorRef = useRef<HTMLDivElement>(null)

  // Setup Lenis Smooth Scrolling & Custom Global Cursor
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Custom Cursor tracking
    const cursor = cursorRef.current
    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('magnetic-target')
      ) {
        if (cursor) cursor.classList.add('cursor-hover')
      } else {
        if (cursor) cursor.classList.remove('cursor-hover')
      }
    }

    // Magnetic buttons physics
    const magneticElements = document.querySelectorAll('.magnetic-target')

    // Add magnetic event listeners
    const addMagneticEvents = () => {
      magneticElements.forEach((el) => {
        const hE = el as HTMLElement
        const hEWidth = hE.getBoundingClientRect().width
        const hEHeight = hE.getBoundingClientRect().height

        hE.addEventListener('mousemove', (e) => {
          const rect = hE.getBoundingClientRect()
          const x = e.clientX - rect.left - hEWidth / 2
          const y = e.clientY - rect.top - hEHeight / 2

          gsap.to(hE, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.5,
            ease: "power2.out"
          })
        })

        hE.addEventListener('mouseleave', () => {
          gsap.to(hE, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
          })
        })
      })
    }

    // Add magnetic events on a slight delay to ensure DOM is ready
    setTimeout(addMagneticEvents, 1000)

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)

    const renderCursor = () => {
      // Lerp for smooth cursor trailing
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15

      if (cursor && (Math.abs(cursorX - mouseX) > 0.1 || Math.abs(cursorY - mouseY) > 0.1)) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`
      }
      requestAnimationFrame(renderCursor)
    }

    const cursorAnimId = requestAnimationFrame(renderCursor)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(cursorAnimId)
    }
  }, [])

  return (
    <div className="min-h-screen w-full bg-background text-foreground relative selection:bg-primary/30 selection:text-primary overflow-x-hidden cursor-none">

      {/* Global Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-primary mix-blend-difference rounded-full pointer-events-none z-[999] opacity-0 md:opacity-100 transition-[width,height,background-color] duration-200 [&.cursor-hover]:w-12 [&.cursor-hover]:h-12 [&.cursor-hover]:bg-white"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
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

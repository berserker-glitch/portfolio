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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    const lenis = prefersReducedMotion
      ? null
      : new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      })

    const onLenisFrame = (time: number) => {
      lenis?.raf(time * 1000)
    }

    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add(onLenisFrame)
    }

    const cursor = cursorRef.current
    let pointerX = 0
    let pointerY = 0
    let cursorX = 0
    let cursorY = 0
    let cursorFrame: number | null = null

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX
      pointerY = event.clientY
    }

    const onPointerOver = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return

      const isInteractive = Boolean(
        event.target.closest('a, button, [role="button"], .magnetic-target'),
      )

      cursor?.classList.toggle('cursor-hover', isInteractive)
    }

    const renderCursor = () => {
      cursorX += (pointerX - cursorX) * 0.15
      cursorY += (pointerY - cursorY) * 0.15

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`
      }

      cursorFrame = requestAnimationFrame(renderCursor)
    }

    if (cursor && hasFinePointer && !prefersReducedMotion) {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      window.addEventListener('pointerover', onPointerOver, { passive: true })
      cursorFrame = requestAnimationFrame(renderCursor)
    }

    const magneticCleanups: Array<() => void> = []

    if (hasFinePointer && !prefersReducedMotion) {
      document.querySelectorAll<HTMLElement>('.magnetic-target').forEach((element) => {
        const onMagneticMove = (event: MouseEvent) => {
          const rect = element.getBoundingClientRect()
          const x = event.clientX - rect.left - rect.width / 2
          const y = event.clientY - rect.top - rect.height / 2

          gsap.to(element, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.5,
            ease: 'power2.out',
          })
        }

        const onMagneticLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.3)',
          })
        }

        element.addEventListener('mousemove', onMagneticMove)
        element.addEventListener('mouseleave', onMagneticLeave)

        magneticCleanups.push(() => {
          element.removeEventListener('mousemove', onMagneticMove)
          element.removeEventListener('mouseleave', onMagneticLeave)
          gsap.killTweensOf(element)
        })
      })
    }

    return () => {
      if (lenis) {
        gsap.ticker.remove(onLenisFrame)
        lenis.destroy()
      }

      if (cursorFrame !== null) cancelAnimationFrame(cursorFrame)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerover', onPointerOver)
      magneticCleanups.forEach((cleanup) => cleanup())
    }
  }, [])

  return (
    <div className="custom-cursor-page relative min-h-screen w-full overflow-x-hidden bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <div
        ref={cursorRef}
        aria-hidden="true"
        className="custom-cursor fixed left-0 top-0 z-[999] h-4 w-4 rounded-full bg-primary mix-blend-difference pointer-events-none transition-[width,height,background-color] duration-200 [&.cursor-hover]:h-12 [&.cursor-hover]:w-12 [&.cursor-hover]:bg-white"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <CommandPalette />

      <main id="main-content" className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
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

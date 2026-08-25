import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

            if (prefersReducedMotion) {
                gsap.set('.hero-typewriter', { opacity: 1, y: 0 })
                return
            }

            gsap.from('.hero-reveal', {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power4.out',
                delay: 0.2,
            })

            gsap.fromTo(
                '.hero-typewriter',
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.7 },
            )
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="hero"
            ref={container}
            aria-labelledby="hero-title"
            className="relative flex min-h-[100dvh] flex-col justify-end pb-24 pt-40 md:pb-32"
        >
            <div className="flex flex-col gap-5">
                <p className="hero-reveal font-mono text-sm tracking-[0.18em] text-primary md:text-base">
                    Full-stack developer · Morocco / remote
                </p>

                <div className="overflow-hidden">
                    <h1
                        id="hero-title"
                        className="hero-reveal text-balance font-sans text-6xl font-bold leading-[0.85] tracking-tighter text-foreground md:text-8xl lg:text-[10rem]"
                    >
                        Yasser <br />
                        Mbarek
                    </h1>
                </div>

                <div className="mt-4 overflow-hidden pl-1 md:mt-8 md:pl-4">
                    <h2 className="hero-reveal text-balance w-full font-serif text-3xl italic leading-none text-muted-foreground md:w-3/4 md:text-5xl lg:text-7xl">
                        Full-stack products that hold up in production.
                    </h2>
                </div>

                <div className="hero-typewriter mt-10 max-w-2xl opacity-0 md:mt-16">
                    <p className="max-w-[42rem] text-base leading-relaxed text-muted-foreground md:text-lg">
                        I design and build useful web products from the first screen to the systems behind it, with care for speed, clarity, and the details people notice.
                    </p>
                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm">
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
                        >
                            See selected work
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                        <a
                            href="mailto:yassermbarek25@gmail.com"
                            className="text-muted-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:text-foreground"
                        >
                            Start a conversation
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute right-0 top-1/2 hidden h-1/2 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-primary/50 to-transparent lg:block" />
            <a
                href="#projects"
                className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
                <span>Scroll to explore</span>
                <span aria-hidden="true" className="h-12 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
            </a>
        </section>
    )
}

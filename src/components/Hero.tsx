import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Terminal } from 'lucide-react'

export default function Hero() {
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger up the main text after a slight delay (waiting for boot sequence)
            gsap.from('.hero-reveal', {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power4.out',
                delay: 2.2, // Wait for boot sequence
            })

            // Typewriter effect for the subline
            const subline = document.querySelector('.hero-typewriter')
            if (subline) {
                const text = subline.getAttribute('data-text') || ''
                subline.innerHTML = ''

                let i = 0
                const typeWriter = () => {
                    if (i < text.length) {
                        subline.innerHTML += text.charAt(i)
                        i++
                        setTimeout(typeWriter, 50)
                    }
                }

                setTimeout(typeWriter, 3000) // Start typing after reveal
            }
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={container}
            className="relative min-h-[100dvh] flex flex-col justify-end pb-24 md:pb-32 pt-40"
        >
            <div className="flex flex-col gap-4">
                {/* Massive Typography Name */}
                <div className="overflow-hidden">
                    <h1 className="hero-reveal text-6xl md:text-8xl lg:text-[10rem] font-sans font-bold tracking-tighter uppercase leading-[0.85] text-foreground mix-blend-difference">
                        Yasser <br />
                        Mbarek
                    </h1>
                </div>

                {/* Serif Drama Title */}
                <div className="overflow-hidden mt-4 md:mt-8 pl-1 md:pl-4">
                    <h2 className="hero-reveal text-3xl md:text-5xl lg:text-7xl font-serif italic text-muted-foreground w-full md:w-3/4 leading-none">
                        shipping high-performance architectures.
                    </h2>
                </div>

                {/* Terminal Typewriter Identity */}
                <div className="overflow-hidden mt-12 md:mt-24 flex items-center gap-4 text-xs md:text-sm font-mono text-primary">
                    <div className="hero-reveal flex items-center gap-2">
                        <Terminal className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        <span className="text-muted-foreground">~/identity {'>'}</span>
                        <span
                            className="hero-typewriter text-glow"
                            data-text="full stack dev - making stuff that actually works"
                        ></span>
                        <span className="inline-block w-2 h-4 md:h-5 bg-primary animate-[pulse_1s_ease-in-out_infinite] ml-1" />
                    </div>
                </div>
            </div>

            {/* Decorative Matrix Lines */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />
            <div className="absolute left-1/2 bottom-8 -translate-x-1/2 text-xs font-mono text-muted-foreground flex flex-col items-center gap-2 animate-pulse">
                <span>[SCROLL_TO_INITIATE]</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
            </div>
        </section>
    )
}

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function BootSequence() {
    const containerRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if (isComplete) return

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    setIsComplete(true)
                }
            })

            // Simulate terminal lines appearing
            tl.to('.boot-line', {
                opacity: 1,
                y: 0,
                duration: 0.1,
                stagger: 0.15,
                ease: 'none',
            })

            // Pause to read "OK"
            tl.to({}, { duration: 0.4 })

            // Wipe up to reveal site
            tl.to(containerRef.current, {
                yPercent: -100,
                duration: 0.8,
                ease: 'power4.inOut',
            })
        }, containerRef)

        return () => ctx.revert()
    }, [isComplete])

    if (isComplete) return null

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex flex-col justify-end bg-background p-6 md:p-12 font-mono text-xs md:text-sm text-primary tracking-widest uppercase overflow-hidden"
        >
            <div ref={textRef} className="max-w-3xl">
                <div className="boot-line opacity-0 translate-y-2 mb-2 w-fit">
                    <span className="text-muted-foreground mr-4">[SYSTEM]</span>
                    <span>Initializing core modules...</span>
                </div>
                <div className="boot-line opacity-0 translate-y-2 mb-2 w-fit">
                    <span className="text-muted-foreground mr-4">[MEMORY]</span>
                    <span>Allocating buffers... OK</span>
                </div>
                <div className="boot-line opacity-0 translate-y-2 mb-2 w-fit">
                    <span className="text-muted-foreground mr-4">[NETWORK]</span>
                    <span>Establishing secure connection... OK</span>
                </div>
                <div className="boot-line opacity-0 translate-y-2 mb-2 w-fit">
                    <span className="text-muted-foreground mr-4">[AUTH]</span>
                    <span>Verifying credentials... ACCESS GRANTED</span>
                </div>
                <div className="boot-line opacity-0 translate-y-2 mb-8 w-fit text-foreground/80">
                    <span className="text-muted-foreground mr-4">[OK]</span>
                    <span>Loading YASSER_MBAREK_PORTFOLIO.exe</span>
                </div>
            </div>

            {/* Decorative loading bar */}
            <div className="boot-line opacity-0 translate-y-2 w-full h-[2px] bg-muted relative mt-4">
                <div className="absolute top-0 left-0 h-full bg-primary animate-[pulse_1s_ease-in-out_infinite] w-[30%]" />
            </div>
        </div>
    )
}

import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Top scroll progress bar */}
            <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-white/5">
                <div
                    className="h-full bg-primary transition-all duration-300 ease-out origin-left"
                    style={{
                        width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
                    }}
                />
            </div>

            <nav className={cn(
                "fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 rounded-full px-6 py-3 flex items-center gap-8 border font-mono text-sm",
                scrolled
                    ? "bg-muted/80 backdrop-blur-md border-white/10 shadow-2xl"
                    : "bg-transparent border-transparent"
            )}>
                {/* Monogram */}
                <div className="flex items-center gap-2 font-bold text-foreground">
                    <span className="hidden sm:inline-block tracking-tighter">Y.MBRK</span>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-6 text-muted-foreground">
                    <a href="#projects" className="hover:text-primary transition-colors">/work</a>
                    <a href="#skills" className="hover:text-primary transition-colors">/stack</a>
                    <a href="mailto:someone@example.com" className="hover:text-primary transition-colors">/contact</a>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded bg-white/5"
                        onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                    >
                        <span className="opacity-50">⌘</span>K
                    </button>

                    <a
                        href="#footer"
                        className="relative overflow-hidden bg-primary text-background font-bold px-4 py-1.5 rounded-full hover:scale-105 active:scale-95 transition-all magnetic-target inline-block"
                    >
                        Hire me
                    </a>
                </div>
            </nav>
        </>
    )
}

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
                "fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 rounded-full px-6 py-3 flex items-center gap-8 md:gap-12 border font-mono text-sm",
                scrolled
                    ? "bg-background/60 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] scale-100"
                    : "bg-transparent border-transparent scale-105"
            )}>
                {/* Monogram */}
                <div className="flex items-center gap-2 font-bold text-foreground hover:text-primary transition-colors cursor-pointer group">
                    <span className="hidden sm:inline-block tracking-tighter">Y.MBRK</span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-muted-foreground">
                    <a href="#projects" className="relative group transition-colors hover:text-foreground">
                        /work
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                    <a href="#skills" className="relative group transition-colors hover:text-foreground">
                        /stack
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                    <a href="mailto:yassermbarek25@gmail.com" className="relative group transition-colors hover:text-foreground">
                        /contact
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md bg-white/[0.03] border border-white/5 hover:bg-white/[0.08]"
                        onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                    >
                        <span className="opacity-50 font-sans">⌘</span>K
                    </button>

                    <a
                        href="#footer"
                        className="relative overflow-hidden bg-foreground text-background font-bold px-5 py-2 rounded-full hover:scale-105 active:scale-95 transition-all magnetic-target inline-block group"
                    >
                        <span className="relative z-10 group-hover:text-background transition-colors duration-300">Hire me</span>
                        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </a>
                </div>
            </nav>
        </>
    )
}

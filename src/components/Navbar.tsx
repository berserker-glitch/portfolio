import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

const navigationItems = [
    { href: '#projects', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#footer', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)
    const [shortcut] = useState(() => (
        typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)
            ? '⌘ K'
            : 'Ctrl K'
    ))

    useEffect(() => {
        const updateScrollState = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = scrollableHeight > 0
                ? (window.scrollY / scrollableHeight) * 100
                : 0

            setScrolled(window.scrollY > 50)
            setScrollProgress(Math.min(100, Math.max(0, progress)))
        }

        let frame: number | null = null
        const handleScroll = () => {
            if (frame !== null) return

            frame = requestAnimationFrame(() => {
                updateScrollState()
                frame = null
            })
        }

        updateScrollState()
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
            if (frame !== null) cancelAnimationFrame(frame)
        }
    }, [])

    const closeMenu = () => setMenuOpen(false)

    const openCommandPalette = () => {
        window.dispatchEvent(new Event('open-command-palette'))
    }

    return (
        <>
            <div aria-hidden="true" className="fixed left-0 right-0 top-0 z-50 h-px bg-white/10">
                <div
                    className="h-full origin-left bg-primary transition-[width] duration-150 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <nav
                aria-label="Primary navigation"
                className={cn(
                    'fixed left-4 right-4 top-4 z-40 flex flex-wrap items-center justify-between gap-x-6 border px-4 py-3 font-mono text-sm transition-[background-color,box-shadow,transform,border-radius] duration-500 md:left-1/2 md:right-auto md:w-auto md:-translate-x-1/2 md:justify-normal md:px-6',
                    menuOpen
                        ? 'rounded-2xl border-white/10 bg-background/95 shadow-[0_8px_32px_rgba(7,12,12,0.45)] backdrop-blur-xl'
                        : scrolled
                            ? 'rounded-full border-white/10 bg-background/75 shadow-[0_8px_32px_rgba(7,12,12,0.45)] backdrop-blur-xl'
                            : 'rounded-full border-transparent bg-transparent md:scale-105',
                )}
            >
                <a
                    href="#main-content"
                    onClick={closeMenu}
                    className="group flex items-center gap-2 font-bold tracking-tight text-foreground transition-colors hover:text-primary"
                    aria-label="Yasser Mbarek, home"
                >
                    <span>Y.MBRK</span>
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </a>

                <div className="hidden items-center gap-8 text-muted-foreground md:flex">
                    {navigationItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="group relative transition-colors hover:text-foreground"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        aria-label="Open command palette"
                        className="hidden items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-white/[0.08] hover:text-foreground sm:flex"
                        onClick={openCommandPalette}
                    >
                        <span className="opacity-60">{shortcut}</span>
                    </button>

                    <a
                        href="#footer"
                        onClick={closeMenu}
                        className="magnetic-target inline-flex items-center rounded-full bg-foreground px-4 py-2 font-bold text-background transition-all hover:scale-105 active:scale-95 sm:px-5"
                    >
                        <span>Let's talk</span>
                    </a>

                    <button
                        type="button"
                        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors hover:bg-white/10 md:hidden"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>

                <div
                    id="mobile-navigation"
                    className={cn(
                        'basis-full overflow-hidden transition-[max-height,opacity,padding] duration-300 md:hidden',
                        menuOpen ? 'max-h-60 border-t border-white/10 pt-3 opacity-100' : 'pointer-events-none max-h-0 opacity-0',
                    )}
                >
                    <div className="flex flex-col gap-1">
                        {navigationItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                                className="rounded-lg px-3 py-2.5 text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )
}

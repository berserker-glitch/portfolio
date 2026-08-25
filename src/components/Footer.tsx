import { ArrowUpRight, Github, Mail } from 'lucide-react'

const githubUrl = 'https://github.com/berserker-glitch'
const emailUrl = 'mailto:yassermbarek25@gmail.com'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer
            id="footer"
            aria-labelledby="footer-title"
            className="relative mt-32 overflow-hidden rounded-t-[3rem] border-t border-white/10 bg-background pb-12 pt-32"
        >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center px-6 md:px-12">
                <div className="mx-auto mb-24 max-w-4xl text-center">
                    <h2 id="footer-title" className="mb-8 text-balance font-sans text-5xl font-bold leading-[0.9] tracking-tighter text-foreground md:text-7xl lg:text-[7rem]">
                        Let's build <br className="hidden md:block" /> something useful.
                    </h2>
                    <a
                        href={emailUrl}
                        className="magnetic-target group relative inline-flex items-center gap-4 bg-primary px-8 py-4 font-mono text-xl font-bold tracking-widest text-background transition-all duration-300 hover:scale-105 md:text-2xl"
                    >
                        Start a project
                        <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        <span className="absolute inset-0 bg-white/20 opacity-0 mix-blend-overlay transition-opacity group-hover:opacity-100" />
                    </a>
                </div>

                <div className="flex w-full flex-col items-center justify-between gap-8 border-t border-white/10 pt-12 font-mono text-sm md:flex-row">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <span className="font-bold tracking-widest text-foreground">YASSER MBAREK</span>
                        <span className="text-xs text-muted-foreground">© {currentYear} · Built with care.</span>
                    </div>

                    <nav aria-label="Footer links" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Github className="h-4 w-4" />
                            GitHub
                        </a>
                        <a
                            href={emailUrl}
                            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Mail className="h-4 w-4" />
                            Email
                        </a>
                        <a
                            href="#main-content"
                            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                        >
                            Back to top <ArrowUpRight className="h-4 w-4 -rotate-45" />
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

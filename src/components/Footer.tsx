import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="relative bg-[#0A0A0C] border-t border-white/5 pt-32 pb-12 mt-32 rounded-t-[3rem] overflow-hidden">
            {/* Decorative Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">

                {/* Massive CTA */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-sans font-bold tracking-tighter uppercase text-foreground leading-[0.9] mb-8">
                        Initiate <br className="hidden md:block" /> Handshake.
                    </h2>
                    <a
                        href="mailto:someone@example.com"
                        className="group relative inline-flex items-center gap-4 bg-primary text-background font-mono font-bold text-xl md:text-2xl px-8 py-4 uppercase tracking-widest hover:scale-105 transition-all duration-300 magnetic-target"
                    >
                        Hire Me
                        <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>

                {/* Links & Status */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/10 font-mono text-sm">

                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-foreground tracking-widest uppercase font-bold">YASSER MBAREK</span>
                        <span className="text-muted-foreground text-xs">© {currentYear} All rights reserved.</span>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:scale-110">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:scale-110">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:scale-110">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:scale-110">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

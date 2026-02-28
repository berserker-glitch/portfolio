import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Server, Layout, Database, Wrench } from 'lucide-react'

const categories = [
    {
        title: 'Frontend Architecture',
        icon: <Layout className="w-5 h-5 text-primary" />,
        description: 'Building interactive, highly responsive client-side applications with modern frameworks.',
        skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Redux', 'GSAP']
    },
    {
        title: 'Backend Systems',
        icon: <Server className="w-5 h-5 text-primary" />,
        description: 'Designing scalable APIs, real-time services, and microservices logic.',
        skills: ['Node.js', 'Express', 'Prisma', 'REST APIs', 'WebSockets', 'GraphQL']
    },
    {
        title: 'Database & Infrastructure',
        icon: <Database className="w-5 h-5 text-primary" />,
        description: 'Managing secure data persistence, caching, and automated deployments.',
        skills: ['MySQL', 'PostgreSQL', 'Redis', 'Docker', 'AWS Core', 'Vercel']
    },
    {
        title: 'Tooling & Engineering',
        icon: <Wrench className="w-5 h-5 text-primary" />,
        description: 'Ensuring strict code quality, robust test coverage, and continuous delivery.',
        skills: ['Git/GitHub', 'CI/CD Pipelines', 'Jest', 'Vite', 'ESLint', 'Shadcn']
    }
]

export default function Stack() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.stack-card', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="stack" ref={containerRef} className="py-24 md:py-32 border-t border-white/5 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="flex flex-col gap-2 mb-16 md:mb-24">
                <h3 className="text-primary font-mono text-sm uppercase tracking-widest">[02_STACK]</h3>
                <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter uppercase text-foreground">
                    Technical Arsenal
                </h2>
                <p className="text-muted-foreground font-serif italic text-lg md:text-xl max-w-2xl mt-4">
                    A structured breakdown of the technologies and frameworks I use to engineer robust, scalable solutions from the database up to the client interface.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {categories.map((category, i) => (
                    <div
                        key={i}
                        className="stack-card group relative flex flex-col p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:bg-white/[0.04] transition-colors duration-500"
                    >
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />

                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="text-2xl font-bold font-sans tracking-tight text-foreground">
                                {category.title}
                            </h3>
                        </div>

                        <p className="text-sm md:text-base text-muted-foreground mb-8">
                            {category.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {category.skills.map((skill, j) => (
                                <span
                                    key={j}
                                    className="text-xs font-mono text-foreground px-3 py-1.5 rounded bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

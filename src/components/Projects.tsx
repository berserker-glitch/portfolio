import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowUpRight } from 'lucide-react'

const projects = [
    {
        title: '9anon AI',
        description: 'A Moroccan legal AI chatbot using RAG over thousands of documents.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: '#',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', // Hacker / Docs vibe
        featured: true
    },
    {
        title: 'MohibiMaths Elements',
        description: 'Customized LMS platform tailored specifically for client curricula.',
        stack: ['React', 'Node.js', 'Prisma', 'Tailwind'],
        link: '#',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop', // Hardware/System vibe
        featured: false
    },
    {
        title: 'El Patio Connect',
        description: 'High-conversion business landing page architecture.',
        stack: ['Vite', 'React', 'Tailwind'],
        link: '#',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', // Globe / Network vibe
        featured: false
    }
]

export default function Projects() {
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>('.project-card')

            cards.forEach((card) => {
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    }
                })

                // Image Parallax
                const img = card.querySelector('.project-img')
                if (img) {
                    gsap.to(img, {
                        yPercent: 15,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                        }
                    })
                }
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <section id="projects" ref={container} className="py-24 md:py-32 border-t border-white/5 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="flex flex-col gap-2 mb-16 md:mb-24">
                <h3 className="text-primary font-mono text-sm uppercase tracking-widest">[01_ARCHIVE]</h3>
                <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter uppercase text-foreground">
                    Selected Systems
                </h2>
            </div>

            <div className="flex flex-col gap-16 md:gap-32">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className={`project-card relative group flex flex-col ${project.featured ? 'md:flex-col' : i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            } gap-8 md:gap-16 items-center`}
                    >
                        {/* Image Block */}
                        <div className={`relative overflow-hidden rounded-[2rem] bg-muted/30 border border-white/5 w-full ${project.featured ? 'h-[50vh] md:h-[70vh]' : 'md:w-3/5 h-[40vh] md:h-[60vh]'
                            }`}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-img absolute inset-[-10%] w-[120%] h-[120%] object-cover object-center translate-y-[-15%] opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                            {project.featured && (
                                <div className="absolute top-6 left-6 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span className="font-mono text-xs text-primary uppercase tracking-widest bg-background/80 px-2 py-1 rounded backdrop-blur-md border border-white/10">
                                        Primary Node
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Content Block */}
                        <div className={`flex flex-col gap-6 w-full ${project.featured ? 'md:w-2/3 mx-auto text-center items-center' : 'md:w-2/5'}`}>
                            <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-lg md:text-xl text-muted-foreground font-serif italic max-w-xl">
                                {project.description}
                            </p>

                            <div className={`flex flex-wrap gap-2 ${project.featured ? 'justify-center' : ''}`}>
                                {project.stack.map((tech, j) => (
                                    <span key={j} className="text-xs font-mono text-muted-foreground px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary transition-colors w-fit group/btn"
                            >
                                [ EXECUTE_PROJECT_LINK ]
                                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowUpRight } from 'lucide-react'

const projects = [
    {
        title: '9anon AI',
        description: 'A Moroccan legal AI chatbot using RAG over thousands of documents.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://github.com',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop', // Law vibe
        featured: false
    },
    {
        title: 'MohibiMaths',
        description: 'An LMS platform made customized for a client.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://github.com',
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop', // Math/Education vibe
        featured: false
    },
    {
        title: 'El Patio',
        description: 'A high-conversion landing page for a business.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://github.com',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', // Business/Office vibe
        featured: false
    },
    {
        title: 'Scolink',
        description: 'A management tool for educational centers to manage their operations.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://github.com',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop', // Study/School vibe
        featured: false
    },
    {
        title: 'Dobe',
        description: 'A place where you can use any AI model in one platform instead of multiple tabs open.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://github.com',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop', // Cyber/AI vibe
        featured: false
    },
    {
        title: 'ArticleMaster',
        description: 'A tool that turns any YouTube video into an SEO-optimized, well-written blog post.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://github.com',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop', // Blog/Writing vibe
        featured: false
    },
    {
        title: 'Le4n',
        description: 'An AI platform that keeps context of uploaded PDFs, made for students to get accurate answers.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://github.com',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop', // Books/Study vibe
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
                        toggleActions: 'play none none reverse'
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
                        <div className={`relative overflow-hidden rounded-2xl bg-muted/30 border border-white/10 w-full group-hover:border-primary/50 transition-colors duration-500 ${project.featured ? 'h-[50vh] md:h-[70vh]' : 'md:w-[55%] h-[40vh] md:h-[50vh]'
                            }`}>
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-img absolute inset-[-10%] w-[120%] h-[120%] object-cover object-center translate-y-[-15%] opacity-50 grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-0" />

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
                        <div className={`flex flex-col gap-6 w-full ${project.featured ? 'md:w-2/3 mx-auto text-center items-center' : 'md:w-[45%]'}`}>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500">
                                    {project.title}
                                </h3>

                                <p className="text-lg md:text-xl text-muted-foreground font-serif italic max-w-xl leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className={`flex flex-wrap gap-2 mt-2 ${project.featured ? 'justify-center' : ''}`}>
                                {project.stack.map((tech, j) => (
                                    <span key={j} className="text-xs font-mono text-foreground px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 group-hover:border-white/20 group-hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-foreground text-background font-bold px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-all magnetic-target group/btn"
                                >
                                    <span className="relative z-10 group-hover/btn:text-primary transition-colors duration-300">View Project</span>
                                    <ArrowUpRight className="relative z-10 w-4 h-4 group-hover/btn:text-primary group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all duration-300" />
                                    <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

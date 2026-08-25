import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowUpRight } from 'lucide-react'

import {
    AnonAIAnimation,
    MohibiMathsAnimation,
    ElPatioAnimation,
    ScolinkAnimation,
    DobeAnimation,
    ArticleMasterAnimation,
    Lea4nAnimation,
} from './ProjectAnimations'

const projects = [
    {
        title: '9anon AI',
        eyebrow: 'Legal research assistant',
        description: 'A Moroccan legal research assistant that retrieves relevant passages from a large document library and turns them into source-backed answers.',
        stack: ['React', 'Node.js', 'Prisma', 'RAG', 'Tailwind'],
        link: 'https://9anonai.com',
        ImageComponent: AnonAIAnimation,
        featured: true,
    },
    {
        title: 'MohibiMaths',
        eyebrow: 'Learning platform',
        description: 'A learning platform built around structured lessons, practice, and a single place for students and teachers to work.',
        stack: ['React', 'Node.js', 'Prisma', 'Tailwind'],
        link: 'https://mohibimaths.com',
        ImageComponent: MohibiMathsAnimation,
        featured: false,
    },
    {
        title: 'El Patio',
        eyebrow: 'Cultural landing page',
        description: 'A conversion-focused cultural landing page with a strong visual system, responsive layouts, and a fast path to booking.',
        stack: ['React', 'Tailwind', 'Responsive UI'],
        link: 'https://elpatiocultural.com',
        ImageComponent: ElPatioAnimation,
        featured: false,
    },
    {
        title: 'Scolink',
        eyebrow: 'Education operations',
        description: 'A central workspace for educational centers to organize daily operations, staff, and student records.',
        stack: ['React', 'Node.js', 'Prisma', 'Tailwind'],
        link: 'https://scolink.ink',
        ImageComponent: ScolinkAnimation,
        featured: false,
    },
    {
        title: 'Dobe',
        eyebrow: 'AI workspace',
        description: 'A single workspace for using multiple AI models without jumping between separate tabs and tools.',
        stack: ['React', 'Node.js', 'AI integrations', 'Tailwind'],
        link: 'https://dobe.chat',
        ImageComponent: DobeAnimation,
        featured: false,
    },
    {
        title: 'ArticleMaster',
        eyebrow: 'Content pipeline',
        description: 'A pipeline that turns YouTube videos into structured, SEO-ready article drafts.',
        stack: ['React', 'Node.js', 'YouTube pipeline', 'SEO'],
        link: 'https://github.com/berserker-glitch/article-master',
        ImageComponent: ArticleMasterAnimation,
        featured: false,
    },
    {
        title: 'Lea4n',
        eyebrow: 'Study assistant',
        description: 'A study tool that lets students ask questions against their own PDF materials and find grounded answers.',
        stack: ['React', 'Node.js', 'PDF retrieval', 'Tailwind'],
        link: 'https://lea4n.com',
        ImageComponent: Lea4nAnimation,
        featured: false,
    },
]

export default function Projects() {
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

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
                        toggleActions: 'play none none reverse',
                    },
                })

            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <section id="projects" ref={container} aria-labelledby="projects-title" className="relative border-t border-white/10 py-24 md:py-32">
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="mb-16 flex flex-col gap-2 md:mb-24">
                <p className="font-mono text-sm tracking-widest text-primary">01 / Work</p>
                <h2 id="projects-title" className="text-4xl font-sans font-bold tracking-tighter text-foreground md:text-6xl">
                    Selected work
                </h2>
            </div>

            <div className="flex flex-col gap-20 md:gap-32">
                {projects.map((project, index) => (
                    <article
                        key={project.title}
                        className={`project-card group relative flex flex-col items-center gap-8 ${project.featured ? 'md:flex-col' : index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            } md:gap-16`}
                    >
                        <div
                            className={`relative flex w-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-muted/30 transition-colors duration-500 group-hover:border-primary/50 ${project.featured ? 'h-[50vh] md:h-[70vh]' : 'h-[40vh] md:h-[50vh] md:w-[55%]'
                                }`}
                        >
                            <div className="pointer-events-none absolute inset-0 z-10 bg-primary/20 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100" />
                            <project.ImageComponent
                                className="project-img absolute z-0 h-full w-full object-cover object-center opacity-80 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                            />
                            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                            {project.featured && (
                                <div className="absolute left-6 top-6 flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="rounded border border-white/10 bg-background/80 px-2 py-1 font-mono text-xs tracking-widest text-primary backdrop-blur-md">
                                        Lead project
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className={`flex w-full flex-col gap-6 ${project.featured ? 'items-center text-center md:w-2/3' : 'md:w-[45%]'}`}>
                            <div className="flex flex-col gap-3">
                                <p className="font-mono text-xs tracking-widest text-primary">{project.eyebrow}</p>
                                <h3 className="text-3xl font-sans font-bold tracking-tighter text-foreground transition-colors duration-500 group-hover:text-primary md:text-5xl">
                                    {project.title}
                                </h3>
                                <p className="max-w-xl font-serif text-lg italic leading-relaxed text-muted-foreground md:text-xl">
                                    {project.description}
                                </p>
                            </div>

                            <div className={`flex flex-wrap gap-2 ${project.featured ? 'justify-center' : ''}`}>
                                {project.stack.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-foreground transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08]"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-2">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${project.title}`}
                                    className="magnetic-target group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3 font-bold text-background transition-all hover:scale-105 active:scale-95"
                                >
                                    <span className="relative z-10">Open project</span>
                                    <ArrowUpRight className="relative z-10 h-4 w-4 transition-all duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                                    <div className="absolute inset-0 translate-y-full bg-primary transition-transform duration-300 ease-out group-hover/btn:translate-y-0" />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

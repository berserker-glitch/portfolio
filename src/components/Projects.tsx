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
    Le4nAnimation
} from './ProjectAnimations'

const projects = [
    {
        title: '9anon AI',
        description: 'An intelligent Moroccan legal assistant powered by RAG, effectively navigating thousands of complex legal documents to provide precise insights.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://9anonai.com',
        ImageComponent: AnonAIAnimation,
        featured: false
    },
    {
        title: 'MohibiMaths',
        description: 'A fully bespoke Learning Management System designed from the ground up to deliver a unified and scalable educational experience.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://mohibimaths.com',
        ImageComponent: MohibiMathsAnimation,
        featured: false
    },
    {
        title: 'El Patio',
        description: 'A visually striking, highly optimized landing page engineered to maximize conversion rates and elevate brand presence.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://elpatiocultural.com',
        ImageComponent: ElPatioAnimation,
        featured: false
    },
    {
        title: 'Scolink',
        description: 'An all-in-one centralized management tool empowering educational centers to seamlessly orchestrate their daily operations.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://scolink.ink',
        ImageComponent: ScolinkAnimation,
        featured: false
    },
    {
        title: 'Dobe',
        description: 'A unified AI workspace aggregating multiple advanced models into a single, intuitive interface—eliminating tab clutter completely.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://dobe.chat',
        ImageComponent: DobeAnimation,
        featured: false
    },
    {
        title: 'ArticleMaster',
        description: 'An automated pipeline tool that ingests YouTube videos and synthesizes them into highly structured, SEO-optimized blog posts.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://github.com/berserker-glitch/article-master',
        ImageComponent: ArticleMasterAnimation,
        featured: false
    },
    {
        title: 'Le4n',
        description: 'A context-aware AI platform designed specifically for students to interact flawlessly with extensive PDF materials and extract accurate answers.',
        stack: ['React', 'Node.js', 'Prisma', 'Shadcn', 'Tailwind'],
        link: 'https://le4n.com',
        ImageComponent: Le4nAnimation,
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
                        <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-muted/30 border border-white/10 w-full group-hover:border-primary/50 transition-colors duration-500 ${project.featured ? 'h-[50vh] md:h-[70vh]' : 'md:w-[55%] h-[40vh] md:h-[50vh]'
                            }`}>
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                            <project.ImageComponent
                                className="project-img absolute w-full h-full object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out z-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-10 pointer-events-none" />

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
                                    <span className="relative z-10 transition-colors duration-300">View Project</span>
                                    <ArrowUpRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all duration-300" />
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

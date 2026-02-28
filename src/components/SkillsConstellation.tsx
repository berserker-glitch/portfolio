import { useEffect, useRef } from 'react'

const SKILLS = [
    { text: 'TypeScript', weight: 1.5 },
    { text: 'React', weight: 1.8 },
    { text: 'Node.js', weight: 1.7 },
    { text: 'MySQL', weight: 1.4 },
    { text: 'Prisma', weight: 1.6 },
    { text: 'Shadcn', weight: 1.3 },
    { text: 'Tailwind CSS', weight: 1.6 },
    { text: 'Express', weight: 1.5 },
    { text: 'Vite', weight: 1.2 },
    { text: 'Next.js', weight: 1.7 },
]

export default function SkillsConstellation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = container.clientWidth
        let height = container.clientHeight

        // Support high DPI displays
        const dpr = window.devicePixelRatio || 1
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr)

        const nodes = SKILLS.map(skill => ({
            ...skill,
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: skill.weight * 4
        }))

        let mouse = { x: -1000, y: -1000 }

        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouse.x = e.clientX - rect.left
            mouse.y = e.clientY - rect.top
        }
        canvas.addEventListener('mousemove', onMouseMove)
        canvas.addEventListener('mouseleave', () => { mouse = { x: -1000, y: -1000 } })

        let animationFrameId: number

        const render = () => {
            ctx.clearRect(0, 0, width, height)

            // Update positions
            nodes.forEach(node => {
                node.x += node.vx
                node.y += node.vy

                // Bounce off walls
                if (node.x <= 0 || node.x >= width) node.vx *= -1
                if (node.y <= 0 || node.y >= height) node.vy *= -1

                // Mouse interaction (repel slightly)
                const dx = mouse.x - node.x
                const dy = mouse.y - node.y
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (dist < 100) {
                    node.x -= dx * 0.05
                    node.y -= dy * 0.05
                }
            })

            // Draw connections
            ctx.lineWidth = 1
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x
                    const dy = nodes[i].y - nodes[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 200) {
                        // Check if mouse is hovering near this connection
                        const mouseDistI = Math.sqrt((mouse.x - nodes[i].x) ** 2 + (mouse.y - nodes[i].y) ** 2)
                        const mouseDistJ = Math.sqrt((mouse.x - nodes[j].x) ** 2 + (mouse.y - nodes[j].y) ** 2)

                        if (mouseDistI < 150 || mouseDistJ < 150) {
                            ctx.strokeStyle = `rgba(0, 240, 255, ${1 - dist / 200})` // primary color
                            ctx.lineWidth = 1.5
                        } else {
                            ctx.strokeStyle = `rgba(232, 230, 225, ${(1 - dist / 200) * 0.15})` // foreground
                            ctx.lineWidth = 0.5
                        }
                        ctx.beginPath()
                        ctx.moveTo(nodes[i].x, nodes[i].y)
                        ctx.lineTo(nodes[j].x, nodes[j].y)
                        ctx.stroke()
                    }
                }
            }

            // Draw nodes and text
            nodes.forEach(node => {
                const mouseDist = Math.sqrt((mouse.x - node.x) ** 2 + (mouse.y - node.y) ** 2)
                const isHovered = mouseDist < 100

                ctx.fillStyle = isHovered ? '#00F0FF' : '#E8E6E1'
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
                ctx.fill()

                ctx.font = isHovered ? 'bold 14px "Space Grotesk"' : '12px "JetBrains Mono"'
                ctx.fillStyle = isHovered ? '#00F0FF' : 'rgba(232, 230, 225, 0.5)'
                ctx.textAlign = 'center'
                ctx.fillText(node.text, node.x, node.y - node.radius - 8)
            })

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        const onResize = () => {
            width = container.clientWidth
            height = container.clientHeight
            canvas.width = width * dpr
            canvas.height = height * dpr
            ctx.scale(dpr, dpr)
        }
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
            canvas.removeEventListener('mousemove', onMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <section id="skills" className="py-24 md:py-32 border-t border-white/5 relative">
            <div className="flex flex-col gap-2 mb-16">
                <h3 className="text-primary font-mono text-sm uppercase tracking-widest">[02_LOADOUT]</h3>
                <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter uppercase text-foreground">
                    Core Protocols
                </h2>
                <p className="text-muted-foreground font-mono text-xs max-w-sm mt-4">
                    {'// Interactive system map. Hover to highlight memory links.'}
                </p>
            </div>

            <div
                ref={containerRef}
                className="w-full h-[60vh] rounded-2xl bg-muted/20 border border-white/5 relative overflow-hidden"
            >
                <canvas
                    ref={canvasRef}
                    className="w-full h-full cursor-crosshair"
                />
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
            </div>
        </section>
    )
}

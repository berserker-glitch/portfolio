import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { Code2, Cpu, Github, Mail, MonitorPlay, X } from 'lucide-react'

const githubUrl = 'https://github.com/berserker-glitch'
const emailUrl = 'mailto:yassermbarek25@gmail.com'

export default function CommandPalette() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleKeyboard = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false)
                return
            }

            if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
                event.preventDefault()
                setOpen((isOpen) => !isOpen)
            }
        }

        const openPalette = () => setOpen(true)

        document.addEventListener('keydown', handleKeyboard)
        window.addEventListener('open-command-palette', openPalette)

        return () => {
            document.removeEventListener('keydown', handleKeyboard)
            window.removeEventListener('open-command-palette', openPalette)
        }
    }, [])

    useEffect(() => {
        if (!open) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [open])

    if (!open) return null

    const runCommand = (command: () => void) => {
        command()
        setOpen(false)
    }

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div
            className="fixed inset-0 z-[60] flex items-start justify-center bg-background/80 px-4 pt-[15vh] backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-palette-title"
            onPointerDown={(event) => {
                if (event.target === event.currentTarget) setOpen(false)
            }}
        >
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-muted shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <h2 id="command-palette-title" className="sr-only">Quick actions</h2>

                <Command label="Global command palette" loop className="w-full font-sans">
                    <div className="flex items-center border-b border-white/10 px-4">
                        <Command.Input
                            autoFocus
                            aria-label="Search commands"
                            placeholder="Type a command or search..."
                            className="h-14 w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
                        />
                        <button
                            type="button"
                            aria-label="Close command palette"
                            onClick={() => setOpen(false)}
                            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    <Command.List className="max-h-[320px] overflow-y-auto p-2">
                        <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                            <Command.Item
                                onSelect={() => runCommand(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
                                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2.5 text-sm text-foreground data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary"
                            >
                                <MonitorPlay className="h-4 w-4" /> Go to home
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => scrollTo('projects'))}
                                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2.5 text-sm text-foreground data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary"
                            >
                                <Code2 className="h-4 w-4" /> View work
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => scrollTo('skills'))}
                                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2.5 text-sm text-foreground data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary"
                            >
                                <Cpu className="h-4 w-4" /> View skills
                            </Command.Item>
                        </Command.Group>

                        <Command.Separator className="mx-2 my-1 h-px bg-white/10" />

                        <Command.Group heading="Actions" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                            <Command.Item
                                onSelect={() => runCommand(() => { window.location.href = emailUrl })}
                                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2.5 text-sm text-foreground data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary"
                            >
                                <Mail className="h-4 w-4" /> Email me
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => window.open(githubUrl, '_blank', 'noopener,noreferrer'))}
                                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2.5 text-sm text-foreground data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary"
                            >
                                <Github className="h-4 w-4" /> View GitHub
                            </Command.Item>
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>
        </div>
    )
}

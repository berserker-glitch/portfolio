import { Command } from 'cmdk'
import { MonitorPlay, Mail, Link as LinkIcon, Download, Code2, Cpu } from 'lucide-react'

import { useEffect, useState } from 'react'

export default function CommandPalette() {
    const [open, setOpen] = useState(false)

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    if (!open) return null

    // A helper function to execute action and close
    const runCommand = (command: () => void) => {
        command()
        setOpen(false)
    }

    // Smooth scroll helper
    const scrollTo = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-background/80 backdrop-blur-sm px-4">
            <div
                className="w-full max-w-2xl bg-muted border border-white/10 rounded-xl shadow-2xl overflow-hidden font-sans"
            >
                <Command label="Global Command Palette" loop className="w-full">
                    <div className="flex items-center px-4 border-b border-white/10">
                        <Command.Input
                            autoFocus
                            placeholder="Type a command or search..."
                            className="w-full bg-transparent text-foreground h-14 outline-none placeholder:text-muted-foreground"
                        />
                        <kbd className="hidden sm:inline-flex px-2 py-1 text-[10px] font-mono font-medium text-muted-foreground bg-white/5 rounded">
                            ESC
                        </kbd>
                    </div>

                    <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="Navigation" className="text-xs text-muted-foreground px-2 py-1.5 font-medium">
                            <Command.Item
                                onSelect={() => runCommand(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
                                className="flex items-center gap-2 px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary"
                            >
                                <MonitorPlay className="w-4 h-4" /> Go to Home
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => scrollTo('projects'))}
                                className="flex items-center gap-2 px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary"
                            >
                                <Code2 className="w-4 h-4" /> View Projects
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => scrollTo('skills'))}
                                className="flex items-center gap-2 px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary"
                            >
                                <Cpu className="w-4 h-4" /> View Tech Stack
                            </Command.Item>
                        </Command.Group>

                        <Command.Separator className="h-px bg-white/10 my-1 mx-2" />

                        <Command.Group heading="Actions" className="text-xs text-muted-foreground px-2 py-1.5 font-medium">
                            <Command.Item
                                onSelect={() => runCommand(() => window.open('mailto:yassermbarek25@gmail.com'))}
                                className="flex items-center gap-2 px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary"
                            >
                                <Mail className="w-4 h-4" /> Email Me
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => window.open('#', '_blank'))}
                                className="flex items-center gap-2 px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary"
                            >
                                <LinkIcon className="w-4 h-4" /> View GitHub
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => window.open('#', '_blank'))}
                                className="flex items-center gap-2 px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary"
                            >
                                <Download className="w-4 h-4" /> Download Resume
                            </Command.Item>
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>

            {/* Click outside to close */}
            <div className="absolute inset-0 z-[-1]" onClick={() => setOpen(false)} />
        </div>
    )
}

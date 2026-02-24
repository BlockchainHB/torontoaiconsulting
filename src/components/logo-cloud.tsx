'use client'

import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { Brain, Briefcase, Rocket, Store } from 'lucide-react'
import { Container } from '@/components/container'

const credentialGroups: Record<string, { icon: React.ElementType; label: string }[]> = {
    builder: [
        { icon: Brain, label: 'Open Claw Agents' },
        { icon: Store, label: 'Claude Code Workflows' },
        { icon: Briefcase, label: 'MCP + API Connectors' },
        { icon: Rocket, label: 'SMB Ops Automation' },
    ],
    results: [
        { icon: Rocket, label: 'Admin Work Offloaded' },
        { icon: Brain, label: 'Data + Content Flows' },
        { icon: Store, label: 'Scheduling Automation' },
        { icon: Briefcase, label: 'Virtual Assistant Ops' },
    ],
}

type GroupKey = keyof typeof credentialGroups

export function LogoCloud() {
    const [currentGroup, setCurrentGroup] = useState<GroupKey>('builder')

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGroup((prev) => {
                const groups = Object.keys(credentialGroups) as GroupKey[]
                const currentIndex = groups.indexOf(prev)
                const nextIndex = (currentIndex + 1) % groups.length
                return groups[nextIndex]
            })
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <Container
            asGrid
            className="grid-cols-2 md:grid-cols-4">
            <div className="col-span-full">
                <div
                    data-grid-content
                    className="py-20">
                    <p
                        data-current={currentGroup}
                        className="text-muted-foreground mx-auto max-w-xl text-balance text-center md:text-lg lg:text-xl">
                        We help small business owners run advanced AI workflows with{' '}
                        <span className="in-data-[current=builder]:text-indigo-500 transition-colors duration-200">Open Claw agent systems,</span>{' '}
                        <span className="in-data-[current=results]:text-indigo-500 transition-colors duration-200">Claude Code execution workflows,</span>{' '}
                        <span className="in-data-[current=builder]:text-indigo-500 transition-colors duration-200">connected business tools,</span>{' '}
                        and <span className="in-data-[current=results]:text-indigo-500 transition-colors duration-200">hands-on implementation support</span>
                    </p>
                </div>
            </div>
            <AnimatePresence
                initial={false}
                mode="popLayout">
                {credentialGroups[currentGroup].map((item, i) => (
                    <div key={`${currentGroup}-${i}`}>
                        <div
                            data-grid-content
                            className="bg-card!">
                            <motion.div
                                className="flex h-24 flex-col items-center justify-center gap-1"
                                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -24, filter: 'blur(6px)', scale: 0.5 }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}>
                                <item.icon className="text-foreground size-5" />
                                <span className="text-foreground mt-1 text-sm font-medium">{item.label}</span>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </AnimatePresence>
        </Container>
    )
}

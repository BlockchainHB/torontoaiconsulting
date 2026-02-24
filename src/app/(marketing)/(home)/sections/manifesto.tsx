'use client'
import { Plus, Minus } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Container } from '@/components/container'

export function Manifesto() {
    const [isFull, setIsFull] = useState(false)
    return (
        <section id="about">
            <Container className="border-t-0 py-16 max-lg:px-6 lg:py-24">
                <div
                    data-state={isFull ? 'full' : 'collapsed'}
                    className="relative mx-auto max-w-2xl">
                    <motion.div
                        className={cn('relative overflow-hidden', !isFull && 'mask-b-from-45%')}
                        initial={{ height: '22rem' }}
                        animate={{ height: isFull ? 'auto' : '22rem' }}
                        exit={{ height: '22rem' }}>
                        <div className="text-muted-foreground space-y-4 text-xl *:leading-relaxed md:text-2xl">
                            <p>
                                Most AI consultants leave you with a <strong className="text-foreground font-medium">strategy doc and no implementation</strong>. Copenhagen is hands-on. We work inside your stack and <strong className="text-foreground font-medium">build workflows with your team</strong>.
                            </p>
                            <p>
                                Small business owners are being asked to choose between basic no-code automations and overly complex enterprise tooling. You should not have to pick one extreme.
                            </p>
                            <p>
                                We design <strong className="text-foreground font-medium">custom Open Claw agent harnesses</strong> and Claude Code workflows that match your real operations: client communication, reporting, scheduling, content pipelines, and recurring admin tasks.
                            </p>
                            <p>
                                We also handle the hard setup work most teams skip: <strong className="text-foreground font-medium">MCP and API connectors, permissions, testing, and deployment readiness</strong>.
                            </p>
                            <p>
                                The goal is simple: give owners a reliable AI operating layer that removes bottlenecks and keeps compounding over time.
                            </p>
                        </div>
                    </motion.div>
                    <div className="group relative mt-6 w-fit">
                        <CardDecorator className="group-hover:scale-115 border-primary size-2" />
                        <Button
                            onClick={() => setIsFull(!isFull)}
                            className="flex rounded pr-2.5"
                            variant="ghost"
                            size="sm">
                            <span>Read {isFull ? 'Less' : 'More'}</span>
                            {isFull ? (
                                <Minus
                                    strokeWidth={2.5}
                                    className="size-3.5! opacity-50 duration-300"
                                />
                            ) : (
                                <Plus
                                    strokeWidth={2.5}
                                    className="size-3.5! opacity-50 duration-300 group-hover:rotate-90"
                                />
                            )}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

const CardDecorator = ({ className }: { className?: string }) => (
    <>
        <span className={cn('border-primary rounded-tl-xs absolute -left-px -top-px block size-2 border-l border-t', className)}></span>
        <span className={cn('border-primary rounded-tr-xs absolute -right-px -top-px block size-2 border-r border-t', className)}></span>
        <span className={cn('border-primary rounded-bl-xs absolute -bottom-px -left-px block size-2 border-b border-l', className)}></span>
        <span className={cn('border-primary rounded-br-xs absolute -bottom-px -right-px block size-2 border-b border-r', className)}></span>
    </>
)

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
                                Most AI consultants sell you a <strong className="text-foreground font-medium">strategy deck</strong> and disappear. I&apos;m not most consultants. I sit down with you — in person or on a call — and we <strong className="text-foreground font-medium">actually build the thing together</strong>.
                            </p>
                            <p>
                                I started my career in <strong className="text-foreground font-medium">human resources</strong>, supervising teams at Canada&apos;s Wonderland and a hospital. I learned how <strong className="text-foreground font-medium">enterprises operate</strong> — the processes, the compliance, the politics of getting things done.
                            </p>
                            <p>
                                Then I became an <strong className="text-foreground font-medium">Amazon seller</strong>. I built brands from zero to one, handled logistics, marketing, and customer service. I learned what it means to be a <strong className="text-foreground font-medium">founder</strong> — to wear every hat and make every dollar count.
                            </p>
                            <p>
                                Over the past year, I dove deep into <strong className="text-foreground font-medium">AI tools and automation</strong>. I didn&apos;t just learn them — I built a <strong className="text-foreground font-medium">profitable SaaS product at $300K ARR</strong>. I know what works, what&apos;s hype, and what actually moves the needle for a business.
                            </p>
                            <p>
                                That&apos;s why I started Copenhagen. Because Toronto&apos;s small and medium businesses deserve someone who <strong className="text-foreground font-medium">speaks both languages</strong> — the language of business operations and the language of AI. Someone who can look at your workflow, find the bottleneck, and <strong className="text-foreground font-medium">implement a solution that week</strong>.
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

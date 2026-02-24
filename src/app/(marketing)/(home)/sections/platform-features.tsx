import KanbanIllustration from '@/components/illustrations/kanban'
import { Flow9Illustration } from '@/components/illustrations/flow-9'
import { AiSearchIllustration } from '@/components/illustrations/ai-search'
import { Container, Separator } from '@/components/container'
import { FeatureCard, FeatureCardContent } from '@/components/ui/feature-card'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Check, Search, Workflow, Handshake } from 'lucide-react'
import { HASAAM_AVATAR } from '@/lib/const'
import Image from 'next/image'

export function PlatformFeatures() {
    return (
        <section id="services">
            <Container
                asGrid
                className="@4xl:grid-cols-4 grid-cols-2">
                <FeatureCard className="@4xl:col-span-2 col-span-full grid-rows-1">
                    <FeatureCardContent className="flex h-full flex-col space-y-6">
                        <div className="bg-card ring-foreground/3 flex size-12 rounded-full shadow-xl shadow-black/5 ring-1">
                            <Search className="text-muted-foreground m-auto size-4" />
                        </div>

                        <h2 className="text-2xl font-semibold">AI Ops Audit for Owners</h2>

                        <p className="text-muted-foreground text-balance">
                            We map your <strong className="text-foreground font-semibold">admin load, data flow, and team bottlenecks</strong> so you can prioritize the automations that actually free up owner time.
                        </p>

                        <ul className="w-full space-y-2">
                            {['Process map of repetitive work', 'Priority use-case plan by impact', 'Clear build roadmap for your team'].map((feature, index) => (
                                <li
                                    key={index}
                                    className="text-muted-foreground flex items-center gap-2">
                                    <Check className="size-4 text-emerald-500" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="mt-auto w-fit">
                            <Link href="#book-call">Map My Workflow Gaps</Link>
                        </Button>
                    </FeatureCardContent>
                </FeatureCard>

                <div className="@4xl:col-span-2 col-span-full">
                    <div
                        data-grid-content
                        className="flex h-full items-start justify-center overflow-hidden pt-6 @4xl:pt-10">
                        <KanbanIllustration />
                    </div>
                </div>
            </Container>

            <Separator className="h-24" />

            <Container
                asGrid
                className="@4xl:grid-cols-4 grid-cols-2">
                <div className="@4xl:col-span-2 col-span-full">
                    <div
                        data-grid-content
                        className="flex h-full items-center justify-center overflow-hidden">
                        <Flow9Illustration />
                    </div>
                </div>

                <FeatureCard className="@max-4xl:row-start-1 @4xl:col-span-2 col-span-full grid-rows-1">
                    <FeatureCardContent className="flex h-full flex-col space-y-6">
                        <div className="bg-card ring-foreground/3 flex size-12 rounded-full shadow-xl shadow-black/5 ring-1">
                            <Workflow className="text-muted-foreground m-auto size-4" />
                        </div>

                        <h2 className="text-2xl font-semibold">Workflow Build + Deployment</h2>

                        <p className="text-muted-foreground text-balance">
                            We design and ship <strong className="text-foreground font-semibold">production workflows</strong> for admin tasks, reporting, scheduling, and customer operations using your existing tools.
                        </p>

                        <ul className="w-full space-y-2">
                            {['Automation for repetitive admin tasks', 'Cross-tool actions via MCP + APIs', 'Team handoff with usable playbooks'].map((feature, index) => (
                                <li
                                    key={index}
                                    className="text-muted-foreground flex items-center gap-2">
                                    <Check className="size-4 text-emerald-500" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="mt-auto w-fit">
                            <Link href="#book-call">Build My First Workflow</Link>
                        </Button>
                    </FeatureCardContent>
                </FeatureCard>
            </Container>

            <Separator className="h-24" />

            <Container
                asGrid
                className="@4xl:grid-cols-4 grid-cols-2">
                <FeatureCard className="@4xl:col-span-2 col-span-full grid-rows-1">
                    <FeatureCardContent className="flex h-full flex-col space-y-6">
                        <div className="bg-card ring-foreground/3 flex size-12 rounded-full shadow-xl shadow-black/5 ring-1">
                            <Handshake className="text-muted-foreground m-auto size-4" />
                        </div>

                        <h2 className="text-2xl font-semibold">Open Claw + Claude Code Agents</h2>

                        <p className="text-muted-foreground text-balance">
                            We create a <strong className="text-foreground font-semibold">custom Open Claw agent harness</strong> plus Claude Code workflows so your business has reusable agents for analysis, content, scheduling, and ops support.
                        </p>

                        <ul className="w-full space-y-2">
                            {['Custom agent roles and guardrails', 'Reusable prompts, tools, and connectors', 'Continuous iteration as your process changes'].map((feature, index) => (
                                <li
                                    key={index}
                                    className="text-muted-foreground flex items-center gap-2">
                                    <Check className="size-4 text-emerald-500" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="mt-auto w-fit">
                            <Link href="#book-call">Design My Agent Stack</Link>
                        </Button>
                    </FeatureCardContent>
                </FeatureCard>

                <div className="@4xl:col-span-2 col-span-full">
                    <div
                        data-grid-content
                        className="flex h-full items-center justify-center overflow-hidden">
                        <AiSearchIllustration />
                    </div>
                </div>
            </Container>

            <Separator className="h-24" />

            <Container className="bg-background border-dashed">
                <div className="mx-auto max-w-2xl p-6 md:py-12 lg:py-20">
                    <p className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">From the Founder</p>

                    <div className="mt-6 lg:mt-12">
                        <p className='text-xl *:leading-relaxed before:mr-1 before:content-["\201C"] after:ml-1 after:content-["\201D"] md:text-2xl'>Small business owners don&apos;t need another dashboard. They need systems that remove repetitive work. I help owners implement Open Claw and Claude Code workflows that run day-to-day operations with real business constraints.</p>

                        <div className="mt-12 flex items-center gap-3">
                            <div className="ring-foreground/10 aspect-square size-10 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring-1">
                                <Image
                                    src={HASAAM_AVATAR}
                                    alt="Hasaam B"
                                    width={40}
                                    height={40}
                                />
                            </div>

                            <div className="space-y-px">
                                <p className="text-sm font-medium">Hasaam B</p>
                                <p className="text-muted-foreground text-xs">Founder, Copenhagen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Separator className="h-24" />
        </section>
    )
}

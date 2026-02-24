import KanbanIllustration from '@/components/illustrations/kanban'
import { Flow9Illustration } from '@/components/illustrations/flow-9'
import { AiSearchIllustration } from '@/components/illustrations/ai-search'
import { Container, Separator } from '@/components/container'
import { FeatureCard, FeatureCardContent } from '@/components/ui/feature-card'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Check, Search, Workflow, Handshake } from 'lucide-react'
import { HASAAM_AVATAR } from '@/lib/const'

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

                        <h2 className="text-2xl font-semibold">AI Strategy & Audit</h2>

                        <p className="text-muted-foreground text-balance">
                            We start with a deep dive into your <strong className="text-foreground font-semibold">current processes and tech stack</strong>. We identify where AI can save you the most time and money — no fluff, just actionable opportunities.
                        </p>

                        <ul className="w-full space-y-2">
                            {['Process & workflow audit', 'AI opportunity mapping', 'ROI projections for each initiative'].map((feature, index) => (
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
                            <Link href="#book-call">Get Started</Link>
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

                        <h2 className="text-2xl font-semibold">Workflow Automation</h2>

                        <p className="text-muted-foreground text-balance">
                            We don&apos;t just recommend tools — we <strong className="text-foreground font-semibold">build and deploy automations</strong> that work. From lead capture to customer support, we wire up AI workflows that run while you sleep.
                        </p>

                        <ul className="w-full space-y-2">
                            {['Custom AI workflow design', 'Tool selection & integration', 'Team training & handoff'].map((feature, index) => (
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
                            <Link href="#book-call">Get Started</Link>
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

                        <h2 className="text-2xl font-semibold">1-on-1 Implementation</h2>

                        <p className="text-muted-foreground text-balance">
                            We build you a <strong className="text-foreground font-semibold">custom library of Claude Code workflows and skills</strong> tailored to your business. From drafting contracts to generating reports — your team gets AI agents that actually know your processes.
                        </p>

                        <ul className="w-full space-y-2">
                            {['Custom Claude Code skills for your ops', 'AI agents trained on your workflows', 'Ongoing optimization & new skills added'].map((feature, index) => (
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
                            <Link href="#book-call">Get Started</Link>
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
                        <p className='text-xl *:leading-relaxed before:mr-1 before:content-["\201C"] after:ml-1 after:content-["\201D"] md:text-2xl'>I&apos;ve been on both sides — running teams in enterprise and building businesses from scratch. The biggest unlock for any SMB right now is AI, but most owners don&apos;t know where to start. That&apos;s exactly what I help with.</p>

                        <div className="mt-12 flex items-center gap-3">
                            <div className="ring-foreground/10 aspect-square size-10 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring-1">
                                <img
                                    src={HASAAM_AVATAR}
                                    alt="Hasaam B"
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

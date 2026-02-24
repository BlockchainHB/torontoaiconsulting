import { Building2, Check, ShieldCheck, TrendingUp } from 'lucide-react'
import { Container } from '@/components/container'
import { FeatureCard, FeatureCardContent } from '@/components/ui/feature-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AgentWorkflowIllustration } from '@/components/illustrations/agent-workflow'
import { CAL_BOOKING_LINK } from '@/lib/const'

const credentials = [
    {
        icon: Building2,
        title: 'Operations-First Thinking',
        description: 'Built around real business operations, not demo workflows. Your automations map to how your team actually works.',
    },
    {
        icon: TrendingUp,
        title: 'Owner-Level Prioritization',
        description: 'Focused on reducing owner workload first: admin, reporting, scheduling, and recurring coordination tasks.',
    },
    {
        icon: ShieldCheck,
        title: 'Advanced AI Implementation',
        description: 'Open Claw and Claude Code implementation with MCP/API connectors, guardrails, and production-ready workflows.',
    },
]

export function EnterpriseFeatures() {
    return (
        <section id="pricing">
            <Container className="py-16 lg:py-24">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">Why Owners Choose Toronto AI Consulting</h2>
                    <p className="text-muted-foreground text-balance text-lg">You get practical support for advanced AI operations, not generic automation playbooks.</p>
                </div>
            </Container>
            <Container asGrid>
                <div className="@2xl:grid-cols-2 @4xl:grid-cols-10 grid gap-px">
                    <div
                        aria-hidden
                        className="@max-4xl:hidden">
                        <div data-grid-content />
                    </div>
                    <div className="@4xl:col-span-4">
                        <FeatureCard className="@4xl:col-span-2 col-span-full grid-rows-1">
                            <FeatureCardContent className="@4xl:pb-12 flex h-full flex-col space-y-6">
                                <div className="bg-card ring-foreground/3 flex size-12 rounded-full shadow-xl shadow-black/5 ring-1">
                                    <TrendingUp className="text-muted-foreground m-auto size-4" />
                                </div>
                                <h3 className="text-2xl font-semibold">Built for Execution, Not Slide Decks</h3>
                                <p className="text-muted-foreground text-balance">Most teams are stuck between simple no-code automations and overly complex enterprise systems. We close that gap with Open Claw agents and Claude Code workflows tailored for SMB operations.</p>
                                <ul className="w-full space-y-2">
                                    {['Custom agent harnesses, not cookie-cutter zaps', 'MCP/API connector setup and workflow deployment', 'Hands-on delivery with owner-friendly training'].map((feature, index) => (
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
                                    <Link href={CAL_BOOKING_LINK}>See If This Fits</Link>
                                </Button>
                            </FeatureCardContent>
                        </FeatureCard>
                    </div>
                    <div className="@4xl:col-span-4">
                        <div
                            data-grid-content
                            className="flex h-full items-start justify-center overflow-hidden pt-6 @4xl:pt-10">
                            <AgentWorkflowIllustration />
                        </div>
                    </div>
                    <div
                        aria-hidden
                        className="@max-4xl:hidden">
                        <div data-grid-content />
                    </div>
                </div>
            </Container>
            <Container
                asGrid
                className="@4xl:**:data-grid-content:p-8 **:data-grid-content:p-6 @5xl:**:data-grid-content:p-12 @4xl:grid-cols-10 grid-cols-2">
                <div
                    aria-hidden
                    className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
                <div className="@4xl:grid-cols-3 @sm:grid-cols-2 col-span-8 grid gap-px">
                    {credentials.map((cred, index) => (
                        <div key={index}>
                            <div
                                data-grid-content
                                className="space-y-3">
                                <cred.icon className="size-4" />
                                <h3 className="mt-3 font-medium">{cred.title}</h3>
                                <p className="text-muted-foreground text-sm">{cred.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    aria-hidden
                    className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
            </Container>
        </section>
    )
}

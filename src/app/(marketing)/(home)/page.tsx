import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Manifesto } from '@/app/(marketing)/(home)/sections/manifesto'
import { PlatformFeatures } from '@/app/(marketing)/(home)/sections/platform-features'
import { AnalyticsFeatures } from '@/app/(marketing)/(home)/sections/analytics-features'
import { IntegrationsSection } from '@/app/(marketing)/(home)/sections/integrations-section'
import { TestimonialsSection } from '@/app/(marketing)/(home)/sections/testimonials-section'
import { CallToAction } from '@/components/call-to-action'
import { Container } from '@/components/container'
import { CollaborationIllustration } from '@/components/illustrations/collaboration'
import { Calendar4Illustration } from '@/components/illustrations/calendar-4'
import { Workflow, Users } from 'lucide-react'
import { FeatureCardDescription, FeatureCardTitle } from '@/components/ui/feature-card'
import { EnterpriseFeatures } from '@/app/(marketing)/(home)/sections/enterprise-features'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <section
                id="home"
                className="overflow-hidden">
                <div className="relative">
                    <div
                        aria-hidden
                        className="h-14 lg:h-[73px]"
                    />

                    <Container
                        asGrid
                        className="relative">
                        <div
                            aria-hidden
                            className="dither-xs mask-x-from-65% mask-x-to-95% mask-y-from-75% pointer-events-none absolute inset-0 opacity-75 max-lg:opacity-50 2xl:mx-auto 2xl:max-w-7xl">
                            <div className="size-full">
                                <Image
                                    src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1759211132/grid-2-bg_bqde4m.webp"
                                    alt=""
                                    className="contrast-35 size-full -scale-x-100 object-cover brightness-75"
                                    width={2224}
                                    height={1589}
                                    priority
                                    fetchPriority="high"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1520px"
                                />
                            </div>
                        </div>

                        <div
                            aria-hidden
                            className="bg-linear-to-b absolute inset-0 to-purple-600 opacity-50 mix-blend-lighten"
                        />

                        <div
                            aria-hidden
                            className="col-span-full grid grid-cols-10 gap-px">
                            {Array.from({ length: 10 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="aspect-square">
                                    <div data-grid-content />
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-10 gap-px">
                            <div
                                aria-hidden
                                className="grid grid-rows-4 gap-px">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i}>
                                        <div data-grid-content />
                                    </div>
                                ))}
                            </div>

                            <div className="col-span-8">
                                <div
                                    data-grid-content
                                    className="py-12 text-center">
                                    <div className="relative mx-auto max-w-3xl text-center">
                                        <h1 className="text-foreground text-balance text-5xl font-semibold sm:text-6xl">
                                            Implement AI Into Your Business
                                        </h1>
                                        <p className="text-muted-foreground mb-9 mt-7 text-balance text-lg">Toronto&apos;s hands-on AI consulting for small and medium businesses. From strategy to implementation, we work 1-on-1 with founders to automate workflows and unlock growth.</p>

                                        <div className="flex justify-center">
                                            <Button
                                                asChild
                                                size="lg"
                                                className="border-transparent px-5 text-sm shadow-xl shadow-indigo-900/40">
                                                <Link href="#book-call">Book a Free Strategy Call</Link>
                                            </Button>
                                        </div>
                                        <span className="text-muted-foreground mt-4 block text-center text-sm">In-person in Toronto or remote via video call</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                aria-hidden
                                className="grid grid-rows-4 gap-px">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i}>
                                        <div data-grid-content />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            aria-hidden
                            className="col-span-full grid grid-cols-10 gap-px">
                            {Array.from({ length: 10 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="aspect-square">
                                    <div data-grid-content />
                                </div>
                            ))}
                        </div>
                    </Container>

                    <Container
                        asGrid
                        className="relative shadow-indigo-900/20">
                        <h2 className="sr-only">What We Do</h2>
                        <div className="@2xl:grid-cols-2 @4xl:grid-cols-10 grid gap-px [--color-primary:var(--color-indigo-500)]">
                            <div className="@max-4xl:hidden">
                                <div data-grid-content />
                            </div>
                            <div className="@4xl:col-span-4">
                                <div
                                    data-grid-content
                                    className="@4xl:px-12 @4xl:py-12 flex h-full flex-col space-y-6 px-6 py-6">
                                    <FeatureCardTitle>
                                        <Workflow className="size-4" />
                                        AI Tools & Workflows
                                    </FeatureCardTitle>
                                    <FeatureCardDescription>
                                        <span className="text-foreground">Get hands-on help choosing and implementing AI tools.</span> We audit your processes and build custom workflows that save hours every week.
                                    </FeatureCardDescription>
                                    <div className="pt-4">
                                        <CollaborationIllustration />
                                    </div>
                                </div>
                            </div>
                            <div className="@4xl:col-span-4">
                                <div
                                    data-grid-content
                                    className="@4xl:px-12 @4xl:py-12 flex h-full flex-col space-y-6 px-6 py-6">
                                    <FeatureCardTitle>
                                        <Users className="size-4" />
                                        1-on-1 Consulting
                                    </FeatureCardTitle>
                                    <FeatureCardDescription>
                                        <span className="text-foreground">Real guidance from someone who&apos;s built businesses.</span> In-person in Toronto or on video call — not generic advice from a textbook.
                                    </FeatureCardDescription>
                                    <div className="flex flex-1 items-center justify-center pt-4">
                                        <Calendar4Illustration />
                                    </div>
                                </div>
                            </div>
                            <div className="@max-4xl:hidden">
                                <div data-grid-content />
                            </div>
                        </div>
                    </Container>
                </div>
                <LogoCloud />
            </section>
            <Manifesto />
            <PlatformFeatures />
            <AnalyticsFeatures />
            <IntegrationsSection />
            <EnterpriseFeatures />
            <TestimonialsSection />
            <CallToAction />
        </>
    )
}

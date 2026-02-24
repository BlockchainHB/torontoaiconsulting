import { Container, Separator } from '@/components/container'
import { FeatureCard, FeatureCardCIllustration, FeatureCardContent } from '@/components/ui/feature-card'
import Image from 'next/image'

export function TestimonialsSection() {
    return (
        <section>
            <Container className="py-16 lg:py-24">
                <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
                    <div className="mx-auto max-w-2xl space-y-6 text-center">
                        <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">What Owners Want From AI Implementation</h2>
                        <p className="text-muted-foreground text-balance text-lg">Here&apos;s the shift we aim for: less admin drag, faster execution, and workflows teams actually use.</p>
                    </div>
                </div>
            </Container>
            <Container
                asGrid
                className="@4xl:grid-cols-23">
                <div className="@max-4xl:hidden col-span-2">
                    <div data-grid-content />
                </div>

                <div className="@4xl:col-span-19 relative">
                    <FeatureCard>
                        <FeatureCardContent className="bg-card! relative">
                            <div className="z-1 relative">
                                <div className="max-w-md">
                                    <p className="text-indigo-600 mb-4 text-sm font-semibold">Typical Outcome</p>
                                    <p className="text-foreground text-2xl font-normal">
                                        Replace manual admin and handoffs with <span className="font-medium">agent workflows across your existing tools</span> so owners and operators can focus on growth work.
                                    </p>
                                </div>

                                <p className='mt-12 max-w-lg text-xl before:mr-1 before:font-serif before:content-["\201C"] after:ml-1 after:font-serif after:content-["\201D"]'>You don&apos;t need another consultant handing you docs. You need someone to implement Open Claw and Claude Code workflows with your team and make sure they run in production.</p>
                            </div>
                            <div className="dither mask-radial-from-35% mask-radial-at-right mask-radial-[100%_90%] absolute inset-y-1 left-1/3 right-1 overflow-hidden rounded-xl">
                                <Image
                                    src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1759211705/grid-2-testimonial-bg_rt6glq.webp"
                                    alt=""
                                    className="size-full object-cover contrast-150"
                                    width={1974}
                                    height={1481}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1520px"
                                />
                            </div>

                            <div className="mask-radial-from-35% mask-b-from-65% mask-radial-at-bottom-right mask-radial-[100%_90%] absolute inset-y-1 left-1/3 right-1 overflow-hidden rounded-xl opacity-75">
                                <Image
                                    src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1759211705/grid-2-testimonial-bg_rt6glq.webp"
                                    alt=""
                                    className="size-full object-cover"
                                    width={1974}
                                    height={1481}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1520px"
                                />
                            </div>
                        </FeatureCardContent>

                        <FeatureCardCIllustration className="@4xl:px-0 @4xl:pb-0 @4xl:pt-0 px-0 pb-0 pt-0">
                            <div className="bg-card @4xl:px-12 grid w-full grid-cols-[1fr_auto] p-6">
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                    <div className="bg-muted text-foreground flex size-10 items-center justify-center rounded-lg text-sm font-bold">
                                        TJ
                                    </div>

                                    <div className="text-base *:block">
                                        <span className="text-foreground font-medium">Built for SMB Operators</span>
                                        <span className="text-muted-foreground text-sm">Owner-led teams</span>
                                    </div>
                                </div>
                            </div>
                        </FeatureCardCIllustration>
                    </FeatureCard>
                </div>

                <div className="@max-4xl:hidden col-span-2">
                    <div data-grid-content />
                </div>
            </Container>

            <Separator className="h-12" />

            <Container
                asGrid
                className="@2xl:grid-cols-2 @4xl:grid-cols-23">
                <div className="@max-4xl:hidden col-span-2">
                    <div data-grid-content />
                </div>

                <div className="@4xl:col-span-9 relative">
                    <FeatureCard>
                        <FeatureCardContent className="bg-card!">
                            <p className='text-lg before:mr-1 before:font-serif before:content-["\201C"] after:ml-1 after:font-serif after:content-["\201D"] lg:text-xl'>Open Claw gave us the flexibility we wanted, and Claude Code gave us the execution layer we were missing. The combination made our workflows dependable.</p>
                        </FeatureCardContent>

                        <FeatureCardCIllustration className="@4xl:px-0 @4xl:pb-0 @4xl:pt-0 px-0 pb-0 pt-0">
                            <div className="bg-card @4xl:px-12 grid w-full grid-cols-[1fr_auto] p-6">
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                    <div className="bg-muted text-foreground flex size-10 items-center justify-center rounded-lg text-sm font-bold">
                                        SK
                                    </div>
                                    <div className="text-base *:block">
                                        <span className="text-foreground font-medium">Use Case</span>
                                        <span className="text-muted-foreground text-sm">Content + scheduling automation</span>
                                    </div>
                                </div>
                            </div>
                        </FeatureCardCIllustration>
                    </FeatureCard>
                </div>

                <div className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>

                <div className="@4xl:col-span-9">
                    <FeatureCard className="grid-rows-[1fr_auto]">
                        <FeatureCardContent className="bg-background!">
                            <p className='text-lg before:mr-1 before:font-serif before:content-["\201C"] after:ml-1 after:font-serif after:content-["\201D"] lg:text-xl'>This is not a Zapier or Make clone with new branding. It&apos;s a custom agent system designed around our operating model, with implementation support our team could follow.</p>
                        </FeatureCardContent>

                        <FeatureCardCIllustration className="bg-background! @4xl:px-0 @4xl:pb-0 @4xl:pt-0 px-0 pb-0 pt-0">
                            <div className="border-foreground/10 @3xl:px-12 relative grid w-full grid-cols-[1fr_auto] p-6">
                                <div className="relative grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                    <div className="bg-muted text-foreground flex size-10 items-center justify-center rounded-lg text-sm font-bold">
                                        RM
                                    </div>
                                    <div className="text-base *:block">
                                        <span className="text-foreground font-medium">Use Case</span>
                                        <span className="text-foreground/65 text-sm">Admin + data workflow automation</span>
                                    </div>
                                </div>
                            </div>
                        </FeatureCardCIllustration>
                    </FeatureCard>
                </div>

                <div className="@max-4xl:hidden col-span-2">
                    <div data-grid-content />
                </div>
            </Container>
            <Separator className="h-12" />
        </section>
    )
}

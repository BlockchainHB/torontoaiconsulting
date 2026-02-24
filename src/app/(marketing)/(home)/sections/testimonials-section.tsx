import { Container, Separator } from '@/components/container'
import { FeatureCard, FeatureCardCIllustration, FeatureCardContent } from '@/components/ui/feature-card'
import Image from 'next/image'

export function TestimonialsSection() {
    return (
        <section>
            <Container className="py-16 lg:py-24">
                <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
                    <div className="mx-auto max-w-2xl space-y-6 text-center">
                        <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">What Business Owners Are Saying</h2>
                        <p className="text-muted-foreground text-balance text-lg">Early clients are already seeing results from AI implementation — here&apos;s what they have to say.</p>
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
                                    <p className="text-indigo-600 mb-4 text-sm font-semibold">Featured Result</p>
                                    <p className="text-foreground text-2xl font-normal">
                                        After working with Copenhagen, we <span className="font-medium">automated our lead follow-up process entirely</span> — saving 15+ hours per week and increasing our response rate by 3x.
                                    </p>
                                </div>

                                <p className='mt-12 max-w-lg text-xl before:mr-1 before:font-serif before:content-["\201C"] after:ml-1 after:font-serif after:content-["\201D"]'>Hasaam didn&apos;t just tell us what to do — he sat down and built it with us. The difference between this and every other consulting experience I&apos;ve had is night and day.</p>
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
                                        <span className="text-foreground font-medium">Toronto Business Owner</span>
                                        <span className="text-muted-foreground text-sm">E-commerce, GTA</span>
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
                            <p className='text-lg before:mr-1 before:font-serif before:content-["\201C"] after:ml-1 after:font-serif after:content-["\201D"] lg:text-xl'>We had been putting off AI for months because it felt overwhelming. Hasaam made it simple — we went from zero to a fully automated customer onboarding flow in one week.</p>
                        </FeatureCardContent>

                        <FeatureCardCIllustration className="@4xl:px-0 @4xl:pb-0 @4xl:pt-0 px-0 pb-0 pt-0">
                            <div className="bg-card @4xl:px-12 grid w-full grid-cols-[1fr_auto] p-6">
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                    <div className="bg-muted text-foreground flex size-10 items-center justify-center rounded-lg text-sm font-bold">
                                        SK
                                    </div>
                                    <div className="text-base *:block">
                                        <span className="text-foreground font-medium">Course Creator</span>
                                        <span className="text-muted-foreground text-sm">Online Education</span>
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
                            <p className='text-lg before:mr-1 before:font-serif before:content-["\201C"] after:ml-1 after:font-serif after:content-["\201D"] lg:text-xl'>As a non-technical founder, I was skeptical about AI consulting. But Hasaam speaks my language — business first, tech second. He understood our pain points immediately and built solutions that our whole team could use.</p>
                        </FeatureCardContent>

                        <FeatureCardCIllustration className="bg-background! @4xl:px-0 @4xl:pb-0 @4xl:pt-0 px-0 pb-0 pt-0">
                            <div className="border-foreground/10 @3xl:px-12 relative grid w-full grid-cols-[1fr_auto] p-6">
                                <div className="relative grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                    <div className="bg-muted text-foreground flex size-10 items-center justify-center rounded-lg text-sm font-bold">
                                        RM
                                    </div>
                                    <div className="text-base *:block">
                                        <span className="text-foreground font-medium">Retail Business Owner</span>
                                        <span className="text-foreground/65 text-sm">Markham, ON</span>
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

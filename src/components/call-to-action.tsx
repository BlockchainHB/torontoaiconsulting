import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Container, Separator } from '@/components/container'
import Image from 'next/image'
import { CAL_BOOKING_LINK } from '@/lib/const'

export function CallToAction() {
    return (
        <section
            id="book-call"
            className="relative">
            <Separator className="h-16" />

            <Container className="**:data-[slot=content]:py-0 **:data-[slot=content]:bg-linear-to-b **:data-[slot=content]:from-blue-400 **:data-[slot=content]:to-indigo-500 relative">
                <div
                    aria-hidden
                    className="@max-lg:opacity-50 dither-xs mask-x-from-65% mask-x-to-95% mask-y-from-75% pointer-events-none absolute inset-0 2xl:mx-auto 2xl:max-w-7xl">
                    <Image
                        src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1759211132/grid-2-bg_bqde4m.webp"
                        alt=""
                        className="contrast-35 size-full -scale-x-100 object-cover brightness-75"
                        width={2224}
                        height={1589}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1520px"
                    />
                </div>

                <div
                    aria-hidden
                    className="bg-linear-to-b absolute inset-0 to-purple-600 mix-blend-lighten"
                />

                <div className="@3xl:p-20 @lg:p-8 relative overflow-hidden p-6">
                    <div className="mx-auto max-w-xl text-center">
                        <div className="relative">
                            <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">Ready to Build Your AI Operations Layer?</h2>
                            <p className="text-foreground mb-6 mt-4 text-balance text-lg">Book a 30-minute call to map your first Open Claw and Claude Code workflows. We&apos;ll identify the best starting use cases and the connector setup needed to ship.</p>

                            <Button
                                asChild
                                size="lg"
                                className="border-transparent px-5 text-sm shadow-xl shadow-indigo-900/40">
                                <Link href={CAL_BOOKING_LINK}>Book My Workflow Call</Link>
                            </Button>
                            <span className="text-foreground/75 mt-3 block text-center text-sm">Built for owner-led SMB teams using advanced AI tools</span>
                        </div>
                    </div>
                </div>
            </Container>

            <Separator className="h-16" />
        </section>
    )
}

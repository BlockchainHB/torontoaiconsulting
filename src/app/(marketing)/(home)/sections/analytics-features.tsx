import { ChatIllustration } from '@/components/ui/illustrations/chat-illustration'
import { CurrencyIllustration } from '@/components/ui/illustrations/currency-illustration'
import { FileUploadIllustration } from '@/components/ui/illustrations/file-upload-illustration'
import { ReplyIllustration } from '@/components/ui/illustrations/reply-illustration'
import { DocumentIllustration } from '@/components/ui/illustrations/document-illustration'
import { ScheduleIllustration } from '@/components/ui/illustrations/schedule-illustration'
import { Container } from '@/components/container'

export function AnalyticsFeatures() {
    return (
        <section
            id="how-it-works"
            className="overflow-hidden">
            <Container className="py-16 lg:py-24">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">How It Works</h2>
                    <p className="text-muted-foreground text-balance text-lg">From first call to live AI workflows — a clear, hands-on process built for business owners who want results, not theory.</p>
                </div>
            </Container>

            <Container
                asGrid
                className="**:data-grid-content:p-6 @4xl:**:data-grid-content:p-8 @5xl:**:data-grid-content:p-10 @4xl:grid-cols-10 grid-cols-2">
                <div
                    aria-hidden
                    className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
                <div className="@3xl:grid-cols-6 col-span-8 grid grid-cols-1 gap-px">
                    {/* Row 1 */}
                    <div className="@3xl:col-span-3">
                        <div
                            data-grid-content
                            className="flex h-full flex-col">
                            <div>
                                <h3 className="text-foreground font-medium">Intake & Discovery</h3>
                                <p className="text-muted-foreground mt-2 text-sm">We start with a deep dive into your business — your processes, tools, and pain points. You share what&apos;s slowing you down, and we map every opportunity for AI.</p>
                            </div>
                            <div className="mt-auto pt-6">
                                <ReplyIllustration />
                            </div>
                        </div>
                    </div>
                    <div className="@3xl:col-span-3">
                        <div
                            data-grid-content
                            className="flex h-full flex-col">
                            <div>
                                <h3 className="text-foreground font-medium">Workflow & Skills Design</h3>
                                <p className="text-muted-foreground mt-2 text-sm">We blueprint custom AI workflows and Claude Code skills tailored to your exact operations — from contracts to reporting to client comms.</p>
                            </div>
                            <div className="relative mt-auto flex gap-4 pt-6">
                                <DocumentIllustration />
                                <DocumentIllustration />
                                <DocumentIllustration />
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="@3xl:col-span-3 @4xl:col-span-2">
                        <div
                            data-grid-content
                            className="flex h-full flex-col">
                            <div>
                                <h3 className="text-foreground font-medium">ROI & Cost Mapping</h3>
                                <p className="text-muted-foreground mt-2 text-sm">See exactly where AI saves you time and money with clear projections before we build anything.</p>
                            </div>
                            <div className="mt-auto pt-6">
                                <CurrencyIllustration />
                            </div>
                        </div>
                    </div>
                    <div className="@3xl:col-span-3 @4xl:col-span-4">
                        <div
                            data-grid-content
                            className="flex h-full flex-col">
                            <div>
                                <h3 className="text-foreground font-medium">AI Agent Setup</h3>
                                <p className="text-muted-foreground mt-2 text-sm">We build and deploy your AI agents hands-on — chatbots, automations, and intelligent workflows that handle real tasks so your team can focus on growth.</p>
                            </div>
                            <div className="mt-auto pt-6">
                                <ChatIllustration />
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="@3xl:col-span-3">
                        <div
                            data-grid-content
                            className="flex h-full flex-col">
                            <div>
                                <h3 className="text-foreground font-medium">Ongoing Optimization</h3>
                                <p className="text-muted-foreground mt-2 text-sm">Regular sessions to fine-tune your AI workflows, add new skills, and adapt as your business evolves. We stay hands-on so nothing stalls.</p>
                            </div>
                            <div className="mt-auto pt-6">
                                <ScheduleIllustration className="pl-9 pt-6" />
                            </div>
                        </div>
                    </div>
                    <div className="@3xl:col-span-3">
                        <div
                            data-grid-content
                            className="flex h-full flex-col">
                            <div>
                                <h3 className="text-foreground font-medium">Deployment & Monitoring</h3>
                                <p className="text-muted-foreground mt-2 text-sm">Your AI workflows go live with full monitoring. We track performance, catch issues early, and make sure everything runs smoothly from day one.</p>
                            </div>
                            <div className="mt-auto pt-6">
                                <FileUploadIllustration variant="mixed" />
                            </div>
                        </div>
                    </div>
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

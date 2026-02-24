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
                    <p className="text-muted-foreground text-balance text-lg">A practical path for owners adopting advanced AI: connect systems, launch agents, and ship workflows your team will actually use.</p>
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
                                <h3 className="text-foreground font-medium">Business Workflow Intake</h3>
                                <p className="text-muted-foreground mt-2 text-sm">We review your current operations and identify repetitive admin, reporting, scheduling, and communication tasks that should be automated first.</p>
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
                                <h3 className="text-foreground font-medium">Agent and Workflow Design</h3>
                                <p className="text-muted-foreground mt-2 text-sm">We define Open Claw agent roles, Claude Code workflow specs, and tool permissions so each workflow is usable, safe, and repeatable.</p>
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
                                <h3 className="text-foreground font-medium">Connector and Access Setup</h3>
                                <p className="text-muted-foreground mt-2 text-sm">We configure MCP and API connectors so agents can read and act across the systems your business already depends on.</p>
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
                                <h3 className="text-foreground font-medium">Build and Deploy</h3>
                                <p className="text-muted-foreground mt-2 text-sm">We ship production workflows for data analysis, content creation, scheduling, and virtual assistant tasks with measurable outputs.</p>
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
                                <h3 className="text-foreground font-medium">Team Enablement</h3>
                                <p className="text-muted-foreground mt-2 text-sm">We train your team on exactly how to run each workflow so automation stays adopted instead of becoming shelfware.</p>
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
                                <h3 className="text-foreground font-medium">Optimization and Expansion</h3>
                                <p className="text-muted-foreground mt-2 text-sm">After launch, we tune workflows, improve reliability, and add new agent capabilities as your business goals evolve.</p>
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

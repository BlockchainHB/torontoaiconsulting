import { ChatIllustration } from "@/components/ui/illustrations/chat-illustration"
import { CurrencyIllustration } from "@/components/ui/illustrations/currency-illustration"
import { FileUploadIllustration } from "@/components/ui/illustrations/file-upload-illustration"
import { ReplyIllustration } from "@/components/ui/illustrations/reply-illustration"
import { DocumentIllustration } from "@/components/ui/illustrations/document-illustration"
import { ScheduleIllustration } from "@/components/ui/illustrations/schedule-illustration"

export default function FeaturesSection12() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="@3xl:grid-cols-6 @3xl:*:p-12 grid border *:p-8">
                    <div className="@3xl:col-span-3 @3xl:gap-12 @3xl:border-r row-span-2 grid grid-rows-subgrid gap-8 border-b">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Real-time Collaboration</h3>
                            <p className="text-muted-foreground mt-4 text-lg">Work together with your team in real-time. Edit documents, leave comments, and see changes instantly as they happen.</p>
                        </div>
                        <ReplyIllustration />
                    </div>
                    <div className="@3xl:col-span-3 @3xl:gap-12 row-span-2 grid grid-rows-subgrid gap-8 border-b">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Smart Document Management</h3>
                            <p className="text-muted-foreground mt-4 text-lg">Organize and access your documents efficiently with intelligent categorization and powerful search capabilities.</p>
                        </div>
                        <div className="relative flex gap-4 self-end">
                            <DocumentIllustration />
                            <DocumentIllustration />
                            <DocumentIllustration />
                        </div>
                    </div>
                    <div className="@3xl:col-span-3 @4xl:col-span-2 @max-3xl:border-b @3xl:gap-12 @3xl:border-r row-span-2 grid grid-rows-subgrid gap-8">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Financial Analytics</h3>
                            <p className="text-muted-foreground mt-4 text-lg">Gain valuable insights from comprehensive financial reports and visualizations.</p>
                        </div>
                        <div className="self-end">
                            <CurrencyIllustration />
                        </div>
                    </div>
                    <div className="@3xl:col-span-3 @4xl:col-span-4 @3xl:gap-12 row-span-2 grid grid-rows-subgrid gap-8">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">AI-Powered Support</h3>
                            <p className="text-muted-foreground mt-4 text-lg">Get instant answers to your questions with our intelligent chatbot. Resolve issues quickly and access helpful resources whenever you need them.</p>
                        </div>
                        <ChatIllustration />
                    </div>
                    <div className="@3xl:col-span-3 @3xl:gap-12 @3xl:border-r row-span-2 grid grid-rows-subgrid gap-8 border-t">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Automated Scheduling</h3>
                            <p className="text-muted-foreground mt-4 text-lg">Streamline your calendar with intelligent scheduling that finds the perfect meeting times based on everyone's availability.</p>
                        </div>
                        <ScheduleIllustration className="pl-9 pt-12" />
                    </div>
                    <div className="@3xl:col-span-3 @3xl:gap-12 row-span-2 grid grid-rows-subgrid gap-8 border-t">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Secure File Sharing</h3>
                            <p className="text-muted-foreground mt-4 text-lg">Share files with confidence using enterprise-grade encryption and granular permission controls to protect sensitive information.</p>
                        </div>
                        <FileUploadIllustration variant="mixed" />
                    </div>
                </div>
            </div>
        </section>
    )
}
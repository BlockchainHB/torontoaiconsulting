import { Check, CircleDashed, FileText, Mail, RefreshCw, Users } from 'lucide-react'

export const AgentWorkflowIllustration = () => {
    return (
        <div
            aria-hidden
            className="min-w-92 mask-b-from-65% before:bg-card before:border-border after:ring-border-illustration after:bg-card/75 before:z-1 before:ring-border-illustration group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:bottom-4 before:top-4 before:rounded-2xl before:ring-1 before:backdrop-blur after:absolute after:inset-x-9 after:bottom-4 after:top-2 after:rounded-2xl after:ring-1">
            <div className="bg-card ring-border-illustration shadow-black/6.5 relative z-10 rounded-t-2xl p-6 shadow-lg ring-1">
                <div className="text-base font-medium">Agent Run — Weekly Ops</div>

                <div className="mt-4 space-y-0.5">
                    <div className="flex items-center gap-3">
                        <LogoContainer>
                            <FileText className="size-4" />
                        </LogoContainer>
                        <div className="flex-1 space-y-1">
                            <div className="text-foreground text-sm font-medium">Invoice Processing</div>
                            <div className="text-muted-foreground text-xs">Scanned 47 invoices from email</div>
                        </div>
                        <div className="flex size-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            <Check className="size-3.5" />
                        </div>
                    </div>

                    <div className="border-border ml-5 border-l border-dashed py-3.5"></div>

                    <div className="flex items-center gap-3">
                        <LogoContainer>
                            <Users className="size-4 text-emerald-600 dark:text-emerald-400" />
                        </LogoContainer>
                        <div className="flex-1 space-y-1">
                            <div className="text-foreground text-sm font-medium">CRM Update</div>
                            <div className="text-muted-foreground text-xs">Synced 23 new leads to pipeline</div>
                        </div>
                        <div className="flex size-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            <Check className="size-3.5" />
                        </div>
                    </div>

                    <div className="border-border ml-5 border-l border-dashed py-3.5"></div>

                    <div className="flex items-center gap-3">
                        <LogoContainer>
                            <RefreshCw className="size-4 text-blue-600 dark:text-blue-400" />
                        </LogoContainer>
                        <div className="flex-1 space-y-1">
                            <div className="text-foreground text-sm font-medium">Report Generation</div>
                            <div className="text-muted-foreground text-xs">Compiling weekly ops summary</div>
                        </div>
                        <div className="flex size-6 animate-pulse rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                            <CircleDashed className="m-auto size-4 animate-spin" />
                        </div>
                    </div>

                    <div className="border-border ml-5 border-l border-dashed py-3 opacity-50"></div>

                    <div className="flex items-center gap-3 opacity-50">
                        <LogoContainer>
                            <Mail className="size-4" />
                        </LogoContainer>
                        <div className="flex-1 space-y-1">
                            <div className="text-foreground text-sm font-medium">Client Follow-ups</div>
                            <div className="text-muted-foreground text-xs">Queue 8 follow-up emails</div>
                        </div>
                        <div className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">Pending</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const LogoContainer = ({ children }: { children: React.ReactNode }) => {
    return <div className="bg-linear-to-b from-muted to-background ring-border-illustration inset-ring-3 inset-ring-background bg-card flex size-10 items-center justify-center rounded-lg shadow-md ring-1">{children}</div>
}

export default AgentWorkflowIllustration

import { Search, Sparkles, Terminal, FileText } from 'lucide-react'

type Result = {
    title: string
    content: string
    filename: string
    fileIcon: React.ReactNode
}

export const AiSearchIllustration = () => {
    const results: Result[] = [
        {
            title: 'Invoice Processing Workflow',
            content: 'Auto-extract line items from supplier invoices, match to POs, and flag discrepancies...',
            filename: '/skills/invoice-processor',
            fileIcon: <Terminal className="size-6 text-indigo-500" />,
        },
        {
            title: 'Weekly Ops Report Generator',
            content: 'Pull KPIs from your CRM, warehouse, and ad accounts into a single executive summary...',
            filename: '/skills/ops-report',
            fileIcon: <FileText className="size-6 text-purple-500" />,
        },
    ]

    return (
        <div
            aria-hidden
            className="min-w-sm relative max-w-lg">
            <div className="perspective-dramatic flex flex-col gap-4">
                <div className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top-left rotate-x-2 rotate-z-6 -rotate-4 space-y-3 pl-6 pt-1">
                    <div className="ring-border-illustration flex items-center gap-2 rounded-xl py-2.5 pl-4 pr-2.5 ring-1">
                        <Search className="text-muted-foreground size-4 shrink-0" />
                        <span className="flex-1 text-xs">Find a workflow for invoices</span>
                        <div className="bg-primary/10 ring-primary/20 flex items-center gap-1 rounded-md px-2 py-1 ring-1">
                            <Sparkles className="text-primary size-3" />
                            <span className="text-primary text-xs">AI</span>
                        </div>
                    </div>
                    <div className="bg-card/75 ring-border-illustration shadow-black/6.5 rounded-2xl p-1 shadow-lg ring-1">
                        <div className="space-y-1">
                            {results.map((result, index) => (
                                <div
                                    key={index}
                                    className="not-first:hover:bg-foreground/5 first:bg-illustration flex cursor-pointer select-none gap-3 rounded-xl p-4 first:shadow first:shadow-black/5 first:ring-1 first:ring-emerald-500/50">
                                    <div>{result.fileIcon}</div>

                                    <div className="flex-1 space-y-1">
                                        <div className="font-medium">{result.title}</div>
                                        <span className="text-muted-foreground text-sm leading-relaxed">{result.content}</span>
                                        <span className="text-foreground mt-2 block text-xs">
                                            Found in <span className="text-muted-foreground"> {result.filename}</span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AiSearchIllustration

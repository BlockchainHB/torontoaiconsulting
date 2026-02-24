export const ChatIllustration = () => {
    return (
        <div
            aria-hidden
            className="flex flex-col gap-6">
            <div>
                <div className="flex items-center gap-2">
                    <span className="text-muted-foreground text-xs">Mon 2 Mar</span>
                </div>
                <div className="rounded-(--radius) bg-primary inset-ring-foreground/20 inset-ring-1 max-w-3/5 mt-1.5 ml-auto w-fit rounded-br p-3 text-xs text-white shadow shadow-black/15">Summarize this week&apos;s client invoices.</div>
            </div>

            <div>
                <div className="rounded-(--radius) bg-card ring-foreground/5 mb-1 w-3/5 w-fit rounded-tl p-3 text-xs shadow ring-1">Processed 12 invoices. Total: $8,400. 3 overdue — follow-ups scheduled.</div>
                <span className="text-muted-foreground block text-left text-xs">Now</span>
            </div>
        </div>
    )
}
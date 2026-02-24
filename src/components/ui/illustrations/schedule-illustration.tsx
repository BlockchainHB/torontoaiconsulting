import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Calendar1, Bold, Italic, Strikethrough, Underline, Ellipsis } from 'lucide-react'

export const ScheduleIllustration = ({ className }: { className?: string }) => {
    return (
        <div
            aria-hidden
            className={cn('relative pt-8', className)}>
            <div className={cn('bg-background -translate-x-1/8 shadow-black/6.5 border-foreground/10 absolute flex -translate-y-[110%] items-center gap-2 rounded-xl border p-1 shadow-md')}>
                <div
                    className={buttonVariants({
                        size: 'sm',
                        variant: 'default',
                        className: 'ml-0.5 [--color-primary-foreground:var(--color-white)]',
                    })}>
                    <Calendar1 className="size-3" />
                    <span className="text-sm font-medium">Schedule</span>
                </div>
                <span className="bg-border block h-4 w-px"></span>
                <ToggleGroup
                    type="multiple"
                    size="sm"
                    className="gap-0.5 *:rounded-md">
                    <ToggleGroupItem
                        value="bold"
                        aria-label="Toggle bold">
                        <Bold className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic">
                        <Italic className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="underline"
                        aria-label="Toggle underline">
                        <Underline className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="strikethrough"
                        aria-label="Toggle strikethrough">
                        <Strikethrough className="size-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
                <span className="bg-border block h-4 w-px"></span>
                <div
                    className={buttonVariants({
                        size: 'icon',
                        variant: 'ghost',
                    })}>
                    <Ellipsis className="size-3" />
                </div>
            </div>
            <span>
                <span className="bg-primary/10 text-foreground text-primary py-1 font-medium">Next Tuesday 10:00 am</span> — optimization review.
            </span>
        </div>
    )
}
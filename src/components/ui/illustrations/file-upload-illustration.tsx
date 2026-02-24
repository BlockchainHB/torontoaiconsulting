import { cn } from '@/lib/utils'

interface IllustrationProps {
    className?: string
    variant?: 'elevated' | 'outlined' | 'mixed'
}

export const FileUploadIllustration = ({ className, variant = 'elevated' }: IllustrationProps) => {
    return (
        <div
            aria-hidden
            className={cn('relative w-full', className)}>
            <div
                className={cn('bg-illustration group relative grid w-full gap-2.5 rounded-2xl p-4 text-xs duration-300 [grid-template-columns:auto_1fr]', {
                    'shadow-black/6.5 shadow-lg': variant === 'elevated',
                    border: variant === 'outlined',
                    'ring-border-illustration shadow-black/6.5 border border-transparent shadow-md ring-1': variant === 'mixed',
                })}>
                <div className="relative h-fit">
                    <div className="absolute -left-1.5 bottom-1.5 rounded-md border-t border-indigo-700 bg-indigo-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-indigo-500/35">YAML</div>
                    <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-gray-100 to-gray-200" />
                </div>
                <div className="mt-0.5">
                    <div className="text-sm font-medium">crm-automation.yaml</div>
                    <div className="before:bg-primary bg-foreground/5 relative my-1.5 h-1 overflow-hidden rounded-full before:absolute before:inset-0 before:w-1/3 before:rounded-r-full before:delay-150 before:duration-300 group-hover:before:w-2/3" />
                    <div className="text-muted-foreground text-xs">Deploying workflow...</div>
                </div>
            </div>
        </div>
    )
}
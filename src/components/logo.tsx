import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <div className={cn('bg-linear-to-br from-indigo-500 to-purple-600 flex size-7 items-center justify-center rounded-lg', uniColor && 'bg-current')}>
                <Sparkles className="size-4 text-white" />
            </div>
            <span className="text-foreground text-lg font-semibold tracking-tight">Copenhagen</span>
        </div>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn('bg-linear-to-br from-indigo-500 to-purple-600 flex size-7 items-center justify-center rounded-lg', uniColor && 'bg-current', className)}>
            <Sparkles className="size-4 text-white" />
        </div>
    )
}

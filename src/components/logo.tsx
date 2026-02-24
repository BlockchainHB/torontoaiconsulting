import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <div className={cn('relative size-7 overflow-hidden rounded-lg', uniColor && 'bg-current')}>
                <Image
                    src="/logo-toronto-ai-consulting.png"
                    alt="Toronto AI Consulting logo"
                    fill
                    className="object-contain"
                    sizes="28px"
                    priority
                />
            </div>
            <span className="text-foreground text-lg font-semibold tracking-tight">Toronto AI Consulting</span>
        </div>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn('relative size-7 overflow-hidden rounded-lg', uniColor && 'bg-current', className)}>
            <Image
                src="/logo-toronto-ai-consulting.png"
                alt="Toronto AI Consulting logo icon"
                fill
                className="object-contain"
                sizes="28px"
            />
        </div>
    )
}

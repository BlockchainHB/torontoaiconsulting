import { cn } from '@/lib/utils'
import { AtSign, Paperclip, Smile } from 'lucide-react'

export const ReplyIllustration = ({ className }: { className?: string }) => {
    return (
        <div
            aria-hidden
            className={cn('bg-illustration ring-border-illustration shadow-black/6.5 shadow-black/6.5 mt-12 flex origin-bottom flex-col space-y-4 rounded-2xl border border-transparent px-4 pb-2 pt-4 shadow ring-1', className)}>
            <p className="text-primary text-sm font-medium">
                @Hasaam <span className="text-muted-foreground font-normal">Mapped 4 automation opportunities</span>
            </p>

            <div className="text-muted-foreground *:hover:text-foreground -ml-1.5 flex">
                <div className="hover:text-foreground hover:bg-muted flex size-7 rounded-full">
                    <AtSign className="m-auto size-4" />
                </div>
                <div className="hover:text-foreground hover:bg-muted flex size-7 rounded-full">
                    <Smile className="m-auto size-4" />
                </div>
                <div className="hover:text-foreground hover:bg-muted flex size-7 rounded-full">
                    <Paperclip className="m-auto size-4" />
                </div>
            </div>
        </div>
    )
}
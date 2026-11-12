import { cn } from '@/lib/utils'

export function OpenBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.18em] text-foreground uppercase',
        className,
      )}
    >
      <span className="relative flex size-2.5" aria-hidden="true">
        <span className="animate-live-ping absolute inline-flex size-full rounded-full bg-emerald-400" />
        <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
      </span>
      Open 24 Hours
    </span>
  )
}

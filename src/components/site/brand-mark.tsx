import { Link } from '@tanstack/react-router'
import logoUrl from '@/assets/logo.png'
import { cn } from '@/lib/utils'

/** The library's official logo on a white tile so its colours stay true on the dark theme. */
export function LogoGlyph({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'grid h-12 w-14 shrink-0 place-items-center rounded-xl bg-white p-1 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.6)] ring-1 ring-gold/40',
        className,
      )}
    >
      <img
        src={logoUrl}
        alt=""
        width={480}
        height={416}
        decoding="async"
        className="size-full object-contain"
      />
    </span>
  )
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        'group inline-flex items-center gap-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-gold',
        className,
      )}
      aria-label="Ananta Self Study Point – Home"
    >
      <LogoGlyph className="transition-transform duration-500 group-hover:rotate-[-4deg] group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-wide text-foreground sm:text-[1.35rem]">
          Ananta
        </span>
        <span className="mt-1 text-[0.62rem] font-semibold tracking-[0.3em] text-gold uppercase">
          Self Study Point
        </span>
      </span>
    </Link>
  )
}

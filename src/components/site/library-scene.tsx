import { cn } from '@/lib/utils'

/**
 * A purely decorative, CSS-rendered 3D library interior: two receding walls of
 * bookshelves, a glowing arched window and warm pendant lamps. Used as the hero
 * backdrop so the site never depends on stock photography.
 */

const spinePalette = [
  '#1b2c5e',
  '#24386f',
  '#c9a45c',
  '#13204a',
  '#efe6d2',
  '#2e4583',
  '#8a6a32',
  '#3a4f8e',
  '#0f1a3c',
  '#d9c08a',
]

function seeded(i: number) {
  const x = Math.sin(i * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

function Shelf({ row, count = 34 }: { row: number; count?: number }) {
  return (
    <div className="flex h-[16.5%] items-end gap-[2px] border-b-[6px] border-[#3b2c17] px-2 shadow-[0_6px_10px_-4px_rgba(0,0,0,0.6)]">
      {Array.from({ length: count }, (_, i) => {
        const r = seeded(row * 100 + i)
        const h = 62 + r * 34
        const w = 1.6 + seeded(row * 7 + i * 3) * 1.6
        const color = spinePalette[Math.floor(r * spinePalette.length)]
        const lean = seeded(i * 13 + row) > 0.93 ? 'rotate(-8deg)' : undefined
        return (
          <span
            key={i}
            className="block shrink-0 rounded-[1px]"
            style={{
              height: `${h}%`,
              width: `${w}%`,
              background: `linear-gradient(90deg, rgba(0,0,0,.35), transparent 30%, rgba(255,255,255,.12) 55%, rgba(0,0,0,.3)), ${color}`,
              transform: lean,
              transformOrigin: 'bottom left',
            }}
          />
        )
      })}
    </div>
  )
}

function ShelfWall({ side }: { side: 'left' | 'right' }) {
  return (
    <div
      className={cn(
        'absolute top-[6%] h-[78%] w-[62%] bg-gradient-to-b from-[#2a1f12] to-[#160f08] p-[1.2%]',
        side === 'left'
          ? 'left-0 origin-left [transform:rotateY(62deg)]'
          : 'right-0 origin-right [transform:rotateY(-62deg)]',
      )}
      style={{
        boxShadow: 'inset 0 0 80px rgba(0,0,0,.85)',
      }}
    >
      <div className="flex h-full flex-col justify-between">
        {Array.from({ length: 6 }, (_, r) => (
          <Shelf key={r} row={r + (side === 'right' ? 10 : 0)} />
        ))}
      </div>
      <div
        className={cn(
          'pointer-events-none absolute inset-0',
          side === 'left'
            ? 'bg-gradient-to-r from-black/70 via-black/10 to-transparent'
            : 'bg-gradient-to-l from-black/70 via-black/10 to-transparent',
        )}
      />
    </div>
  )
}

function Pendant({ left, delay }: { left: string; delay: string }) {
  return (
    <div
      className="absolute top-0 flex flex-col items-center"
      style={{ left }}
      aria-hidden="true"
    >
      <span className="h-[11vh] w-px bg-gradient-to-b from-transparent to-gold/60" />
      <span className="h-3 w-7 rounded-t-full bg-gradient-to-b from-[#e8cf92] to-[#8a6a32]" />
      <span
        className="animate-glow -mt-1 size-24 rounded-full bg-[radial-gradient(circle,rgba(255,214,140,0.55),rgba(255,190,100,0.12)_45%,transparent_70%)]"
        style={{ animationDelay: delay }}
      />
    </div>
  )
}

export function LibraryScene({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('absolute inset-0 overflow-hidden bg-navy-950', className)}
    >
      {/* back wall with arched window */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,#22356d_0%,#0d1838_45%,#050a18_80%)]" />
      <div className="absolute top-[14%] left-1/2 h-[52%] w-[18%] min-w-28 -translate-x-1/2 rounded-t-full border border-gold/30 bg-[linear-gradient(180deg,rgba(236,216,164,0.35),rgba(120,140,210,0.12)_60%,transparent)] shadow-[0_0_120px_30px_rgba(201,164,92,0.18)]">
        <div className="absolute inset-y-0 left-1/2 w-px bg-gold/30" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gold/25" />
      </div>

      {/* 3D corridor */}
      <div className="absolute inset-0 [perspective:900px] [perspective-origin:50%_42%]">
        <div className="absolute inset-0 [transform-style:preserve-3d]">
          <ShelfWall side="left" />
          <ShelfWall side="right" />
          {/* floor */}
          <div className="absolute -bottom-[30%] left-[-25%] h-[70%] w-[150%] origin-top [transform:rotateX(78deg)] bg-[repeating-linear-gradient(90deg,rgba(201,164,92,0.12)_0_1px,transparent_1px_9%),linear-gradient(180deg,#3a2a15,#120c06)]" />
        </div>
      </div>

      {/* reading table silhouettes */}
      <div className="absolute bottom-[12%] left-1/2 flex w-[46%] -translate-x-1/2 justify-between">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="mb-1 h-8 w-[2px] bg-gold/50" />
            <span className="h-3 w-10 rounded-t-full bg-gradient-to-b from-gold-light to-gold-deep shadow-[0_8px_40px_10px_rgba(255,200,120,0.35)]" />
            <span className="mt-2 h-2 w-24 rounded-sm bg-[#4a361c] shadow-[0_10px_20px_rgba(0,0,0,.6)] sm:w-32" />
          </div>
        ))}
      </div>

      <Pendant left="22%" delay="0s" />
      <Pendant left="48%" delay="1.3s" />
      <Pendant left="74%" delay="2.4s" />

      {/* warm haze + vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(255,190,110,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,10,24,0.9)_100%)]" />
    </div>
  )
}

import { useCallback, useEffect, useRef, useState } from 'react'
import { Camera, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { libraryPhotos, optimized } from '@/lib/photos'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { SocialIcon } from './social-icons'

const AUTOPLAY_MS = 5500

function EmptyPhotos() {
  const instagram = site.socials.find((s) => s.id === 'instagram')!
  return (
    <div className="glass gold-border relative grid aspect-[16/10] place-items-center overflow-hidden rounded-[2rem] p-8 text-center sm:aspect-[21/9]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,164,92,0.12),transparent_65%)]"
      />
      <div className="relative max-w-md space-y-5">
        <span className="icon-tile mx-auto size-16">
          <Camera className="size-7" aria-hidden="true" />
        </span>
        <h3 className="font-display text-3xl text-foreground">
          Library photo tour coming soon
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Fresh photos of our study halls are being added. Until then, follow
          our latest updates on Instagram or visit us in Jehanabad — we are
          open 24 hours.
        </p>
        <a
          href={instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn glass btn-ghost"
        >
          <SocialIcon id="instagram" className="size-4" />
          See us on Instagram
        </a>
        {import.meta.env.DEV && (
          <p className="rounded-xl border border-dashed border-gold/40 px-4 py-3 text-xs text-gold-light">
            Owner: add photos to <code>src/assets/library-photos/</code> and
            they appear here automatically.
          </p>
        )}
      </div>
    </div>
  )
}

export function PhotoSlider() {
  const photos = libraryPhotos
  const count = photos.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [failed, setFailed] = useState<Set<string>>(() => new Set())
  const pointerStart = useRef<{ x: number; y: number } | null>(null)

  const visible = photos.filter((p) => !failed.has(p.src))
  const total = visible.length
  const safeIndex = total ? index % total : 0

  const go = useCallback(
    (dir: number) => {
      if (!total) return
      setIndex((i) => (i + dir + total) % total)
    },
    [total],
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const autoplay = total > 1 && !paused && !userPaused && !reducedMotion

  useEffect(() => {
    if (!autoplay) return
    const t = window.setTimeout(() => go(1), AUTOPLAY_MS)
    return () => window.clearTimeout(t)
  }, [autoplay, go, safeIndex])

  if (count === 0 || total === 0) return <EmptyPhotos />

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY }
  }
  const onPointerUp = (e: React.PointerEvent) => {
    const start = pointerStart.current
    pointerStart.current = null
    if (!start) return
    const dx = e.clientX - start.x
    const dy = e.clientY - start.y
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1)
  }

  return (
    <div
      className="group relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of Ananta Self Study Point"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1)
        if (e.key === 'ArrowLeft') go(-1)
      }}
    >
      <div
        className="gold-border relative aspect-[4/3] touch-pan-y overflow-hidden rounded-[2rem] bg-navy-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] select-none sm:aspect-[16/9] lg:aspect-[21/9]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (pointerStart.current = null)}
      >
        {visible.map((photo, i) => {
          const active = i === safeIndex
          return (
            <figure
              key={photo.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
              aria-hidden={!active}
              className={cn(
                'absolute inset-0 transition-opacity duration-[1200ms] ease-out motion-reduce:transition-none',
                active ? 'z-10 opacity-100' : 'z-0 opacity-0',
              )}
            >
              <img
                src={optimized(photo.src, 1600)}
                srcSet={`${optimized(photo.src, 800)} 800w, ${optimized(photo.src, 1600)} 1600w, ${optimized(photo.src, 2200)} 2200w`}
                sizes="(min-width: 1216px) 1216px, 100vw"
                alt={`${photo.caption} – Ananta Self Study Point, Jehanabad`}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                draggable={false}
                onError={() =>
                  setFailed((prev) => new Set(prev).add(photo.src))
                }
                className={cn(
                  'size-full object-cover transition-transform duration-[7000ms] ease-out motion-reduce:transition-none',
                  active ? 'scale-105' : 'scale-100',
                )}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent px-6 pt-20 pb-14 sm:px-10">
                <span className="font-display text-2xl text-white sm:text-3xl">
                  {photo.caption}
                </span>
              </figcaption>
            </figure>
          )
        })}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="glass absolute top-1/2 left-3 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full text-white transition hover:scale-110 hover:border-gold/60 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none sm:left-5 sm:size-12"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="glass absolute top-1/2 right-3 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full text-white transition hover:scale-110 hover:border-gold/60 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none sm:right-5 sm:size-12"
            >
              <ChevronRight className="size-5" />
            </button>

            <div className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-center gap-4 px-4">
              <div className="glass flex items-center gap-2 rounded-full px-3 py-2">
                {visible.map((p, i) => (
                  <button
                    key={p.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    aria-current={i === safeIndex}
                    className={cn(
                      'h-2 rounded-full transition-all duration-500 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none',
                      i === safeIndex
                        ? 'w-7 bg-gold'
                        : 'w-2 bg-white/40 hover:bg-white/70',
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setUserPaused((v) => !v)}
                aria-label={userPaused ? 'Play slideshow' : 'Pause slideshow'}
                className="glass grid size-9 place-items-center rounded-full text-white focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
              >
                {userPaused ? (
                  <Play className="size-3.5" />
                ) : (
                  <Pause className="size-3.5" />
                )}
              </button>
            </div>

            {autoplay && (
              <span
                key={safeIndex}
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-20 h-[2px] origin-left bg-gradient-to-r from-gold-light to-gold"
                style={{ animation: `slide-progress ${AUTOPLAY_MS}ms linear` }}
              />
            )}
          </>
        )}
      </div>
      <p className="sr-only" aria-live="polite">
        Photo {safeIndex + 1} of {total}: {visible[safeIndex]?.caption}
      </p>
    </div>
  )
}

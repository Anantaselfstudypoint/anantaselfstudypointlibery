import { OpenBadge } from './open-badge'

/** Compact hero used at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: React.ReactNode
  description: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[50rem] -translate-x-1/2 rounded-full bg-navy-700/50 blur-3xl" />
        <div className="absolute top-24 right-[8%] size-40 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)] bg-[size:56px_56px]" />
      </div>
      <div className="container-site relative">
        <div className="mx-auto max-w-3xl animate-in space-y-6 text-center duration-1000 fade-in fill-mode-both slide-in-from-bottom-6 motion-reduce:animate-none">
          <p className="eyebrow justify-center">{eyebrow}</p>
          <h1 className="text-5xl leading-[1.02] font-semibold text-foreground sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
          <OpenBadge />
        </div>
      </div>
    </section>
  )
}

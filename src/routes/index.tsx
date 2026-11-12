import { useRef } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  Armchair,
  ChevronDown,
  Clock,
  Fingerprint,
  Snowflake,
  Wifi,
} from 'lucide-react'
import { LibraryScene } from '@/components/site/library-scene'
import { OpenBadge } from '@/components/site/open-badge'
import { PhotoSlider } from '@/components/site/photo-slider'
import { Reveal } from '@/components/site/reveal'
import { ReviewsPanel } from '@/components/site/reviews-panel'
import { SectionHeading } from '@/components/site/section-heading'
import { SocialIcon } from '@/components/site/social-icons'
import { TiltCard } from '@/components/site/tilt-card'
import { facilities } from '@/lib/facilities'
import { heroImage, libraryTourVideo, optimized } from '@/lib/photos'
import { site } from '@/lib/site'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: site.title + ' | 24 Hour Self Study Library' },
      {
        name: 'description',
        content:
          'Welcome to Ananta Self Study Point, Jehanabad’s premium 24-hour self-study library. 125 comfortable seats, AC halls, high-speed Wi-Fi and a peaceful space to focus on your future.',
      },
    ],
  }),
  component: Home,
})

function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <PhotosSection />
      <IntroSection />
      <HighlightsSection />
      <SocialSection />
      <section className="container-site py-20" aria-labelledby="reviews-heading">
        <SectionHeading
          eyebrow="Student voices"
          title={<span id="reviews-heading">Reviews on Google</span>}
          description="Studied with us? Your honest feedback helps us keep improving and helps other students choose with confidence."
          className="mb-12"
        />
        <ReviewsPanel />
      </section>
    </>
  )
}

function Hero() {
  const ref = useRef<HTMLElement>(null)

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    ref.current.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {heroImage ? (
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <img
            src={optimized(heroImage, 2000)}
            alt=""
            className="size-full scale-105 object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950" />
        </div>
      ) : (
        <LibraryScene className="-z-10" />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,10,24,0.55)_0%,rgba(5,10,24,0.35)_40%,rgba(5,10,24,1)_100%)]"
      />

      <div className="container-site relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-1000 motion-reduce:animate-none">
            <OpenBadge />
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-1000 motion-reduce:animate-none delay-150">
            <h1 className="mt-8 text-[2.9rem] leading-[0.98] font-semibold text-white sm:text-7xl lg:text-[5.6rem]">
              Welcome to{' '}
              <span className="text-gold-gradient block italic">
                Ananta Self Study Point
              </span>
            </h1>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-1000 motion-reduce:animate-none delay-300">
            <p className="mt-7 font-display text-2xl text-white/90 sm:text-3xl">
              Your Space. Your Focus. Your Future.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              {site.tagline} — a premium self-study library in Jehanabad, Bihar.
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-1000 motion-reduce:animate-none delay-500 mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/facilities" className="btn btn-gold !px-7 !py-3.5">
              Explore Our Library
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn glass btn-ghost !px-7 !py-3.5">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Floating 3D glass cards */}
        <FloatCard
          className="top-[8%] left-0 hidden lg:flex"
          depth={-26}
          rotate="-6deg"
          icon={<Armchair className="size-5" />}
          value="125"
          label="Study seats"
        />
        <FloatCard
          className="top-[58%] left-[3%] hidden xl:flex"
          depth={18}
          rotate="4deg"
          icon={<Snowflake className="size-5" />}
          value="AC"
          label="Study halls"
          delay="1.5s"
        />
        <FloatCard
          className="top-[12%] right-0 hidden lg:flex"
          depth={22}
          rotate="5deg"
          icon={<Clock className="size-5" />}
          value="24/7"
          label="Always open"
          delay="0.8s"
        />
        <FloatCard
          className="top-[60%] right-[3%] hidden xl:flex"
          depth={-18}
          rotate="-4deg"
          icon={<Wifi className="size-5" />}
          value="Wi-Fi"
          label="High speed"
          delay="2.2s"
        />
      </div>

      <a
        href="#photos"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-[0.65rem] tracking-[0.3em] text-white/60 uppercase transition-colors hover:text-gold-light"
      >
        Scroll
        <ChevronDown className="animate-float-slow size-4" aria-hidden="true" />
      </a>
    </section>
  )
}

function FloatCard({
  className,
  depth,
  rotate,
  icon,
  value,
  label,
  delay = '0s',
}: {
  className: string
  depth: number
  rotate: string
  icon: React.ReactNode
  value: string
  label: string
  delay?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `translate3d(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth}px), 0)`,
      }}
    >
      <div
        className="glass gold-border animate-float-slow flex items-center gap-3 rounded-2xl px-4 py-3"
        style={{ '--r': rotate, animationDelay: delay } as React.CSSProperties}
      >
        <span className="icon-tile size-10">{icon}</span>
        <span className="text-left leading-tight">
          <span className="block font-display text-2xl font-semibold text-white">
            {value}
          </span>
          <span className="text-[0.7rem] tracking-[0.18em] text-white/60 uppercase">
            {label}
          </span>
        </span>
      </div>
    </div>
  )
}

function StatsStrip() {
  const stats = [
    { value: '125', label: 'Comfortable seats' },
    { value: '24', label: 'Hours open, daily' },
    { value: '4', label: 'Study halls' },
    { value: 'Wi-Fi', label: 'High-speed internet' },
  ]
  return (
    <section aria-label="Library at a glance" className="container-site -mt-10 relative z-10">
      <Reveal>
        <dl className="glass gold-border grid grid-cols-2 divide-border rounded-3xl sm:grid-cols-4 sm:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-7 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl font-semibold text-gold-gradient sm:text-5xl">
                {s.value}
              </dd>
              <dd className="mt-1 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}

function PhotosSection() {
  return (
    <section id="photos" className="container-site scroll-mt-24 py-24" aria-labelledby="photos-heading">
      <SectionHeading
        eyebrow="Inside Ananta"
        title={<span id="photos-heading">A glimpse of our library</span>}
        description="Step inside the calm, well-lit study halls where students build their daily routine."
        className="mb-12"
      />
      <Reveal>
        <PhotoSlider />
      </Reveal>
      <Reveal className="mt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4 text-center lg:text-left">
            <p className="eyebrow">Video tour</p>
            <h3 className="font-display text-3xl text-foreground sm:text-4xl">
              Walk through <span className="text-gold-gradient italic">Ananta</span>
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Take a quick look around our study hall before you visit.
            </p>
          </div>
          <div className="gold-border overflow-hidden rounded-[2rem] bg-navy-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
            <video
              src={libraryTourVideo}
              controls
              playsInline
              preload="metadata"
              className="aspect-video size-full bg-black object-contain"
              aria-label="Video tour of Ananta Self Study Point"
            />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="container-site py-20" aria-labelledby="intro-heading">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            align="left"
            eyebrow="About the library"
            title={
              <span id="intro-heading">
                A quiet place built for{' '}
                <span className="text-gold-gradient italic">serious study</span>
              </span>
            }
          />
          <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Ananta Self Study Point is a dedicated self-study library in
              Jehanabad, Bihar, designed to give students a peaceful,
              comfortable and focused learning environment — day or night.
            </p>
            <p>
              Whether you are preparing for competitive exams, board exams or
              university studies, Ananta gives you the discipline, consistency
              and concentration you need to move closer to your goals.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 font-semibold text-gold-light"
            >
              Read our story
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="relative mx-auto aspect-square max-w-md [perspective:1200px]">
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
            <div className="glass gold-border absolute inset-[8%] grid place-items-center rounded-[2.5rem] [transform:rotateX(10deg)_rotateY(-14deg)] shadow-[30px_40px_80px_-30px_rgba(0,0,0,0.9)]">
              <div className="text-center">
                <p className="font-display text-8xl font-semibold text-gold-gradient sm:text-9xl">
                  24
                </p>
                <p className="text-sm tracking-[0.4em] text-foreground/80 uppercase">
                  Hours · Every day
                </p>
              </div>
            </div>
            <div className="glass absolute -top-2 right-2 flex items-center gap-3 rounded-2xl px-4 py-3 animate-float-slow">
              <Fingerprint className="size-5 text-gold" aria-hidden="true" />
              <span className="text-sm text-foreground">Biometric entry</span>
            </div>
            <div
              className="glass absolute bottom-2 left-0 flex items-center gap-3 rounded-2xl px-4 py-3 animate-float-slow"
              style={{ animationDelay: '1.6s' }}
            >
              <Armchair className="size-5 text-gold" aria-hidden="true" />
              <span className="text-sm text-foreground">125 seats</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function HighlightsSection() {
  const highlights = facilities.slice(0, 4)
  return (
    <section className="container-site py-20" aria-labelledby="features-heading">
      <SectionHeading
        eyebrow="Why students choose Ananta"
        title={<span id="features-heading">Designed for deep focus</span>}
        description="Thoughtful facilities that remove distractions, so all that remains is you and your goals."
        className="mb-14"
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((f, i) => (
          <Reveal as="li" key={f.title} delay={i * 90}>
            <TiltCard className="p-7">
              <span className="icon-tile">
                <f.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </TiltCard>
          </Reveal>
        ))}
      </ul>
      <Reveal className="mt-12 text-center">
        <Link to="/facilities" className="btn glass btn-ghost">
          View all facilities
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  )
}

function SocialSection() {
  return (
    <section className="container-site py-20" aria-labelledby="social-heading">
      <SectionHeading
        eyebrow="Stay connected"
        title={<span id="social-heading">Follow Ananta online</span>}
        description="Updates, study motivation and life inside the library."
        className="mb-12"
      />
      <ul className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
        {site.socials.map((s, i) => (
          <Reveal as="li" key={s.id} delay={i * 90}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label}: ${s.handle} (opens in a new tab)`}
              className="glass gold-border card-premium group flex items-center gap-4 p-5 hover:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
            >
              <span
                className={
                  'grid size-12 shrink-0 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg] ' +
                  (s.id === 'facebook'
                    ? 'bg-[#1877F2]'
                    : s.id === 'instagram'
                      ? 'bg-[linear-gradient(45deg,#F58529,#DD2A7B_50%,#8134AF_80%,#515BD4)]'
                      : 'bg-[#FF0000]')
                }
              >
                <SocialIcon id={s.id} className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-foreground">{s.label}</span>
                <span className="block truncate text-xs text-muted-foreground">
                  {s.handle}
                </span>
              </span>
              <ArrowRight className="ml-auto size-4 shrink-0 text-gold opacity-60 transition-all group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true" />
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import { Armchair, Clock, Crown, Repeat, Target, UserRound, Zap } from 'lucide-react'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { TiltCard } from '@/components/site/tilt-card'
import { site } from '@/lib/site'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us | ' + site.title },
      {
        name: 'description',
        content:
          'Learn about Ananta Self Study Point, a dedicated 24-hour self-study library in Jehanabad, Bihar with 125 seats, owned by Sonu Kumar and managed by Dheeraj.',
      },
    ],
  }),
  component: AboutPage,
})

const details = [
  { icon: Crown, label: 'Owner', value: site.owner },
  { icon: UserRound, label: 'Management / Administrator', value: site.administrator },
  { icon: Armchair, label: 'Total Seating Capacity', value: `${site.seats} Seats` },
  { icon: Clock, label: 'Availability', value: site.hours },
]

const values = [
  {
    icon: Target,
    title: 'Discipline',
    text: 'A structured, rule-respecting space where every student can build a serious study habit.',
  },
  {
    icon: Repeat,
    title: 'Consistency',
    text: 'Open around the clock so you can follow the routine that works best for you, every single day.',
  },
  {
    icon: Zap,
    title: 'Concentration',
    text: 'A calm, distraction-free atmosphere that lets you go deep into your subjects for hours.',
  },
]

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            A focused home for{' '}
            <span className="text-gold-gradient italic">ambitious students</span>
          </>
        }
        description="Ananta Self Study Point is a dedicated self-study library in Jehanabad, Bihar, designed to provide students with a peaceful, comfortable and focused learning environment."
      />

      <section className="container-site py-12" aria-labelledby="story-heading">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Our purpose"
              title={<span id="story-heading">Why Ananta exists</span>}
            />
            <Reveal delay={100} className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Ananta Self Study Point is a dedicated self-study library in
                Jehanabad, Bihar, designed to provide students with a peaceful,
                comfortable and focused learning environment.
              </p>
              <p className="glass gold-border rounded-2xl p-6 font-display text-2xl leading-snug text-foreground italic">
                “Our goal is to help students study with discipline,
                consistency and concentration.”
              </p>
              <p>
                With {site.seats} comfortable seats, air-conditioned halls,
                high-speed Wi-Fi and secure biometric entry, Ananta gives every
                student a reliable place to show up, sit down and do the work —
                at any hour of the day or night.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 90}>
                <TiltCard className="p-6">
                  <span className="icon-tile">
                    <d.icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    {d.label}
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold text-foreground">
                    {d.value}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20" aria-labelledby="values-heading">
        <SectionHeading
          eyebrow="What we stand for"
          title={<span id="values-heading">Three pillars of success</span>}
          className="mb-12"
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 100}>
              <TiltCard className="p-8 text-center">
                <span className="icon-tile mx-auto size-14">
                  <v.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-3xl font-semibold text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import { Info, Snowflake } from 'lucide-react'
import { CtaBand } from '@/components/site/cta-band'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { TiltCard } from '@/components/site/tilt-card'
import { acSchedule, facilities } from '@/lib/facilities'
import { site } from '@/lib/site'

export const Route = createFileRoute('/facilities')({
  head: () => ({
    meta: [
      { title: 'Facilities | ' + site.title },
      {
        name: 'description',
        content:
          '125 comfortable seats, air-conditioned study halls, high-speed Wi-Fi, water cooler, biometric entry and student ID cards at Ananta Self Study Point, Jehanabad.',
      },
    ],
  }),
  component: FacilitiesPage,
})

function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title={
          <>
            Everything you need to{' '}
            <span className="text-gold-gradient italic">stay focused</span>
          </>
        }
        description="Premium comforts, modern security and a calm atmosphere — thoughtfully put together so your only job is to study."
      />

      <section className="container-site py-12" aria-label="All facilities">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 4) * 90}>
              <TiltCard className="flex flex-col p-7">
                <span className="flex items-center justify-between">
                  <span className="icon-tile">
                    <f.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-4xl text-white/10" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </span>
                <h2 className="mt-6 text-2xl leading-tight font-semibold text-foreground">
                  {f.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container-site py-20" aria-labelledby="ac-heading">
        <SectionHeading
          eyebrow="Air-conditioning"
          title={<span id="ac-heading">AC timings by hall</span>}
          description="AC facility is available in Halls A, C and D from 10 AM to 6 PM. Hall B AC operates when at least 20 students are present."
          className="mb-12"
        />
        <ul className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {acSchedule.map((h, i) => (
            <Reveal as="li" key={h.hall} delay={i * 80}>
              <div className="glass gold-border card-premium h-full p-6 text-center hover:-translate-y-1">
                <Snowflake className="mx-auto size-6 text-sky-300" aria-hidden="true" />
                <p className="mt-4 font-display text-3xl font-semibold text-foreground">
                  {h.hall}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{h.detail}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mx-auto mt-6 max-w-5xl">
          <p className="flex items-start gap-3 rounded-2xl border border-gold/25 bg-gold/5 p-4 text-sm text-foreground/85">
            <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            The library itself stays open 24 hours. AC timings apply to the
            air-conditioning only.
          </p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  )
}

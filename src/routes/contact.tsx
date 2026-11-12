import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Check, Clock, Copy, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import { toast } from 'sonner'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { SocialLinks, WhatsAppIcon } from '@/components/site/social-icons'
import { mailHref, mapsEmbedSrc, mapsLinkHref, site } from '@/lib/site'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact | ' + site.title },
      {
        name: 'description',
        content:
          'Contact Ananta Self Study Point, SN College Road, Madhav Nagar Colony, Jehanabad, Bihar 804417. Call +91 8804610144, WhatsApp or email us. Open 24 hours.',
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const [copied, setCopied] = useState(false)
  const address = site.addressLines.join(' ')

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(`${site.name}, ${address}`)
      setCopied(true)
      toast.success('Address copied')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Could not copy — please select the address manually.')
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Visit, call or{' '}
            <span className="text-gold-gradient italic">say hello</span>
          </>
        }
        description="Have a question about seats, timings or facilities? Reach us any time — we are open 24 hours."
      />

      <section className="container-site py-8" aria-label="Contact details">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Reveal as="li" className="lg:col-span-2">
            <div className="glass gold-border card-premium flex h-full flex-col p-7">
              <span className="icon-tile">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-foreground">{site.name}</h2>
              <address className="mt-2 text-sm leading-relaxed text-muted-foreground not-italic">
                {site.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <a
                  href={mapsLinkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold !px-5 !py-2.5"
                >
                  <Navigation className="size-4" aria-hidden="true" />
                  Get Directions
                </a>
                <button type="button" onClick={copyAddress} className="btn glass btn-ghost !px-5 !py-2.5">
                  {copied ? (
                    <Check className="size-4 text-emerald-400" aria-hidden="true" />
                  ) : (
                    <Copy className="size-4" aria-hidden="true" />
                  )}
                  {copied ? 'Copied' : 'Copy Address'}
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal as="li" delay={90}>
            <a
              href={site.phoneHref}
              className="glass gold-border card-premium group flex h-full flex-col p-7 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
            >
              <span className="icon-tile">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xs font-semibold tracking-[0.2em] text-gold uppercase font-sans">
                Phone
              </h2>
              <p className="mt-2 font-display text-2xl text-foreground">{site.phoneDisplay}</p>
              <p className="mt-auto pt-5 text-sm text-gold-light group-hover:underline">
                Tap to call
              </p>
            </a>
          </Reveal>

          <Reveal as="li" delay={180}>
            <a
              href={mailHref}
              className="glass gold-border card-premium group flex h-full flex-col p-7 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
            >
              <span className="icon-tile">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xs font-semibold tracking-[0.2em] text-gold uppercase font-sans">
                Email
              </h2>
              <p className="mt-2 text-base break-all text-foreground">{site.email}</p>
              <p className="mt-auto pt-5 text-sm text-gold-light group-hover:underline">
                Tap to email
              </p>
            </a>
          </Reveal>
        </ul>

        <Reveal className="mt-6">
          <div className="glass gold-border flex flex-col items-center justify-between gap-6 rounded-3xl p-6 sm:flex-row sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.7)]">
                <WhatsAppIcon className="size-7" />
              </span>
              <div>
                <p className="font-display text-2xl text-foreground">Chat on WhatsApp</p>
                <p className="text-sm text-muted-foreground">
                  Quick answers about seats and admission.
                </p>
              </div>
            </div>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full bg-[#25D366] text-[#05301a] hover:-translate-y-0.5 hover:bg-[#2ee372] sm:w-auto"
            >
              <WhatsAppIcon className="size-4" />
              Message on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      <section className="container-site py-20" aria-labelledby="map-heading">
        <SectionHeading
          eyebrow="Location"
          title={<span id="map-heading">Find us in Jehanabad</span>}
          description="SN College Road, Madhav Nagar Colony (Ward No. 05), Jehanabad, Bihar – 804417."
          className="mb-10"
        />
        <Reveal>
          <div className="gold-border relative overflow-hidden rounded-[2rem] bg-navy-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
            <iframe
              title="Map showing Ananta Self Study Point, Jehanabad"
              src={mapsEmbedSrc}
              className="block h-[420px] w-full border-0 sm:h-[480px] [filter:grayscale(0.25)_contrast(1.05)]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
        <Reveal className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="size-4 text-gold" aria-hidden="true" />
            {site.hours} · All days of the week
          </p>
          <SocialLinks />
        </Reveal>
      </section>
    </>
  )
}

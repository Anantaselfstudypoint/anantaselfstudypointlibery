import { Link } from '@tanstack/react-router'
import { ArrowRight, Phone } from 'lucide-react'
import { site } from '@/lib/site'
import { Reveal } from './reveal'
import { WhatsAppIcon } from './social-icons'

export function CtaBand() {
  return (
    <section className="container-site py-20">
      <Reveal>
        <div className="gold-border relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#13204a,#0a1430_55%,#1b2c5e)] p-10 text-center sm:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,164,92,0.22),transparent_60%)]"
          />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <p className="eyebrow justify-center">Reserve your seat</p>
            <h2 className="text-4xl font-semibold text-foreground sm:text-5xl">
              Your focused study space is{' '}
              <span className="text-gold-gradient italic">waiting</span>.
            </h2>
            <p className="text-muted-foreground">
              Call, message on WhatsApp or drop by any time — we are open 24
              hours, every day.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={site.phoneHref} className="btn btn-gold">
                <Phone className="size-4" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn glass btn-ghost"
              >
                <WhatsAppIcon className="size-4 text-[#25D366]" />
                WhatsApp Us
              </a>
              <Link to="/contact" className="btn glass btn-ghost">
                Contact & Location
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

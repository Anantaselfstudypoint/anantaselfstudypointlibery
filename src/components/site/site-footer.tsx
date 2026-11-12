import { Link } from '@tanstack/react-router'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { mailHref, site } from '@/lib/site'
import { BrandMark } from './brand-mark'
import { SocialLinks } from './social-icons'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
] as const

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-navy-950/80">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container-site relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div className="space-y-5">
          <BrandMark />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.name}
            <br />
            {site.city}
          </p>
          <p className="font-display text-xl text-gold-light italic">
            “{site.tagline}”
          </p>
          <SocialLinks />
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-5 font-sans text-xs font-semibold tracking-[0.28em] text-gold uppercase">
            Quick Links
          </h2>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-foreground/80 transition-colors hover:text-gold-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-5 font-sans text-xs font-semibold tracking-[0.28em] text-gold uppercase">
            Visit Us
          </h2>
          <ul className="space-y-4 text-sm text-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                {site.addressLines.join(' ')}
              </address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={site.phoneHref} className="hover:text-gold-light">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={mailHref} className="break-all hover:text-gold-light">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              {site.hours}, all days
            </li>
          </ul>
        </div>
      </div>
      <div className="container-site">
        <div className="divider-gold" />
        <p className="py-7 text-center text-xs tracking-wide text-muted-foreground">
          © 2026 Ananta Self Study Point. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

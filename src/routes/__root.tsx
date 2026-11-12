import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'

import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { NotFoundPage } from '@/components/error-pages'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { WhatsAppFab } from '@/components/site/whatsapp-fab'
import { site } from '@/lib/site'

import '../styles.css'

const siteName = site.title
const siteDescription =
  'Ananta Self Study Point is a premium 24-hour self-study library in Jehanabad, Bihar with 125 comfortable seats, air-conditioned halls, high-speed Wi-Fi and a peaceful environment to focus on your future.'

const siteUrl = 'https://anantaselfstudypointj.netlify.app'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteName },
      { name: 'description', content: siteDescription },
      { name: 'theme-color', content: '#070d1f' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:title', content: siteName },
      { property: 'og:description', content: siteDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'og:image', content: siteUrl + '/og-image.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '675' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: siteUrl + '/og-image.jpg' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.png', type: 'image/png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Manrope:wght@400;500;600;700&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Library',
          name: site.name,
          slogan: site.tagline,
          telephone: site.phoneDisplay,
          email: site.email,
          openingHours: 'Mo-Su 00:00-23:59',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'Untta, Madarpur, SN College Road, Madhav Nagar Colony (Ward No. 05)',
            addressLocality: 'Jehanabad',
            addressRegion: 'Bihar',
            postalCode: '804417',
            addressCountry: 'IN',
          },
          sameAs: site.socials.map((s) => s.href),
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: NotFoundPage,
})

function RootLayout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-navy-950"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
        <Scripts />
      </body>
    </html>
  )
}

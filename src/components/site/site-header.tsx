import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, Phone } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks, site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { BrandMark } from './brand-mark'
import { SocialLinks } from './social-icons'

function NavItem({
  item,
  onNavigate,
  mobile,
}: {
  item: (typeof navLinks)[number]
  onNavigate?: () => void
  mobile?: boolean
}) {
  const isHashLink = 'hash' in item
  return (
    <Link
      to={item.to}
      hash={isHashLink ? item.hash : undefined}
      onClick={onNavigate}
      activeOptions={{ exact: true, includeHash: isHashLink }}
      activeProps={{
        className: isHashLink ? undefined : 'text-gold-light after:scale-x-100',
      }}
      className={cn(
        'relative rounded-md font-medium text-foreground/80 transition-colors hover:text-gold-light focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none',
        mobile
          ? 'block px-2 py-3 font-display text-3xl'
          : 'px-1 py-2 text-[0.92rem] after:absolute after:inset-x-1 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100',
      )}
    >
      {item.label}
    </Link>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="container-site">
        <div
          className={cn(
            'flex items-center justify-between gap-6 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5',
            scrolled
              ? 'glass bg-navy-950/60'
              : 'border border-transparent bg-transparent',
          )}
        >
          <BrandMark />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <NavItem item={item} />
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="btn btn-gold hidden !px-5 !py-2.5 sm:inline-flex"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </a>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="glass grid size-11 place-items-center rounded-xl text-foreground lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[86%] max-w-sm border-l border-border bg-navy-950/95 p-0 backdrop-blur-xl"
              >
                <SheetHeader className="border-b border-border px-6 py-5">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Site navigation for Ananta Self Study Point
                  </SheetDescription>
                  <BrandMark />
                </SheetHeader>
                <nav aria-label="Mobile" className="px-6 py-4">
                  <ul className="divide-y divide-border">
                    {navLinks.map((item) => (
                      <li key={item.label}>
                        <NavItem
                          item={item}
                          mobile
                          onNavigate={() => setOpen(false)}
                        />
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-auto space-y-5 px-6 pb-8">
                  <a href={site.phoneHref} className="btn btn-gold w-full">
                    <Phone className="size-4" aria-hidden="true" />
                    {site.phoneDisplay}
                  </a>
                  <SocialLinks />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

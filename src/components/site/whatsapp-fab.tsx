import { site } from '@/lib/site'
import { WhatsAppIcon } from './social-icons'

export function WhatsAppFab() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ananta Self Study Point on WhatsApp (opens in a new tab)"
      className="group fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 focus-visible:outline-none motion-reduce:transition-none"
    >
      <span
        aria-hidden="true"
        className="animate-live-ping absolute inset-0 rounded-full bg-[#25D366] opacity-40 [animation-duration:2.6s]"
      />
      <WhatsAppIcon className="relative size-7" />
    </a>
  )
}

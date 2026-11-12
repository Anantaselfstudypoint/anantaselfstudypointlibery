import { ExternalLink, MessageSquareQuote, PenLine } from 'lucide-react'
import { site } from '@/lib/site'
import { GoogleIcon } from './social-icons'
import { Reveal } from './reveal'

/** Google Reviews call-to-action. Shows no invented ratings or testimonials. */
export function ReviewsPanel() {
  return (
    <Reveal>
      <div className="glass gold-border relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-24 size-80 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-2xl bg-white shadow-lg">
                <GoogleIcon className="size-7" />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
                  Google Reviews
                </p>
                <p className="font-display text-2xl text-foreground">
                  {site.name}
                </p>
              </div>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Every review on Google comes from a real student or visitor. If
              Ananta has helped you study with focus and discipline, share your
              experience — it helps other students in Jehanabad find a calm
              place to prepare for their future.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.googleReviewHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <PenLine className="size-4" aria-hidden="true" />
                Write a Google Review
              </a>
              <a
                href={site.googleReadReviewsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn glass btn-ghost"
              >
                Read reviews on Google
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <ol className="space-y-4" aria-label="How to leave a review">
            {[
              'Tap “Write a Google Review” — Google opens in a new tab.',
              'Choose your star rating for Ananta Self Study Point.',
              'Share a few words about the study environment and facilities.',
            ].map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-2xl border border-border bg-white/[0.03] p-4"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold/15 font-display text-lg text-gold-light">
                  {i + 1}
                </span>
                <span className="pt-1 text-sm text-foreground/85">{step}</span>
              </li>
            ))}
            <li className="flex items-center gap-3 px-1 pt-1 text-xs text-muted-foreground">
              <MessageSquareQuote className="size-4 text-gold" aria-hidden="true" />
              Takes less than a minute.
            </li>
          </ol>
        </div>
      </div>
    </Reveal>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import { PageHero } from '@/components/site/page-hero'
import { ReviewsPanel } from '@/components/site/reviews-panel'
import { site } from '@/lib/site'

export const Route = createFileRoute('/reviews')({
  head: () => ({
    meta: [
      { title: 'Reviews | ' + site.title },
      {
        name: 'description',
        content:
          'Read and write Google Reviews for Ananta Self Study Point, the 24-hour self-study library in Jehanabad, Bihar.',
      },
    ],
  }),
  component: ReviewsPage,
})

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title={
          <>
            Shared by our{' '}
            <span className="text-gold-gradient italic">students</span>
          </>
        }
        description="Genuine feedback lives on Google. Read what students say about Ananta, or add your own experience in under a minute."
      />
      <section className="container-site pb-12">
        <ReviewsPanel />
      </section>
    </>
  )
}

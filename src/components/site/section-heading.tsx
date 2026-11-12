import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  as: Tag = 'h2',
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'center' | 'left'
  className?: string
  as?: 'h1' | 'h2'
}) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl space-y-4',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p className={cn('eyebrow', align === 'center' && 'justify-center')}>
        {eyebrow}
      </p>
      <Tag className="text-4xl leading-[1.05] font-semibold text-foreground sm:text-5xl">
        {title}
      </Tag>
      {description && (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  )
}

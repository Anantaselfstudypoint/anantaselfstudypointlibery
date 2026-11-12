/**
 * Library photos uploaded by the owner.
 *
 * To add or change photos, drop image files (.jpg, .jpeg, .png, .webp, .avif)
 * into `src/assets/library-photos/`. They are picked up automatically on the
 * next deploy, sorted by file name (prefix with 01-, 02-… to control order).
 * The file name becomes the caption: `02-ac-study-hall.jpg` → "Ac Study Hall".
 *
 * If the folder is empty the slider shows an elegant "coming soon" panel,
 * never a broken image.
 */
import heroStudyHall from '@/assets/hero-study-hall.jpg'

const modules = import.meta.glob<string>(
  '/src/assets/library-photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default', query: '?url' },
)

export type LibraryPhoto = { src: string; caption: string; file: string }

function toCaption(file: string) {
  return file
    .replace(/\.[^.]+$/, '')
    .replace(/^\d+[-_ ]*/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export const libraryPhotos: LibraryPhoto[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src]) => {
    const file = path.split('/').pop() ?? path
    return { src, file, caption: toCaption(file) || 'Ananta Self Study Point' }
  })

/** Serve through Netlify Image CDN so visitors never download full-size originals. */
export function optimized(src: string, width: number) {
  if (import.meta.env.DEV || src.startsWith('data:')) return src
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fm=webp&q=78`
}

/** Wide study-hall shot used behind the home hero (cropped from the owner's banner). */
export const heroImage = heroStudyHall

/** Owner's walkthrough video of the library, served from /public. */
export const libraryTourVideo = '/library-tour.mp4'

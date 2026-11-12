/**
 * Single source of truth for Ananta Self Study Point business details.
 * Update contact info, links or copy here and every page picks it up.
 */
export const site = {
  name: 'Ananta Self Study Point',
  title: 'Ananta Self Study Point – Jehanabad',
  tagline: 'A Better Place to Focus on Your Future',
  motto: 'Your Space. Your Focus. Your Future.',
  city: 'Jehanabad, Bihar',
  owner: 'Sonu Kumar',
  administrator: 'Dheeraj',
  seats: 125,
  hours: 'Open 24 Hours',
  addressLines: [
    'Untta, Madarpur, SN College Road,',
    'Madhav Nagar Colony (Ward No. 05),',
    'Jehanabad, Bihar – 804417',
  ],
  addressQuery:
    'Ananta Self Study Point, SN College Road, Madhav Nagar Colony, Jehanabad, Bihar 804417',
  email: 'charrmssonu@gmail.com',
  phoneDisplay: '+91 8804610144',
  phoneHref: 'tel:+918804610144',
  whatsappHref:
    'https://wa.me/918804610144?text=' +
    encodeURIComponent(
      'Hello Ananta Self Study Point, I would like to know more about seat availability.',
    ),
  googleReviewHref:
    'https://search.google.com/local/writereview?placeid=ChIJG6vXlKm18jkRqCISyXYncYw',
  googleReadReviewsHref:
    'https://search.google.com/local/reviews?placeid=ChIJG6vXlKm18jkRqCISyXYncYw',
  socials: [
    {
      id: 'facebook',
      label: 'Facebook',
      handle: 'Ananta Self Study Point',
      href: 'https://share.google/UwIMgPqZKmg5kvslW',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@anantaselfstudypoint',
      href: 'https://www.instagram.com/anantaselfstudypoint?cplk=MTFhczNreTU2amc4OA==',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      handle: '@anantaselfstudypoint',
      href: 'https://youtube.com/@anantaselfstudypoint?si=NI7rF8k',
    },
  ],
} as const

export type SocialId = (typeof site.socials)[number]['id']

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.addressQuery)}&output=embed`
export const mapsLinkHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.addressQuery)}`
export const mailHref = `mailto:${site.email}?subject=${encodeURIComponent('Enquiry – Ananta Self Study Point')}`

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Photos', to: '/', hash: 'photos' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
] as const

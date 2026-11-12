import {
  Armchair,
  BookOpenText,
  Droplets,
  Fingerprint,
  IdCard,
  Leaf,
  Snowflake,
  Wifi,
  type LucideIcon,
} from 'lucide-react'

export type Facility = {
  title: string
  short: string
  description: string
  icon: LucideIcon
}

export const facilities: Facility[] = [
  {
    title: '125 Comfortable Study Seats',
    short: '125 seats',
    description:
      'Spacious, well-arranged seating for 125 students so everyone gets a personal, comfortable place to study for long hours.',
    icon: Armchair,
  },
  {
    title: 'Fully Air-Conditioned Study Hall',
    short: 'AC halls',
    description:
      'Cool, comfortable study halls that keep you fresh and focused, even through Bihar’s hottest afternoons.',
    icon: Snowflake,
  },
  {
    title: 'High-Speed Wi-Fi Internet',
    short: 'Fast Wi-Fi',
    description:
      'Reliable high-speed internet for online classes, lectures, mock tests and research whenever you need it.',
    icon: Wifi,
  },
  {
    title: 'Water Cooler Facility',
    short: 'Cool water',
    description:
      'Clean, cool drinking water available inside the library so you can stay hydrated without breaking focus.',
    icon: Droplets,
  },
  {
    title: 'Biometric / Fingerprint Entry System',
    short: 'Biometric entry',
    description:
      'Secure fingerprint-based entry ensures only registered students access the library, keeping it safe and disciplined.',
    icon: Fingerprint,
  },
  {
    title: 'Student Identity Cards',
    short: 'Student ID',
    description:
      'Every member receives a personal student identity card — a mark of belonging to the Ananta study community.',
    icon: IdCard,
  },
  {
    title: 'Peaceful Study Environment',
    short: 'Silent zone',
    description:
      'A calm, silent atmosphere free from distractions, designed for deep concentration and consistent progress.',
    icon: Leaf,
  },
  {
    title: 'Dedicated Study Space',
    short: 'Your own space',
    description:
      'A space that is truly yours to settle into every day, building the routine and discipline that success demands.',
    icon: BookOpenText,
  },
]

export const acSchedule = [
  { hall: 'Hall A', detail: 'AC from 10 AM to 6 PM' },
  { hall: 'Hall B', detail: 'AC runs when 20+ students are present' },
  { hall: 'Hall C', detail: 'AC from 10 AM to 6 PM' },
  { hall: 'Hall D', detail: 'AC from 10 AM to 6 PM' },
] as const

import { xauHome, xauLandCapital, xauSystemFull, xauCapitalPortal } from './xauPlatformContent'
import { publicUrl } from '../utils/publicUrl'

export const servicePages = [
  {
    path: '/standby-letter-of-credit',
    title: xauHome.services[0].title,
    description: xauHome.services[0].desc,
    points: xauHome.projects.map((p) => `${p.name} (${p.location}) — ${p.value}`),
  },
  {
    path: '/bank-guarantee',
    title: xauHome.services[1].title,
    description: xauHome.services[1].desc,
    points: xauHome.goldFlow,
  },
  {
    path: '/sblc-bg-monetization',
    title: xauCapitalPortal.brand,
    description: xauCapitalPortal.platformTitle,
    points: xauCapitalPortal.features,
    image: publicUrl('/images/capital-development.png'),
  },
  {
    path: '/trade-finance',
    title: xauHome.services[3].title,
    description: xauHome.services[3].desc,
    points: xauHome.bankingPartners,
  },
  {
    path: '/commercial-loans',
    title: xauLandCapital.headline,
    description: xauLandCapital.intro,
    points: xauLandCapital.valueBox.checklist,
    image: publicUrl('/images/land-capital.png'),
  },
  {
    path: '/finance-consulting',
    title: xauSystemFull.hero.title,
    description: xauSystemFull.hero.description,
    points: xauSystemFull.features.map((f) => `${f.title}: ${f.desc}`),
  },
]

export const footerServices = [
  { label: 'Global Projects', path: '/standby-letter-of-credit' },
  { label: 'Gold Engine', path: '/bank-guarantee' },
  { label: 'Capital Development', path: '/sblc-bg-monetization' },
  { label: 'Treasury & Banking', path: '/trade-finance' },
  { label: 'Land Capital', path: '/commercial-loans' },
  { label: 'X.A.U System', path: '/finance-consulting' },
  { label: 'Onboarding', path: '/about' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
]

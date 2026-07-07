import { xauHome } from './xauPlatformContent'
import { publicUrl } from '../utils/publicUrl'

export const hero = {
  title: xauHome.hero.headline,
  description: xauHome.hero.description,
  cta: xauHome.hero.cta,
  welcome: xauHome.hero.welcome,
}

export const instruments = {
  title: 'Our Platform Services',
  paragraphs: [
    xauHome.hero.description,
    `Trust features: ${xauHome.trustFeatures.join(' · ')}.`,
    `Headquarters: Level 86, Burj Khalifa, Downtown Dubai, UAE.`,
  ],
}

export const stats = xauHome.platformStats.map((item) => ({
  value: item.value,
  label: item.label.toUpperCase(),
}))

export const heroImage = publicUrl('/images/capital-development.png')
export const instrumentsImage = publicUrl('/images/land-capital.png')

const serviceImages = [
  publicUrl('/images/services/global-projects.png'),
  publicUrl('/images/services/gold-engine.png'),
  publicUrl('/images/capital-development.png'),
  publicUrl('/images/services/treasury-banking.png'),
  publicUrl('/images/services/vip-services.png'),
  publicUrl('/images/services/multi-currency.png'),
]

export const serviceCards = [
  ...xauHome.services.map((service, index) => ({
    title: service.title,
    description: service.desc,
    image: serviceImages[index],
    link: '/home',
    darker: index >= 4,
  })),
  {
    title: 'Multi-Billion Projects',
    description: xauHome.projects.map((p) => `${p.name} — ${p.value}`).join('. '),
    image: publicUrl('/images/land-capital.png'),
    link: '/home',
    darker: true,
  },
]

export const consultingServices = {
  title: 'The Gold Backed Financial Flow',
  description: xauHome.goldFlow.join(' → '),
  cards: [
    {
      number: '01',
      title: 'Onboarding Process',
      items: xauHome.onboardingSteps.map((step) => `${step.step}. ${step.title}`),
    },
    {
      number: '02',
      title: 'Secure Transactions',
      items: xauHome.secureTransactions,
    },
  ],
}

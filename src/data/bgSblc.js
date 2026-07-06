import { xauGoldInvestment, xauHome } from './xauPlatformContent'

export const serviceLinks = xauHome.services.map((service) => ({
  label: service.title,
  path: '/bg-sblc',
}))

export const accordionItems = [
  {
    id: 'gold-backed',
    title: '100% Gold Backed Investment',
    link: '/bg-sblc',
    content: xauGoldInvestment.features.join(' '),
  },
  {
    id: 'investment-tiers',
    title: 'Investment Tiers',
    content: xauGoldInvestment.investmentTiers
      .map(
        (tier) =>
          `${tier.amount}: ${tier.goldReturn} gold return over ${tier.term}, estimated value ${tier.estimatedValue}.`,
      )
      .join(' '),
  },
  {
    id: 'gold-flow',
    title: 'Investment Structure & Gold Flow',
    content: xauGoldInvestment.goldFlow.join(' → '),
  },
  {
    id: 'swiss-vault',
    title: xauGoldInvestment.vault.title,
    content: [
      xauGoldInvestment.vault.subtitle,
      xauGoldInvestment.vault.location,
      xauGoldInvestment.vault.features.join(', '),
    ],
  },
]

export const instrumentsContent = {
  title: xauGoldInvestment.title,
  paragraphs: [
    xauGoldInvestment.subtitle,
    xauGoldInvestment.tagline,
    xauGoldInvestment.whyInvest.join(' '),
    xauGoldInvestment.slogans.join(' '),
  ],
}

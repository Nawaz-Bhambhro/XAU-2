import { xauCorporate, xauCapitalInfographic } from './xauPlatformContent'

export const aboutStats = xauCorporate.impactStats.slice(0, 4).map((item) => ({
  value: item.value,
  label: item.label.toUpperCase(),
}))

export const aboutContent = {
  title: xauCorporate.brand,
  paragraphs: [
    xauCorporate.platformDesc,
    `${xauCorporate.taglines.left} ${xauCorporate.taglines.right}`,
    xauCapitalInfographic.subtitle,
    xauCapitalInfographic.quote,
    ...xauCorporate.strategicPillars.map((pillar) => `${pillar.title}: ${pillar.desc}`),
    `Our commitment: ${xauCapitalInfographic.commitment.join(', ')}.`,
    `Industry focus: ${xauCorporate.industryFocus.sectors.join(', ')}.`,
  ],
}

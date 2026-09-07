import { GrantItem, OfficialGrant } from '../types';

/**
 * Official SG Government Grants list specified in prompt requirements.
 * Suggestions on screen strictly come from this list.
 */
export const OFFICIAL_GRANTS: OfficialGrant[] = [
  {
    fullName: 'Productivity Solutions Grant (PSG)',
    shortName: 'PSG',
    agency: 'Enterprise Singapore / IMDA',
    description: 'Supports SMEs keen on adopting pre-scoped IT solutions and equipment to enhance business processes.',
  },
  {
    fullName: 'Market Readiness Assistance (MRA)',
    shortName: 'MRA',
    agency: 'Enterprise Singapore',
    description: 'Helps Singapore SMEs take their business international with up to 50% support for overseas market promotion, business development, and set-up.',
  },
  {
    fullName: 'Global Innovation Alliance (GIA) Programmes',
    shortName: 'GIA',
    agency: 'Enterprise Singapore',
    description: 'Connects Singapore businesses and tech startups to major global innovation hubs for tech transfer and co-innovation.',
  },
  {
    fullName: 'Startup SG Founder Grant',
    shortName: 'Startup SG Founder',
    agency: 'Enterprise Singapore / Accredited Mentors',
    description: 'Provides mentorship and startup capital grant to first-time entrepreneurs with innovative business ideas.',
  },
  {
    fullName: 'Startup SG Tech',
    shortName: 'Startup SG Tech',
    agency: 'Enterprise Singapore',
    description: 'Fast-tracks development of proprietary technology solutions and commercialisation of innovative technology.',
  },
  {
    fullName: 'Advanced Digital Solutions (ADS)',
    shortName: 'ADS',
    agency: 'Infocomm Media Development Authority (IMDA)',
    description: 'Supports SMEs adopting advanced integrated solutions such as AI, IoT, and cloud ERP systems.',
  },
  {
    fullName: 'SkillsFuture Enterprise Credit (SFEC)',
    shortName: 'SFEC',
    agency: 'SkillsFuture Singapore / EnterpriseSG',
    description: 'Encourages employers to invest in enterprise transformation and capabilities of their workforce.',
  },
  {
    fullName: 'Energy Efficiency Grant (EEG)',
    shortName: 'EEG',
    agency: 'National Environment Agency (NEA) / EnterpriseSG',
    description: 'Supports businesses in manufacturing, food services, and retail to adopt energy-efficient equipment.',
  },
  {
    fullName: 'Resource Efficiency Grant for Emissions (REG(E))',
    shortName: 'REG(E)',
    agency: 'Economic Development Board (EDB)',
    description: 'Supports manufacturing facilities and data centres in improving energy and carbon efficiency.',
  },
];

/**
 * Invented Project Descriptions & Initial Match Evaluations (all in this single data file)
 * Colour shade rule: green = high match, amber = medium match, red = low match
 */
export const INITIAL_PROJECT_MATCHES: GrantItem[] = [
  {
    id: 'project-1',
    projectTitle: 'Automated Cloud POS & ERP Warehouse System',
    projectDescription: 'Implementation of digital inventory tracking, automated kitchen display systems, and cloud supply-chain ordering across 4 F&B outlets.',
    matchedGrantName: 'Productivity Solutions Grant (PSG)',
    matchedGrantShort: 'PSG',
    matchScore: 92,
    matchLevel: 'high',
    gapsToFill: 'Vendor quotation must be from an IMDA pre-approved digital solution package. Entity must maintain at least 30% local shareholding. Grant application must be submitted before signing vendor contract.',
    estimatedFunding: 'Up to 50% grant support (capped at S$30,000)',
  },
  {
    id: 'project-2',
    projectTitle: 'Regional Market Expansion into Johor & Kuala Lumpur',
    projectDescription: 'Establishing cross-border e-commerce marketing, digital advertising campaigns, and direct distributor agreements for retail packaged consumer goods.',
    matchedGrantName: 'Market Readiness Assistance (MRA)',
    matchedGrantShort: 'MRA',
    matchScore: 68,
    matchLevel: 'medium',
    gapsToFill: 'Target overseas market entity annual turnover must be under S$100,000. Missing formal overseas market feasibility study and localized PR consultant engagement agreement.',
    estimatedFunding: 'Up to 50% of eligible costs (capped at S$100,000 per new market)',
  },
  {
    id: 'project-3',
    projectTitle: 'Central Kitchen Chiller & Heat-Recovery Retrofit',
    projectDescription: 'Replacing legacy R-22 industrial refrigeration units with variable-speed compressor chillers and heat-recovery ventilation in food manufacturing facility.',
    matchedGrantName: 'Energy Efficiency Grant (EEG)',
    matchedGrantShort: 'EEG',
    matchScore: 41,
    matchLevel: 'low',
    gapsToFill: 'Pre-application energy assessment audit by certified energy manager is incomplete. Selected chiller model currently lacks NEA verified baseline efficiency certification.',
    estimatedFunding: 'Up to 70% support for Tier 1 pre-approved energy-efficient models',
  },
];

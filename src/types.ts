export type MatchLevel = 'high' | 'medium' | 'low';

export interface GrantItem {
  id: string;
  projectTitle: string;
  projectDescription: string;
  matchedGrantName: string;
  matchedGrantShort: string;
  matchScore: number;
  matchLevel: MatchLevel;
  gapsToFill: string;
  estimatedFunding: string;
}

export interface OfficialGrant {
  fullName: string;
  shortName: string;
  description: string;
  agency: string;
}

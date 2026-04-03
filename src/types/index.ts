export type CaseStudyIndustry =
  | "professional-services"
  | "saas-tech"
  | "construction-cre"
  | "manufacturing";

export interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  industry: CaseStudyIndustry;
  excerpt?: string;
  featured?: boolean;
  publishedAt?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedInUrl?: string;
  imageUrl?: string;
}

export interface ServiceTier {
  id: string;
  name: string;
  badge: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref?: string;
  featured?: boolean;
}

export interface SiteSettings {
  calendlyUrl: string;
}

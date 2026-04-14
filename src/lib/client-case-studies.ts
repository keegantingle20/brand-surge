export type CaseStudyFilter =
  | "All"
  | "Education"
  | "Real Estate"
  | "Insurance"
  | "Fitness"
  | "Home Services"
  | "Construction";

export type ClientCaseStudy = {
  id: string;
  name: string;
  subtitle?: string;
  filterTags: CaseStudyFilter[];
  metrics: readonly string[];
};

export const CASE_STUDY_FILTERS: readonly CaseStudyFilter[] = [
  "All",
  "Education",
  "Real Estate",
  "Insurance",
  "Fitness",
  "Home Services",
  "Construction",
] as const;

export const clientCaseStudies: readonly ClientCaseStudy[] = [
  {
    id: "uofl-exec-ed",
    name: "University of Louisville Executive Education",
    filterTags: ["Education"],
    metrics: [
      "22.7% Connection Rate in First 2 Weeks",
      "18.8% Response Rate",
      "60+ Meetings Booked",
      "1,200+ Connections in the First 6 Months",
    ],
  },
  {
    id: "greg-taylor",
    name: "Greg Taylor",
    subtitle: "Principal Broker, True Blood Real Estate",
    filterTags: ["Real Estate"],
    metrics: [
      "12% Connection Rate in First 2 Weeks",
      "48% Response Rate",
      "80+ Meetings Booked in the First 6 Months",
    ],
  },
  {
    id: "austin-harrison",
    name: "Austin Harrison",
    subtitle: "Kentucky Farm Bureau",
    filterTags: ["Insurance"],
    metrics: [
      "20.35% Acceptance Rate",
      "23.7% Response Rate",
      "30+ Meetings Booked in First 6 Months",
    ],
  },
  {
    id: "lifted-cycle",
    name: "LIFTED Cycle",
    filterTags: ["Fitness"],
    metrics: [
      "18.3% Acceptance Rate",
      "28.5% Response Rate",
      "30 Potential Clients Coming Into the Studio in 3 Months",
    ],
  },
  {
    id: "living-spaces",
    name: "Living Spaces",
    filterTags: ["Home Services", "Real Estate"],
    metrics: [
      "11.3% Acceptance Rate",
      "26.6% Response Rate. Targeting real estate brokers and agents as a home stager",
      "40+ Meetings Booked in Past 6 Months",
    ],
  },
  {
    id: "dalton-brown",
    name: "Dalton Brown",
    subtitle: "Restoration and Construction",
    filterTags: ["Construction"],
    metrics: ["10% Acceptance Rate", "32% Positive Response Rate"],
  },
] as const;

export function caseStudyMatchesFilter(
  study: ClientCaseStudy,
  active: CaseStudyFilter,
): boolean {
  if (active === "All") return true;
  return study.filterTags.includes(active);
}

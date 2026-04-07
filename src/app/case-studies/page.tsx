import type { Metadata } from "next";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { CaseStudiesClient } from "./case-studies-client";

export const metadata: Metadata = {
  title: "Case Studies | Brand Surge",
  description:
    "Real B2B outbound results across professional services, SaaS, construction, and more. See what consistent pipeline looks like.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="CASE STUDIES"
        heading="Real B2B companies. Real pipeline results."
        subline="We track everything. Here's what the system actually produces."
      />
      <CaseStudiesClient />
      <CTABanner />
    </>
  );
}

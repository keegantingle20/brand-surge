import type { Metadata } from "next";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { CaseStudiesClient } from "./case-studies-client";

export const metadata: Metadata = {
  title: "B2B Outbound Results | Brand Surge",
  description:
    "Real B2B pipeline results from Brand Surge's LinkedIn outbound system. Reply rates, meeting conversions, and connection stats across multiple verticals.",
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

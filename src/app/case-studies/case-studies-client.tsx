"use client";

import { useState } from "react";
import { FeaturedOwnAccountCard } from "@/components/sections/shared/FeaturedOwnAccountCard";
import { Button } from "@/components/ui/Button";
import { CALENDLY_AUDIT_URL } from "@/lib/constants";

const filters = [
  "All",
  "Professional Services",
  "SaaS & Tech",
  "Construction & CRE",
  "Manufacturing",
] as const;

export function CaseStudiesClient() {
  const [active, setActive] = useState<string>("All");

  return (
    <>
      <div className="mx-auto mb-12 flex max-w-6xl flex-wrap gap-3 px-6">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={
              active === f
                ? "cursor-pointer rounded-full border border-brand-cyan bg-brand-cyan/5 px-4 py-2 text-sm text-brand-cyan"
                : "cursor-pointer rounded-full border border-brand-border px-4 py-2 text-sm text-[#b4c5d8]"
            }
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-6">
        <FeaturedOwnAccountCard
          className="mt-0"
          caseStudiesCta="anchor"
          caseStudiesAnchorId="more-case-studies"
        />
      </div>

      <div
        id="more-case-studies"
        className="scroll-mt-24 py-16 text-center"
      >
        <p className="mx-auto max-w-xl text-sm text-[#7c8fa3]">
          Client case studies across professional services, SaaS, and
          construction are being prepared. Check back soon — or book a call
          to hear specific results for your industry.
        </p>
        <Button
          href={CALENDLY_AUDIT_URL}
          variant="outline"
          className="mt-6"
        >
          Book a pipeline audit
        </Button>
      </div>
    </>
  );
}

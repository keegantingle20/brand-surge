"use client";

import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ClientCaseStudyCard } from "@/components/sections/shared/ClientCaseStudyCard";
import { FeaturedOwnAccountCard } from "@/components/sections/shared/FeaturedOwnAccountCard";
import { Button } from "@/components/ui/Button";
import {
  CASE_STUDY_FILTERS,
  caseStudyMatchesFilter,
  clientCaseStudies,
  type CaseStudyFilter,
} from "@/lib/client-case-studies";
import { CALENDLY_AUDIT_URL } from "@/lib/constants";

export function CaseStudiesClient() {
  const [active, setActive] = useState<CaseStudyFilter>("All");
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  const filtered = clientCaseStudies.filter((s) =>
    caseStudyMatchesFilter(s, active),
  );

  return (
    <>
      <div className="mx-auto mb-12 flex max-w-6xl flex-wrap gap-3 px-6">
        {CASE_STUDY_FILTERS.map((f) => (
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
        ref={gridRef}
        id="more-case-studies"
        className="mx-auto mt-16 max-w-6xl scroll-mt-24 px-6"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((study, index) => (
            <ClientCaseStudyCard
              key={study.id}
              study={study}
              index={index}
              inView={gridInView}
            />
          ))}
        </div>
      </div>

      <div className="scroll-mt-24 py-16 text-center">
        <p className="mx-auto max-w-xl text-sm text-[#7c8fa3]">
          Want results like these for your business? Book a call to talk
          through your goals and how outbound can support them.
        </p>
        <Button
          href={CALENDLY_AUDIT_URL}
          variant="outline"
          className="mt-6"
        >
          Get Started
        </Button>
      </div>
    </>
  );
}

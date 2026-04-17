"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CampaignWeekStatsQuote } from "@/components/sections/shared/CampaignWeekStatsQuote";
import { ClientCaseStudyCard } from "@/components/sections/shared/ClientCaseStudyCard";
import { FeaturedOwnAccountCard } from "@/components/sections/shared/FeaturedOwnAccountCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { clientCaseStudies } from "@/lib/client-case-studies";

export function CaseStudyPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-y-bordered bg-[#010f1f]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionLabel>PROOF OF SYSTEM</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            We use the same system on ourselves. Here&apos;s what it produces.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clientCaseStudies.map((study, index) => (
            <ClientCaseStudyCard
              key={study.id}
              study={study}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <FeaturedOwnAccountCard pullQuote={<CampaignWeekStatsQuote />} />
        </motion.div>
      </div>
    </section>
  );
}

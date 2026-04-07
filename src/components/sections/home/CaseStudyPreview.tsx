"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FeaturedOwnAccountCard } from "@/components/sections/shared/FeaturedOwnAccountCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <FeaturedOwnAccountCard
            pullQuote={
              <blockquote className="mb-8 border-l border-brand-cyan/40 pl-4 text-sm italic text-[#b4c5d8]">
                <p>
                  &quot;317 messages. 79 replies. 14 demo meetings. One week.
                  This is what a dialed-in outbound system looks like — we built
                  it for ourselves first so we could build it for you.&quot;
                </p>
                <p className="mt-2 not-italic">— Koby Batts, Co-Founder</p>
              </blockquote>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}

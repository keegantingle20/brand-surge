"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FeaturedOwnAccountCard } from "@/components/sections/shared/FeaturedOwnAccountCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CaseStudyPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#010f1f] py-24 lg:py-32">
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
          <FeaturedOwnAccountCard />
        </motion.div>
      </div>
    </section>
  );
}

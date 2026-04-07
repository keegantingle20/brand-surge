"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { SectionLabel } from "@/components/ui/SectionLabel";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function PageHero({
  label,
  heading,
  subline,
}: {
  label: string;
  heading: string;
  subline: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#010f1f] pb-24 pt-28 md:pt-40">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-brand-navy/40 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <BrandLogo
            variant="lockup"
            className="h-8 max-w-[12rem] md:h-9 md:max-w-[14rem]"
          />
        </motion.div>
        <motion.div {...fadeUp}>
          <SectionLabel>{label}</SectionLabel>
        </motion.div>
        <motion.h1
          className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
        >
          {heading}
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#94a3b8] md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
        >
          {subline}
        </motion.p>
      </div>
    </section>
  );
}

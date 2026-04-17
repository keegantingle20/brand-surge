"use client";

import { motion } from "framer-motion";
import { MetricLineWithCountUp } from "@/components/sections/shared/MetricLineWithCountUp";
import type { ClientCaseStudy } from "@/lib/client-case-studies";

const iconPlaceholderStyle = {
  background:
    "linear-gradient(135deg, rgba(141,234,255,0.14), rgba(29,207,255,0.06))",
} as const;

type Props = {
  study: ClientCaseStudy;
  index: number;
  inView: boolean;
};

export function ClientCaseStudyCard({ study, index, inView }: Props) {
  return (
    <motion.div
      className="gradient-border rounded-2xl p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.08,
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 20px 40px rgba(37, 222, 227, 0.08)",
        transition: { duration: 0.2 },
      }}
    >
      <div
        className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg"
        style={iconPlaceholderStyle}
        aria-hidden
      />
      <h3 className="mb-1 text-lg font-semibold text-white">{study.name}</h3>
      {study.subtitle ? (
        <p className="mb-3 text-sm text-brand-cyan">{study.subtitle}</p>
      ) : null}
      <ul className="space-y-2 text-sm leading-relaxed text-[#b4c5d8]">
        {study.metrics.map((line) => (
          <li key={line}>
            • <MetricLineWithCountUp line={line} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

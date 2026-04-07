"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const columns = [
  {
    n: "01",
    title: "ICP-first, always",
    body: "Before a single message goes out, we define exactly who you should be talking to: industry, title, company size, buying triggers. Most agencies skip this step. That's why most campaigns fail.",
  },
  {
    n: "02",
    title: "AI-powered LinkedIn infrastructure",
    body: "We deploy LinkedIn automation built around your positioning, not a template. Personalized at scale, optimized weekly on real response data, and built to stay within LinkedIn's compliance guidelines.",
  },
  {
    n: "03",
    title: "Strategy that stays",
    body: "We don't hand you a campaign and disappear. We analyze what's working, refine targeting, rewrite underperforming sequences, and consult on the deals coming in. Your process grows with your pipeline.",
  },
] as const;

export function DifferentiatorSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-y-bordered bg-[#010f1f]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>WHAT MAKES US DIFFERENT</SectionLabel>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold text-white md:text-4xl">
          We don&apos;t run campaigns. We build the system that{" "}
          <span className="gradient-text">makes outbound repeatable.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-12">
          {columns.map((col, index) => (
            <motion.div
              key={col.n}
              className={`border-b border-brand-border pb-12 last:border-b-0 last:pb-0 md:border-b-0 md:pb-0 ${
                index > 0 ? "differentiator-col-border" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              whileHover={{
                y: -2,
                transition: { duration: 0.15 },
              }}
            >
              <p className="mb-4 font-mono text-sm gradient-text">
                {col.n}
              </p>
              <h3 className="mb-3 text-lg font-semibold text-white">
                {col.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#b4c5d8]">
                {col.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

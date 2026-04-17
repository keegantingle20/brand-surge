"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const columns = [
  {
    n: "01",
    title: "Identify your ideal customer",
    body: "We help you identify and find your ideal customer. We build custom signals to identify exactly who to go after and from what angle.",
  },
  {
    n: "02",
    title: "Custom sequence on connect",
    body: "We build a custom sequence to trigger when an invitation to connect is accepted. It is different for everyone we work with.",
  },
  {
    n: "03",
    title: "We Want To See You Win",
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
          What makes us different
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-0 md:mt-24 md:grid-cols-3 md:gap-16">
          {columns.map((col, index) => (
            <motion.div
              key={col.n}
              className={`border-b border-brand-border pb-14 last:border-b-0 last:pb-0 md:border-b-0 md:pb-0 ${
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

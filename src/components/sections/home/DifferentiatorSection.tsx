"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const columns = [
  {
    n: "01",
    title: "Identify & Target",
    body: "We help you identify your ideal customer. We build custom signals to find exactly who to go after and from what angle, so your outreach always has a reason.",
  },
  {
    n: "02",
    title: "Build Your Sequence",
    body: "We build a fully custom outreach sequence that triggers when a connection request is accepted. Every sequence is unique to the client: tailored messaging, tailored timing, zero templates.",
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
        <SectionLabel>OUR PROCESS</SectionLabel>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold text-white md:text-4xl">
          Our Process
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

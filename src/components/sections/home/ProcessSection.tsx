"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    n: "01",
    title: "Diagnose",
    body: "We map your ICP, audit your current outreach, and identify exactly where your pipeline is breaking down.",
  },
  {
    n: "02",
    title: "Build",
    body: "We construct your full outbound infrastructure — sequences, targeting lists, LinkedIn campaign architecture, and automation setup.",
  },
  {
    n: "03",
    title: "Launch & Optimize",
    body: "Campaigns go live. We monitor reply rates and meeting conversion weekly, adjusting until performance is consistent and above target.",
  },
  {
    n: "04",
    title: "Expand",
    body: "Once pipeline is predictable, we expand into full revenue consulting — conversion, retention, and systematizing every stage of your customer journey.",
  },
] as const;

export function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      ref={ref}
      className="bg-[#0a1628] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>THE SURGE SYSTEM</SectionLabel>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white md:text-4xl">
          Four stages from cold list to consistent pipeline.
        </h2>

        {/* Mobile */}
        <div className="mt-16 flex flex-col gap-12 md:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-cyan/40 bg-[#010f1f] font-mono text-sm font-bold text-brand-cyan">
                {step.n}
              </div>
              <h3 className="mt-4 mb-2 text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="max-w-[280px] text-sm leading-relaxed text-[#94a3b8]">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Desktop */}
        <div className="relative mt-16 hidden md:block">
          <div className="relative flex justify-between">
            <div
              className="pointer-events-none absolute left-0 right-0 top-6 border-t border-brand-cyan/20"
              aria-hidden
            />
            {steps.map((step, index) => (
              <motion.div
                key={step.n}
                className="relative z-10 flex min-w-0 flex-1 flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-cyan/40 bg-[#010f1f] font-mono text-sm font-bold text-brand-cyan">
                  {step.n}
                </div>
                <h3 className="mt-4 mb-2 text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-[220px] text-sm leading-relaxed text-[#94a3b8]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

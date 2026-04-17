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
    body: "We construct your full outbound infrastructure: sequences, targeting lists, LinkedIn campaign architecture, and automation setup.",
  },
  {
    n: "03",
    title: "Launch & Optimize",
    body: "Campaigns go live. We monitor reply rates and meeting conversion weekly, adjusting until performance is consistent and above target.",
  },
  {
    n: "04",
    title: "Expand",
    body: "Once pipeline is predictable, we expand into full revenue consulting: conversion, retention, and systematizing every stage of your customer journey.",
  },
] as const;

const stepCircleStyle = {
  background:
    "linear-gradient(#010f1f, #010f1f) padding-box, linear-gradient(135deg, #8deaff, #25dee3, #1dcfff, #45beef) border-box",
  border: "2px solid transparent",
} as const;

const connectorLineStyle = {
  background:
    "linear-gradient(90deg, transparent, #8deaff, #25dee3, #1dcfff, #45beef, transparent)",
  height: "1px",
} as const;

export function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      ref={ref}
      className="section-y-bordered overflow-x-hidden"
      style={{
        background:
          "linear-gradient(180deg, #010f1f 0%, #0a1628 50%, #010f1f 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel>THE SURGE SYSTEM</SectionLabel>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white md:text-4xl">
          Four stages from cold list to consistent pipeline.
        </h2>

        {/* Mobile vs desktop: mutually exclusive breakpoints (md = 768px) */}
        <div className="mt-20 md:mt-24">
          <div className="flex flex-col border-l-2 border-brand-cyan/20 pl-5 sm:pl-8 md:!hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.n}
              className="mb-14 flex flex-row items-start gap-3 last:mb-0 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <motion.div
                className="-ml-[calc(2.75rem+1px)] flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#010f1f] font-mono text-xs font-bold text-brand-cyan sm:-ml-[calc(3.5rem+1px)] sm:h-12 sm:w-12 sm:text-sm"
                style={stepCircleStyle}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {step.n}
              </motion.div>
              <div className="min-w-0 flex-1 pr-1">
                <h3 className="mb-2 text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="max-w-none text-sm leading-relaxed text-[#b4c5d8]">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
          </div>

          <div className="relative hidden md:!block">
          <div className="relative flex justify-between">
            <div
              className="pointer-events-none absolute left-0 right-0 top-6"
              style={connectorLineStyle}
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
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#010f1f] font-mono text-sm font-bold text-brand-cyan"
                  style={stepCircleStyle}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.n}
                </motion.div>
                <h3 className="mt-4 mb-2 text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-[220px] text-sm leading-relaxed text-[#b4c5d8]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

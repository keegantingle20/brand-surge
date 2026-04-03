"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const cards = [
  {
    title: "Referral dependency",
    body: "You're good at what you do. Your clients love you. And yet your pipeline is one lost retainer away from a crisis — because you never built a system to generate demand on your own terms.",
  },
  {
    title: "Inconsistent outreach",
    body: "You've tried LinkedIn. Maybe email. Cold calls. Nothing sticks. The problem isn't your effort — it's the absence of a repeatable system built around the right people and the right message.",
  },
  {
    title: "The founder-led ceiling",
    body: "When you're the one doing all the selling, growth is capped at your calendar. That's not a business model. That's a job with expensive overhead.",
  },
] as const;

export function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#0a1628] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>THE PROBLEM</SectionLabel>
        <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-snug text-white md:text-4xl">
          The best B2B service companies don&apos;t lose to worse competitors.
          They lose because nobody knew they existed.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="rounded-2xl border border-[rgba(19,152,183,0.25)] bg-[#010f1f] p-6 transition-colors hover:border-[rgba(37,222,227,0.25)] md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <div
                className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan/10"
                aria-hidden
              />
              <h3 className="mb-3 text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#94a3b8]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

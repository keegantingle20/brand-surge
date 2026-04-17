"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const cards = [
  {
    title: "A sales process that won't stay static",
    body: "When stages, follow-ups, and who qualifies shift week to week—or live only in your head—you can't delegate, measure, or compound what works. Without a stable, written motion, growth caps at one person's calendar instead of a business you can scale.",
  },
  {
    title: "Genuine messaging",
    body: "Messaging that's genuine. We research the factors that put each prospect on the list and make sure they feel it.",
  },
  {
    title: "We want to see our clients win",
    body: "We want to see our clients win. When we work together, we're passionate about helping you meet your goals.",
  },
] as const;

const iconPlaceholderStyle = {
  background:
    "linear-gradient(135deg, rgba(141,234,255,0.14), rgba(29,207,255,0.06))",
} as const;

export function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-y-bordered"
      style={{
        background:
          "linear-gradient(180deg, #010f1f 0%, #0a1628 30%, #0a1628 70%, #010f1f 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>THE PROBLEM</SectionLabel>
        <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-snug text-white md:text-4xl">
          Success isn&apos;t about reaching more people. It&apos;s about reaching
          the right people with messaging that actually resonates.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="gradient-border rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
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
              <h3 className="mb-3 text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#b4c5d8]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

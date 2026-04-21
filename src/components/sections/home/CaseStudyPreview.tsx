"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CampaignWeekStatsQuote } from "@/components/sections/shared/CampaignWeekStatsQuote";
import { FeaturedOwnAccountCard } from "@/components/sections/shared/FeaturedOwnAccountCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const industryPills: {
  id: string;
  label: string;
  category: "Proven In" | "Built For";
  left: string;
  top: string;
  driftX: number[];
  driftY: number[];
  duration: number;
}[] = [
  {
    id: "education",
    label: "Education & Executive Training",
    category: "Proven In",
    left: "12%",
    top: "14%",
    driftX: [0, 16, -8, 12, 0],
    driftY: [0, -14, 10, -6, 0],
    duration: 15,
  },
  {
    id: "real-estate",
    label: "Real Estate & Brokerage",
    category: "Proven In",
    left: "56%",
    top: "10%",
    driftX: [0, -14, 10, -6, 0],
    driftY: [0, 12, -8, 14, 0],
    duration: 17,
  },
  {
    id: "fitness",
    label: "Fitness & Wellness",
    category: "Proven In",
    left: "72%",
    top: "28%",
    driftX: [0, 12, -10, 14, 0],
    driftY: [0, -8, 12, -10, 0],
    duration: 16,
  },
  {
    id: "restoration",
    label: "Restoration & Construction",
    category: "Proven In",
    left: "20%",
    top: "34%",
    driftX: [0, -12, 8, -14, 0],
    driftY: [0, 10, -12, 8, 0],
    duration: 18,
  },
  {
    id: "pro-services",
    label: "Professional Services",
    category: "Built For",
    left: "44%",
    top: "30%",
    driftX: [0, 14, -6, 12, 0],
    driftY: [0, -10, 12, -8, 0],
    duration: 19,
  },
  {
    id: "saas",
    label: "SaaS & Technology",
    category: "Built For",
    left: "14%",
    top: "56%",
    driftX: [0, 10, -12, 8, 0],
    driftY: [0, -12, 8, -10, 0],
    duration: 17,
  },
  {
    id: "manufacturing",
    label: "Manufacturing & Industrial Distribution",
    category: "Built For",
    left: "54%",
    top: "52%",
    driftX: [0, -10, 14, -8, 0],
    driftY: [0, 8, -12, 10, 0],
    duration: 20,
  },
  {
    id: "healthcare",
    label: "Healthcare Services & Technology",
    category: "Built For",
    left: "72%",
    top: "66%",
    driftX: [0, 12, -8, 10, 0],
    driftY: [0, -10, 12, -6, 0],
    duration: 18,
  },
  {
    id: "commercial-re",
    label: "Commercial Real Estate & Construction",
    category: "Built For",
    left: "30%",
    top: "76%",
    driftX: [0, -12, 10, -8, 0],
    driftY: [0, 10, -8, 12, 0],
    duration: 21,
  },
];

export function CaseStudyPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredPill, setHoveredPill] = useState<string | null>(null);

  return (
    <section ref={ref} className="section-y-bordered bg-[#010f1f]">
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
          <FeaturedOwnAccountCard
            className="mt-20 md:mt-24"
            pullQuote={<CampaignWeekStatsQuote />}
          />
        </motion.div>

        <motion.div
          className="mt-20 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <SectionLabel>VERTICALS</SectionLabel>
          <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Built for the industries that run on relationships.
          </h3>
          <p className="mt-3 max-w-3xl text-[#b4c5d8]">
            We&apos;ve generated pipeline across B2B verticals where trust,
            targeting, and timing are everything.
          </p>

          <div className="relative mt-10 h-[520px] overflow-hidden rounded-2xl border border-[rgba(29,207,255,0.14)] bg-[#0a1628] md:h-[560px]">
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #8deaff 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
              animate={{ backgroundPosition: ["0px 0px", "24px 24px"] }}
              transition={{
                duration: 12,
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              aria-hidden
            />

            {industryPills.map((pill, index) => {
              const isProven = pill.category === "Proven In";
              const isHovered = hoveredPill === pill.id;
              return (
                <motion.div
                  key={pill.id}
                  className="absolute"
                  style={{ left: pill.left, top: pill.top }}
                  onHoverStart={() => setHoveredPill(pill.id)}
                  onHoverEnd={() => setHoveredPill(null)}
                  animate={
                    isHovered
                      ? { scale: 1.08, x: 0, y: 0, boxShadow: "0 0 24px rgba(37,222,227,0.55)" }
                      : { scale: 1, x: pill.driftX, y: pill.driftY, boxShadow: "0 0 0px rgba(37,222,227,0)" }
                  }
                  transition={{
                    duration: isHovered ? 0.2 : pill.duration,
                    ease: "easeInOut",
                    delay: isHovered ? 0 : index * 0.07,
                    repeat: isHovered ? 0 : Infinity,
                    repeatType: isHovered ? undefined : "mirror",
                  }}
                >
                  <div
                    className={
                      isProven
                        ? "relative rounded-full border px-4 py-2 text-sm text-white"
                        : "relative rounded-full border px-4 py-2 text-sm text-white"
                    }
                    style={
                      isProven
                        ? {
                            background: "#013273",
                            borderColor: "#1398b7",
                          }
                        : {
                            background: "linear-gradient(135deg, #0e6ea1 0%, #1398b7 100%)",
                            borderColor: "rgba(37,222,227,0.35)",
                            boxShadow: "0 0 16px rgba(37,222,227,0.2)",
                          }
                    }
                  >
                    {pill.label}
                    <span
                      className={`pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[rgba(37,222,227,0.35)] bg-[#010f1f] px-2.5 py-1 text-[11px] text-[#8deaff] transition-opacity ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {pill.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const TICKER_ITEMS = [
  "22.9% average reply rate",
  "4.4% message-to-meeting conversion",
  "14 demo meetings in one week",
  "317 messages → 79 replies",
  "+4,733 LinkedIn followers in 12 months",
  "201.9% follower growth year-over-year",
  "Built in Louisville, KY",
  "ICP-first outbound methodology",
  "LinkedIn-native automation",
  "B2B service companies nationwide",
] as const;

const loop = [...TICKER_ITEMS, ...TICKER_ITEMS];

export function HomeTickerStrip() {
  return (
    <section
      className="border-y border-brand-border bg-[#0d1e35] py-3 shadow-[inset_0_1px_0_rgba(141,234,255,0.06)] md:py-3.5"
      aria-label="Brand and performance highlights"
    >
      <div className="relative overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-x-10 md:gap-x-14"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 48,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {loop.map((label, index) => (
            <span
              key={`${index}-${label}`}
              className="flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-medium tracking-wide text-[#b4c5d8] md:text-[0.9375rem]"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan/45"
                aria-hidden
              />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

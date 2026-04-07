"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const cardGradientStyle = {
  background:
    "linear-gradient(#0a1628, #0a1628) padding-box, linear-gradient(135deg, #25dee3 0%, #1398b7 50%, #013273 100%) border-box",
  border: "1px solid transparent",
} as const;

export function FeaturedOwnAccountCard({
  className,
  pullQuote,
  caseStudiesCta = "link",
  caseStudiesAnchorId = "more-case-studies",
}: {
  className?: string;
  pullQuote?: ReactNode;
  /** On the case-studies page, use "anchor" or "none" to avoid self-linking to /case-studies */
  caseStudiesCta?: "link" | "anchor" | "none";
  caseStudiesAnchorId?: string;
}) {
  return (
    <div
      className={cn(
        "relative mt-12 overflow-hidden rounded-2xl p-10 md:p-14",
        className,
      )}
      style={cardGradientStyle}
    >
      <div
        className="pointer-events-none absolute -left-8 -top-8 h-64 w-64 rounded-full bg-brand-cyan/5 blur-3xl"
        aria-hidden
      />
      <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest grad-label-sweep">
            BRAND SURGE · OWN LINKEDIN ACCOUNT
          </p>
          <h3 className="mb-6 text-2xl font-bold leading-snug text-white md:text-3xl">
            <span className="gradient-text">4.4%</span> message-to-meeting
            conversion. In a single 7-day campaign.
          </h3>
          <p className="mb-8 text-sm leading-relaxed text-[#b4c5d8]">
            Before we build outbound systems for clients, we run them on
            ourselves. This is what Brand Surge&apos;s own LinkedIn outbound
            produced, using the exact ICP-first methodology and campaign
            architecture we deploy for every engagement.
          </p>
          {pullQuote}
          {caseStudiesCta === "link" ? (
            <Button href="/case-studies" variant="ghost" className="px-0">
              See our full case studies →
            </Button>
          ) : null}
          {caseStudiesCta === "anchor" ? (
            <Button
              type="button"
              variant="ghost"
              className="px-0"
              onClick={() =>
                document
                  .getElementById(caseStudiesAnchorId)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              See our full case studies →
            </Button>
          ) : null}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { n: "22.9%", l: "Reply rate over 6 months" },
            { n: "79", l: "Replies from a single 317-message campaign" },
            { n: "14", l: "Demo meetings booked in one week" },
            { n: "+4,733", l: "New LinkedIn followers in 12 months (201.9% growth)" },
          ].map((s) => (
            <motion.div
              key={s.l}
              className="rounded-xl border border-[rgba(19,152,183,0.12)] bg-[#010f1f] p-6"
              whileHover={{
                boxShadow: "0 0 20px rgba(37, 222, 227, 0.1)",
              }}
            >
              <p className="text-2xl font-bold text-brand-cyan md:text-3xl">
                {s.n}
              </p>
              <p className="mt-1 text-xs text-[#b4c5d8]">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

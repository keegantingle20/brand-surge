"use client";

import { StatCountUp } from "@/components/ui/StatCountUp";

export function CampaignWeekStatsQuote() {
  return (
    <blockquote className="mb-8 border-l border-brand-cyan/40 pl-4 text-sm italic text-[#b4c5d8]">
      <p>
        &ldquo;
        <StatCountUp className="tabular-nums" end={317} duration={2} /> messages.{" "}
        <StatCountUp
          className="tabular-nums"
          end={79}
          duration={2}
          delay={0.12}
        />{" "}
        replies.{" "}
        <StatCountUp
          className="tabular-nums"
          end={14}
          duration={2}
          delay={0.24}
        />{" "}
        demo meetings. One week. This is what a dialed-in outbound system looks
        like. We built it for ourselves first so we could build it for you.
        &rdquo;
      </p>
      <p className="mt-2 not-italic text-[#b4c5d8]">
        Koby Batts, Co-Founder & CEO
      </p>
    </blockquote>
  );
}

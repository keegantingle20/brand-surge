"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const team = [
  {
    name: "Koby Batts",
    role: "Co-Founder & Partner",
    bio: "MS Economics, University of Louisville. Former College of Business Student Body President. Leads outbound strategy, ICP development, and client relationships.",
  },
  {
    name: "Keegan Tingle",
    role: "Co-Founder & Partner",
    bio: "Innovation MBA, University of Louisville. Former Fraternity President. Leads growth operations, new market expansion, and partnership strategy.",
  },
  {
    name: "James Miscione",
    role: "Growth Consultant",
    bio: "Specializes in LinkedIn campaign optimization and ICP refinement across B2B service verticals.",
  },
  {
    name: "Kellen McHugh",
    role: "Business Development Manager",
    bio: "Leads new client acquisition and builds the partnerships that expand Brand Surge's reach into new markets.",
  },
] as const;

export function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#0a1628] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>THE TEAM</SectionLabel>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white md:text-4xl">
          Built by founders who started in college and never stopped building.
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              className="rounded-2xl border border-[rgba(19,152,183,0.15)] bg-[#010f1f] p-4 text-center transition hover:border-brand-cyan/25 md:p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <div
                className="mx-auto mb-4 h-14 w-14 rounded-full border border-brand-cyan/20 bg-brand-blue/20"
                aria-hidden
              />
              <p className="text-sm font-semibold text-white">{member.name}</p>
              <p className="mt-1 mb-3 text-xs text-brand-cyan">{member.role}</p>
              <p className="text-xs leading-relaxed text-[#94a3b8]">
                {member.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

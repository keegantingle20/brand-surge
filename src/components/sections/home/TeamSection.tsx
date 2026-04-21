"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const team = [
  {
    name: "Koby Batts",
    role: "Co-Founder & CEO",
    bio: "Co-founded Brand Surge as a University of Louisville undergrad in 2022. Holds an MS in Economics from UofL and served as College of Business Student Body President. Obsessed with outbound systems and ICP strategy.",
  },
  {
    name: "Keegan Tingle",
    role: "Co-Founder & COO",
    bio: "Co-founded Brand Surge at UofL in 2022, starting with a drone and a camera, now building B2B pipeline systems. Innovation MBA, University of Louisville. Former Fraternity President. Leads growth and expansion.",
  },
  {
    name: "James Miscione",
    role: "GTM Strategist",
    bio: "Specializes in LinkedIn campaign optimization and ICP refinement across B2B service verticals.",
  },
  {
    name: "Kellen McHugh",
    role: "Business Development Manager",
    bio: "Leads new client acquisition and builds the partnerships that expand Brand Surge's reach into new markets.",
  },
] as const;

const photoPlaceholderStyle = {
  background: "linear-gradient(135deg, #45beef 0%, #1dcfff 45%, #013273 100%)",
} as const;

export function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section-y-bordered"
      style={{
        background:
          "linear-gradient(180deg, #010f1f 0%, #0a1628 50%, #010f1f 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>THE TEAM</SectionLabel>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white md:text-4xl">
          Built by founders who started in college and never stopped building.
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-8 md:mt-20 md:grid-cols-4">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              className="gradient-border rounded-2xl p-4 text-center md:p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 40px rgba(37, 222, 227, 0.06)",
                transition: { duration: 0.2 },
              }}
            >
              <div
                className="mx-auto mb-4 h-14 w-14 rounded-full"
                style={photoPlaceholderStyle}
                aria-hidden
              />
              <p className="text-sm font-semibold text-white">{member.name}</p>
              <p className="mt-1 mb-3 text-xs text-brand-cyan">{member.role}</p>
              <p className="text-xs leading-relaxed text-[#b4c5d8]">
                {member.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

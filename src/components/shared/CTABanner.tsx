"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { CALENDLY_AUDIT_URL } from "@/lib/constants";

export function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section-y-bordered bg-[#0a1628]"
    >
      <motion.div
        className="mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
          Ready to stop waiting for referrals?
        </h2>
        <p className="mb-10 text-[#b4c5d8]">
          Book a free pipeline audit and find out exactly where your outbound
          is breaking, and what it would take to fix it.
        </p>
        <Button href={CALENDLY_AUDIT_URL} variant="primary" className="px-8 py-4 text-base">
          Get Started
        </Button>
        <p className="mt-5 text-xs text-[#7c8fa3]">
          15 minutes. No pitch. Just clarity.
        </p>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { CALENDLY_AUDIT_URL } from "@/lib/constants";

export function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#010f1f] py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan/5 blur-3xl"
        aria-hidden
      />
      <motion.div
        className="relative mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
          If your pipeline is inconsistent, it&apos;s not a sales problem.
          <br />
          <span className="text-brand-cyan">It&apos;s a systems problem.</span>
        </h2>
        <p className="mb-10 text-lg text-[#94a3b8]">
          Let&apos;s find out exactly where yours is breaking — and what it
          would take to fix it.
        </p>
        <Button
          href={CALENDLY_AUDIT_URL}
          variant="primary"
          className="px-8 py-4 text-base"
        >
          Book your free pipeline audit
        </Button>
        <p className="mt-4 text-sm text-[#64748b]">
          15 minutes. No pitch. Just clarity on where your pipeline is breaking
          and what to do about it.
        </p>
      </motion.div>
    </section>
  );
}

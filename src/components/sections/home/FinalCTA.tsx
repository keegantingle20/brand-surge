"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CALENDLY_AUDIT_URL } from "@/lib/constants";

const ctaButtonStyle = {
  background: "linear-gradient(135deg, #25dee3 0%, #1398b7 100%)",
} as const;

export function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-y-bordered relative overflow-hidden bg-[#010f1f]">
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-32"
        style={{
          background: "linear-gradient(180deg, #010f1f 0%, transparent 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(37,222,227,0.12) 0%, rgba(19,152,183,0.06) 40%, transparent 70%)",
        }}
        aria-hidden
      />
      <motion.div
        className="relative mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          If your pipeline is inconsistent, it&apos;s not a sales problem.
          <br />
          <span className="gradient-text">It&apos;s a systems problem.</span>
        </h2>
        <p className="mb-10 text-lg text-[#b4c5d8]">
          Let&apos;s find out exactly where yours is breaking, and what it
          would take to fix it.
        </p>
        <motion.a
          href={CALENDLY_AUDIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-lg px-8 py-4 text-base font-semibold text-brand-navy transition-all duration-150 hover:opacity-95 active:scale-[0.97] sm:w-auto"
          style={ctaButtonStyle}
          animate={{
            boxShadow: [
              "0 0 0px rgba(37,222,227,0)",
              "0 0 30px rgba(37,222,227,0.3)",
              "0 0 0px rgba(37,222,227,0)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Get Started Today
        </motion.a>
        <p className="mt-4 text-sm text-[#7c8fa3]">
          15 minutes. No pitch. Just clarity on where your pipeline is breaking
          and what to do about it.
        </p>
        <p className="mt-2 text-xs text-[#7c8fa3]">
          Built in Louisville. Running outbound for B2B companies nationwide.
        </p>
      </motion.div>
    </section>
  );
}

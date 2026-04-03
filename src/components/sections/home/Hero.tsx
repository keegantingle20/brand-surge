"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CALENDLY_AUDIT_URL } from "@/lib/constants";

const mount = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

export function Hero() {
  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-[#010f1f] text-center">
      <div
        className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/4 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(1,50,115,0.3)_0%,transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(14,110,161,0.2)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-6 pt-32 md:pt-40">
        <motion.div {...mount(0)}>
          <SectionLabel className="mb-4">
            B2B OUTBOUND PIPELINE SYSTEMS
          </SectionLabel>
        </motion.div>

        <motion.h1
          className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
          {...mount(0.15)}
        >
          Your pipeline shouldn&apos;t depend on{" "}
          <span className="text-brand-cyan">referrals and luck</span>.
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#94a3b8] md:text-xl"
          {...mount(0.3)}
        >
          Brand Surge builds done-for-you LinkedIn outbound systems that put
          qualified B2B conversations on your calendar — consistently, without
          adding headcount.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          {...mount(0.45)}
        >
          <Button href={CALENDLY_AUDIT_URL} variant="primary">
            Book a free pipeline audit
          </Button>
          <Button variant="outline" type="button" onClick={scrollToProcess}>
            See how it works
          </Button>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 border-t border-[rgba(19,152,183,0.2)] pt-8 sm:grid-cols-3"
          {...mount(0.6)}
        >
          <div>
            <p className="text-3xl font-bold text-brand-cyan">4.4%</p>
            <p className="mt-1 text-sm text-[#94a3b8]">
              Message-to-meeting conversion on our own campaigns
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-cyan">22.9%</p>
            <p className="mt-1 text-sm text-[#94a3b8]">
              Average reply rate sustained over 6 months
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-cyan">4 Years</p>
            <p className="mt-1 text-sm text-[#94a3b8]">
              Building revenue systems for B2B service companies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

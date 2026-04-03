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
        className="pointer-events-none absolute left-0 top-0 h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #25dee3, #1398b7, transparent)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[-100px] top-[-100px] h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #0e6ea1 0%, #013273 60%, transparent 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-50px] right-[-50px] h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, #25dee3 0%, #1398b7 50%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-32 sm:pb-12 md:pb-0 md:pt-40">
        <motion.div {...mount(0)}>
          <SectionLabel className="mb-4">
            LOUISVILLE, KY — B2B OUTBOUND PIPELINE
          </SectionLabel>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          {...mount(0.15)}
        >
          Your pipeline shouldn&apos;t depend on{" "}
          <span className="gradient-text">referrals and luck</span>.
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
          <Button
            href={CALENDLY_AUDIT_URL}
            variant="primary"
            className="w-full sm:w-auto"
          >
            Book a free pipeline audit
          </Button>
          <Button
            variant="outline"
            type="button"
            className="w-full sm:w-auto"
            onClick={scrollToProcess}
          >
            See how it works
          </Button>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 border-t border-[rgba(19,152,183,0.2)] pt-8 sm:flex-row sm:items-start sm:justify-between"
          {...mount(0.6)}
        >
          <div className="sm:min-w-0 sm:flex-1">
            <p className="text-3xl font-bold gradient-text">4.4%</p>
            <p className="mt-1 text-sm text-[#94a3b8]">
              Message-to-meeting conversion on our own campaigns
            </p>
          </div>
          <div className="sm:min-w-0 sm:flex-1">
            <p className="text-3xl font-bold gradient-text">22.9%</p>
            <p className="mt-1 text-sm text-[#94a3b8]">
              Average reply rate sustained over 6 months
            </p>
          </div>
          <div className="sm:min-w-0 sm:flex-1">
            <p className="text-3xl font-bold gradient-text">4 Years</p>
            <p className="mt-1 text-sm text-[#94a3b8]">
              Building revenue systems for B2B service companies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

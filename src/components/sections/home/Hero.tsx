"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { StatCountUp } from "@/components/ui/StatCountUp";
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
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-visible bg-[#010f1f] pb-10 pt-[calc(4.25rem+1.75rem)] text-center md:pb-14 md:pt-[calc(5.25rem+2rem)] lg:pt-[calc(5.25rem+2.25rem)]"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-clip"
        aria-hidden
      >
        <div
          className="absolute left-[-100px] top-[-100px] h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, #45beef 0%, #013273 60%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-[-50px] right-[-50px] h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, #25dee3 0%, #1dcfff 45%, #45beef 100%)",
          }}
        />
      </div>
      <div
        className="pointer-events-none absolute left-0 top-0 h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #8deaff, #25dee3, #1dcfff, transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-6 pb-2 pt-2 md:pb-4 md:pt-4">
        <motion.h1
          className="text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl"
          {...mount(0.12)}
        >
          Custom LinkedIn Outbound{" "}
          <span className="gradient-text">Done The Right Way.</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#b4c5d8] md:text-xl"
          {...mount(0.24)}
        >
          Let&apos;s get you in front of prospects worth your time. We build
          LinkedIn outbound systems with strategy, structure, and consistency to
          set appointments and grow your influence.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
          {...mount(0.36)}
        >
          <Button
            href={CALENDLY_AUDIT_URL}
            variant="primary"
            className="w-full sm:w-auto"
          >
            Get Started
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
          className="mx-auto mt-10 w-full max-w-2xl md:mt-12"
          {...mount(0.48)}
        >
          <div
            className="mx-auto h-px w-full max-w-xl md:max-w-2xl"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(141,234,255,0.06) 42%, rgba(29,207,255,0.14) 50%, rgba(141,234,255,0.06) 58%, transparent 100%)",
            }}
            aria-hidden
          />
          <div className="flex flex-col gap-8 pt-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6 md:gap-8 md:pt-5">
            <div className="sm:min-w-0 sm:flex-1">
              <p className="text-3xl font-bold tabular-nums">
                <StatCountUp
                  className="gradient-text"
                  end={4.4}
                  decimals={1}
                  suffix="%"
                  duration={2.2}
                />
              </p>
              <p className="mt-1 text-sm text-[#b4c5d8]">
                Message-to-meeting conversion on our own campaigns
              </p>
            </div>
            <div className="sm:min-w-0 sm:flex-1">
              <p className="text-3xl font-bold tabular-nums">
                <StatCountUp
                  className="gradient-text"
                  end={23.3}
                  decimals={1}
                  suffix="%"
                  duration={2.2}
                  delay={0.12}
                />
              </p>
              <p className="mt-1 text-sm text-[#b4c5d8]">
                Average reply rate sustained over 6 months
              </p>
            </div>
            <div className="sm:min-w-0 sm:flex-1">
              <p className="text-3xl font-bold tabular-nums">
                <StatCountUp
                  className="gradient-text"
                  end={4}
                  suffix=" Years"
                  duration={2.2}
                  delay={0.24}
                />
              </p>
              <p className="mt-1 text-sm text-[#b4c5d8]">
                Building revenue systems for B2B service companies
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

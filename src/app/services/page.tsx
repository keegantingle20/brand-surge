import type { Metadata } from "next";
import { BriefcaseBusiness, Map, RefreshCcw, Send } from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { CALENDLY_AUDIT_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services | Brand Surge",
  description:
    "Done-for-you LinkedIn outbound systems for B2B service companies. LinkedIn outbound and digital marketing consulting.",
};

function TierBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-block rounded-full bg-brand-cyan/10 px-3 py-1 text-xs text-brand-cyan">
      {children}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-4 md:gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-sm leading-relaxed text-[#b4c5d8]"
        >
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const linkedInOutboundFeatures = [
  "ICP definition and ideal buyer persona build",
  "LinkedIn profile optimization for outbound",
  "HeyReach campaign architecture and setup",
  "Custom 3-5 touch message sequence development",
  "Weekly campaign optimization and reporting",
  "Target: 10-20 qualified B2B conversations per month",
] as const;

const digitalMarketingFeatures = [
  "Everything in LinkedIn Outbound",
  "Account-based marketing list builds",
  "Multi-touch LinkedIn + email sequences",
  "Sales call coaching and objection frameworks",
  "Deal review and pipeline conversion consulting",
  "Monthly revenue strategy session",
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="SERVICES"
        heading="Done-for-you outbound systems. Built to scale."
        subline="From your first structured outbound campaign to a full revenue architecture, we build the system that fits where you are and where you are headed."
      />

      <div className="section-y-bordered-continue mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[rgba(29,207,255,0.15)] bg-[#0a1628] p-6 md:p-8">
          <TierBadge>ENTRY</TierBadge>
          <h3 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
            <Send className="h-8 w-8 text-[#25dee3]" aria-hidden />
            LinkedIn Outbound
          </h3>
          <p className="mb-6 text-sm text-[#b4c5d8]">
            For B2B service companies starting from scratch or replacing a
            broken outbound process. We build and run the system so you
            don&apos;t have to.
          </p>
          <div className="mb-6 border-t border-brand-border" />
          <FeatureList items={[...linkedInOutboundFeatures]} />
          <Button href="/contact" variant="outline" className="mt-8 w-full">
            Learn more
          </Button>
        </div>

        <div className="relative rounded-2xl border-2 border-brand-cyan bg-[#0a1628] p-6 md:p-8">
          <span className="mb-4 inline-block rounded-full bg-brand-cyan px-3 py-1 text-xs font-bold text-brand-navy md:absolute md:right-6 md:top-0 md:mb-0 md:-translate-y-1/2">
            MOST POPULAR
          </span>
          <h3 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
            <BriefcaseBusiness className="h-8 w-8 text-[#25dee3]" aria-hidden />
            Digital Marketing & Consulting
          </h3>
          <p className="mb-6 text-sm text-[#b4c5d8]">
            For companies with an active outbound process that need strategic
            oversight, conversion consulting, and expansion into multi-channel
            ABM.
          </p>
          <div className="mb-6 border-t border-brand-border" />
          <FeatureList items={[...digitalMarketingFeatures]} />
          <Button
            href={CALENDLY_AUDIT_URL}
            variant="primary"
            className="mt-8 w-full"
          >
            Get Started
          </Button>
        </div>
      </div>

      <section className="section-y-bordered mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-white">
          Not sure where to start?
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-brand-border bg-[#0a1628] p-6">
            <p className="mb-3 text-xs font-semibold text-brand-cyan">
              IF YOU&apos;RE...
            </p>
            <p className="mb-2 font-medium text-white">
              <Map className="mb-2 h-8 w-8 text-[#25dee3]" aria-hidden />
              Starting from zero with no structured outbound process
            </p>
            <p className="text-sm text-[#b4c5d8]">
              → Start with LinkedIn Outbound
            </p>
          </div>
          <div className="rounded-xl border border-brand-border bg-[#0a1628] p-6">
            <p className="mb-3 text-xs font-semibold text-brand-cyan">
              IF YOU&apos;VE...
            </p>
            <p className="mb-2 font-medium text-white">
              <RefreshCcw className="mb-2 h-8 w-8 text-[#25dee3]" aria-hidden />
              Tried outbound before but can&apos;t get consistent results
            </p>
            <p className="text-sm text-[#b4c5d8]">
              → Digital Marketing & Consulting is built for you
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

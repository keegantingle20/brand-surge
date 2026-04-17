import type { Metadata } from "next";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import type { AccordionEntry } from "@/components/ui/Accordion";
import { Accordion } from "@/components/ui/Accordion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "How It Works | Brand Surge",
  description:
    "No black boxes. Here's exactly how Brand Surge builds your LinkedIn outbound system from ICP definition to booked meetings.",
};

const blocks = [
  {
    q: "What exactly do you build for me?",
    a: "We build a complete LinkedIn outbound infrastructure, not a template campaign. That means defining your ICP down to company size, industry, job title, and buying triggers. Writing message sequences that speak to your specific buyer's exact pain. Configuring HeyReach automation that personalizes at scale. Deploying it under your LinkedIn presence so every conversation starts with your credibility, not ours.",
  },
  {
    q: "How long until we see results?",
    a: "Most clients receive their first qualified LinkedIn conversations within three to four weeks of campaign launch, once ICP definition and message sequencing are finalized (typically weeks one and two). Full pipeline velocity, where conversations are coming in consistently week over week, develops by weeks six to eight. We don't promise overnight results. We build systems that compound.",
  },
  {
    q: "What's required from our team?",
    a: "Two hours in week one for onboarding. We need to understand your business, your best clients, and what makes a conversation worth having. After that, we handle operations: campaign management, reply monitoring, weekly optimization, and performance reporting. Your job is to handle the conversations we book. That's the whole model.",
  },
] as const;

const faqItems: readonly AccordionEntry[] = [
  {
    id: "linkedin-following",
    title: "Do I need a large LinkedIn following for this to work?",
    content:
      "No. Campaigns run from your existing profile regardless of follower count. We optimize your profile positioning during onboarding. We've run successful campaigns from profiles with under 500 connections.",
  },
  {
    id: "vs-sdr",
    title: "How is this different from hiring an SDR?",
    content:
      "A full-time SDR costs $60–80K per year, takes 3–6 months to ramp, and requires management. Our system is live within 2 weeks, includes strategy not just execution, and costs a fraction of a hire. When you're ready to bring someone in-house, we hand off the playbook.",
  },
  {
    id: "account-restricted",
    title: "Will my LinkedIn account get restricted?",
    content:
      "Not if campaigns are built correctly. We stay within LinkedIn's weekly limits, use gradual ramp-up periods, and build genuine personalization into every sequence. We tested this on our own account first.",
  },
  {
    id: "industries",
    title: "What industries do you work with?",
    content:
      "Professional services, B2B SaaS, commercial construction and real estate, and manufacturing. If you sell through consultative relationships and need more qualified pipeline, the system works.",
  },
  {
    id: "onboarding-time",
    title: "How long does onboarding take?",
    content:
      "Two hours of your time in week one. We handle everything else — ICP, messaging, setup, and launch. Most clients have their first campaign live within 10–14 days.",
  },
  {
    id: "low-reply-rates",
    title: "What if reply rates are low?",
    content:
      "We rewrite and retest. Weekly optimization is built into every engagement. If sequences aren't hitting target rates we diagnose and rebuild. You're not paying for a set-it-and-forget-it campaign.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        label="HOW IT WORKS"
        heading="No black boxes. Here's exactly how we build your pipeline."
        subline="Three questions every prospect asks before they book. Here are the real answers."
      />

      <div className="section-y-continue mx-auto flex max-w-3xl flex-col gap-20 px-6">
        {blocks.map((b) => (
          <div key={b.q}>
            <p className="mb-4 text-lg font-semibold text-brand-cyan">
              {b.q}
            </p>
            <p className="leading-relaxed text-[#b4c5d8]">{b.a}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mb-28 max-w-3xl px-6 md:mb-32">
        <div className="rounded-2xl border border-brand-cyan/15 bg-[#0a1628] p-10">
          <SectionLabel className="mb-2">COMPLIANCE</SectionLabel>
          <h3 className="mb-3 text-lg font-semibold text-white">
            Built within LinkedIn&apos;s guidelines by design.
          </h3>
          <p className="text-sm leading-relaxed text-[#b4c5d8]">
            All campaigns are built and managed in full compliance with
            LinkedIn&apos;s terms of service. No bulk blasting. No fake
            accounts. No account risk. Every connection request and message is
            crafted for the specific person receiving it. Personalized at scale
            means genuine personalization, not mail merge. We built our own
            system this way first. Then we built it for clients.
          </p>
        </div>
      </div>

      <section className="section-y-bordered bg-[#010f1f]">
        <div className="mx-auto max-w-3xl px-6">
          <SectionLabel className="mb-2">FAQ</SectionLabel>
          <h2 className="mb-12 mt-3 text-2xl font-bold text-white md:text-3xl">
            Questions we hear before kickoff
          </h2>
          <Accordion idPrefix="how-it-works-faq" items={faqItems} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}

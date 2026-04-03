import type { Metadata } from "next";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "No black boxes. Here's exactly how Brand Surge builds your LinkedIn outbound system from ICP definition to booked meetings.",
};

const blocks = [
  {
    q: "What exactly do you build for me?",
    a: "We build a complete LinkedIn outbound infrastructure — not a template campaign. That means: defining your ICP down to company size, industry, job title, and buying triggers. Writing message sequences that speak to your specific buyer's exact pain. Configuring HeyReach automation that personalizes at scale. And deploying it under your LinkedIn presence so every conversation starts with your credibility, not ours.",
  },
  {
    q: "How long until we see results?",
    a: "Most clients receive their first qualified LinkedIn conversations within 3–4 weeks of campaign launch — once ICP definition and message sequencing are finalized (typically week 1–2). Full pipeline velocity, where conversations are coming in consistently week over week, develops by week 6–8. We don't promise overnight results. We build systems that compound.",
  },
  {
    q: "What's required from our team?",
    a: "Two hours in week one for onboarding — we need to understand your business, your best clients, and what makes a conversation worth having. After that, we handle operations: campaign management, reply monitoring, weekly optimization, and performance reporting. Your job is to handle the conversations we book. That's the whole model.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        label="HOW IT WORKS"
        heading="No black boxes. Here's exactly how we build your pipeline."
        subline="Three questions every prospect asks before they book. Here are the real answers."
      />

      <div className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-24">
        {blocks.map((b) => (
          <div key={b.q}>
            <p className="mb-4 text-lg font-semibold text-brand-cyan">
              {b.q}
            </p>
            <p className="leading-relaxed text-[#94a3b8]">{b.a}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mb-24 max-w-3xl px-6">
        <div className="rounded-2xl border border-brand-cyan/15 bg-[#0a1628] p-10">
          <SectionLabel className="mb-2">COMPLIANCE</SectionLabel>
          <h3 className="mb-3 text-lg font-semibold text-white">
            Built within LinkedIn&apos;s guidelines — by design.
          </h3>
          <p className="text-sm leading-relaxed text-[#94a3b8]">
            All campaigns are built and managed in full compliance with
            LinkedIn&apos;s terms of service. No bulk blasting. No fake
            accounts. No account risk. Every connection request and message is
            crafted for the specific person receiving it — personalized at scale
            means genuine personalization, not mail merge. We built our own
            system this way first. Then we built it for clients.
          </p>
        </div>
      </div>

      <CTABanner />
    </>
  );
}

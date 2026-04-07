import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog | Brand Surge",
  description:
    "Insights on B2B outbound, pipeline systems, and revenue from Brand Surge.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="BLOG"
        heading="Playbooks and pipeline breakdowns, coming soon."
        subline={
          "We're preparing long-form content on outbound systems, ICP strategy, and what actually moves the needle for B2B service companies. Sanity-powered posts will land here next."
        }
      />
      <section className="section-y-bordered mx-auto max-w-2xl px-6 text-center">
        <p className="text-sm text-[#b4c5d8]">
          Want actionable pipeline insight in the meantime? Book a free audit
          and we&apos;ll walk through your outbound gaps on the call.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">
            Book a pipeline audit
          </Button>
          <Link
            href="/"
            className="text-sm text-brand-cyan transition hover:text-brand-white"
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </>
  );
}

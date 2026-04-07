import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Book a Pipeline Audit | Brand Surge",
  description:
    "Book a free 15-minute pipeline audit with Brand Surge. Tell us about your business and we'll identify exactly where your outbound is breaking.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="GET STARTED"
        heading="Let's find out where your pipeline is breaking."
        subline="15 minutes. No pitch. Just clarity on what's broken and what it would take to fix it."
      />
      <div className="mx-auto max-w-xl px-6 py-16">
        <ContactForm />
        <p className="mt-6 text-center text-xs text-[#7c8fa3]">
          No spam. No sales pitch. We&apos;ll review your answers before the
          call so we can make every minute count.
        </p>
      </div>
    </>
  );
}

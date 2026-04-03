import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on B2B outbound, pipeline systems, and revenue from Brand Surge.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="text-3xl font-bold text-white">Blog</h1>
      <p className="mt-4 text-[#94a3b8]">
        Long-form playbooks and pipeline breakdowns are on the way.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-block text-sm text-brand-cyan hover:text-brand-white"
      >
        Book a pipeline audit →
      </Link>
    </section>
  );
}

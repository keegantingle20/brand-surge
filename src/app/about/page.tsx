import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About | Brand Surge",
  description:
    "Brand Surge was built by two University of Louisville students who started with a camera and built a B2B outbound agency. Here's the real story.",
};

type TeamBio = {
  name: string;
  role: string;
  bio: string;
  linkedIn?: string;
};

const bios: TeamBio[] = [
  {
    name: "Koby Batts",
    role: "Co-Founder & Partner",
    bio: "Koby holds an MS in Economics from the University of Louisville, where he also served as College of Business Student Body President. He co-founded Brand Surge in 2022 while still an undergraduate, starting with real estate photography and building it into a B2B outbound agency. Koby leads ICP strategy, outbound system design, and client engagements.",
  },
  {
    name: "Keegan Tingle",
    role: "Co-Founder & Partner",
    bio: "Keegan graduated from the University of Louisville's Innovation MBA program and served as Fraternity President during his undergrad years. He co-built Brand Surge from the ground up alongside Koby, leading growth operations, new market development, and strategic partnerships. He also runs Valent, a parallel venture focused on relationship-driven growth.",
  },
  {
    name: "James Miscione",
    role: "Growth Consultant",
    bio: "James specializes in LinkedIn campaign architecture and ICP refinement across B2B service verticals. He works directly with clients to optimize message sequencing and improve connection-to-conversation rates.",
    linkedIn: "https://www.linkedin.com/in/james-miscione-ab77a124b/",
  },
  {
    name: "Kellen McHugh",
    role: "Business Development Manager",
    bio: "Kellen leads new client acquisition at Brand Surge, building the pipeline that fuels the agency's own growth. He's responsible for partnership development and expanding Brand Surge's presence in new verticals.",
    linkedIn: "https://www.linkedin.com/in/kellen-mchugh-47b917199/",
  },
];

const values = [
  {
    title: "We stay until it works",
    body: "We don't hand off and disappear. We're in the campaign with you: monitoring, adjusting, and rewriting until performance is where it needs to be. Strategy without execution is just advice.",
  },
  {
    title: "Specificity over volume",
    body: "One right prospect in the right conversation is worth more than a thousand messages sent to the wrong list. ICP definition isn't a step we rush. It's the foundation everything else is built on.",
  },
  {
    title: "Systems over hustle",
    body: "Effort without structure doesn't scale. We build repeatable processes, not one-off campaigns, because sustainable pipeline requires a machine, not a sprint.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT"
        heading="We started this in college. We haven't stopped since."
        subline="Four years, three business models, and one consistent mission: help businesses generate pipeline by design, not by luck."
      />

      <div className="section-y-continue mx-auto flex max-w-3xl flex-col gap-16 px-6">
        <div>
          <SectionLabel className="mb-4">Where we started</SectionLabel>
          <p className="text-base leading-relaxed text-[#b4c5d8]">
            Brand Surge started in 2022 with a camera, a drone, and one goal:
            do great work and keep getting better. Koby Batts and Keegan Tingle,
            two University of Louisville students, built the first version of
            the company in real estate photography, showing up on-site,
            sweating every detail, and building trust the old-school way: by
            delivering. Keegan was running his fraternity at the time. Koby was
            serving as the University&apos;s College of Business Student Body
            President. Neither of them waited for the right moment. They started
            anyway.
          </p>
        </div>
        <div>
          <SectionLabel className="mb-4">What we discovered</SectionLabel>
          <p className="text-base leading-relaxed text-[#b4c5d8]">
            Over time, they noticed something. Photos weren&apos;t the whole
            game. Marketing was. Clients didn&apos;t just want their listings
            to look good. They wanted demand. So Brand Surge expanded into
            digital marketing, learning strategy, messaging, funnels, and what
            actually drives revenue. The more they worked across industries
            (construction, professional services, local business), the clearer it
            became: the companies winning weren&apos;t relying on luck or
            referrals alone. They had systems.
          </p>
        </div>
        <div>
          <SectionLabel className="mb-4">What we built</SectionLabel>
          <p className="text-base leading-relaxed text-[#b4c5d8]">
            That insight became Brand Surge&apos;s focus. Today, Surge
            specializes in building outbound engines for B2B service companies
            who are exceptional at delivery but don&apos;t have a repeatable way
            to generate new pipeline. ICP-first. LinkedIn-native.
            Automation-powered. Built to run consistently, not just when
            referrals happen to come in. We built our own system first. Then we
            built it for clients. The same methodology runs both.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-brand-border px-6" />

      <section className="section-y mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-2xl font-bold text-white">
          The people behind the system
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {bios.map((m) => (
            <div
              key={m.name}
              className="flex gap-6 rounded-2xl border border-brand-border bg-[#0a1628] p-8"
            >
              <div
                className="h-20 w-20 shrink-0 rounded-full border border-brand-cyan/20 bg-brand-blue/20"
                aria-hidden
              />
              <div>
                <p className="font-semibold text-white">{m.name}</p>
                <p className="mt-0.5 text-sm text-brand-cyan">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#b4c5d8]">
                  {m.bio}
                </p>
                {m.linkedIn ? (
                  <Link
                    href={m.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-xs text-brand-cyan hover:underline"
                  >
                    LinkedIn
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-[#0a1628]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>HOW WE WORK</SectionLabel>
          <h2 className="mb-10 mt-3 text-2xl font-bold text-white">
            Three things we believe that shape everything we build.
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-brand-border bg-[#010f1f] p-8"
              >
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#b4c5d8]">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

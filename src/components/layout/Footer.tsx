import Link from "next/link";
import { BriefcaseBusiness, Building2, MapPin, Rocket } from "lucide-react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { Button } from "@/components/ui/Button";
import { CALENDLY_AUDIT_URL } from "@/lib/constants";

const footerCtaGradientStyle = {
  background: "linear-gradient(135deg, #25dee3 0%, #1dcfff 55%, #45beef 100%)",
} as const;

function LinkedInIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      className="py-16"
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #010f1f 100%)",
      }}
    >
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #1dcfff, #25dee3, #8deaff, #1dcfff, transparent)",
        }}
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="mb-3 inline-flex justify-center md:justify-start"
              aria-label="Brand Surge home"
            >
              <BrandLogo
                variant="lockup"
                className="h-7 max-w-[11rem] md:h-8 md:max-w-[12rem]"
              />
            </Link>
            <p className="mx-auto mt-3 max-w-[200px] text-sm leading-relaxed text-[#b4c5d8] md:mx-0">
              Started in Louisville. Built for B2B companies tired of waiting
              for referrals.
            </p>
            <div className="mt-6 flex justify-center text-brand-cyan md:justify-start">
              <a
                href="https://www.linkedin.com/company/brandsurgeky"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-brand-white"
                aria-label="Brand Surge on LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#7c8fa3] md:justify-start">
              <Building2 className="h-6 w-6 text-[#25dee3]" aria-hidden />
              COMPANY
            </p>
            <ul className="mt-4 flex flex-col items-center gap-3 md:items-start">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[#b4c5d8] transition hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-sm text-[#b4c5d8] transition hover:text-white"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-[#b4c5d8] transition hover:text-white"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#7c8fa3] md:justify-start">
              <BriefcaseBusiness className="h-6 w-6 text-[#25dee3]" aria-hidden />
              SERVICES
            </p>
            <ul className="mt-4 flex flex-col items-center gap-3 md:items-start">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-[#b4c5d8] transition hover:text-white"
                >
                  LinkedIn Outbound
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-[#b4c5d8] transition hover:text-white"
                >
                  Digital Marketing & Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-[#b4c5d8] transition hover:text-white"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#7c8fa3] md:justify-start">
              <Rocket className="h-6 w-6 text-[#25dee3]" aria-hidden />
              GET STARTED
            </p>
            <p className="mb-4 mt-4 text-sm text-[#b4c5d8]">
              Ready to build a consistent pipeline?
            </p>
            <Button
              href={CALENDLY_AUDIT_URL}
              variant="primary"
              className="mx-auto w-full hover:opacity-95 md:mx-0"
              style={footerCtaGradientStyle}
            >
              Get Started
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[rgba(29,207,255,0.12)] pt-8 md:flex-row">
          <p className="text-xs text-[#7c8fa3]">
            © 2026 Brand Surge. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-[#7c8fa3]">
            <MapPin className="h-6 w-6 text-[#25dee3]" aria-hidden />
            Louisville, KY
          </p>
        </div>
      </div>
    </footer>
  );
}

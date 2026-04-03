"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CALENDLY_AUDIT_URL } from "@/lib/constants";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerClass =
    "fixed top-0 z-50 w-full transition-all duration-300" +
    (scrolled
      ? " border-b border-[rgba(19,152,183,0.15)] bg-[#010f1f]/95 backdrop-blur-md"
      : " border-b border-transparent bg-transparent");

  return (
    <header className={headerClass}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-[4.5rem]">
        <Link
          href="/"
          className="font-heading text-lg font-bold text-brand-white md:text-xl"
        >
          Brand Surge
        </Link>

        <nav
          className="z-50 hidden items-center gap-10 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-[#94a3b8] transition hover:text-brand-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={CALENDLY_AUDIT_URL} variant="primary">
            Book a pipeline audit
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-white md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="border-b border-brand-border bg-[#010f1f] px-6 py-6 md:hidden"
        >
          <nav
            className="z-50 flex flex-col gap-4"
            aria-label="Mobile navigation"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-[#94a3b8] transition hover:text-brand-white"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button
              href={CALENDLY_AUDIT_URL}
              variant="primary"
              className="mt-2 w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Book a pipeline audit
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { CALENDLY_AUDIT_URL } from "@/lib/constants";

const ctaGradient =
  "linear-gradient(135deg, #25dee3 0%, #1dcfff 55%, #45beef 100%)";

function shouldShowFloatingCta(): boolean {
  if (typeof window === "undefined") return false;
  const hero = document.getElementById("hero");
  if (hero) {
    const rect = hero.getBoundingClientRect();
    return rect.bottom < 40;
  }
  return window.scrollY > window.innerHeight * 0.72;
}

export function FloatingAuditCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const update = useCallback(() => {
    setVisible(shouldShowFloatingCta());
  }, []);

  useEffect(() => {
    update();
    const onScroll = () => update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const id = window.requestAnimationFrame(() => update());
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(id);
    };
  }, [pathname, update]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="floating-audit-cta"
          className="pointer-events-none fixed bottom-6 right-6 z-[55] max-w-[calc(100vw-2rem)] sm:bottom-8 sm:right-8"
          initial={{ opacity: 0, y: 18, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.94 }}
          transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.65 }}
        >
          <a
            href={CALENDLY_AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold text-brand-navy shadow-[0_0_28px_rgba(37,222,227,0.35),0_8px_24px_rgba(1,15,31,0.45)] transition hover:opacity-[0.97] hover:shadow-[0_0_36px_rgba(37,222,227,0.45),0_10px_28px_rgba(1,15,31,0.5)] active:scale-[0.98]"
            style={{ background: ctaGradient }}
            aria-label="Book a free audit (opens Calendly in a new tab)"
          >
            <motion.span
              className="relative flex h-2 w-2 shrink-0"
              aria-hidden
            >
              <span className="absolute inset-0 rounded-full bg-brand-navy/25" />
              <motion.span
                className="relative block h-2 w-2 rounded-full bg-brand-navy"
                animate={{ opacity: [1, 0.45, 1], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.span>
            Book a free audit
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

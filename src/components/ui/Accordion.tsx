"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionEntry = {
  id: string;
  title: string;
  content: string;
};

type AccordionProps = {
  items: readonly AccordionEntry[];
  className?: string;
  /** Prefix for stable DOM ids (aria-controls). */
  idPrefix?: string;
  /** When false (default), opening one item closes any other. */
  allowMultiple?: boolean;
};

export function Accordion({
  items,
  className,
  idPrefix = "accordion",
  allowMultiple = false,
}: AccordionProps) {
  const [open, setOpen] = useState<Set<string>>(() => new Set());

  const toggle = (id: string) => {
    setOpen((prev) => {
      if (!allowMultiple) {
        return prev.has(id) ? new Set() : new Set([id]);
      }
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => {
        const isOpen = open.has(item.id);
        const panelId = `${idPrefix}-${item.id}-panel`;
        const triggerId = `${idPrefix}-${item.id}-trigger`;
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border border-brand-border bg-[#0a1628]"
          >
            <button
              type="button"
              id={triggerId}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[rgba(29,207,255,0.05)] focus-visible:outline-none"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
            >
              <span className="text-base font-semibold leading-snug text-white md:text-[1.05rem]">
                {item.title}
              </span>
              <motion.span
                className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-cyan/35 bg-[#010f1f]/70 text-brand-cyan"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                aria-hidden
              >
                <span className="absolute left-1/2 top-1/2 h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
                <span className="absolute left-1/2 top-1/2 h-0.5 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
              </motion.span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="px-5 pb-5 text-sm leading-relaxed text-[#b4c5d8] md:text-[0.9375rem]"
                >
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

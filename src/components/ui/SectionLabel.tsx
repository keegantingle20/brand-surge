import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-brand-frost drop-shadow-[0_0_22px_rgba(141,234,255,0.4)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

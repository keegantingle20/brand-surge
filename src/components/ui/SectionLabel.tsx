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
        "mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-brand-cyan",
        className,
      )}
    >
      {children}
    </span>
  );
}

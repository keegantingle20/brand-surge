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
        "mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#5cecf1] drop-shadow-[0_0_20px_rgba(37,222,227,0.35)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

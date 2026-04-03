import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-2xl border border-brand-border bg-[#0a1628]", className)}
      {...props}
    >
      {children}
    </div>
  );
}

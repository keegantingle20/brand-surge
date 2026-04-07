"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const ASSETS = {
  lockup: { src: "/brand-surge-lockup.png", w: 400, h: 88 },
  wordmark: { src: "/brand-surge-wordmark.png", w: 320, h: 72 },
  icon: { src: "/brand-surge-icon.png", w: 256, h: 256 },
} as const;

export type BrandLogoVariant = keyof typeof ASSETS;

export function BrandLogo({
  variant = "lockup",
  className,
  priority,
}: {
  variant?: BrandLogoVariant;
  className?: string;
  priority?: boolean;
}) {
  const a = ASSETS[variant];
  return (
    <Image
      src={a.src}
      alt="Brand Surge"
      width={a.w}
      height={a.h}
      className={cn(
        "h-auto w-auto object-contain object-left",
        variant === "wordmark" && "brightness-0 invert",
        className,
      )}
      priority={priority}
    />
  );
}

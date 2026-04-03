import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-cyan text-brand-navy font-semibold text-sm hover:bg-brand-teal active:scale-[0.97] transition-all duration-150",
  outline:
    "inline-flex items-center justify-center px-6 py-3 rounded-lg border border-brand-cyan/70 text-brand-cyan text-sm font-medium hover:bg-brand-cyan/10 active:scale-[0.97] transition-all duration-150",
  ghost:
    "inline-flex items-center justify-center px-4 py-2 text-brand-cyan text-sm font-medium hover:text-brand-white transition-colors duration-150",
};

export type ButtonProps = {
  variant?: Variant;
  className?: string;
  href?: string;
  children: React.ReactNode;
} & (
  | Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">
  | Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">
);

export function Button({
  variant = "primary",
  className = "",
  href,
  type = "button",
  disabled,
  children,
  ...props
}: ButtonProps & { type?: "button" | "submit" | "reset"; disabled?: boolean }) {
  const classes = `${variantClasses[variant]} ${disabled ? "cursor-not-allowed opacity-60" : ""} ${className}`.trim();

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(props as object)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

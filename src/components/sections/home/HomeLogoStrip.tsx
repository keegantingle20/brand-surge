import Image from "next/image";

/**
 * Decorative strip supplied with brand assets (reference marks).
 * Empty alt: presentational only; does not imply client relationships.
 */
export function HomeLogoStrip() {
  return (
    <section
      className="border-y border-[rgba(141,234,255,0.1)] bg-[#010f1f]/90 py-8 md:py-10"
      aria-hidden
    >
      <div className="mx-auto max-w-6xl px-6">
        <Image
          src="/brand-surge-logo-strip.png"
          alt=""
          width={1200}
          height={96}
          className="mx-auto h-7 w-full max-w-5xl object-contain opacity-45 transition-opacity duration-300 ease-out hover:opacity-75 md:h-9"
        />
      </div>
    </section>
  );
}

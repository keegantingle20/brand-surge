import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function FeaturedOwnAccountCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mt-12 overflow-hidden rounded-2xl border border-brand-cyan/20 bg-[#0a1628] p-10 md:p-14",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -left-8 -top-8 h-64 w-64 rounded-full bg-brand-cyan/5 blur-3xl"
        aria-hidden
      />
      <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            BRAND SURGE — OWN LINKEDIN ACCOUNT
          </p>
          <h3 className="mb-6 text-2xl font-bold leading-snug text-white md:text-3xl">
            4.4% message-to-meeting conversion. In a single 7-day campaign.
          </h3>
          <p className="mb-8 text-sm leading-relaxed text-[#94a3b8]">
            Before we build outbound systems for clients, we run them on
            ourselves. This is what Brand Surge&apos;s own LinkedIn outbound
            produced — using the exact ICP-first methodology and campaign
            architecture we deploy for every engagement.
          </p>
          <Button href="/case-studies" variant="ghost" className="px-0">
            See our full case studies →
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { n: "22.9%", l: "Reply rate over 6 months" },
            { n: "79", l: "Replies from a single 317-message campaign" },
            { n: "14", l: "Demo meetings booked in one week" },
            { n: "+4,733", l: "New LinkedIn followers in 12 months (201.9% growth)" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-[rgba(19,152,183,0.12)] bg-[#010f1f] p-6"
            >
              <p className="text-2xl font-bold text-brand-cyan md:text-3xl">
                {s.n}
              </p>
              <p className="mt-1 text-xs text-[#94a3b8]">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

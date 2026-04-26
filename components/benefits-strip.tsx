import Link from "next/link";
import { additionalWorkouts, benefits } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

export function BenefitsStrip() {
  return (
    <section className="section-pad border-y hairline bg-[#0b0b0a]">
      <SectionHeader
        kicker="Member benefits"
        title="More than access to a gym floor."
        text="The live Skale offer includes plans, programs, meal guidance, custom workouts, healthy recipes, and specialty training formats."
      />
      <div className="inner mt-12 grid gap-8 lg:grid-cols-2">
        <div className="grid gap-px overflow-hidden border hairline bg-white/10 sm:grid-cols-2">
          {benefits.map((item) => (
            <div className="bg-black p-5 text-sm font-bold text-white" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="grid gap-3">
          {additionalWorkouts.map((item) => (
            <div className="flex items-center justify-between border-b hairline py-3" key={item}>
              <span className="text-sm text-[#d8d5cc]">{item}</span>
              <span className="h-2 w-2 bg-[#ffb000]" />
            </div>
          ))}
          <Link
            href="/member-benefits"
            className="mt-4 w-fit border border-white/25 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] !text-white transition hover:border-white hover:bg-white hover:!text-black"
          >
            See benefits
          </Link>
        </div>
      </div>
    </section>
  );
}

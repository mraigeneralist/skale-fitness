import { FinalCTA } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { LocationGrid } from "@/components/location-grid";
import { PricingTable } from "@/components/pricing-table";
import { ProgramRail } from "@/components/program-rail";
import { SectionHeader } from "@/components/section-header";
import { TestimonialMarquee } from "@/components/testimonial-marquee";
import { FeatureBand } from "@/components/feature-band";
import { heroStats } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="border-y hairline bg-[#0a0a09]">
        <div className="inner grid grid-cols-2 gap-px sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div className="py-8 sm:py-10" key={stat.label}>
              <p className="display text-4xl font-bold text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 max-w-36 text-xs uppercase tracking-[0.22em] text-[#b9b6ad]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <FeatureBand />
      <ProgramRail />
      <section className="section-pad">
        <SectionHeader
          kicker="Memberships"
          title="Train hard without guessing what it costs."
          text="Simple plans for committed lifters, class regulars, first-time members, and teams."
        />
        <PricingTable compact />
      </section>
      <LocationGrid />
      <TestimonialMarquee />
      <FinalCTA />
    </main>
  );
}

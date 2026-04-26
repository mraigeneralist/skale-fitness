import type { Metadata } from "next";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { PricingTable } from "@/components/pricing-table";
import { SectionHeader } from "@/components/section-header";
import { IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Explore Skale Fitness membership options including monthly, quarterly, half-yearly, annual, group, and corporate packages.",
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Memberships"
        title="Premium training, practical plans."
        image={IMAGES.pricing}
        text="Flexible access for trial members, disciplined regulars, groups, and corporate teams."
      />
      <section className="section-pad">
        <SectionHeader
          kicker="Published packages"
          title="Pick a plan. Confirm your preferred club."
          text="Prices are presented from the discovered Skale pricing content and should be confirmed with the chosen club before purchase."
        />
        <PricingTable />
      </section>
      <FinalCTA />
    </main>
  );
}

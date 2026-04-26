import type { Metadata } from "next";
import { BenefitsStrip } from "@/components/benefits-strip";
import { ClassesSection } from "@/components/classes-section";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { PricingTable } from "@/components/pricing-table";
import { SectionHeader } from "@/components/section-header";
import { IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Member Benefits",
  description:
    "Fitness plans, workout programs, meal plans, custom workouts, healthy recipes, training formats, and memberships at Skale Fitness.",
};

export default function MemberBenefitsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Member benefits"
        title="The full Skale membership stack."
        image={IMAGES.programHero}
        text="Bring together fitness plans, workout programming, meal support, custom routines, classes, and specialty training."
      />
      <BenefitsStrip />
      <section className="section-pad">
        <SectionHeader
          kicker="Membership packages"
          title="Yearly and group packages from the live site."
          text="Annual, half-yearly, quarterly, monthly, and group package structures are represented here."
        />
        <PricingTable />
      </section>
      <ClassesSection compact />
      <FinalCTA />
    </main>
  );
}

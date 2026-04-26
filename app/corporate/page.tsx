import type { Metadata } from "next";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Corporate Wellness",
  description:
    "Corporate wellness and group membership support from Skale Fitness.",
};

export default function CorporatePage() {
  return (
    <main>
      <PageHero
        eyebrow="Corporate"
        title="Workplace wellness with real training infrastructure."
        image={IMAGES.corporate}
        text="Team memberships, group access, and wellness programming for companies that want healthier, more consistent teams."
      />
      <section className="section-pad">
        <SectionHeader
          kicker="Team offer"
          title="From one-off enthusiasm to repeatable routines."
          text="Corporate packages can support onboarding, group memberships, fitness challenges, and location-specific access."
        />
      </section>
      <FinalCTA />
    </main>
  );
}

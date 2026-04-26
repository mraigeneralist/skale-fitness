import type { Metadata } from "next";
import { FinalCTA } from "@/components/final-cta";
import { LocationGrid } from "@/components/location-grid";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Franchisee",
  description: "Franchise Owned, Company Operated opportunities with Skale Fitness.",
};

export default function FranchiseePage() {
  return (
    <main>
      <PageHero
        eyebrow="FOCO"
        title="Franchise owned. Company operated."
        image={IMAGES.locations}
        text="Skale's live site highlights FOCO expansion across Chennai and nearby markets."
      />
      <section className="section-pad">
        <SectionHeader
          kicker="Expansion model"
          title="Local ownership with a consistent operating standard."
          text="Use this page to capture franchise interest while reinforcing brand quality, club design, and operations support."
        />
      </section>
      <LocationGrid full />
      <FinalCTA />
    </main>
  );
}

import type { Metadata } from "next";
import { FinalCTA } from "@/components/final-cta";
import { LocationGrid } from "@/components/location-grid";
import { PageHero } from "@/components/page-hero";
import { IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find Skale Fitness clubs across Chennai including Ambattur, Perambur, Mugappair East, Avadi, Collector Nagar, Anna Nagar, Madipakkam, and more.",
};

export default function LocationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Locations"
        title="A stronger Chennai, one club at a time."
        image={IMAGES.locations}
        text="Choose your nearest Skale club and confirm current access, timings, and membership availability before you visit."
      />
      <LocationGrid full />
      <FinalCTA />
    </main>
  );
}

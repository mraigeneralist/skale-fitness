import type { Metadata } from "next";
import { ClassesSection } from "@/components/classes-section";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fitness Classes",
  description:
    "Skale Fitness class packages including fat-loss, HIIT, strength, toning, and transformation programs.",
};

export default function ClassesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Fitness classes"
        title="Guided energy, structured results."
        image={IMAGES.classes}
        text="Skale's live site promotes short-format class packages for fat loss, strength, toning, HIIT, and transformation."
      />
      <ClassesSection />
      <FinalCTA />
    </main>
  );
}

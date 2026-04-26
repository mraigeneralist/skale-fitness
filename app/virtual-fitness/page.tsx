import type { Metadata } from "next";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Virtual Fitness",
  description: "Virtual fitness support and flexible training content from Skale Fitness.",
};

export default function VirtualFitnessPage() {
  return (
    <main>
      <PageHero
        eyebrow="Virtual fitness"
        title="Training support beyond the club floor."
        image={IMAGES.virtual}
        text="A page for remote programming, habit support, and flexible training content connected to the Skale ecosystem."
      />
      <section className="section-pad">
        <SectionHeader
          kicker="Remote support"
          title="Programming that travels with the member."
          text="Use this route for video sessions, at-home plans, habit check-ins, and member education content."
        />
      </section>
      <FinalCTA />
    </main>
  );
}

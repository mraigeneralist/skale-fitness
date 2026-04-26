import type { Metadata } from "next";
import Image from "next/image";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { IMAGES, trainers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Trainers",
  description:
    "Meet the coaching approach behind Skale Fitness personal training, group training, strength, cardio, and transformation support.",
};

export default function TrainersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Trainers"
        title="Expert coaching without the intimidation."
        image={IMAGES.trainers}
        text="Skale's trainer-led model focuses on form, consistency, motivation, and measurable progress."
      />
      <section className="section-pad">
        <SectionHeader
          kicker="Coach profiles"
          title="Representative coaching roles for launch."
          text="The site is structured for verified trainer bios; launch copy uses role-based profiles until approved staff photography and names are supplied."
        />
        <div className="inner mt-14 grid gap-px overflow-hidden border hairline bg-white/10 md:grid-cols-3">
          {trainers.map((trainer) => (
            <article className="bg-[#0b0b0a] p-7" key={trainer.name}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.24em] text-[#ffb000]">
                {trainer.focus}
              </p>
              <h2 className="display mt-3 text-3xl font-bold text-white">
                {trainer.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#b9b6ad]">
                {trainer.bio}
              </p>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}

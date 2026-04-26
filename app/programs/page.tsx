import type { Metadata } from "next";
import Image from "next/image";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { IMAGES, programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Personal training, strength, cardio, functional training, yoga, Zumba, boxing, mobility, and HIIT at Skale Fitness.",
};

export default function ProgramsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Programs"
        title="Choose your discipline. Skale the intensity."
        image={IMAGES.programHero}
        text="From personal coaching to group energy, Skale builds training around clear goals and consistent progression."
      />
      <section className="section-pad">
        <SectionHeader
          kicker="Training menu"
          title="Everything has a purpose."
          text="Each program is built for a clear outcome: strength, conditioning, stamina, mobility, skill, or confidence."
        />
        <div className="inner mt-14 grid gap-px overflow-hidden border hairline bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              className="group relative min-h-[410px] overflow-hidden bg-[#080807]"
              key={program.title}
            >
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover opacity-58 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-85 group-hover:grayscale-0"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">
                  {program.mode}
                </p>
                <h2 className="display mt-3 text-4xl font-bold text-white">
                  {program.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#d8d5cc]">
                  {program.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}

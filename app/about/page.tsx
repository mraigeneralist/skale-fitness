import type { Metadata } from "next";
import Image from "next/image";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { IMAGES, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Skale Fitness brings strength, cardio, expert coaching, and wellness-led training to communities across Chennai.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Skale"
        title="Built for Chennai athletes at every level."
        image={IMAGES.about}
        text="Skale Fitness Unlimited pairs state-of-the-art training floors with coaching, community, and a practical path into consistent fitness."
      />
      <section className="section-pad">
        <div className="inner grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            align="left"
            kicker="The standard"
            title="A gym chain with a coaching heartbeat."
            text="The brand promise is simple: create spaces where beginners feel guided, regulars feel challenged, and serious members have room to push."
          />
          <div className="relative min-h-[420px] overflow-hidden">
            <Image
              src={IMAGES.community}
              alt="Skale Fitness training floor"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </section>
      <section className="border-y hairline bg-[#10100f] py-16">
        <div className="inner grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="border-l hairline pl-6">
              <p className="text-xs uppercase tracking-[0.25em] text-[#ffb000]">
                {value.kicker}
              </p>
              <h2 className="display mt-4 text-3xl font-bold text-white">
                {value.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#b9b6ad]">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}

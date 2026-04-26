import type { Metadata } from "next";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { TestimonialMarquee } from "@/components/testimonial-marquee";
import { IMAGES, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stories",
  description: "Member stories, motivation, and transformation themes from Skale Fitness.",
};

export default function StoriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Stories"
        title="Member wins, coach moments, daily proof."
        image={IMAGES.testimonials}
        text="The original site links to stories; this page gives the redesign a place for short-form member and transformation highlights."
      />
      <section className="section-pad">
        <div className="inner grid gap-px overflow-hidden border hairline bg-white/10 md:grid-cols-2">
          {testimonials.map((item) => (
            <article className="bg-black p-8" key={item.name}>
              <p className="text-xs uppercase tracking-[0.24em] text-[#ffb000]">
                {item.context}
              </p>
              <h2 className="display mt-4 text-4xl font-bold text-white">
                {item.name}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#d8d5cc]">
                {item.quote}
              </p>
            </article>
          ))}
        </div>
      </section>
      <TestimonialMarquee />
      <FinalCTA />
    </main>
  );
}

import type { Metadata } from "next";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { TestimonialMarquee } from "@/components/testimonial-marquee";
import { IMAGES, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read member stories and public review themes from Skale Fitness clubs across Chennai.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Member stories"
        title="The room changes when people feel seen."
        image={IMAGES.testimonials}
        text="Members consistently point to ambience, trainers, equipment, and the motivation to keep showing up."
      />
      <section className="section-pad">
        <SectionHeader
          kicker="Reviews"
          title="Real signals, edited for clarity."
          text="Short-form testimonials preserve the themes discovered in public reviews and the current Skale site."
        />
        <div className="inner mt-12 grid gap-px overflow-hidden border hairline bg-white/10 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote className="bg-[#0b0b0a] p-8" key={item.name}>
              <p className="text-lg leading-8 text-white">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-8 text-xs uppercase tracking-[0.24em] text-[#ffb000]">
                {item.name} / {item.context}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
      <TestimonialMarquee />
      <FinalCTA />
    </main>
  );
}

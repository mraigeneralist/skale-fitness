import type { Metadata } from "next";
import Image from "next/image";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { IMAGES, programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Skale Fitness gallery of training, equipment, classes, and club energy.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="The feel of the room matters."
        image={IMAGES.gallery}
        text="A visual gallery for training floors, classes, strength work, cardio, and community energy."
      />
      <section className="section-pad">
        <div className="inner grid gap-4 md:grid-cols-3">
          {programs.slice(0, 9).map((item) => (
            <div className="relative aspect-square overflow-hidden bg-black" key={item.title}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center opacity-82"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}

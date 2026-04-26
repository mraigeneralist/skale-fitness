import Image from "next/image";
import { IMAGES } from "@/lib/content";

export function FeatureBand() {
  return (
    <section className="section-pad overflow-hidden">
      <div className="inner grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffb000]">
            The Skale method
          </p>
          <h2 className="display mt-5 text-5xl font-bold leading-[0.95] text-white sm:text-7xl">
            Serious equipment. Human coaching. No wasted sessions.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#b9b6ad]">
            The experience is built around strength, cardio, classes, and
            trainer guidance, with the kind of ambience that makes showing up
            feel less like a chore and more like a ritual.
          </p>
          <div className="mt-10 grid gap-5 border-l hairline pl-6 text-sm leading-7 text-[#d8d5cc]">
            <p>State-of-the-art strength and cardio floors.</p>
            <p>Personal training, small group formats, and class energy.</p>
            <p>Multiple Chennai clubs with a practical free-pass funnel.</p>
          </div>
        </div>
        <div className="relative min-h-[620px] overflow-hidden">
          <Image
            src={IMAGES.community}
            alt="Members training at Skale Fitness"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 display text-4xl font-bold leading-none text-white sm:text-5xl">
            Built for the lift, the sprint, the comeback.
          </p>
        </div>
      </div>
    </section>
  );
}

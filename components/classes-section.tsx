import Image from "next/image";
import Link from "next/link";
import { classPackages } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

type ClassesSectionProps = {
  compact?: boolean;
};

export function ClassesSection({ compact = false }: ClassesSectionProps) {
  const list = compact ? classPackages.slice(0, 3) : classPackages;

  return (
    <section className="section-pad">
      <SectionHeader
        kicker="Fitness classes"
        title="Structured class programs from the live Skale offer."
        text="Short-format class packages bring cardio, strength, toning, HIIT, and transformation work into guided blocks."
      />
      <div className="inner mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((item) => (
          <article className="group border hairline bg-[#0b0b0a]" key={item.name}>
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover object-center opacity-78 transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#ffb000]">
                {item.duration}
              </p>
              <h3 className="display mt-4 text-4xl font-bold text-white">
                {item.name}
              </h3>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="display text-3xl font-bold text-white">
                  {item.price}
                </span>
                <Link
                  href="/contact"
                  className="bg-[#ffb000] px-4 py-3 text-xs font-black uppercase tracking-[0.18em] !text-black transition hover:bg-white"
                >
                  Join now
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

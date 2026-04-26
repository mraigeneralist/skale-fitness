import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

type LocationGridProps = {
  full?: boolean;
};

export function LocationGrid({ full = false }: LocationGridProps) {
  const list = full ? locations : locations.slice(0, 6);

  return (
    <section className="section-pad border-y hairline bg-[#0b0b0a]">
      <SectionHeader
        kicker="Chennai network"
        title="Find your nearest training floor."
        text="Location data is presented carefully because directory listings can lag. Confirm current club access before visiting."
      />
      <div className="inner mt-14 grid gap-px overflow-hidden border hairline bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((location) => (
          <Link
            href="/contact"
            className="group relative min-h-[320px] overflow-hidden bg-black"
            key={location.name}
          >
            <Image
              src={location.image}
              alt={`${location.name} Skale Fitness listing`}
              fill
              className="object-cover opacity-54 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-86 group-hover:grayscale-0"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">
                {location.status}
              </p>
              <h3 className="display mt-3 text-4xl font-bold text-white">
                {location.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      {!full ? (
        <div className="inner mt-10 text-center">
          <Link
            href="/locations"
            className="inline-flex border border-white/25 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] transition hover:border-white hover:bg-white hover:text-black"
          >
            See all locations
          </Link>
        </div>
      ) : null}
    </section>
  );
}

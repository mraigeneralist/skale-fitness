import Image from "next/image";
import Link from "next/link";
import { servicePages } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

export function ServiceLinks() {
  return (
    <section className="section-pad">
      <SectionHeader
        kicker="More from Skale"
        title="Corporate, virtual, gallery, franchise, and stories."
        text="These live-site content areas are now represented as clean routes instead of being buried in dropdowns."
      />
      <div className="inner mt-14 grid gap-px overflow-hidden border hairline bg-white/10 md:grid-cols-5">
        {servicePages.map((item) => (
          <Link className="group relative min-h-[310px] overflow-hidden bg-black" href={item.href} key={item.href}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center opacity-52 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-82 group-hover:grayscale-0"
              sizes="(min-width: 768px) 20vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="display text-3xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-xs leading-6 text-[#d8d5cc]">{item.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

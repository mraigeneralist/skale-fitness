import Image from "next/image";
import Link from "next/link";
import { contact, IMAGES, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t hairline bg-black">
      <div className="inner grid gap-12 py-14 md:grid-cols-[1fr_0.8fr_0.8fr]">
        <div>
          <Image src={IMAGES.logo} alt="Skale Fitness" width={150} height={52} />
          <p className="mt-6 max-w-sm text-sm leading-7 text-[#aaa69c]">
            A premium, Chennai-first fitness chain for strength, cardio,
            coaching, community, and everyday consistency.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#ffb000]">Explore</p>
          <div className="mt-5 grid gap-3 text-sm text-[#d7d3c7]">
            {nav.map((item) => (
              <Link className="hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#ffb000]">Contact</p>
          <div className="mt-5 grid gap-3 text-sm leading-7 text-[#d7d3c7]">
            <p>{contact.address}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
        </div>
      </div>
      <div className="inner border-t hairline py-6 text-xs uppercase tracking-[0.2em] text-[#77736b]">
        Skale Fitness redesign concept. Source-reviewed public content.
      </div>
    </footer>
  );
}

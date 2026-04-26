import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="noise overflow-hidden bg-[#ffb000] py-20 text-black">
      <div className="inner flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.3em]">
            Free pass
          </p>
          <h2 className="display mt-4 text-5xl font-bold leading-[0.92] sm:text-7xl">
            Walk in once. Decide with your body.
          </h2>
        </div>
        <Link
          href="/contact"
          className="relative z-10 w-fit bg-black px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
        >
          Book a visit
        </Link>
      </div>
    </section>
  );
}

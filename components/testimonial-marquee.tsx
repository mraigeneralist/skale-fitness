import { testimonials } from "@/lib/content";

export function TestimonialMarquee() {
  return (
    <section className="overflow-hidden border-y hairline bg-black py-12">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-4">
        {[...testimonials, ...testimonials].map((item, index) => (
          <blockquote
            className="w-[340px] border-l hairline px-6 py-4 sm:w-[460px]"
            key={`${item.name}-${index}`}
          >
            <p className="text-lg leading-8 text-white">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-5 text-xs uppercase tracking-[0.22em] text-[#ffb000]">
              {item.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

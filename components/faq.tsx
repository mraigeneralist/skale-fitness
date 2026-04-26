import { faqs } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

export function FAQ() {
  return (
    <section className="section-pad border-t hairline bg-[#0b0b0a]">
      <SectionHeader
        kicker="Questions"
        title="Fast answers before your first session."
      />
      <div className="inner mt-12 divide-y divide-white/10 border-y hairline">
        {faqs.map((faq) => (
          <details className="group py-6" key={faq.question}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left">
              <span className="display text-3xl font-bold text-white">
                {faq.question}
              </span>
              <span className="text-3xl text-[#ffb000] group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#b9b6ad]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

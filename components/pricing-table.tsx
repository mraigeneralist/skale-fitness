import Link from "next/link";
import { pricing } from "@/lib/content";

type PricingTableProps = {
  compact?: boolean;
};

export function PricingTable({ compact = false }: PricingTableProps) {
  const plans = compact ? pricing.slice(0, 4) : pricing;

  return (
    <div className="inner mt-14 grid gap-px overflow-hidden border hairline bg-white/10 md:grid-cols-2 lg:grid-cols-3">
      {plans.map((plan) => (
        <article
          className={`bg-[#0b0b0a] p-7 ${
            plan.highlight ? "outline outline-1 outline-[#ffb000]" : ""
          }`}
          key={plan.name}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#ffb000]">
                {plan.name}
              </p>
              <h3 className="display mt-4 text-5xl font-bold text-white">
                {plan.price}
              </h3>
            </div>
            {plan.highlight ? (
              <span className="bg-[#d7ff2f] px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-black">
                Popular
              </span>
            ) : null}
          </div>
          <p className="mt-5 text-sm leading-7 text-[#b9b6ad]">{plan.note}</p>
          <ul className="mt-8 grid gap-3 text-sm text-[#eee9dc]">
            {plan.features.map((feature) => (
              <li className="border-t hairline pt-3" key={feature}>
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-8 inline-flex w-full justify-center bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-[#ffb000]"
          >
            Confirm plan
          </Link>
        </article>
      ))}
    </div>
  );
}

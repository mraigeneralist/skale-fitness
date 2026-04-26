import Link from "next/link";
import { pricing } from "@/lib/content";

type PricingTableProps = {
  compact?: boolean;
};

export function PricingTable({ compact = false }: PricingTableProps) {
  const plans = compact ? pricing.slice(0, 4) : pricing;

  return (
    <div
      className={`inner mt-14 grid gap-4 ${
        compact ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2 xl:grid-cols-3"
      }`}
    >
      {plans.map((plan) => (
        <article
          className={`relative flex min-h-[430px] flex-col border p-7 transition duration-300 hover:-translate-y-1 ${
            plan.highlight
              ? "border-[#ffb000] bg-[#17120a] shadow-[0_0_0_1px_rgba(255,176,0,0.35),0_24px_70px_rgba(255,176,0,0.12)]"
              : "border-white/12 bg-[#0b0b0a] hover:border-white/30"
          }`}
          key={plan.name}
        >
          {plan.highlight ? (
            <span className="absolute right-5 top-5 bg-[#d7ff2f] px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-black">
              Popular
            </span>
          ) : null}
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#ffb000]">
              {plan.name}
            </p>
            <h3 className="display mt-5 text-5xl font-bold leading-none text-white">
              {plan.price}
            </h3>
          </div>
          <p className="mt-5 text-sm leading-7 text-[#b9b6ad]">{plan.note}</p>
          <ul className="mt-8 grid gap-3 text-sm text-[#eee9dc]">
            {plan.features.map((feature) => (
              <li className="flex gap-3 border-t hairline pt-3" key={feature}>
                <span className="mt-1 h-2 w-2 shrink-0 bg-[#ffb000]" />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={`mt-auto inline-flex w-full justify-center px-5 py-4 text-xs font-black uppercase tracking-[0.2em] transition ${
              plan.highlight
                ? "bg-[#ffb000] !text-black hover:bg-[#d7ff2f]"
                : "bg-white !text-black hover:bg-[#ffb000]"
            }`}
          >
            Confirm plan
          </Link>
        </article>
      ))}
    </div>
  );
}

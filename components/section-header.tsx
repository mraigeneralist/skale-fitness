type SectionHeaderProps = {
  kicker: string;
  title: string;
  text?: string;
  align?: "center" | "left";
};

export function SectionHeader({
  kicker,
  title,
  text,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={
        align === "center"
          ? "inner mx-auto max-w-3xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ffb000]">
        {kicker}
      </p>
      <h2 className="display mt-5 text-5xl font-bold leading-[0.95] text-white sm:text-6xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 text-base leading-8 text-[#b9b6ad]">{text}</p>
      ) : null}
    </div>
  );
}

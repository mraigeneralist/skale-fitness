import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
};

export function PageHero({ eyebrow, title, text, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[72svh] overflow-hidden pt-20">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-68"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9),rgba(0,0,0,0.45),rgba(0,0,0,0.12)),linear-gradient(0deg,rgba(0,0,0,0.72),transparent_50%)]" />
      <div className="relative z-10 flex min-h-[calc(72svh-5rem)] items-end">
        <div className="inner pb-14">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffb000]">
            {eyebrow}
          </p>
          <h1 className="display mt-5 max-w-4xl text-6xl font-bold leading-[0.9] text-white sm:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#e0ddd4]">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

type BlogGridProps = {
  compact?: boolean;
};

export function BlogGrid({ compact = false }: BlogGridProps) {
  const list = compact ? blogs.slice(0, 3) : blogs;

  return (
    <section className="section-pad border-y hairline bg-[#0b0b0a]">
      <SectionHeader
        kicker="Blogs"
        title="Fitness education belongs in the brand, too."
        text="The live site has a large blog library; this redesign brings those topics into a polished editorial system."
      />
      <div className="inner mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((post) => (
          <article className="group bg-black" key={post.title}>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover object-center opacity-78 transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="border-x border-b hairline p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[#ffb000]">
                {post.category}
              </p>
              <h3 className="display mt-4 text-3xl font-bold leading-tight text-white">
                {post.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#b9b6ad]">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
      {compact ? (
        <div className="inner mt-10 text-center">
          <Link
            href="/blogs"
            className="inline-flex border border-white/25 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] !text-white transition hover:border-white hover:bg-white hover:!text-black"
          >
            All blogs
          </Link>
        </div>
      ) : null}
    </section>
  );
}

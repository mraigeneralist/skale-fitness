import type { Metadata } from "next";
import { BlogGrid } from "@/components/blog-grid";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Fitness, exercise, nutrition, sleep, and gym guidance from the Skale Fitness blog library.",
};

export default function BlogsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blogs"
        title="Training knowledge, cleaned up for reading."
        image={IMAGES.blogs}
        text="The original Skale site has a deep article library. This page brings those topics into an editorial grid."
      />
      <BlogGrid />
      <FinalCTA />
    </main>
  );
}

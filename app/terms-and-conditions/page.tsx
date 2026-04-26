import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Policy"
        title="Terms & Conditions"
        image={IMAGES.about}
        text="A styled placeholder route for the live site's policy content. Replace with approved legal copy before launch."
      />
    </main>
  );
}

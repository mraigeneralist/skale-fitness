import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Refund Policy",
};

export default function RefundPage() {
  return (
    <main>
      <PageHero
        eyebrow="Policy"
        title="Refund Policy"
        image={IMAGES.pricing}
        text="A styled placeholder route for the live site's refund policy. Replace with approved legal copy before launch."
      />
    </main>
  );
}

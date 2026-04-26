import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Policy"
        title="Privacy Policy"
        image={IMAGES.contact}
        text="A styled placeholder route for the live site's privacy policy. Replace with approved legal copy before launch."
      />
    </main>
  );
}

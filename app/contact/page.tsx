import type { Metadata } from "next";
import { FAQ } from "@/components/faq";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { IMAGES, contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free pass, choose your nearby Skale Fitness club, and contact the team for membership details.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Free pass"
        title="Start with one visit."
        image={IMAGES.contact}
        text="Choose a nearby club, share your details, and the Skale team can help you find the right membership path."
      />
      <section className="section-pad">
        <div className="inner grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              align="left"
              kicker="Contact"
              title="Tell us where you want to train."
              text="This form is ready for backend integration. For now, it validates client-side and confirms the request on screen."
            />
            <div className="mt-10 border-t hairline pt-8 text-sm leading-7 text-[#b9b6ad]">
              <p className="text-white">{contact.address}</p>
              <p className="mt-4">{contact.phone}</p>
              <p>{contact.email}</p>
              <p className="mt-4">{contact.hours}</p>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
      <FAQ />
    </main>
  );
}

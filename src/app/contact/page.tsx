import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import QuoteForm from "@/components/contact/QuoteForm";
import SiteVisitStrip from "@/components/contact/SiteVisitStrip";
import NextSteps from "@/components/contact/NextSteps";
import ContactCtaBanner from "@/components/shared/ContactCtaBanner";

export const metadata: Metadata = {
  title: "Contact Us | 1st Building Contractors Ltd",
  description:
    "Request a free, fixed-price construction quote. Senior project managers offer complimentary site visits across Greater London within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <ContactDetails />
            <QuoteForm />
          </div>
        </div>
      </section>

      <SiteVisitStrip />
      <NextSteps />
      <ContactCtaBanner />
    </>
  );
}

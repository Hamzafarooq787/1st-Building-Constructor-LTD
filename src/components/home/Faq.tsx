import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import FaqAccordion from "@/components/shared/FaqAccordion";

const FAQS = [
  {
    question: "Do you handle planning permissions and building regulations?",
    answer:
      "Yes, our comprehensive design-and-build service handles full architectural drawings, planning applications, permitted development rights, and local authority building control inspections.",
  },
  {
    question: "How long does a typical home extension or loft conversion take?",
    answer:
      "Most single-storey rear extensions take between 10 to 14 weeks, while loft conversions typically range from 6 to 9 weeks, subject to bespoke structural requirements.",
  },
  {
    question: "Are your quotes fixed or subject to change?",
    answer:
      "We provide comprehensive, itemised, fixed-price contracts after full site inspection and structural assessment. Any client-requested variations are agreed in writing beforehand.",
  },
  {
    question: "Are you fully insured and do you offer guarantees?",
    answer:
      "Absolutely. We hold £10M Public and Employers' Liability insurance, and all major structural works come backed by our comprehensive 10-year warranty.",
  },
  {
    question: "Can we remain living in our home during the renovation?",
    answer:
      "For most loft conversions and exterior extensions, we establish sealed dust partitions and external scaffolding access so families can comfortably remain in residence.",
  },
  {
    question: "How do stage payments work?",
    answer:
      "We operate on milestone-based payment schedules tied to certified stages (e.g. foundations poured, structural steel placed, watertight shell, first fix, completion).",
  },
];

export default function Faq() {
  return (
    <section className="py-16 sm:py-20 bg-[#F4F6F8] border-t border-gray-200" data-purpose="faq-section" id="faq">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GOT QUESTIONS?"
          title="Frequently Asked Questions"
          description="Find quick answers to common questions about our building process, planning permission, and contracts."
        />

        <FaqAccordion items={FAQS} />

        <div className="text-center mt-10">
          <p className="text-xs sm:text-sm text-gray-600">
            Have a specific project in mind?{" "}
            <Link className="text-brand-maroon font-bold underline hover:text-brand-maroonDark ml-1" href="/contact">
              Speak directly with our chief surveyor today
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

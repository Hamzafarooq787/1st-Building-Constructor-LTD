import SectionHeading from "@/components/shared/SectionHeading";
import FaqAccordion from "@/components/shared/FaqAccordion";

const FAQS = [
  {
    question: "Do I need planning permission before contacting you?",
    answer:
      "No, you do not need planning permission in place to reach out. Many house extensions and loft conversions fall under Permitted Development rights. Furthermore, we can coordinate directly with planning consultants and architectural partners to prepare and submit all necessary applications to your local London borough council.",
  },
  {
    question: "How do you handle Party Wall Agreements with neighbors?",
    answer:
      "For terraced or semi-detached properties common in London, Party Wall notices are essential when digging foundations or inserting structural steel beams. We assist you in identifying affected adjoining owners, preparing notices, and coordinating with qualified Party Wall Surveyors to obtain prompt agreement without project delays.",
  },
  {
    question: "Is your quotation fixed-price, or are there hidden extras?",
    answer:
      "We provide fully transparent, fixed-price contracts based on verified structural drawings and architectural schedules. Any modifications or owner-directed scope alterations are documented with an official Variation Order requiring your written sign-off before implementation, guaranteeing you retain 100% budget control.",
  },
  {
    question: "What guarantees and insurance cover do you provide?",
    answer:
      "We hold £10M in Public and Employers' Liability insurance. All structural completions come backed by a comprehensive 10-year structural warranty, alongside certified Building Control Completion certificates signed off by the local authority or approved inspector.",
  },
];

export default function ServicesFaq() {
  return (
    <section className="w-full py-14 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common Queries"
          title="Frequently Asked Questions"
          description="Everything you need to know about starting your construction project with 1st Building Contractors Ltd."
        />
        <FaqAccordion items={FAQS} />
      </div>
    </section>
  );
}

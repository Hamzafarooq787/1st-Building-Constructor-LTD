import { CreditCard, Compass, Sparkles, Headset } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const PILLARS = [
  {
    icon: CreditCard,
    title: "Integrity & Fixed Pricing",
    description:
      "Clear, itemised schedules of work with guaranteed fixed pricing. We do not engage in artificial low bids followed by arbitrary variations.",
    tag: "Zero Hidden Surcharges",
  },
  {
    icon: Compass,
    title: "Architectural Precision",
    description:
      "Uncompromising compliance with UK Building Regulations and British Standards (BS EN). Full laser-guided structural alignments and calculations.",
    tag: "Local Authority Certified",
  },
  {
    icon: Sparkles,
    title: "Respect for Your Home",
    description:
      "Polite, considerate master craftsmen. Daily site tidying, protective floor coverings, HEPA dust extraction, and consideration for immediate neighbours.",
    tag: "Considerate Contractors",
  },
  {
    icon: Headset,
    title: "Direct Leadership Access",
    description:
      "Direct mobile access to the site manager and company directors. Weekly progress consultations, photo updates, and immediate problem-solving.",
    tag: "Direct Director Mobile Access",
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built On Trust"
          title="The Principles That Guide Every Build"
          description="We hold our craftsmen, surveyors, and project managers to exacting British building standards, backed by clear ethical codes of conduct."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-maroon/10 flex items-center justify-center text-brand-maroon">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-gray-900">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
                <div className="pt-4 mt-4 bg-gray-50 p-2 rounded text-xs text-brand-maroon font-semibold flex items-center gap-1">
                  <span>{pillar.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

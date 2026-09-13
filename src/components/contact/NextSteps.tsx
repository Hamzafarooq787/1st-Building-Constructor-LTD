import SectionHeading from "@/components/shared/SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Initial Phone Consultation",
    timeframe: "Within 24 Hours",
    description:
      "Our estimating team calls to discuss your vision, review any existing architect sketches, and define preliminary timeline targets and budget constraints.",
  },
  {
    number: "02",
    title: "Free On-Site Survey",
    timeframe: "Within 3–5 Working Days",
    description:
      "Our Senior Project Manager visits your property to evaluate structural loads, drainage routes, access parameters, and party wall considerations.",
  },
  {
    number: "03",
    title: "Itemised Fixed Quote",
    timeframe: "7 Days Post-Survey",
    description:
      "You receive a comprehensive, trade-by-trade breakdown outlining materials, labor schedules, phase payments, and guaranteed completion dates.",
  },
];

export default function NextSteps() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Transparent Process"
          title="What Happens Next?"
          description="From your initial consultation through to site establishment, we manage every milestone with surgical precision."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="bg-gray-50 p-6 sm:p-8 rounded-xl">
              <div className="w-11 h-11 rounded-full bg-brand-maroon text-white font-bold flex items-center justify-center mb-5">
                {step.number}
              </div>
              <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
              <span className="text-xs text-brand-maroon font-semibold block mb-3">{step.timeframe}</span>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

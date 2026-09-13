import {
  FileText,
  UserCheck,
  ClipboardCheck,
  Hammer,
  Sparkles,
  MessageCircle,
  Check,
} from "lucide-react";

const REASONS = [
  {
    icon: FileText,
    title: "Fixed-Price Quotations & No Hidden Fees",
    description:
      "Transparent upfront itemised scopes. You receive an uncompromised breakdown of materials, labour, and timelines so there are never unwelcome surprises.",
    tag: "Zero Cost Ambiguity",
  },
  {
    icon: UserCheck,
    title: "Dedicated Site & Project Manager",
    description:
      "One single point of contact throughout the entire build. Your project manager coordinates trades, inspections, and direct daily logistics seamlessly.",
    tag: "Direct Directorial Contact",
  },
  {
    icon: ClipboardCheck,
    title: "Full Structural & Building Control Sign-Off",
    description:
      "Fully insured, compliant with British Standards, and accompanied by full building regulation certificates alongside a 10-year structural warranty.",
    tag: "10-Year Structural Guarantee",
  },
  {
    icon: Hammer,
    title: "In-House Skilled Craftsmanship",
    description:
      "Certified master builders, bespoke architectural joinery, structural steel experts, and qualified trades ensuring fine finishes at every junction.",
    tag: "Certified Master Trades",
  },
  {
    icon: Sparkles,
    title: "Clean, Respectful & On Schedule",
    description:
      "Tidy sites with dust extraction, protective coverings, strict milestone schedules, and genuine respect for you and your neighbours at all hours.",
    tag: "Considerate Constructors Mindset",
  },
  {
    icon: MessageCircle,
    title: "Transparent Daily/Weekly Updates",
    description:
      "Digital progress tracking, photographic logs, and weekly milestone walkthroughs keep you fully informed every step of the transformation.",
    tag: "Real-Time Milestone Visibility",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-white" data-purpose="why-choose-us" id="why-us">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-brand-maroon text-[11px] sm:text-xs uppercase tracking-[0.25em] font-extrabold block mb-2">
            WHY WORK WITH US
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-3">
            The Standards That Set Us Apart
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From concept to completion, we combine technical precision with seamless communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="p-6 sm:p-7 rounded-xl border border-gray-200 bg-white hover:border-brand-maroon/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-maroon/10 text-brand-maroon flex items-center justify-center mb-5 group-hover:bg-brand-maroon group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-black text-gray-900 mb-2.5">{reason.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
                <div className="pt-4 mt-2 border-t border-gray-100 flex items-center text-brand-maroon text-xs font-bold">
                  <span>{reason.tag}</span>
                  <Check className="w-3.5 h-3.5 ml-auto" aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

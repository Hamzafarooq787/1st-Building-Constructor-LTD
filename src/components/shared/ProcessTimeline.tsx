import { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  tag?: string;
};

type ProcessTimelineProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: ProcessStep[];
  tone?: "dark" | "light";
};

export default function ProcessTimeline({
  eyebrow,
  title,
  description,
  steps,
  tone = "light",
}: ProcessTimelineProps) {
  const isDark = tone === "dark";

  return (
    <section className={`w-full py-14 sm:py-16 lg:py-20 ${isDark ? "bg-[#14161B] text-white" : "bg-white"}`}>
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} tone={isDark ? "dark" : "light"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`rounded-xl p-6 space-y-3 transition-colors ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10"
                    : "bg-gray-50 border border-gray-200 hover:border-brand-maroon/30"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm ${
                    isDark ? "bg-brand-maroon text-white" : "bg-brand-maroon text-white"
                  }`}
                >
                  {step.number}
                </div>
                <h3 className={`font-bold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>{step.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {step.description}
                </p>
                {step.tag ? (
                  <div
                    className={`pt-2 flex items-center gap-2 text-xs uppercase font-semibold ${
                      isDark ? "text-brand-maroonLight" : "text-brand-maroon"
                    }`}
                  >
                    {Icon ? <Icon className="w-3.5 h-3.5" aria-hidden="true" /> : null}
                    <span>{step.tag}</span>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

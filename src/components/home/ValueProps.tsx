import { Users, Award, ShieldCheck, Clock } from "lucide-react";

const FEATURES = [
  { icon: Users, label: "Experienced Team" },
  { icon: Award, label: "High Quality Workmanship" },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Clock, label: "On Time On Budget" },
];

export default function ValueProps() {
  return (
    <section className="border-y border-gray-200 bg-white py-8" data-purpose="features-trust-bar">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.label} className="flex flex-col items-center justify-center p-2">
                <div className="text-brand-maroon mb-2.5">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">{feature.label}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { ShieldCheck, Landmark, Home, Flame, Zap, Handshake } from "lucide-react";

const BADGES = [
  { icon: ShieldCheck, title: "TrustMark", subtitle: "Government Endorsed" },
  { icon: Landmark, title: "Master Builders", subtitle: "FMB Registered" },
  { icon: Home, title: "NHBC Standards", subtitle: "Compliant Delivery" },
  { icon: Flame, title: "Gas Safe", subtitle: "Certified Engineers" },
  { icon: Zap, title: "NICEIC", subtitle: "Approved Electrical" },
  { icon: Handshake, title: "Considerate", subtitle: "Constructors Scheme" },
];

export default function Accreditations() {
  return (
    <section className="py-14 sm:py-16 bg-gray-50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <span className="text-brand-maroon text-xs uppercase tracking-widest font-semibold">
            Verified Accreditations &amp; Compliance
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900">
            Regulated by the UK&rsquo;s Leading Industry Bodies
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-stretch">
          {BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.title} className="bg-white p-4 rounded-xl text-center space-y-2 shadow-sm">
                <Icon className="w-8 h-8 text-brand-maroon mx-auto" aria-hidden="true" />
                <div className="text-xs font-bold uppercase text-gray-900">{badge.title}</div>
                <div className="text-[11px] text-gray-500">{badge.subtitle}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

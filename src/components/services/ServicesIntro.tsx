import Link from "next/link";
import { Users, Award, ShieldCheck, Clock } from "lucide-react";

const ANCHORS = [
  { label: "New Builds", href: "#new-builds" },
  { label: "Extensions", href: "#extensions" },
  { label: "Loft Conversions", href: "#lofts" },
  { label: "Structural Works", href: "#structural" },
  { label: "Groundworks", href: "#groundworks" },
];

const STATS = [
  { icon: Users, title: "Experienced Team", subtitle: "Master Tradesmen & Engineers" },
  { icon: Award, title: "High Quality", subtitle: "Craftsmanship Guaranteed" },
  { icon: ShieldCheck, title: "Fully Insured", subtitle: "£10M Public & Employer Cover" },
  { icon: Clock, title: "On Time, On Budget", subtitle: "Strict Program Deadlines" },
];

export default function ServicesIntro() {
  return (
    <>
      <section className="relative w-full bg-[#14161B] text-white overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wider text-gray-400 mb-4">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-maroonLight font-bold">Our Services</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="hidden md:inline text-gray-400">London &amp; Home Counties Certified</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 text-brand-maroonLight px-3 py-1 rounded-full text-[11px] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-maroonLight" />
              Comprehensive Construction Solutions
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Expert Construction Services Built to Last
            </h1>
            <p className="font-script italic text-brand-maroonLight text-2xl sm:text-3xl">
              Craftsmanship, Precision &amp; Uncompromised Quality
            </p>
            <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
              From full structural engineering and architectural planning to immaculate turnkey handover, 1st
              Building Contractors Ltd delivers seamless, end-to-end building works across Prime Central London.
              Each build adheres strictly to UK Building Regulations with full NHBC guarantees.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 sm:gap-3">
              {ANCHORS.map((anchor) => (
                <a
                  key={anchor.label}
                  className="px-4 py-2 bg-white/10 hover:bg-brand-maroon text-white text-sm rounded transition-colors"
                  href={anchor.href}
                >
                  {anchor.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-8 sm:py-10 shadow-sm relative z-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-maroon flex items-center justify-center text-white shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base leading-tight">{stat.title}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{stat.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

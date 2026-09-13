import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const STATS = [
  { value: "15+", label: "Years Experience", sub: "London prime property" },
  { value: "350+", label: "Completed Builds", sub: "Extensions & new builds" },
  { value: "100%", label: "Sign-off Rate", sub: "Building control certified" },
  { value: "£10M", label: "Liability Cover", sub: "Complete peace of mind" },
  { value: "10 YR", label: "Warranty Backed", sub: "Insurance-backed policy" },
];

export default function AboutHero() {
  return (
    <>
      <section className="relative bg-white py-14 sm:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-gray-500 text-[11px] uppercase tracking-wider mb-4">
            <Link className="hover:text-brand-maroon transition-colors" href="/">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-maroon font-semibold">About Us</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-brand-maroon/10 text-brand-maroon px-3 py-1 rounded-full text-[11px] uppercase tracking-widest font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>About 1st Building Contractors | Over 15 Years of Excellence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Building London&rsquo;s Finest Homes With{" "}
              <span className="text-brand-maroon">Craftsmanship</span> &amp; Integrity.
            </h1>
            <div className="flex items-center gap-4 pt-1">
              <span className="font-script italic text-brand-maroon text-2xl sm:text-3xl">Build on Trust</span>
              <div className="h-0.5 w-16 bg-brand-maroon/30" />
              <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Est. London, UK</span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed pt-2">
              From full structural modernisations in Richmond to high-specification glass extensions in Hampstead,
              1st Building Contractors Ltd delivers premier residential construction rooted in precision
              engineering, transparent fixed pricing, and uncompromising craftsmanship across Greater London.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10 shadow-sm">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl sm:text-3xl font-black text-brand-maroon">{stat.value}</span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide">
                  {stat.label}
                </span>
                <span className="text-xs text-gray-500">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

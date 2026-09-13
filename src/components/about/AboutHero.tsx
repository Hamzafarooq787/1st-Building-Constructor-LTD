import Image from "next/image";
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
      <section className="relative bg-[#14161B] text-white overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            alt="British construction director and surveyors reviewing architectural blueprints on site in London"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9IWXYGS9m-i588_iwXP1mGRb3utvD3T3c05TciAsBw-3PU-nz4Bk74RSvHJbwxKTjkKrerB8uX9TOMOicAJE96Y34ey2qvpGNHwavoy3kSXK-FhTHk5Q3oa-fZz3x7ZWiZqKT6Q_a269SNetsHO0YfB-s9_6h-VkYLFMJroWKomQ5Xk0Egm18nVTTfmkSB80VbS3_mNDAFOZk24kDaxZH1Aam_ppBXIqrhpOwqYiq6fmSiCm0r3_u"
            fill
            priority
            className="object-cover object-top opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14161B] via-[#14161B]/95 to-[#14161B]/70" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-gray-400 text-[11px] uppercase tracking-wider mb-4">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-maroonLight font-semibold">About Us</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 text-brand-maroonLight px-3 py-1 rounded-full text-[11px] uppercase tracking-widest font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>About 1st Building Contractors | Over 15 Years of Excellence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Building London&rsquo;s Finest Homes With{" "}
              <span className="text-brand-maroonLight">Craftsmanship</span> &amp; Integrity.
            </h1>
            <div className="flex items-center gap-4 pt-1">
              <span className="font-script italic text-brand-maroonLight text-2xl sm:text-3xl">Build on Trust</span>
              <div className="h-0.5 w-16 bg-white/20" />
              <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Est. London, UK</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed pt-2">
              From full structural modernisations in Richmond to high-specification glass extensions in Hampstead,
              1st Building Contractors Ltd delivers premier residential construction rooted in precision
              engineering, transparent fixed pricing, and uncompromising craftsmanship across Greater London.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10 shadow-sm relative z-20">
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

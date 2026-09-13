import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Quote } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 bg-[#F9F9FB] border-b border-gray-200/80" data-purpose="about-us" id="about">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-brand-maroon text-[11px] sm:text-xs uppercase tracking-[0.25em] font-extrabold block mb-2">
                ABOUT 1ST BUILDING CONTRACTORS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.12]">
                Building London&apos;s Finest Homes With Craftsmanship &amp; Integrity
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              With over 15 years of industry excellence, 1st Building Contractors Ltd has established an enviable
              reputation across London and the Home Counties for delivering premier residential extensions, bespoke
              new builds, architectural loft conversions, and intricate structural alterations.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our foundation is simple: client trust and uncompromising standards. Every project benefits from
              dedicated in-house project managers, veteran tradesmen, transparent procurement schedules, and
              seamless communication from day one through to final building control sign-off.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-brand-maroon">15+</div>
                <div className="text-[11px] font-semibold text-gray-600 uppercase tracking-tight mt-0.5">
                  Years Exp.
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-brand-maroon">350+</div>
                <div className="text-[11px] font-semibold text-gray-600 uppercase tracking-tight mt-0.5">
                  Completed
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-brand-maroon">100%</div>
                <div className="text-[11px] font-semibold text-gray-600 uppercase tracking-tight mt-0.5">
                  Satisfaction
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-brand-maroon flex justify-center">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="text-[11px] font-semibold text-gray-600 uppercase tracking-tight mt-0.5">
                  Compliant
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <Link
                className="inline-flex items-center justify-center gap-2 bg-brand-maroon hover:bg-brand-maroonDark text-white font-bold px-6 py-3 rounded text-sm transition-all shadow-md w-fit"
                href="/contact"
              >
                <span>Discuss Your Build</span>
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
              <div className="text-xs text-gray-500 font-medium">Licensed • Fully Insured • NHBC Compliant</div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white">
              <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px]">
                <Image
                  alt="Modern British construction site meeting and craftsmanship, professional builders and project manager reviewing architectural blueprints on a bright contemporary home build site in London"
                  src="/images/about-preview.webp"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded shadow-lg border border-gray-100 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-maroon animate-pulse" />
                <span className="text-[10px] sm:text-xs font-black tracking-wider text-gray-900 uppercase">
                  Excellence in Construction
                </span>
              </div>
            </div>

            <div className="sm:absolute -bottom-8 -left-4 sm:left-6 bg-white rounded-lg p-5 sm:p-6 shadow-xl border border-gray-100 max-w-sm mt-4 sm:mt-0">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center shrink-0">
                  <Quote className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs sm:text-[13px] text-gray-700 font-medium italic leading-snug mb-2.5">
                    &quot;We treat every client&apos;s home with the exact structural rigor, discretion, and care as
                    if it were our own family&apos;s build.&quot;
                  </p>
                  <div className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    John M. — <span className="text-brand-maroon font-semibold">Managing Director</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

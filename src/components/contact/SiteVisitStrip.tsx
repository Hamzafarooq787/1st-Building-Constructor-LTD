import Image from "next/image";
import { CheckCheck } from "lucide-react";

export default function SiteVisitStrip() {
  return (
    <section className="w-full bg-gray-50 py-10 sm:py-12">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-3">
            <div className="text-xs uppercase tracking-wider text-brand-maroon font-semibold">
              On-Site Technical Feasibility
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">
              Meet Our Senior Structural Engineers &amp; Master Builders On Site
            </h3>
            <p className="text-sm text-gray-600">
              Every quote begins with an accurate dimensional inspection, reviewing foundation depths, load paths,
              drainage capacity, and local council planning regulations before finalizing contract budgets.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-900">
                <CheckCheck className="w-4 h-4 text-brand-maroon" aria-hidden="true" />
                <span>Party Wall &amp; Building Control Review</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-900">
                <CheckCheck className="w-4 h-4 text-brand-maroon" aria-hidden="true" />
                <span>Fixed JCT Contract Terms</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-md">
              <div className="relative w-full h-56 sm:h-64">
                <Image
                  alt="Construction site managers and structural engineers reviewing architectural blueprints at a London residential build site"
                  src="/images/contact-site-visit-strip.webp"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider text-brand-maroonLight block font-bold">
                  Client Briefing On Site
                </span>
                <span className="text-sm text-gray-100">Oakwood Residential Extension &amp; Loft Overhaul, SW14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

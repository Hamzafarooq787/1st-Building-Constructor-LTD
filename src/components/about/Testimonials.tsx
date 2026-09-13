import { Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const REVIEWS = [
  {
    quote:
      "John and his team completed a full structural ground-floor rear extension and crittall door installation for our period home in Richmond. Completed exactly on the agreed date with zero unexpected extras. Truly rare professionalism in London building.",
    name: "Dr. Edward & Claire H.",
    location: "Richmond Upon Thames",
    tag: "Extension",
  },
  {
    quote:
      "Our mansard loft conversion in Wimbledon required complex steel RSJ installation over a 3-storey Victorian townhouse. 1st Building Contractors were punctual, respectful to our neighbors, and passed every building control inspection first time.",
    name: "Marcus Vance",
    location: "Wimbledon, SW19",
    tag: "Loft Conversion",
  },
  {
    quote:
      "From initial structural engineering drawings to bespoke cabinetry, their standards never dipped. Having direct access to the managing director gave us continuous assurance throughout a massive 9-month build.",
    name: "Sarah & Philip T.",
    location: "Hampstead, NW3",
    tag: "Full Renovation",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex text-amber-500">
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className="w-4 h-4" fill="currentColor" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Client Experiences"
            title="Verified London Homeowner Testimonials"
            align="left"
          />
          <div className="flex items-center gap-2">
            <Stars />
            <span className="text-sm font-bold text-gray-900">5.0 Star Rated Across 120+ Audits</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-gray-50 p-6 rounded-xl flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <Stars count={5} />
                <p className="text-sm text-gray-800 leading-relaxed">&quot;{review.quote}&quot;</p>
              </div>
              <div className="pt-3 border-t border-gray-200 flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-gray-900">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.location}</div>
                </div>
                <span className="text-[11px] bg-white text-brand-maroon px-2 py-1 rounded font-semibold uppercase tracking-wider whitespace-nowrap">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

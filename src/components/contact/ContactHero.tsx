const METRICS = [
  { value: "< 24h", label: "Response Guaranteed" },
  { value: "10-Year", label: "Insurance Warranty" },
  { value: "100%", label: "Fixed-Price Quotes" },
];

export default function ContactHero() {
  return (
    <section className="relative w-full bg-gray-50 overflow-hidden py-14 sm:py-16 lg:py-20">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-maroon animate-pulse" />
            <span className="text-xs uppercase tracking-wider text-brand-maroon font-semibold">
              Start Your Project | Free Consultation &amp; Estimate
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Let&rsquo;s Discuss Your Next Build
          </h1>
          <div className="font-script italic text-brand-maroon text-xl sm:text-2xl">
            Your Project, Our Priority
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl pt-1">
            Receive a transparent, fixed-price proposal with no hidden contingencies. Our senior project managers
            offer complimentary site visits and feasibility assessments across Greater London within 24 hours.
          </p>

          <div className="pt-4 grid grid-cols-3 gap-4 sm:gap-10 text-left">
            {METRICS.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span className="font-bold text-brand-maroon text-base sm:text-lg">{metric.value}</span>
                <span className="text-[11px] sm:text-xs text-gray-500">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

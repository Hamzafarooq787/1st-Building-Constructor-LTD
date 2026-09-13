import { Phone, ArrowRight } from "lucide-react";

export default function ConsultationCallout() {
  return (
    <section className="py-14 sm:py-16 bg-gray-50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-brand-maroon text-xs uppercase tracking-widest font-bold">Have Plans Ready?</span>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">
              Book an On-Site Consultation with our Principal Surveyor
            </h3>
            <p className="text-sm text-gray-600 max-w-xl">
              We will review your architectural drawings, assess structural constraints, and supply a detailed
              fixed-price tender for your project.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-5 py-3 rounded text-sm font-bold uppercase tracking-wide transition-colors"
              href="tel:+447960957008"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>+44 (0) 7960 957 008</span>
            </a>
            <a
              className="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroonDark text-white px-5 py-3 rounded text-sm font-bold uppercase tracking-wide shadow-md transition-all"
              href="/contact"
            >
              <span>Arrange Site Visit</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

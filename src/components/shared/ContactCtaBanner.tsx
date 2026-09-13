import { Phone, Mail, ArrowRight } from "lucide-react";

export default function ContactCtaBanner() {
  return (
    <section
      className="blueprint-pattern text-white py-10 lg:py-12 relative overflow-hidden"
      data-purpose="contact-cta-bar"
      id="contact"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-pink-200 block">
              LET&apos;S BUILD YOUR VISION
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Get in Touch Today
            </h3>
            <p className="text-sm text-pink-100 font-medium">Free, no-obligation quote.</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm sm:text-base font-semibold items-center">
            <a className="flex items-center gap-3 hover:text-pink-200 transition-colors" href="tel:+447960957008">
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Phone className="w-4 h-4" aria-hidden="true" />
              </span>
              <span>+44 (0) 7960 957 008</span>
            </a>
            <a className="flex items-center gap-3 hover:text-pink-200 transition-colors" href="mailto:john@1st-bc.com">
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Mail className="w-4 h-4" aria-hidden="true" />
              </span>
              <span>john@1st-bc.com</span>
            </a>
          </div>

          <div>
            <a
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-maroon hover:bg-gray-100 font-bold px-6 py-3 rounded text-sm transition-all shadow-md"
              href="tel:+447960957008"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

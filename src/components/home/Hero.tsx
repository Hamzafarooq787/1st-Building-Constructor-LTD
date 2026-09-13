import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center bg-gray-900 text-white overflow-hidden"
      data-purpose="hero-banner"
    >
      <div className="absolute inset-0 z-0">
        <Image
          alt="Luxury architectural extension at dusk with warm illuminated sliding glass doors"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIPO_J0PhnK9WThdsryiDvovJq_CVhDVtgF0lCHk3UljA8yzQecREj7iTQ6FM7YrNYAdfNIYY6z2a7IheWqVcXu02VN5-3pSFZwV8bmW_0tibTVgjmZ-1A_tlxm0KWOqgVC9ykUN5nP7S8Mq585yDMoPxdqq36XXfm3iqr-4A0H30o5WNTiS_O03jfVXED0F44qMFyblvG4Mpx5GQta8NXh35JP3ZubpxzTJyJox7JxV4Acr3t7fDT"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 sm:py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gray-300 mb-2">
            QUALITY CONSTRUCTION <span className="mx-1 font-light opacity-60">|</span> LASTING RESULTS
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-6 text-white">
            1st Building
            <br />
            Contractors Ltd
          </h1>
          <div className="space-y-2 mb-8 text-sm sm:text-base font-semibold text-gray-100">
            <div className="flex items-center flex-wrap gap-x-2">
              <span className="text-brand-maroonLight font-black text-lg">›</span>
              <span>New Builds</span>
              <span className="text-brand-maroonLight font-normal mx-1">|</span>
              <span>Extensions</span>
              <span className="text-brand-maroonLight font-normal mx-1">|</span>
              <span>Loft Conversions</span>
            </div>
            <div className="flex items-center flex-wrap gap-x-2">
              <span className="text-brand-maroonLight font-black text-lg">›</span>
              <span>Structural Works</span>
              <span className="text-brand-maroonLight font-normal mx-1">|</span>
              <span>Groundworks</span>
            </div>
          </div>
          <div className="font-script text-white text-3xl sm:text-5xl leading-tight mb-8 drop-shadow-sm">
            Build on Trust
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-1">
            <Link
              className="inline-flex items-center justify-center gap-2 bg-brand-maroon hover:bg-brand-maroonDark text-white font-bold px-6 py-3.5 rounded text-sm transition-all shadow-lg hover:shadow-brand-maroon/40 w-fit"
              href="/contact"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
            <div className="text-xs sm:text-[13px] font-medium text-gray-200 flex items-center flex-wrap gap-1.5 opacity-95">
              <span>Reliable</span>
              <span className="text-brand-maroonLight">|</span>
              <span>Professional</span>
              <span className="text-brand-maroonLight">|</span>
              <span>On Time</span>
              <span className="text-brand-maroonLight">|</span>
              <span>On Budget</span>
            </div>
          </div>
        </div>

        <div className="absolute right-6 sm:right-12 bottom-6 sm:bottom-10 text-right hidden sm:block pointer-events-none">
          <p className="font-script text-3xl md:text-4xl lg:text-5xl text-gray-200/80 leading-tight">
            Your Project
            <br />
            Our Priority
          </p>
        </div>
      </div>
    </section>
  );
}

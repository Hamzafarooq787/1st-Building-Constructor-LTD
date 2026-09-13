import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Quote } from "lucide-react";

const DIFFERENTIATORS = [
  {
    title: "Guaranteed Fixed-Price Tenders:",
    description: "Detailed itemised quotes before signing, preventing mid-build price escalations.",
  },
  {
    title: "Live Milestone Schedules:",
    description: "Digital Gantt charts tracking each phase from foundations to secondary fix completion.",
  },
  {
    title: "Dedicated Site Foreman:",
    description: "On-site point of contact overseeing safety, cleanliness, and daily trade coordination.",
  },
];

export default function AboutStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <span className="text-brand-maroon text-xs uppercase tracking-widest font-extrabold">
                Our Philosophy &amp; Background
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                A Company Founded on Absolute Transparency and Uncompromising Rigor
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              1st Building Contractors Ltd was founded with an unapologetic standard: to eradicate the
              unpredictability often associated with residential construction. We recognized that London homeowners
              demand more than skilled trades—they demand meticulous program scheduling, clear contract
              communication, and complete integrity from day one.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              By operating our own in-house core teams of master bricklayers, structural steel specialists, and
              certified architectural carpenters, we maintain end-to-end quality control. Every project is assigned
              a full-time, hands-on site director who liaises directly with building control, structural engineers,
              and you.
            </p>

            <div className="space-y-3 pt-2">
              {DIFFERENTIATORS.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-maroon/10 flex items-center justify-center text-brand-maroon shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="text-sm text-gray-900">{item.title}</strong>
                    <span className="text-sm text-gray-600"> {item.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                className="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroonDark text-white px-6 py-3 rounded text-sm font-bold uppercase tracking-wide shadow-md transition-all"
                href="/services"
              >
                <span>Explore Our Project Portfolio</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white p-3 rounded-2xl shadow-xl border border-gray-100 space-y-4">
              <div className="relative overflow-hidden rounded-xl">
                <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[420px]">
                  <Image
                    alt="On-site British construction director and surveyors reviewing architectural blueprints on a wooden trestle table at a sunny London jobsite"
                    src="/images/about-hero-story.webp"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-[#14161B]/90 backdrop-blur-sm text-white p-3 rounded-lg text-xs flex items-center gap-2">
                  <span>Excellence in Construction — Site Director &amp; Surveyors on site in London</span>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl space-y-2">
                <Quote className="w-5 h-5 text-brand-maroon" aria-hidden="true" />
                <blockquote className="font-script italic text-gray-800 text-lg leading-snug">
                  &quot;Construction isn&apos;t just about structural steel and brickwork. It is about the trust our
                  clients place in us when inviting us to transform their family homes. We honor that trust with
                  relentless precision and open communication.&quot;
                </blockquote>
                <div className="pt-1 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-gray-900">John M.</div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">
                      Managing Director, 1st Building Contractors Ltd
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-maroon text-white flex items-center justify-center font-bold text-sm shrink-0">
                    1st
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

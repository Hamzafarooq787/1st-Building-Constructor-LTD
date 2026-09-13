import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

export type ServiceDetailProps = {
  id: string;
  eyebrow: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  caseRef: string;
  caseTitle: string;
  caseIcon: LucideIcon;
  ctaLabel: string;
  reverse?: boolean;
  tone?: "light" | "muted";
};

export default function ServiceDetail({
  id,
  eyebrow,
  icon: Icon,
  title,
  description,
  bullets,
  image,
  imageAlt,
  caseRef,
  caseTitle,
  caseIcon: CaseIcon,
  ctaLabel,
  reverse = false,
  tone = "light",
}: ServiceDetailProps) {
  return (
    <section
      className={`w-full py-14 sm:py-16 lg:py-20 scroll-mt-20 ${tone === "muted" ? "bg-gray-50" : "bg-white"}`}
      id={id}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className={`lg:col-span-6 space-y-5 ${reverse ? "lg:order-2" : ""}`}>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-brand-maroon uppercase tracking-wider font-semibold">
              <Icon className="w-4 h-4" aria-hidden="true" />
              <span>{eyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">{title}</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-gray-800">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-maroon shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                className="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroonDark text-white px-6 py-3 rounded text-sm font-bold uppercase tracking-wide transition-all"
                href="/contact"
              >
                <span>{ctaLabel}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-white p-2 border border-gray-100">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  alt={imageAlt}
                  src={image}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="mt-2 p-4 bg-gray-50 rounded-lg flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] uppercase font-semibold text-brand-maroon block">{caseRef}</span>
                  <span className="text-sm font-bold text-gray-900">{caseTitle}</span>
                </div>
                <CaseIcon className="w-6 h-6 text-gray-400 shrink-0" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home as HomeIcon, PanelsTopLeft, ArrowUpFromLine, Boxes, Shovel } from "lucide-react";

const SERVICES = [
  {
    title: "NEW BUILDS",
    description: "High quality new build homes, tailored to your needs, built to last.",
    icon: HomeIcon,
    image: "/images/new-builds.webp",
    alt: "New Builds modern white luxury residence",
  },
  {
    title: "EXTENSIONS",
    description: "Create more space and add value to your home with expertly built extensions.",
    icon: PanelsTopLeft,
    image: "/images/extensions.webp",
    alt: "Glass rear brick extension with patio",
  },
  {
    title: "LOFT CONVERSIONS",
    description: "Transform your loft into beautiful, functional living space.",
    icon: ArrowUpFromLine,
    image: "/images/loft-conversions.webp",
    alt: "Loft conversion with skylights and exposed wooden beams",
  },
  {
    title: "STRUCTURAL WORKS",
    description: "RSJs, load bearing walls, structural alterations and full structural solutions.",
    icon: Boxes,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBD1foplAjeJMLycVaq6K8H98JVPGwVG-aFgLgCjuTnXfbv9m5Y0TVYa_M3MyyPMBv5ystTI_GOIvjx62bEBcu29A5eARt5hHXDCBxgvHhXopgSoLgw73vZgm18u3Mwrhp1wOR3leeuzNnScAQE52AFVDgd-m61aXl-ZDi1FdQQXAROnTxSxr1zdF2cIkpmxyzxMEBVfl6Io8ywSdqgSD5oG1IwsM46U7HjhmDGJP_vWDLhba7NWR3J",
    alt: "Structural steel beams RSJ installation",
  },
  {
    title: "GROUNDWORKS",
    description: "Foundations, drainage, site preparation and all aspects of groundworks.",
    icon: Shovel,
    image: "/images/groundworks.webp",
    alt: "Groundworks excavator and site foundation preparation",
  },
];

export default function Services() {
  return (
    <section className="py-14 sm:py-16 bg-white" data-purpose="services-showcase" id="services">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-brand-maroon text-[11px] sm:text-xs uppercase tracking-[0.25em] font-extrabold block mb-2">
            OUR SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-3">
            Expert Construction Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From the ground up, we deliver high quality construction work for residential and commercial clients
            across London and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-40 sm:h-44">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      alt={service.alt}
                      src={service.image}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-maroon border-2 border-white flex items-center justify-center text-white shadow-md z-10">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="pt-8 pb-5 px-4 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm tracking-wide uppercase mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  </div>
                  <Link
                    className="text-xs font-bold text-gray-900 hover:text-brand-maroon inline-flex items-center justify-center gap-1.5 transition-colors pt-2"
                    href="/services"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-2.5 h-2.5 text-brand-maroon" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

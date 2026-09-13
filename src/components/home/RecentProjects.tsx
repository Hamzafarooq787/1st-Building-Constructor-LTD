import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "New Build",
    image: "/images/recent-project-new-build.webp",
    alt: "New Build project",
  },
  {
    title: "Extension",
    image: "/images/recent-project-extension.webp",
    alt: "Modern glass rear Extension",
  },
  {
    title: "Loft Conversion",
    image: "/images/recent-project-loft-conversion.webp",
    alt: "Loft Dormer Conversion",
  },
  {
    title: "Structural Works",
    image: "/images/recent-project-structural-works.webp",
    alt: "Structural steel and internal beam works",
  },
  {
    title: "Groundworks",
    image: "/images/recent-project-groundworks.webp",
    alt: "Foundation and concrete trench Groundworks",
  },
];

export default function RecentProjects() {
  return (
    <section className="bg-[#14161B] text-white py-14 sm:py-16" data-purpose="recent-projects" id="projects">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-gray-400 text-xs uppercase tracking-[0.22em] font-semibold block mb-1">
              RECENT PROJECTS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Our Work Speaks for Itself
            </h2>
          </div>
          <div>
            <Link
              className="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroonDark text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded transition-all"
              href="/services"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-2.5 h-2.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {PROJECTS.map((project) => (
            <div key={project.title} className="group bg-[#1D2026] rounded overflow-hidden border border-gray-800">
              <div className="h-40 sm:h-44 overflow-hidden relative">
                <Image
                  alt={project.alt}
                  src={project.image}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="px-3.5 py-3 text-sm font-semibold text-gray-200 bg-[#17191E]">{project.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

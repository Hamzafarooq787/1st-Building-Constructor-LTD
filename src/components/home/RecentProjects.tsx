import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "New Build",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1LbYNnoA7my9KGawWUQrnSb2tYGbUNehkjpSqzTPVGUGkRmkC-KtniaMR59I-6DmI2rud5tpovcw6f53Lb3YBtnEK9p3s_NurdDZD7S4cEHfS0lOk6g3p9lkFwcCzCmWWYZ5AioJr4AWDCicqqcALQwXkmb9CzofQ-mZO8hNuCMWvq1Sqs5qrRYWohTKDN8i8DIvOzXtbKEg6n3hY_igNTNF-k7MlrsPGcDD7PBfYPYDOZiRfsDzE",
    alt: "New Build project",
  },
  {
    title: "Extension",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBC-1OfVt_9BATY-pOQ8E3EW5fv8qf1OeAlzNNTPpBXicAiRT7K6upsHJAbZoN9fG19zTw6X6RRBlpMOdfk5n0QCClhQMjJ6xTWQQy2v9LkUFmqqERE3VSELwrQN87SwaOREIcPj4NtWCJFK-ZHDYU0I15-NJKhwBXqru7L-daVjo2ExBkKp9PSuDs9ZvWcIg0RsYmn7SYrDm4cr6E7pyUgEhfJfMe_nfCoQ_3thAw5Em-pGIGyVRs9",
    alt: "Modern glass rear Extension",
  },
  {
    title: "Loft Conversion",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL8lQ-G63KNT9cxhfEAxUo0Am6qxNhnEMYUwYuIPDj4OqQ9tBQ2naIsVF-nx4hYoTcj4nV4FeyqSNzFkYMtFXky4pSzDfEnfJQMUmH0RL84_I-Tt0P-jeYlGjDfAnJAlyFHOe2EXbH9ZksEiDSFnh5UPpGMKWxledDiK0wVaVWDR6h8_IQIsrICLeoEyG9u7aZZ8JNlDL9VEmoXJvKK-EWtKqoyYp0Ib361PgxhBkrU4Ws1mnmwlDN",
    alt: "Loft Dormer Conversion",
  },
  {
    title: "Structural Works",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQqKH0mj2IFSPwzvGbMBKD9_RksdgoVkDTtw1UZtsHD66vSaUoskr5hIOd65eeTIGG7LPSO0M9UPNrmK9GxZrGHhBxNVEXrcsbLfcZlOzJjpdvSeaSX0w5UXvT1_7svXGRGzLMxGBhNmqhCM2PwZS5nKHXtBIXCBmx_3R-7ImoqTnqlGYaPGVq8eVAeE07Q5DAdAhFVfTMw5rCV9uppuoCU6sdPhFXLHpR7ve6d3HYJ-_ur0AQT-KJ",
    alt: "Structural steel and internal beam works",
  },
  {
    title: "Groundworks",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnOuEPBBZXvEmHbCGzOwSCxuzkM36Vh8___0njR6551lSMR7VbosnNQGFEMhJuriXYeJ8Mpetn-ek5PY_YurKsYnP8tYkGT49qH66xvNa3osugbzcvTfJ21-9rxvYOvyI5tN4MVE1ceoTm9AaM_w4ikHZp9NpU7hKbj1-svhgWRefWn2YHsKF8oYUOr9Eq2a5Sw75ewwZmHUhdxwbrTqhK6WFVGJOhZnLXKMECeWk_D8vMhCyU309Y",
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

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Work", href: "/#projects" },
  { label: "Why Us", href: "/#why-us" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-700" data-purpose="site-footer">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link className="flex items-center gap-3 group" href="/">
            <div className="w-11 h-11 rounded-full border-2 border-brand-maroon flex items-center justify-center p-0.5">
              <div className="w-full h-full bg-brand-maroon rounded-full flex items-center justify-center text-white">
                <span className="font-extrabold text-sm">1st</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-maroon font-extrabold text-sm tracking-wider uppercase leading-none">
                BUILDING
              </span>
              <span className="text-brand-maroon font-black text-xs tracking-wider uppercase leading-tight">
                CONTRACTORS LTD
              </span>
              <span className="text-[8px] tracking-[0.2em] text-gray-500 font-semibold uppercase">
                BUILD ON TRUST
              </span>
            </div>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-gray-700">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                className="hover:text-brand-maroon transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2.5 text-white">
            <a
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-gray-800 hover:bg-brand-maroon flex items-center justify-center transition-colors"
              href="#"
            >
              <Facebook className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-gray-800 hover:bg-brand-maroon flex items-center justify-center transition-colors"
              href="#"
            >
              <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-full bg-gray-800 hover:bg-brand-maroon flex items-center justify-center transition-colors"
              href="#"
            >
              <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#141416] text-[#8E929C] text-[11px] py-3.5 border-t border-gray-800">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
          <div>© 2026 1st Building Contractors Ltd. All rights reserved.</div>
          <div className="flex items-center space-x-3 text-gray-400">
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <span>|</span>
            <a className="hover:text-white transition-colors" href="#">
              Terms &amp; Conditions
            </a>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline text-gray-400">Designed for a Stronger Tomorrow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

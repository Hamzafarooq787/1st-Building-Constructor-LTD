"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Phone, ArrowRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Work", href: "/#projects" },
  { label: "Why Us", href: "/#why-us" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm"
      data-purpose="primary-navigation"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navigation bar */}
        <div className="flex items-center justify-between py-3.5">
          <Link className="flex items-center group" href="/">
            <Image
              alt="1st Building Contractors Ltd"
              src="/images/1st-building-contractors-logo-transparent-1180x356.webp"
              width={1180}
              height={356}
              priority
              className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          <nav
            className="hidden lg:flex items-center space-x-7 font-semibold text-[13px] text-gray-700"
            data-purpose="nav-links"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                className="hover:text-brand-maroon transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              className="hidden sm:inline-flex bg-brand-maroon hover:bg-brand-maroonDark text-white text-[13px] font-bold px-5 py-2.5 rounded shadow-sm transition-all duration-200 items-center gap-2"
              data-purpose="quote-button"
              href="/contact"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
            <button
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded text-brand-maroon border border-gray-200"
              onClick={() => setIsMenuOpen((open) => !open)}
              type="button"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-gray-100 ${
          isMenuOpen ? "max-h-[28rem]" : "max-h-0"
        }`}
        id="mobile-menu"
      >
        <nav className="flex flex-col px-4 sm:px-6 py-4 gap-1 font-semibold text-sm text-gray-700 bg-white">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              className="py-2.5 border-b border-gray-50 last:border-0 hover:text-brand-maroon transition-colors"
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            className="flex items-center gap-1.5 py-2.5 hover:text-brand-maroon transition-colors"
            href="tel:+447960957008"
          >
            <Phone className="w-3.5 h-3.5 text-brand-maroon" aria-hidden="true" />
            <span>+44 (0) 7960 957 008</span>
          </a>
          <Link
            className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-maroon hover:bg-brand-maroonDark text-white text-sm font-bold px-5 py-3 rounded shadow-sm transition-all duration-200"
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

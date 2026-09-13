"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

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
        {/* Top info bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-gray-100 text-xs text-gray-600">
          <div />
          <div className="flex items-center space-x-6">
            <a
              className="flex items-center gap-1.5 hover:text-brand-maroon transition-colors font-medium"
              href="tel:+447960957008"
            >
              <Phone className="w-3 h-3 text-brand-maroon" aria-hidden="true" />
              <span>+44 (0) 7960 957 008</span>
            </a>
            <a
              className="flex items-center gap-1.5 hover:text-brand-maroon transition-colors font-medium"
              href="mailto:john@1st-bc.com"
            >
              <Mail className="w-3 h-3 text-brand-maroon" aria-hidden="true" />
              <span>john@1st-bc.com</span>
            </a>
            <div className="flex items-center space-x-2.5 text-gray-800 ml-2">
              <a
                aria-label="Facebook"
                className="w-5 h-5 rounded-full bg-gray-800 hover:bg-brand-maroon text-white flex items-center justify-center transition-colors"
                href="#"
              >
                <Facebook className="w-2.5 h-2.5" aria-hidden="true" />
              </a>
              <a
                aria-label="Instagram"
                className="w-5 h-5 rounded-full bg-gray-800 hover:bg-brand-maroon text-white flex items-center justify-center transition-colors"
                href="#"
              >
                <Instagram className="w-2.5 h-2.5" aria-hidden="true" />
              </a>
              <a
                aria-label="LinkedIn"
                className="w-5 h-5 rounded-full bg-gray-800 hover:bg-brand-maroon text-white flex items-center justify-center transition-colors"
                href="#"
              >
                <Linkedin className="w-2.5 h-2.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation bar */}
        <div className="flex items-center justify-between py-3.5">
          <Link className="flex items-center gap-3 group" href="/">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-brand-maroon flex items-center justify-center relative p-1 transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-brand-maroon rounded-full flex flex-col items-center justify-center text-white leading-none">
                <span className="font-extrabold text-[15px] tracking-tight">1st</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-maroon font-extrabold text-sm sm:text-base tracking-wider uppercase leading-none">
                BUILDING
              </span>
              <span className="text-brand-maroon font-black text-xs sm:text-sm tracking-wider uppercase leading-tight">
                CONTRACTORS LTD
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.22em] text-gray-600 font-semibold uppercase mt-0.5">
                BUILD ON TRUST
              </span>
            </div>
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

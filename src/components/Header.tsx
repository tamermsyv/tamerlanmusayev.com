"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-navy-100/30">
      <nav className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link
          href="/"
          className="font-serif text-2xl text-navy-900 tracking-tight"
        >
          TM
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-navy-900"
                    : "text-navy-500 hover:text-navy-900"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="block h-0.5 bg-gold-500 mt-0.5 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="hidden md:inline-flex btn-primary text-xs py-3 px-6">
          Get In Touch
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-navy-900 transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy-900 transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy-900 transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-lg border-t border-navy-100/30 animate-fade-in">
          <ul className="flex flex-col px-6 py-6 gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-lg font-medium ${
                    pathname === link.href
                      ? "text-navy-900"
                      : "text-navy-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary text-center justify-center w-full mt-2"
              >
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

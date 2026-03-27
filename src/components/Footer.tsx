import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl mb-4">Tamerlan Musayev</h3>
            <p className="text-navy-300 leading-relaxed max-w-sm">
              Entrepreneur. Founder of PeptideLeads. Building the future of
              healthcare marketing from Houston, TX.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-widest text-gold-500 mb-6">
              Pages
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/links"
                  className="text-navy-300 hover:text-white transition-colors duration-200"
                >
                  Links
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-widest text-gold-500 mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={SOCIAL_LINKS.peptideleads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-300 hover:text-white transition-colors duration-200"
                >
                  PeptideLeads
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-300 hover:text-white transition-colors duration-200"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-300 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-300 hover:text-white transition-colors duration-200"
                >
                  Book a Call
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="text-navy-300 hover:text-white transition-colors duration-200"
                >
                  {SOCIAL_LINKS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-400 text-sm">
            &copy; 2026 Tamerlan Musayev. All rights reserved.
          </p>
          <p className="text-navy-500 text-xs">
            Houston, TX
          </p>
        </div>
      </div>
    </footer>
  );
}

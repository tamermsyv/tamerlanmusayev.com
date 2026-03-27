import Link from "next/link";
import { personSchema, websiteSchema, breadcrumbSchema } from "@/lib/schema";
import { SOCIAL_LINKS } from "@/lib/constants";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  const person = personSchema();
  const website = websiteSchema();
  const breadcrumbs = breadcrumbSchema([{ name: "Home", href: "/" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="section-padding min-h-[90vh] flex items-center">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-6">
              Entrepreneur &bull; Founder &bull; Builder
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-navy-900 leading-[1.05] mb-8">
              Tamerlan
              <br />
              Musayev
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-navy-600 max-w-2xl leading-relaxed mb-10">
              Entrepreneur. Founder of{" "}
              <a
                href="https://peptideleads.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-900 link-underline font-medium"
              >
                PeptideLeads
              </a>
              . Building the future of healthcare marketing from Houston, TX.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get In Touch
              </Link>
              <Link href="/about" className="btn-secondary">
                My Story
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What I'm Building */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Current Focus
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">
              What I&apos;m Building
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
              <div>
                <h3 className="text-3xl font-serif text-navy-900 mb-4">
                  PeptideLeads
                </h3>
                <p className="text-lg text-navy-700 leading-relaxed mb-4">
                  A patient generation agency built exclusively for peptide
                  therapy clinics. Tamerlan Musayev founded PeptideLeads to solve
                  a simple problem: clinics waste thousands on marketing agencies
                  that don&apos;t understand their industry.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  We generate exclusive, high-quality patient leads at $50 each —
                  no retainers, no ad spend from the clinic, and exclusive zip
                  code territories. We&apos;ve built 8,000+ programmatic SEO pages
                  and a proprietary database of every peptide clinic in the US.
                </p>
                <a
                  href="https://peptideleads.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit PeptideLeads
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: "$50", label: "Per Lead" },
                  { stat: "8,000+", label: "SEO Pages Built" },
                  { stat: "50", label: "State Coverage" },
                  { stat: "$0", label: "Retainer Fee" },
                ].map((item) => (
                  <div key={item.label} className="card text-center">
                    <p className="text-3xl md:text-4xl font-serif text-navy-900 mb-2">
                      {item.stat}
                    </p>
                    <p className="text-sm text-navy-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* My Journey */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              The Path So Far
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-16">
              My Journey
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2021–2023",
                title: "Web3 & NFTs",
                desc: "Tamerlan Musayev built an 8,000+ following in Web3, traded NFTs including Invisible Friends, served as admin in the Alpha Omega community, and generated six figures — all before turning 18.",
                link: "/experience",
              },
              {
                year: "2024",
                title: "The Transition",
                desc: "Identified a massive opportunity in healthcare marketing. Spent months researching the peptide therapy industry, understanding clinic pain points, and designing a patient generation model.",
                link: "/experience",
              },
              {
                year: "2025–2026",
                title: "PeptideLeads",
                desc: "Founded PeptideLeads — built a proprietary clinic database, launched programmatic SEO with 8,000+ pages, set up cold email infrastructure across 17 domains and 51 inboxes.",
                link: "/peptideleads",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 100}>
                <Link href={item.link} className="card block h-full group">
                  <p className="text-gold-600 font-medium text-sm mb-3">
                    {item.year}
                  </p>
                  <h3 className="text-2xl font-serif text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">{item.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured / As Seen On */}
      <section className="section-padding bg-white">
        <div className="container-wide text-center">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              As Seen On
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-12">
              Featured &amp; Recognized
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <a
                href={SOCIAL_LINKS.featured}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-400 hover:text-navy-700 transition-colors"
              >
                <div className="text-2xl font-serif tracking-tight">
                  Featured.com
                </div>
                <p className="text-sm text-navy-400 mt-1">Expert Profile</p>
              </a>
              <div className="text-navy-400">
                <div className="text-2xl font-serif tracking-tight">
                  PeptideLeads.com
                </div>
                <p className="text-sm text-navy-400 mt-1">
                  Founder &amp; CEO
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Connect */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Let&apos;s Talk
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-navy-600 mb-10 max-w-lg mx-auto">
              Whether you want to collaborate, have a question, or just want to
              say hello — Tamerlan Musayev is always open to connecting.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Me
              </Link>
              <a
                href={SOCIAL_LINKS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Book a Call
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm">
              {[
                { label: "Twitter / X", href: SOCIAL_LINKS.twitter },
                { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
                { label: "PeptideLeads", href: SOCIAL_LINKS.peptideleads },
                { label: "Email", href: `mailto:${SOCIAL_LINKS.email}` },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="text-navy-500 hover:text-navy-900 link-underline transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

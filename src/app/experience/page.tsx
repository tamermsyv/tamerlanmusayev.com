import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { personSchema, breadcrumbSchema } from "@/lib/schema";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Experience & Career — Tamerlan Musayev",
  description:
    "Explore the career and experience of Tamerlan Musayev — from Web3 and NFTs to founding PeptideLeads, a patient generation agency for peptide therapy clinics.",
  openGraph: {
    title: "Experience & Career — Tamerlan Musayev",
    description:
      "From Web3 and NFTs to founding PeptideLeads — the career journey of Tamerlan Musayev.",
    url: `${SITE_URL}/experience`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience & Career — Tamerlan Musayev",
    description:
      "The career journey of Tamerlan Musayev — Web3, NFTs, and PeptideLeads.",
  },
  alternates: { canonical: `${SITE_URL}/experience` },
};

export default function ExperiencePage() {
  const person = personSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
  ]);

  const timeline = [
    {
      period: "2025 – Present",
      title: "Founder & CEO — PeptideLeads",
      description:
        "Tamerlan Musayev founded PeptideLeads, a patient generation agency exclusively serving peptide therapy clinics. Built the company from zero — developing a proprietary database of every peptide clinic in the US, launching a programmatic SEO strategy with 8,000+ indexed pages, and constructing cold email infrastructure across 17 domains and 51 inboxes.",
      highlights: [
        "Built proprietary clinic database covering all 50 states",
        "Launched 8,000+ programmatic SEO pages",
        "Developed cold email infrastructure: 17 domains, 51 inboxes",
        "Created exclusive zip code territory model at $50/lead",
        "Designed full patient generation funnel from ad to appointment",
      ],
    },
    {
      period: "2024",
      title: "Research & Transition",
      description:
        "After exiting Web3, Tamerlan Musayev spent months researching industries to find the right opportunity. Identified peptide therapy as an underserved market with massive growth potential. Studied clinic operations, patient acquisition, and healthcare marketing regulations.",
      highlights: [
        "Researched 10+ industries before landing on peptide therapy",
        "Studied healthcare marketing compliance and regulations",
        "Mapped the competitive landscape and identified market gap",
        "Developed the PeptideLeads business model and pricing strategy",
      ],
    },
    {
      period: "2021 – 2023",
      title: "Web3 & NFT Entrepreneur",
      description:
        "At just 13 years old, Tamerlan Musayev entered the world of Web3 and NFTs. Built a following of over 8,000 across social platforms, served as an admin in the Alpha Omega community, and traded high-value NFT collections including Invisible Friends. Generated six figures in revenue before turning 18.",
      highlights: [
        "Built 8,000+ following across Web3 platforms",
        "Admin in Alpha Omega community",
        "Traded NFT collections including Invisible Friends",
        "Generated six figures in revenue before age 18",
        "Learned community building, sales, and market timing",
      ],
    },
  ];

  const skills = [
    { category: "Sales & Outreach", items: ["Sales & Closing", "Cold Email Outreach", "Lead Generation", "CRM Management"] },
    { category: "Marketing & Growth", items: ["SEO & Content Strategy", "Facebook/Meta Ads", "Programmatic SEO", "Data Analytics"] },
    { category: "Technical", items: ["Web Development", "Email Infrastructure", "DNS & Deliverability", "Marketing Automation"] },
    { category: "Business", items: ["Business Strategy", "Market Research", "Partnership Development", "Financial Modeling"] },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Career
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-navy-900 leading-tight mb-8">
              Experience of Tamerlan Musayev
            </h1>
            <p className="text-xl text-navy-600 max-w-3xl leading-relaxed">
              From Web3 at 13 to founding a healthcare marketing company at 18 —
              here&apos;s the full journey of Tamerlan Musayev.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.period} delay={i * 100}>
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 last:pb-0">
                  {/* Left: period */}
                  <div className="lg:col-span-3">
                    <div className="lg:sticky lg:top-28">
                      <p className="text-gold-600 font-medium text-sm uppercase tracking-wider mb-1">
                        {item.period}
                      </p>
                      <h3 className="text-2xl font-serif text-navy-900">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:flex lg:col-span-1 justify-center">
                    <div className="w-px bg-navy-100 relative">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-500" />
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="lg:col-span-8">
                    <p className="text-lg text-navy-700 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <ul className="space-y-3">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-navy-600"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-12">
              Skills of Tamerlan Musayev
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((group, i) => (
              <ScrollReveal key={group.category} delay={i * 100}>
                <div className="card h-full">
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-gold-600 mb-6">
                    {group.category}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-navy-700 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-navy-300" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">
              Want to Work Together?
            </h2>
            <p className="text-xl text-navy-600 mb-10">
              Tamerlan Musayev is always looking for new opportunities and connections.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get In Touch
              </Link>
              <Link href="/peptideleads" className="btn-secondary">
                See PeptideLeads
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

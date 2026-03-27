import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import { personSchema, breadcrumbSchema } from "@/lib/schema";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Media & Press — Tamerlan Musayev",
  description:
    "Media appearances, press mentions, and published content by Tamerlan Musayev — entrepreneur and founder of PeptideLeads.",
  openGraph: {
    title: "Media & Press — Tamerlan Musayev",
    description:
      "Media appearances and press mentions of Tamerlan Musayev.",
    url: `${SITE_URL}/media`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Press — Tamerlan Musayev",
    description: "Media and press mentions of Tamerlan Musayev.",
  },
  alternates: { canonical: `${SITE_URL}/media` },
};

export default function MediaPage() {
  const person = personSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Media", href: "/media" },
  ]);

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
              Press
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-navy-900 leading-tight mb-8">
              Media &amp; Press — Tamerlan Musayev
            </h1>
            <p className="text-xl text-navy-600 max-w-3xl leading-relaxed">
              Press mentions, media appearances, and published content featuring
              Tamerlan Musayev.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mentions */}
      <section className="px-6 md:px-12 lg:px-24 pb-20 md:pb-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal>
              <a
                href={SOCIAL_LINKS.featured}
                target="_blank"
                rel="noopener noreferrer"
                className="card block h-full group"
              >
                <p className="text-sm text-gold-600 font-medium uppercase tracking-wider mb-3">
                  Featured.com
                </p>
                <h2 className="text-2xl font-serif text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                  Expert Profile — Tamerlan Musayev
                </h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Tamerlan Musayev is a verified expert on Featured.com, where
                  he contributes insights on entrepreneurship, healthcare
                  marketing, and business development. His expert answers are
                  featured alongside insights from industry leaders and
                  published across major outlets.
                </p>
                <span className="text-gold-600 text-sm font-medium group-hover:text-gold-700 transition-colors">
                  View Profile &rarr;
                </span>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="card h-full flex flex-col">
                <p className="text-sm text-gold-600 font-medium uppercase tracking-wider mb-3">
                  Published Answers
                </p>
                <h2 className="text-2xl font-serif text-navy-900 mb-3">
                  Expert Contributions by Tamerlan Musayev
                </h2>
                <p className="text-navy-600 leading-relaxed mb-4 flex-1">
                  Tamerlan Musayev regularly contributes expert answers on topics
                  including email deliverability, cold outreach strategy, and
                  building businesses at a young age. Published answers appear on
                  Featured.com and syndicated partner publications.
                </p>
                <span className="text-navy-400 text-sm">
                  More publications coming soon
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Media Inquiry */}
          <ScrollReveal delay={200}>
            <div className="bg-navy-950 text-white rounded-2xl p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Media Inquiries
              </h2>
              <p className="text-navy-300 text-lg max-w-xl mx-auto mb-8">
                For interviews, speaking engagements, podcast appearances, or
                press inquiries about Tamerlan Musayev or PeptideLeads, please
                reach out directly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="inline-flex items-center gap-2 bg-white text-navy-900 px-8 py-4 rounded-full font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-navy-100"
                >
                  {SOCIAL_LINKS.email}
                </a>
                <a
                  href={SOCIAL_LINKS.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-navy-900"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Cross links */}
          <ScrollReveal delay={300}>
            <div className="mt-16 text-center">
              <p className="text-navy-500">
                Read more from Tamerlan Musayev on the{" "}
                <Link href="/blog" className="link-underline text-navy-700">
                  blog
                </Link>
                , or learn about his work at{" "}
                <Link href="/peptideleads" className="link-underline text-navy-700">
                  PeptideLeads
                </Link>
                .
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

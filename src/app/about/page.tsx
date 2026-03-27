import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import { personSchema, breadcrumbSchema } from "@/lib/schema";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Tamerlan Musayev — Entrepreneur & Founder of PeptideLeads",
  description:
    "Learn about Tamerlan Musayev — an 18-year-old entrepreneur from Houston, TX. From Web3 and NFTs to founding PeptideLeads, a patient generation agency for peptide therapy clinics.",
  openGraph: {
    title: "About Tamerlan Musayev — Entrepreneur & Founder of PeptideLeads",
    description:
      "Learn about Tamerlan Musayev — an 18-year-old entrepreneur from Houston, TX who built PeptideLeads from scratch.",
    url: `${SITE_URL}/about`,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tamerlan Musayev — Entrepreneur & Founder of PeptideLeads",
    description:
      "Learn about Tamerlan Musayev — 18-year-old entrepreneur from Houston, TX.",
  },
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  const person = personSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
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
              About
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-navy-900 leading-tight mb-8">
              About Tamerlan Musayev
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio + Photo */}
      <section className="px-6 md:px-12 lg:px-24 pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Photo placeholder */}
            <ScrollReveal className="lg:col-span-2">
              <div className="aspect-[3/4] bg-gradient-to-br from-navy-100 to-navy-50 rounded-2xl flex items-center justify-center border border-navy-100/50">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-navy-200/50 mx-auto mb-4 flex items-center justify-center">
                    <span className="font-serif text-2xl text-navy-400">TM</span>
                  </div>
                  <p className="text-navy-400 text-sm font-medium">Photo Coming Soon</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal delay={200} className="lg:col-span-3">
              <div className="space-y-6 text-lg text-navy-700 leading-relaxed">
                <p>
                  Tamerlan Musayev — most people call him Tamer — is an 18-year-old
                  entrepreneur based in Houston, Texas. He is the founder of{" "}
                  <a
                    href="https://peptideleads.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-900 font-medium link-underline"
                  >
                    PeptideLeads
                  </a>
                  , a patient generation agency built exclusively for peptide therapy clinics.
                </p>
                <p>
                  Born in Kazakhstan and raised in Katy, Texas, Tamerlan Musayev got into the world of
                  entrepreneurship early. At 13, he discovered Web3 and NFTs during
                  the 2021 boom. While most kids his age were focused on school and
                  video games, Tamer was learning about blockchain technology,
                  building an online following of over 8,000 people, and trading
                  NFTs — including the Invisible Friends collection. He served as
                  an admin in the Alpha Omega community and generated six figures
                  in revenue before he turned 18.
                </p>
                <p>
                  But Tamerlan Musayev didn&apos;t want to ride hype cycles forever. In 2024,
                  he started looking for an industry where he could build something
                  sustainable — a real business that solved a real problem. That
                  search led him to peptide therapy, a rapidly growing segment of
                  healthcare where clinics were desperately underserved by
                  marketing agencies.
                </p>
                <p>
                  He founded PeptideLeads with a clear thesis: peptide therapy
                  clinics shouldn&apos;t have to pay massive retainers to agencies
                  that don&apos;t understand their industry. Instead, PeptideLeads
                  generates exclusive patient leads at a flat rate of $50 per lead,
                  covers all ad spend, and locks in exclusive zip code territories
                  so clinics never compete with each other. The company has built
                  over 8,000 programmatic SEO pages and maintains a proprietary
                  database of every peptide clinic in the United States.
                </p>
                <p>
                  Beyond business, Tamerlan Musayev is deeply interested in
                  spirituality and philosophy — particularly Kabbalah. He believes
                  that personal growth and business growth go hand in hand. He&apos;s
                  also passionate about fitness, biohacking, and the science behind
                  peptide therapy itself.
                </p>
                <p>
                  Tamerlan Musayev&apos;s philosophy is simple: learn by doing, don&apos;t
                  chase hype, and build things that matter. He believes the best
                  time to take risks is when you&apos;re young, and that hard work
                  compounds in ways most people can&apos;t see until years later.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link href="/peptideleads" className="btn-primary">
                  See What I&apos;m Building
                </Link>
                <Link href="/experience" className="btn-secondary">
                  View My Experience
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              What I Believe
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-12">
              Values &amp; Philosophy
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Learn By Doing",
                desc: "Tamerlan Musayev has never waited for permission to start something. The best education comes from building, failing, and iterating — not from textbooks.",
              },
              {
                title: "Build Real Businesses",
                desc: "Hype fades. Real value endures. That's why Tamerlan Musayev transitioned from Web3 to building PeptideLeads — a company that solves a genuine market need.",
              },
              {
                title: "Stay Grounded",
                desc: "Spirituality, philosophy, and self-awareness keep the ego in check. Business is a vehicle for growth — personal and financial.",
              },
              {
                title: "Take Risks Young",
                desc: "At 18, the downside is minimal and the upside is unlimited. Tamerlan Musayev believes every young person should be building something — even if it fails.",
              },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className="card h-full">
                  <h3 className="text-xl font-serif text-navy-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Beyond Business
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-8">
              Interests
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap gap-4">
              {[
                "Business & Entrepreneurship",
                "Spirituality & Kabbalah",
                "Peptides & Biohacking",
                "Fitness & Health",
                "Digital Marketing",
                "Sales & Persuasion",
                "Philosophy",
                "Technology",
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-6 py-3 bg-white rounded-full border border-navy-100/50 text-navy-700 font-medium text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">
              Want to Connect?
            </h2>
            <p className="text-xl text-navy-600 mb-10">
              Tamerlan Musayev is always open to meeting new people, exploring
              opportunities, and having real conversations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get In Touch
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
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import { personSchema, breadcrumbSchema } from "@/lib/schema";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "PeptideLeads — Founded by Tamerlan Musayev",
  description:
    "PeptideLeads is a patient generation agency for peptide therapy clinics, founded by Tamerlan Musayev. $50/lead, no retainers, exclusive zip code territories.",
  openGraph: {
    title: "PeptideLeads — Founded by Tamerlan Musayev",
    description:
      "PeptideLeads generates exclusive patient leads for peptide therapy clinics at $50 each. Founded by Tamerlan Musayev.",
    url: `${SITE_URL}/peptideleads`,
  },
  twitter: {
    card: "summary_large_image",
    title: "PeptideLeads — Founded by Tamerlan Musayev",
    description:
      "Patient generation agency for peptide therapy clinics. Founded by Tamerlan Musayev.",
  },
  alternates: { canonical: `${SITE_URL}/peptideleads` },
};

export default function PeptideLeadsPage() {
  const person = personSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "PeptideLeads", href: "/peptideleads" },
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
              Founded by Tamerlan Musayev
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-navy-900 leading-tight mb-8">
              PeptideLeads
            </h1>
            <p className="text-xl md:text-2xl text-navy-600 max-w-3xl leading-relaxed">
              The patient generation agency built exclusively for peptide therapy
              clinics. Tamerlan Musayev founded PeptideLeads to fix a broken industry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
                The Problem
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">
                Clinics Waste Thousands on Marketing That Doesn&apos;t Work
              </h2>
              <div className="space-y-4 text-lg text-navy-700 leading-relaxed">
                <p>
                  Most peptide therapy clinics are stuck in a bad cycle. They hire
                  generic marketing agencies that charge $3,000-$5,000/month in
                  retainers, burn through ad budget, and deliver leads that never
                  convert — if they deliver leads at all.
                </p>
                <p>
                  These agencies don&apos;t understand the peptide therapy space.
                  They don&apos;t know the patients, the treatments, or the
                  regulations. They treat peptide clinics the same as dentists,
                  chiropractors, or med spas.
                </p>
                <p>
                  Tamerlan Musayev saw this problem firsthand while researching the
                  industry and knew there had to be a better way.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                {[
                  {
                    problem: "High retainers",
                    detail: "$3K-$5K/month before seeing a single lead",
                  },
                  {
                    problem: "Shared territories",
                    detail:
                      "Multiple clinics in the same area competing for the same leads",
                  },
                  {
                    problem: "Low quality leads",
                    detail:
                      "Generic form fills from people who aren't serious about treatment",
                  },
                  {
                    problem: "No industry expertise",
                    detail:
                      "Agencies that don't understand peptide therapy or the patient journey",
                  },
                ].map((item) => (
                  <div
                    key={item.problem}
                    className="flex gap-4 p-6 bg-red-50/50 rounded-xl border border-red-100/50"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-sm font-bold">
                      &times;
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">{item.problem}</p>
                      <p className="text-navy-600 text-sm mt-1">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              The Solution
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">
              Exclusive Patient Generation at $50/Lead
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl leading-relaxed mb-16">
              PeptideLeads flips the model. No retainers. No ad spend from the clinic.
              Just high-quality, exclusive patient leads delivered directly to your inbox.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sign Up",
                desc: "Book a call with Tamerlan Musayev, choose your zip code territory, and get onboarded in under 48 hours. No contracts, no commitments.",
              },
              {
                step: "02",
                title: "We Generate Leads",
                desc: "PeptideLeads runs targeted campaigns across multiple channels — paid ads, programmatic SEO, and direct outreach. We cover all ad spend.",
              },
              {
                step: "03",
                title: "You Get Patients",
                desc: "Exclusive, high-intent patient leads delivered to your CRM. $50 per lead. No sharing, no competition in your territory.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="card h-full">
                  <span className="text-5xl font-serif text-gold-300">
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-serif text-navy-900 mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-navy-950 text-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold-400 font-medium text-sm uppercase tracking-[0.2em] mb-4">
                By The Numbers
              </p>
              <h2 className="text-4xl md:text-5xl font-serif">
                What Tamerlan Musayev Has Built
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "8,000+", label: "SEO Pages Built" },
              { stat: "17", label: "Email Domains" },
              { stat: "51", label: "Active Inboxes" },
              { stat: "50", label: "States Covered" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-serif text-gold-400 mb-2">
                    {item.stat}
                  </p>
                  <p className="text-navy-300 text-sm uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">
              Ready to Get Patients?
            </h2>
            <p className="text-xl text-navy-600 mb-10 max-w-lg mx-auto">
              Book a call with Tamerlan Musayev to see if PeptideLeads is the right fit
              for your clinic.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://peptideleads.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit PeptideLeads
              </a>
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
            <p className="mt-8 text-navy-500">
              Or read more about{" "}
              <Link href="/blog/why-i-started-peptideleads-at-18" className="link-underline text-navy-700">
                why Tamerlan Musayev started PeptideLeads
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import { personSchema, breadcrumbSchema } from "@/lib/schema";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Tamerlan Musayev",
  description:
    "Get in touch with Tamerlan Musayev — entrepreneur and founder of PeptideLeads. Book a call, send an email, or connect on social media.",
  openGraph: {
    title: "Contact Tamerlan Musayev",
    description:
      "Get in touch with Tamerlan Musayev. Book a call or send an email.",
    url: `${SITE_URL}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tamerlan Musayev",
    description: "Get in touch with Tamerlan Musayev.",
  },
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  const person = personSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
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

      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Contact
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-navy-900 leading-tight mb-8">
              Contact Tamerlan Musayev
            </h1>
            <p className="text-xl text-navy-600 max-w-2xl leading-relaxed">
              Have a question, business inquiry, or just want to connect?
              Tamerlan Musayev is always open to hearing from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-20 md:pb-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="card">
                <h2 className="text-2xl font-serif text-navy-900 mb-6">
                  Send a Message
                </h2>
                <form
                  action="https://formspree.io/f/placeholder"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-cream focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-cream focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-cream focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all resize-none"
                      placeholder="Tell me what's on your mind..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif text-navy-900 mb-6">
                    Other Ways to Reach Tamerlan Musayev
                  </h2>
                  <p className="text-lg text-navy-600 leading-relaxed mb-8">
                    Prefer something more direct? Book a call, send an email, or
                    connect on social media.
                  </p>
                </div>

                <div className="space-y-6">
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="card block group"
                  >
                    <p className="text-sm text-gold-600 font-medium uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-lg text-navy-900 group-hover:text-navy-700 transition-colors">
                      {SOCIAL_LINKS.email}
                    </p>
                  </a>

                  <a
                    href={SOCIAL_LINKS.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card block group"
                  >
                    <p className="text-sm text-gold-600 font-medium uppercase tracking-wider mb-1">
                      Book a Call
                    </p>
                    <p className="text-lg text-navy-900 group-hover:text-navy-700 transition-colors">
                      Schedule 30 minutes with Tamerlan Musayev
                    </p>
                  </a>

                  <div className="card">
                    <p className="text-sm text-gold-600 font-medium uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-lg text-navy-900">Houston, TX</p>
                  </div>

                  <div className="card">
                    <p className="text-sm text-gold-600 font-medium uppercase tracking-wider mb-4">
                      Social Media
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { label: "Twitter / X", href: SOCIAL_LINKS.twitter },
                        { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
                        { label: "PeptideLeads", href: SOCIAL_LINKS.peptideleads },
                        { label: "Instagram", href: SOCIAL_LINKS.instagram },
                      ].map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full border border-navy-200 text-sm text-navy-700 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-navy-500 text-sm">
                  Looking for more links?{" "}
                  <Link href="/links" className="link-underline text-navy-700">
                    Visit the links page
                  </Link>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

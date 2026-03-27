import { Metadata } from "next";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import { personSchema, breadcrumbSchema } from "@/lib/schema";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Links — Tamerlan Musayev",
  description:
    "All links for Tamerlan Musayev in one place — PeptideLeads, social media, booking, and more.",
  openGraph: {
    title: "Links — Tamerlan Musayev",
    description: "All links for Tamerlan Musayev in one place.",
    url: `${SITE_URL}/links`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Links — Tamerlan Musayev",
    description: "All links for Tamerlan Musayev in one place.",
  },
  alternates: { canonical: `${SITE_URL}/links` },
};

export default function LinksPage() {
  const person = personSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Links", href: "/links" },
  ]);

  const links = [
    {
      title: "PeptideLeads",
      subtitle: "Patient generation for peptide therapy clinics",
      href: SOCIAL_LINKS.peptideleads,
      accent: true,
    },
    {
      title: "Book a Call",
      subtitle: "Schedule 30 minutes with Tamerlan Musayev",
      href: SOCIAL_LINKS.calendly,
      accent: false,
    },
    {
      title: "Twitter / X",
      subtitle: "@peptideleads",
      href: SOCIAL_LINKS.twitter,
      accent: false,
    },
    {
      title: "LinkedIn",
      subtitle: "Professional profile",
      href: SOCIAL_LINKS.linkedin,
      accent: false,
    },
    {
      title: "Featured.com",
      subtitle: "Expert profile & published answers",
      href: SOCIAL_LINKS.featured,
      accent: false,
    },
    {
      title: "Instagram",
      subtitle: "@tamerlanmusayev",
      href: SOCIAL_LINKS.instagram,
      accent: false,
    },
    {
      title: "Email",
      subtitle: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
      accent: false,
    },
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

      <section className="section-padding min-h-[90vh]">
        <div className="max-w-lg mx-auto text-center">
          <ScrollReveal>
            {/* Avatar placeholder */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-navy-200 to-navy-100 mx-auto mb-6 flex items-center justify-center border-2 border-white shadow-lg">
              <span className="font-serif text-2xl text-navy-500">TM</span>
            </div>
            <h1 className="text-3xl font-serif text-navy-900 mb-2">
              Tamerlan Musayev
            </h1>
            <p className="text-navy-500 mb-10">
              Entrepreneur &bull; Founder of PeptideLeads &bull; Houston, TX
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {links.map((link, i) => (
              <ScrollReveal key={link.title} delay={i * 50}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`block w-full p-5 rounded-2xl border transition-all duration-300 group ${
                    link.accent
                      ? "bg-navy-900 border-navy-900 text-white hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-900/20"
                      : "bg-white border-navy-100/50 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-100/20"
                  }`}
                >
                  <p
                    className={`font-medium ${
                      link.accent ? "text-white" : "text-navy-900"
                    } group-hover:scale-[1.01] transition-transform`}
                  >
                    {link.title}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      link.accent ? "text-navy-300" : "text-navy-500"
                    }`}
                  >
                    {link.subtitle}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <p className="text-navy-400 text-sm mt-10">
              &copy; 2026 Tamerlan Musayev
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

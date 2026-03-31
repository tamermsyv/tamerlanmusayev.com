import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, LocationPage } from "@/lib/location-data";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import PersonSchema from "@/components/PersonSchema";
import GoldBanner from "@/components/GoldBanner";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};

  return {
    title: location.title,
    description: location.description,
    openGraph: {
      title: location.title,
      description: location.description,
      url: `${SITE_URL}/location/${location.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: location.title,
      description: location.description,
    },
    alternates: { canonical: `${SITE_URL}/location/${location.slug}` },
  };
}

function getRelatedLocations(location: LocationPage): LocationPage[] {
  if (location.type === "state") {
    return locations.filter(
      (l) => l.type === "city" && l.state === location.slug
    );
  }
  const parentState = locations.find(
    (l) => l.type === "state" && l.slug === location.state
  );
  return parentState ? [parentState] : [];
}

function getSiblingStates(location: LocationPage): LocationPage[] {
  if (location.type !== "state") return [];
  const allStates = locations.filter((l) => l.type === "state");
  const idx = allStates.findIndex((l) => l.slug === location.slug);
  const siblings: LocationPage[] = [];
  if (idx > 0) siblings.push(allStates[idx - 1]);
  if (idx < allStates.length - 1) siblings.push(allStates[idx + 1]);
  return siblings;
}

export default async function LocationPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) notFound();

  const related = getRelatedLocations(location);
  const siblings = getSiblingStates(location);

  return (
    <>
      <PersonSchema pagePath={`/location/${location.slug}`} />

      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              {location.type === "state" ? "State" : "City"} &mdash; PeptideLeads
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-navy-900 leading-tight mb-6">
              PeptideLeads in {location.name}
            </h1>
            <p className="text-xl text-navy-600 max-w-3xl leading-relaxed">
              {location.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 lg:px-24 pb-20">
        <div className="container-narrow">
          <ScrollReveal>
            <div
              className="prose prose-lg prose-navy max-w-none
                [&_p]:text-navy-700 [&_p]:leading-relaxed [&_p]:mb-6
                [&_a]:text-gold-600 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4
                [&_strong]:text-navy-900"
              dangerouslySetInnerHTML={{ __html: location.content }}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Related Locations */}
      {related.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <ScrollReveal>
              <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
                {location.type === "state"
                  ? "City Pages"
                  : "State Page"}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-8">
                {location.type === "state"
                  ? `Explore Cities in ${location.name}`
                  : `Explore ${related[0]?.name}`}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel, i) => (
                <ScrollReveal key={rel.slug} delay={i * 100}>
                  <Link
                    href={`/location/${rel.slug}`}
                    className="card block group"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-gold-600 mb-2">
                      {rel.type === "state" ? "State" : "City"}
                    </p>
                    <h3 className="text-xl font-serif text-navy-900 group-hover:text-navy-700 transition-colors">
                      PeptideLeads in {rel.name}
                    </h3>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Major Cities (state pages only) */}
      {location.type === "state" &&
        location.majorCities &&
        location.majorCities.length > 0 && (
          <section className="section-padding">
            <div className="container-wide">
              <ScrollReveal>
                <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
                  Markets We Serve
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-8">
                  Major Cities in {location.name}
                </h2>
              </ScrollReveal>
              <div className="flex flex-wrap gap-4">
                {location.majorCities.map((city) => (
                  <ScrollReveal key={city}>
                    <span className="px-6 py-3 bg-white rounded-full border border-navy-100/50 text-navy-700 font-medium text-sm">
                      {city}
                    </span>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">
              Ready to Grow Your Clinic in {location.name}?
            </h2>
            <p className="text-xl text-navy-600 mb-10 max-w-2xl mx-auto">
              Book a free 30-minute strategy call with Tamerlan Musayev and see
              how PeptideLeads can deliver exclusive patient leads to your
              {" "}{location.type === "state" ? location.name : location.name} clinic.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={SOCIAL_LINKS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Call
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GoldBanner />

      {/* Internal Links */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Learn More
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-8">
              Explore
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal>
              <Link
                href="/peptideleads"
                className="card block group"
              >
                <h3 className="text-xl font-serif text-navy-900 group-hover:text-navy-700 transition-colors mb-2">
                  About PeptideLeads
                </h3>
                <p className="text-navy-600 text-sm">
                  Learn how PeptideLeads generates exclusive patient leads for
                  peptide therapy clinics nationwide.
                </p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Link
                href="/blog"
                className="card block group"
              >
                <h3 className="text-xl font-serif text-navy-900 group-hover:text-navy-700 transition-colors mb-2">
                  Read the Blog
                </h3>
                <p className="text-navy-600 text-sm">
                  Articles on peptide therapy marketing, cold email outreach,
                  and building a business.
                </p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link
                href="/contact"
                className="card block group"
              >
                <h3 className="text-xl font-serif text-navy-900 group-hover:text-navy-700 transition-colors mb-2">
                  Get In Touch
                </h3>
                <p className="text-navy-600 text-sm">
                  Have questions? Reach out to Tamerlan Musayev directly.
                </p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Browse Other Locations */}
      {siblings.length > 0 && (
        <section className="px-6 md:px-12 lg:px-24 pb-20">
          <div className="container-wide">
            <ScrollReveal>
              <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
                Browse Locations
              </p>
              <div className="flex flex-wrap gap-4">
                {siblings.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/location/${s.slug}`}
                    className="px-6 py-3 bg-white rounded-full border border-navy-100/50 text-navy-700 font-medium text-sm hover:border-gold-400 transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}
    </>
  );
}

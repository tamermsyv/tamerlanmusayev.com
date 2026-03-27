import { SITE_URL, SOCIAL_LINKS } from "./constants";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tamerlan Musayev",
    alternateName: "Tamer Musayev",
    url: SITE_URL,
    jobTitle: "Founder & CEO",
    worksFor: {
      "@type": "Organization",
      name: "PeptideLeads",
      url: "https://peptideleads.com",
    },
    description:
      "18-year-old entrepreneur and founder of PeptideLeads, a patient generation agency for peptide therapy clinics.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    sameAs: [
      SOCIAL_LINKS.peptideleads,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.featured,
      SOCIAL_LINKS.instagram,
    ],
    knowsAbout: [
      "Digital Marketing",
      "Lead Generation",
      "SEO",
      "Cold Email Outreach",
      "Peptide Therapy",
      "Healthcare Marketing",
      "Web3",
      "NFTs",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tamerlan Musayev",
    url: SITE_URL,
    description:
      "Official website of Tamerlan Musayev — entrepreneur, founder of PeptideLeads, and digital marketing expert.",
    author: personSchema(),
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function articleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: personSchema(),
    publisher: {
      "@type": "Person",
      name: "Tamerlan Musayev",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };
}

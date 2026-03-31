import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/constants";
import { blogPosts } from "@/lib/blog-data";
import ScrollReveal from "@/components/ScrollReveal";
import PersonSchema from "@/components/PersonSchema";
import GoldBanner from "@/components/GoldBanner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const title = post.title.length > 50
    ? `${post.title.slice(0, 47)}...`
    : `${post.title} — Tamerlan Musayev`;

  const safeTitle = title.length > 60 ? title.slice(0, 57) + "..." : title;

  return {
    title: safeTitle,
    description: post.description.slice(0, 155),
    openGraph: {
      title: safeTitle,
      description: post.description.slice(0, 155),
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: safeTitle,
      description: post.description.slice(0, 155),
    },
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: "Tamerlan Musayev" },
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: "2026-03-01",
    publisher: { "@type": "Person", name: "Tamerlan Musayev" },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PersonSchema pagePath={`/blog/${post.slug}`} />

      {/* Article Header */}
      <article className="section-padding">
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
          <ScrollReveal>
            <div style={{ marginBottom: 32 }}>
              <Link
                href="/blog"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  textDecoration: "none",
                }}
              >
                &larr; Back to Blog
              </Link>
            </div>

            <div
              style={{
                display: "inline-block",
                fontFamily: "var(--mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                border: "1px solid var(--gold)",
                padding: "6px 16px",
                marginBottom: 24,
              }}
            >
              {post.category}
            </div>

            <h1
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                lineHeight: 1.15,
                color: "var(--fg)",
                marginBottom: 24,
              }}
            >
              {post.title}
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "var(--mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                color: "var(--muted)",
                marginBottom: 48,
              }}
            >
              <span>Tamerlan Musayev</span>
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "var(--gold)",
                }}
              />
              <span>{post.category}</span>
            </div>
          </ScrollReveal>

          {/* Article Content */}
          <ScrollReveal delay={200}>
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal delay={300}>
            <div
              style={{
                marginTop: 64,
                padding: 40,
                background: "var(--card-bg, #f8f6f0)",
                border: "1px solid var(--border)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.6rem",
                  color: "var(--fg)",
                  marginBottom: 12,
                }}
              >
                Want to work together?
              </h3>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "0.95rem",
                  color: "var(--muted)",
                  marginBottom: 24,
                  maxWidth: 480,
                  margin: "0 auto 24px",
                  lineHeight: 1.6,
                }}
              >
                If you run a peptide therapy clinic and want exclusive leads
                delivered to your territory, let&apos;s talk.
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  fontFamily: "var(--mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  padding: "14px 36px",
                  background: "var(--gold)",
                  color: "#fff",
                  textDecoration: "none",
                  transition: "opacity 0.3s",
                }}
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <ScrollReveal delay={400}>
              <div
                style={{
                  marginTop: 64,
                  borderTop: "1px solid var(--border)",
                  paddingTop: 48,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.6rem",
                    color: "var(--fg)",
                    marginBottom: 24,
                  }}
                >
                  Keep Reading
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 16,
                  }}
                >
                  {relatedPosts.map(
                    (related) =>
                      related && (
                        <Link
                          key={related.slug}
                          href={`/blog/${related.slug}`}
                          style={{
                            display: "block",
                            padding: 24,
                            border: "1px solid var(--border)",
                            textDecoration: "none",
                            transition: "border-color 0.3s",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--mono)",
                              fontSize: "0.55rem",
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                              color: "var(--gold)",
                            }}
                          >
                            {related.category}
                          </span>
                          <h4
                            style={{
                              fontFamily: "var(--serif)",
                              fontSize: "1.05rem",
                              color: "var(--fg)",
                              marginTop: 8,
                              lineHeight: 1.35,
                            }}
                          >
                            {related.title}
                          </h4>
                        </Link>
                      )
                  )}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </article>

      <GoldBanner />
    </>
  );
}

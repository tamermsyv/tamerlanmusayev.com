import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/lib/blog-data";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog — Tamerlan Musayev",
  description:
    "Read articles by Tamerlan Musayev on entrepreneurship, cold email outreach, peptide therapy marketing, Web3, and building a business at 18.",
  openGraph: {
    title: "Blog — Tamerlan Musayev",
    description:
      "Articles by Tamerlan Musayev on entrepreneurship, healthcare marketing, and building businesses.",
    url: `${SITE_URL}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Tamerlan Musayev",
    description:
      "Articles by Tamerlan Musayev on entrepreneurship and healthcare marketing.",
  },
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-gold-600 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Blog
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-navy-900 leading-tight mb-8">
              Thoughts by Tamerlan Musayev
            </h1>
            <p className="text-xl text-navy-600 max-w-3xl leading-relaxed">
              Writing about entrepreneurship, healthcare marketing, cold email,
              and what it&apos;s really like building a business at 18.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-20 md:pb-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card block h-full group"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium uppercase tracking-wider text-gold-600 bg-gold-50 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-serif text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-navy-600 leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-navy-400">
                    <span>Tamerlan Musayev</span>
                    <span className="w-1 h-1 rounded-full bg-navy-300" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span className="w-1 h-1 rounded-full bg-navy-300" />
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Why I Started PeptideLeads at 18 — Tamerlan Musayev",
  description:
    "Tamerlan Musayev shares the story behind launching PeptideLeads at 18 — how he spotted a massive gap in peptide therapy clinic marketing and built a pay-per-lead model to fill it.",
  openGraph: {
    title: "Why I Started PeptideLeads at 18 — Tamerlan Musayev",
    description:
      "Tamerlan Musayev shares the story behind launching PeptideLeads at 18 — how he spotted a massive gap in peptide therapy clinic marketing and built a pay-per-lead model to fill it.",
    url: `${SITE_URL}/blog/why-i-started-peptideleads-at-18`,
    type: "article",
    publishedTime: "2026-02-15",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why I Started PeptideLeads at 18 — Tamerlan Musayev",
    description:
      "Tamerlan Musayev shares the story behind launching PeptideLeads at 18 — how he spotted a massive gap in peptide therapy clinic marketing and built a pay-per-lead model to fill it.",
  },
  alternates: { canonical: `${SITE_URL}/blog/why-i-started-peptideleads-at-18` },
};

export default function BlogPostPage() {
  const jsonLd = articleSchema({
    title: "Why I Started PeptideLeads at 18",
    description:
      "Tamerlan Musayev shares the story behind launching PeptideLeads at 18 — how he spotted a massive gap in peptide therapy clinic marketing and built a pay-per-lead model to fill it.",
    slug: "why-i-started-peptideleads-at-18",
    datePublished: "2026-02-15",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Why I Started PeptideLeads at 18", href: "/blog/why-i-started-peptideleads-at-18" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <article className="section-padding">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="mb-8">
              <Link
                href="/blog"
                className="text-gold-600 text-sm font-medium uppercase tracking-widest hover:text-gold-700 transition-colors"
              >
                &larr; Back to Blog
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-900 leading-tight mb-6">
              Why I Started PeptideLeads at 18
            </h1>
            <div className="flex items-center gap-4 text-navy-500 text-sm mb-12">
              <span>Tamerlan Musayev</span>
              <span className="w-1 h-1 rounded-full bg-navy-300" />
              <time dateTime="2026-02-15">February 15, 2026</time>
              <span className="w-1 h-1 rounded-full bg-navy-300" />
              <span>6 min read</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="blog-content">
              <p>
                Most people my age are figuring out college applications or stressing about what major to
                pick. I was sitting in my room last year researching peptide therapy clinics and realizing
                that an entire industry had a marketing problem nobody was solving. That realization is
                what led me, Tamerlan Musayev, to build{" "}
                <Link href="/peptideleads">PeptideLeads</Link>.
              </p>

              <p>
                Let me back up. I didn&apos;t just wake up one day and decide to get into healthcare
                marketing. I come from the Web3 world. I spent years trading NFTs, building communities,
                and learning how markets work at a fundamental level. By the time I was 17, I&apos;d
                already made six figures and learned more about business than most people learn in a
                decade. But I also learned that speculative markets are exhausting. I wanted to build
                something that generates real revenue by solving a real problem.
              </p>

              <h2>The Gap I Saw</h2>

              <p>
                I started looking at different industries where businesses were clearly leaving money on
                the table. Healthcare kept coming up. Specifically, peptide therapy clinics. These are
                clinics offering treatments like BPC-157, semaglutide, and other peptide therapies for
                everything from weight loss to injury recovery to anti-aging. The demand is insane and
                growing every single month.
              </p>

              <p>
                But here&apos;s the thing: most of these clinics have terrible marketing. And I mean
                terrible. Their websites look like they were built in 2012. They have no SEO strategy. No
                paid ads. No email outreach. They rely almost entirely on word of mouth and maybe a few
                referrals from other providers. Some of them hire agencies that charge $3K-$5K per month
                on retainer and deliver nothing meaningful.
              </p>

              <p>
                I saw that gap and it was obvious to me. These clinics need patients. They&apos;re willing
                to pay for patients. But the existing solutions are either too expensive, too vague, or
                just don&apos;t work. Tamerlan Musayev saw that and thought: what if I just delivered
                leads directly, charged per lead, and took all the risk off their plate?
              </p>

              <h2>The Model: $50 Per Lead, No Retainer</h2>

              <p>
                That&apos;s exactly what PeptideLeads is. Clinics don&apos;t pay me a monthly retainer.
                They don&apos;t sign a long contract hoping things work out. They pay $50 per qualified,
                exclusive lead. That&apos;s it. The lead is theirs. Nobody else gets it. And if I
                don&apos;t deliver leads, they don&apos;t pay.
              </p>

              <p>
                This model only works if you can actually generate leads consistently and at scale. That
                means building real infrastructure: cold email systems across 17 domains, paid ad
                campaigns, landing pages that actually convert, and follow-up sequences that nurture
                prospects. Tamerlan Musayev didn&apos;t just come up with a business idea — I built the
                machine behind it from scratch.
              </p>

              <p>
                The exclusive territory piece is important too. Each clinic gets their own geographic
                area. I&apos;m not sending the same lead to five different clinics and letting them fight
                over it. That&apos;s what most lead gen companies do and it destroys trust. I wanted to
                build something where clinics actually see me as a partner, not just another vendor.
              </p>

              <h2>Why Web3 Prepared Me for This</h2>

              <p>
                People always ask me why I went from NFTs to healthcare marketing. Honestly, it makes
                more sense than you&apos;d think. In Web3, you learn how to move fast. You learn how to
                evaluate opportunities before everyone else catches on. You learn how to build systems
                that scale. And most importantly, you learn that you don&apos;t need permission to enter a
                new industry.
              </p>

              <p>
                My <Link href="/experience">experience</Link> in Web3 taught me that the best
                opportunities are usually in spaces where nobody is paying attention yet. Peptide therapy
                marketing is exactly that. The clinics are popping up everywhere but the marketing
                infrastructure hasn&apos;t caught up. Tamerlan Musayev recognized that pattern because
                I&apos;d seen it before in crypto — when the demand exists but the tools don&apos;t,
                that&apos;s where you build.
              </p>

              <h2>Going All In</h2>

              <p>
                I could have kept this as a side project. Sent a few cold emails here and there, maybe
                landed a couple of clients, collected some easy money. But that&apos;s not how you build
                something real. I went all in. I set up the entire email infrastructure, designed the
                outreach sequences, built the website, created the ad campaigns, and started reaching out
                to clinics across the country.
              </p>

              <p>
                At 18, the biggest advantage I have is that I can afford to take big swings. I don&apos;t
                have a mortgage. I don&apos;t have kids. My overhead is basically zero. So when I see an
                opportunity this clear, there&apos;s no reason to hold back.
              </p>

              <p>
                PeptideLeads is still early. But the fundamentals are solid. The market is growing. The
                model is aligned with what clinics actually want — results, not promises. And I&apos;m
                building it the right way, with real infrastructure and a long-term mindset.
              </p>

              <p>
                If you run a peptide therapy clinic and you&apos;re tired of wasting money on agencies
                that don&apos;t deliver, check out{" "}
                <Link href="/peptideleads">PeptideLeads</Link>. And if you&apos;re someone my age
                thinking about starting something — stop thinking and start building. The worst that
                happens is you learn something.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="border-t border-navy-100 mt-16 pt-12">
              <h3 className="text-2xl font-serif text-navy-900 mb-6">Keep Reading</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/blog/what-i-learned-making-six-figures-in-web3"
                  className="group block p-6 rounded-xl border border-navy-100 hover:border-gold-300 transition-colors"
                >
                  <span className="text-sm text-navy-400">February 1, 2026</span>
                  <h4 className="text-lg font-serif text-navy-900 mt-2 group-hover:text-gold-700 transition-colors">
                    What I Learned Making Six Figures in Web3 Before Turning 18
                  </h4>
                </Link>
                <Link
                  href="/blog/the-cold-email-infrastructure-nobody-talks-about"
                  className="group block p-6 rounded-xl border border-navy-100 hover:border-gold-300 transition-colors"
                >
                  <span className="text-sm text-navy-400">January 20, 2026</span>
                  <h4 className="text-lg font-serif text-navy-900 mt-2 group-hover:text-gold-700 transition-colors">
                    The Cold Email Infrastructure Nobody Talks About
                  </h4>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}

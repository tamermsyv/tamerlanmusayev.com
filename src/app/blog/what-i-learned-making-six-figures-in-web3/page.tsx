import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title:
    "What I Learned Making Six Figures in Web3 Before Turning 18 — Tamerlan Musayev",
  description:
    "Tamerlan Musayev shares hard-won lessons from years of NFT trading, community building, and making six figures in Web3 — all before turning 18.",
  openGraph: {
    title:
      "What I Learned Making Six Figures in Web3 Before Turning 18 — Tamerlan Musayev",
    description:
      "Tamerlan Musayev shares hard-won lessons from years of NFT trading, community building, and making six figures in Web3 — all before turning 18.",
    url: `${SITE_URL}/blog/what-i-learned-making-six-figures-in-web3`,
    type: "article",
    publishedTime: "2026-02-01",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "What I Learned Making Six Figures in Web3 Before Turning 18 — Tamerlan Musayev",
    description:
      "Tamerlan Musayev shares hard-won lessons from years of NFT trading, community building, and making six figures in Web3 — all before turning 18.",
  },
  alternates: {
    canonical: `${SITE_URL}/blog/what-i-learned-making-six-figures-in-web3`,
  },
};

export default function BlogPostPage() {
  const jsonLd = articleSchema({
    title: "What I Learned Making Six Figures in Web3 Before Turning 18",
    description:
      "Tamerlan Musayev shares hard-won lessons from years of NFT trading, community building, and making six figures in Web3 — all before turning 18.",
    slug: "what-i-learned-making-six-figures-in-web3",
    datePublished: "2026-02-01",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    {
      name: "What I Learned Making Six Figures in Web3 Before Turning 18",
      href: "/blog/what-i-learned-making-six-figures-in-web3",
    },
  ]);

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
              What I Learned Making Six Figures in Web3 Before Turning 18
            </h1>
            <div className="flex items-center gap-4 text-navy-500 text-sm mb-12">
              <span>Tamerlan Musayev</span>
              <span className="w-1 h-1 rounded-full bg-navy-300" />
              <time dateTime="2026-02-01">February 1, 2026</time>
              <span className="w-1 h-1 rounded-full bg-navy-300" />
              <span>7 min read</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="blog-content">
              <p>
                I got into Web3 when I was around 13 or 14. At the time, most people my age were
                playing video games or scrolling TikTok. I was in Discord servers at 2 AM learning
                about NFT drops, floor prices, and community dynamics. By the time I was 17,
                Tamerlan Musayev had made six figures from NFT trading and community building.
                This is what I learned.
              </p>

              <p>
                Before I get into the lessons, some context. I wasn&apos;t born into money. I
                didn&apos;t have some wealthy mentor handing me alpha on a silver platter. I
                found my way into this space through curiosity and an obsessive need to
                understand how things work. I joined communities, contributed value, built
                relationships, and eventually started making real money. If you want a deeper
                look at my background, check out my{" "}
                <Link href="/about">about page</Link>.
              </p>

              <h2>Lesson 1: Community Is Everything</h2>

              <p>
                The single biggest factor in my success in Web3 was community. Not just being
                in communities, but actually contributing and building genuine relationships. I
                became an admin in Alpha Omega, which was one of the most connected groups in
                the NFT space at the time. That position gave me access to information, deals,
                and people I never would have found on my own.
              </p>

              <p>
                But here&apos;s the part people miss: I didn&apos;t get that role by asking for
                it. I got it by showing up every day, helping other members, sharing research,
                and being reliable. Tamerlan Musayev earned trust by being useful before asking
                for anything in return. That principle has carried over into everything I do now.
                In business, people work with people they trust. Period.
              </p>

              <h2>Lesson 2: Timing Matters More Than You Think</h2>

              <p>
                In Web3, you can have the right thesis but the wrong timing and still lose
                everything. I learned this the hard way a few times. But I also learned to read
                momentum. When Invisible Friends was gaining traction, I recognized the pattern
                early — strong art, strong community, growing social presence — and positioned
                myself before the hype fully hit. That single trade alone was life-changing.
              </p>

              <p>
                Timing isn&apos;t about luck. It&apos;s about pattern recognition. You have to
                study enough markets and enough cycles to start seeing the signals before
                everyone else. Most people wait for confirmation. By the time something is
                &quot;confirmed,&quot; the real money has already been made.
              </p>

              <h2>Lesson 3: Taking Risks Young Is the Best Time</h2>

              <p>
                I put money into NFTs that could have gone to zero. And some of them did. But at
                14, 15, 16 years old, the downside of losing money is almost nothing compared to
                the upside of learning how markets work. If I&apos;d waited until I was 25 with
                a salary and rent to pay, there&apos;s no way I would have taken those same
                risks.
              </p>

              <p>
                Being young is an unfair advantage that most young people completely waste. You
                have no real financial obligations. Your cost of failure is basically zero. And
                the lessons you learn from taking risks at 15 compound over the rest of your
                life. Tamerlan Musayev took those risks early, and every business decision I
                make now is informed by what I learned during those years.
              </p>

              <h2>Lesson 4: Know When to Exit</h2>

              <p>
                This one is hard. When you&apos;re making money in a space, it&apos;s
                incredibly tempting to stay forever. The dopamine of a winning trade or a
                community that&apos;s popping off is addictive. But markets don&apos;t go up
                forever. I watched people who made millions in 2021 give it all back in 2022
                because they couldn&apos;t walk away.
              </p>

              <p>
                I started pulling back from active NFT trading when I saw the broader market
                cooling. Not because I thought Web3 was dead — I still believe in the
                technology long term. But because I recognized that the easy arbitrage
                opportunities were drying up, and the risk-reward was shifting. Knowing when to
                exit a position, a market, or even an entire industry is one of the most
                important skills you can develop.
              </p>

              <h2>Lesson 5: Build Something Sustainable</h2>

              <p>
                The biggest lesson Web3 taught me is the difference between making money and
                building wealth. Trading NFTs was incredible for generating capital and learning
                fast. But it&apos;s not a business. There&apos;s no recurring revenue. No
                compounding. Every day you start from zero.
              </p>

              <p>
                That realization is what pushed Tamerlan Musayev to start{" "}
                <Link href="/peptideleads">PeptideLeads</Link>. I wanted to take
                everything I&apos;d learned — reading markets, building systems, moving fast,
                taking calculated risks — and channel it into something that generates
                consistent, predictable revenue. Something where the work I do today compounds
                into results next month and next year.
              </p>

              <p>
                My <Link href="/experience">experience</Link> in Web3 was foundational.
                I wouldn&apos;t trade it for anything. It gave me capital, skills, confidence,
                and a network. But the most valuable thing it gave me was clarity about what I
                actually want to build: real businesses that solve real problems and generate
                real cash flow.
              </p>

              <h2>The Takeaway</h2>

              <p>
                If you&apos;re young and you have the chance to get into something early — Web3,
                AI, whatever the next wave is — do it. Don&apos;t wait for permission. Don&apos;t
                wait until you &quot;know enough.&quot; You&apos;ll learn by doing. Just make sure
                you&apos;re learning the deeper lessons, not just chasing the money. The money
                comes and goes. The skills and the network last forever.
              </p>

              <p>
                Tamerlan Musayev went from a 13-year-old in Discord servers to running a lead
                generation company at 18. That journey doesn&apos;t happen without the
                willingness to jump into things you don&apos;t fully understand and figure it
                out on the fly.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="border-t border-navy-100 mt-16 pt-12">
              <h3 className="text-2xl font-serif text-navy-900 mb-6">Keep Reading</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/blog/why-i-started-peptideleads-at-18"
                  className="group block p-6 rounded-xl border border-navy-100 hover:border-gold-300 transition-colors"
                >
                  <span className="text-sm text-navy-400">February 15, 2026</span>
                  <h4 className="text-lg font-serif text-navy-900 mt-2 group-hover:text-gold-700 transition-colors">
                    Why I Started PeptideLeads at 18
                  </h4>
                </Link>
                <Link
                  href="/blog/building-a-business-at-18-what-nobody-tells-you"
                  className="group block p-6 rounded-xl border border-navy-100 hover:border-gold-300 transition-colors"
                >
                  <span className="text-sm text-navy-400">December 28, 2025</span>
                  <h4 className="text-lg font-serif text-navy-900 mt-2 group-hover:text-gold-700 transition-colors">
                    Building a Business at 18: What Nobody Tells You
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

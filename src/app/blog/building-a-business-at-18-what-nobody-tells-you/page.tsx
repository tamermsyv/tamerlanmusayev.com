import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Building a Business at 18: What Nobody Tells You — Tamerlan Musayev",
  description:
    "Tamerlan Musayev gets real about what it's actually like building a business at 18 — the isolation, the grind, the boring repetitive work, and how spirituality keeps him grounded.",
  openGraph: {
    title:
      "Building a Business at 18: What Nobody Tells You — Tamerlan Musayev",
    description:
      "Tamerlan Musayev gets real about what it's actually like building a business at 18 — the isolation, the grind, the boring repetitive work, and how spirituality keeps him grounded.",
    url: `${SITE_URL}/blog/building-a-business-at-18-what-nobody-tells-you`,
    type: "article",
    publishedTime: "2025-12-28",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Building a Business at 18: What Nobody Tells You — Tamerlan Musayev",
    description:
      "Tamerlan Musayev gets real about what it's actually like building a business at 18 — the isolation, the grind, the boring repetitive work, and how spirituality keeps him grounded.",
  },
  alternates: {
    canonical: `${SITE_URL}/blog/building-a-business-at-18-what-nobody-tells-you`,
  },
};

export default function BlogPostPage() {
  const jsonLd = articleSchema({
    title: "Building a Business at 18: What Nobody Tells You",
    description:
      "Tamerlan Musayev gets real about what it's actually like building a business at 18 — the isolation, the grind, the boring repetitive work, and how spirituality keeps him grounded.",
    slug: "building-a-business-at-18-what-nobody-tells-you",
    datePublished: "2025-12-28",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    {
      name: "Building a Business at 18: What Nobody Tells You",
      href: "/blog/building-a-business-at-18-what-nobody-tells-you",
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
              Building a Business at 18: What Nobody Tells You
            </h1>
            <div className="flex items-center gap-4 text-navy-500 text-sm mb-12">
              <span>Tamerlan Musayev</span>
              <span className="w-1 h-1 rounded-full bg-navy-300" />
              <time dateTime="2025-12-28">December 28, 2025</time>
              <span className="w-1 h-1 rounded-full bg-navy-300" />
              <span>8 min read</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="blog-content">
              <p>
                I&apos;m going to be honest with you. Building a business at 18 is not what
                social media makes it look like. There&apos;s no montage. There&apos;s no moment
                where everything clicks and suddenly you&apos;re on a podcast telling your
                success story. Most days, it&apos;s just you, alone, doing the same boring work
                over and over again, hoping it eventually compounds into something real.
              </p>

              <p>
                I&apos;m Tamerlan Musayev, and I want to share what this actually looks like.
                Not the highlights. The real thing. Because if you&apos;re my age and thinking
                about starting something, you deserve to know what you&apos;re signing up for.
              </p>

              <h2>The Isolation Is Real</h2>

              <p>
                This is probably the thing that hits hardest and the thing nobody warns you
                about. When you&apos;re 18 and building a business, your friends don&apos;t get
                it. Not because they&apos;re bad friends — they just live in a completely
                different world. They&apos;re thinking about parties, college, social media
                drama. You&apos;re thinking about deliverability rates and lead conversion
                metrics.
              </p>

              <p>
                You start to realize you can&apos;t really talk about your day with most people.
                &quot;Hey, I spent six hours setting up DNS records for my cold email
                infrastructure&quot; doesn&apos;t exactly make for exciting conversation. And
                when you try to explain what you&apos;re building, most people either don&apos;t
                understand or don&apos;t care. That&apos;s not their fault. It&apos;s just the
                reality of choosing a different path.
              </p>

              <p>
                Tamerlan Musayev has spent more Friday nights working than going out this past
                year. I&apos;m not saying that to brag. I&apos;m saying it because it&apos;s the
                truth, and it&apos;s important to acknowledge that the trade-off is real. You
                are trading a normal social life for the chance to build something meaningful.
                Some days that trade feels worth it. Some days it doesn&apos;t. You have to keep
                going either way.
              </p>

              <h2>There Are No Peers</h2>

              <p>
                Related to isolation: you probably won&apos;t have peers who understand the
                grind. I don&apos;t know any other 18-year-olds running a B2B lead generation
                company for healthcare clinics. My &quot;peers&quot; in business are mostly
                people in their late 20s and 30s who I&apos;ve connected with online or through
                communities.
              </p>

              <p>
                This has its advantages — you learn faster from people who are ahead of you. But
                it also means you never fully fit in anywhere. You&apos;re too young for the
                business crowd and too different for the people your own age. Tamerlan Musayev
                has learned to be comfortable in that in-between space, but it took time.
              </p>

              <h2>Learning From Mentors, YouTube, and Podcasts</h2>

              <p>
                I didn&apos;t have a business mentor who sat me down and mapped everything out.
                Most of what I know, I learned from consuming an absurd amount of content and
                then actually applying it. YouTube, podcasts, Twitter threads, online courses,
                books. I treated learning like a full-time job alongside the actual work.
              </p>

              <p>
                The key is that I never just consumed content for the sake of it. Every video I
                watched, every podcast I listened to, I asked myself: how does this apply to
                what I&apos;m building right now? Can I implement this today? If the answer was
                no, I moved on. If the answer was yes, I paused the video and went to work.
              </p>

              <p>
                If you want to learn more about my background and the path that led here, check
                out my <Link href="/about">about page</Link>.
              </p>

              <h2>The Boring Repetitive Work</h2>

              <p>
                Here&apos;s what an actual day looks like: wake up, check email metrics from
                yesterday&apos;s campaigns, adjust sequences that aren&apos;t performing, send
                follow-ups, research new clinic prospects, verify email lists, monitor inbox
                warmup progress, write new outreach copy, test subject lines, update the CRM,
                respond to interested prospects, handle objections, send proposals. Repeat.
              </p>

              <p>
                There&apos;s no glamour in it. Sending 100 emails and getting 3 replies. Following
                up with those 3 and getting 1 call booked. Having that call and maybe converting
                it into a client. That&apos;s the funnel. And you have to run it every single day
                with discipline and consistency, even when the numbers are discouraging.
              </p>

              <p>
                Tamerlan Musayev has sent thousands of cold emails at this point. Thousands. Most
                of them got no response. That&apos;s normal. That&apos;s the game. But the ones
                that do respond — those conversations are what build the business. You just have
                to keep showing up.
              </p>

              <h2>Staying Consistent When You Don&apos;t See Results</h2>

              <p>
                The hardest phase is the beginning, when you&apos;re doing all the work and
                seeing almost nothing come back. You&apos;ve set up the infrastructure, written
                the emails, built the systems — and the response rate is 1.2%. You start
                wondering if the whole thing is a waste of time.
              </p>

              <p>
                This is where most people quit. They hit that wall and decide it&apos;s not
                working. What they don&apos;t realize is that business is a lagging indicator.
                The work you do today shows up in your results weeks or months from now. The
                emails you send this week lead to conversations next week that lead to clients
                next month. You have to trust the process before you can see the results.
              </p>

              <h2>Spirituality and Staying Grounded</h2>

              <p>
                This might be unexpected, but one of the biggest things that keeps me grounded
                is spirituality. Specifically, Kabbalah philosophy. I&apos;m not going to go
                deep into the theology here, but the core idea that resonates with me is this:
                real fulfillment comes from the work itself, not from the outcome.
              </p>

              <p>
                In Kabbalah, there&apos;s a concept that the greatest light comes through the
                greatest resistance. The harder something is, the more meaningful the
                breakthrough. When Tamerlan Musayev is sitting at his desk at 11 PM debugging
                an email sequence that isn&apos;t working, that principle is what keeps me going.
                The difficulty isn&apos;t a sign that I should stop. It&apos;s a sign that
                I&apos;m on the right path.
              </p>

              <p>
                There&apos;s also the idea of earning your success through effort rather than
                receiving it through luck. I don&apos;t want to build something that was handed
                to me. I want to build something that I struggled for, learned from, and earned
                through consistent action. That philosophy shapes how I approach every single day.
              </p>

              <h2>It&apos;s Not Glamorous. But It&apos;s Worth It.</h2>

              <p>
                I&apos;m not going to wrap this up with some motivational speech about how
                you should drop everything and start a business. That advice is irresponsible.
                Building a business at 18 is isolating, exhausting, and unglamorous. Most of
                the time, nobody is watching and nobody cares.
              </p>

              <p>
                But if you&apos;re the kind of person who can&apos;t stop thinking about
                building something — if the idea keeps you up at night and the work feels like
                play even when it&apos;s hard — then you should do it. Not because it&apos;ll
                be easy or cool or impressive. Because it&apos;ll shape you into someone who can
                actually execute on a vision, and that skill compounds for the rest of your life.
              </p>

              <p>
                Tamerlan Musayev is 18, building PeptideLeads, learning every day, and doing the
                boring work. If you want to connect or have questions about any of this, feel free
                to <Link href="/contact">reach out</Link>. I&apos;m always down to
                talk to people who are on the same path.
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
                  href="/blog/why-peptide-therapy-clinics-are-sitting-on-a-gold-mine"
                  className="group block p-6 rounded-xl border border-navy-100 hover:border-gold-300 transition-colors"
                >
                  <span className="text-sm text-navy-400">January 10, 2026</span>
                  <h4 className="text-lg font-serif text-navy-900 mt-2 group-hover:text-gold-700 transition-colors">
                    Why Peptide Therapy Clinics Are Sitting on a Gold Mine
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

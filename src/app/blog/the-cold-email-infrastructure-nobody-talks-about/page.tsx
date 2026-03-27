import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "The Cold Email Infrastructure Nobody Talks About — Tamerlan Musayev",
  description:
    "Tamerlan Musayev breaks down the unsexy but critical infrastructure behind cold email at scale — 17 domains, 51 inboxes, DNS records, warmup, and why most people fail.",
  openGraph: {
    title:
      "The Cold Email Infrastructure Nobody Talks About — Tamerlan Musayev",
    description:
      "Tamerlan Musayev breaks down the unsexy but critical infrastructure behind cold email at scale — 17 domains, 51 inboxes, DNS records, warmup, and why most people fail.",
    url: `${SITE_URL}/blog/the-cold-email-infrastructure-nobody-talks-about`,
    type: "article",
    publishedTime: "2026-01-20",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Cold Email Infrastructure Nobody Talks About — Tamerlan Musayev",
    description:
      "Tamerlan Musayev breaks down the unsexy but critical infrastructure behind cold email at scale — 17 domains, 51 inboxes, DNS records, warmup, and why most people fail.",
  },
  alternates: {
    canonical: `${SITE_URL}/blog/the-cold-email-infrastructure-nobody-talks-about`,
  },
};

export default function BlogPostPage() {
  const jsonLd = articleSchema({
    title: "The Cold Email Infrastructure Nobody Talks About",
    description:
      "Tamerlan Musayev breaks down the unsexy but critical infrastructure behind cold email at scale — 17 domains, 51 inboxes, DNS records, warmup, and why most people fail.",
    slug: "the-cold-email-infrastructure-nobody-talks-about",
    datePublished: "2026-01-20",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    {
      name: "The Cold Email Infrastructure Nobody Talks About",
      href: "/blog/the-cold-email-infrastructure-nobody-talks-about",
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
              The Cold Email Infrastructure Nobody Talks About
            </h1>
            <div className="flex items-center gap-4 text-navy-500 text-sm mb-12">
              <span>Tamerlan Musayev</span>
              <span className="w-1 h-1 rounded-full bg-navy-300" />
              <time dateTime="2026-01-20">January 20, 2026</time>
              <span className="w-1 h-1 rounded-full bg-navy-300" />
              <span>7 min read</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="blog-content">
              <p>
                Everyone wants to talk about cold email copy. The subject line hacks. The
                personalization tricks. The &quot;one weird CTA&quot; that gets replies. Nobody
                wants to talk about the infrastructure. And that&apos;s exactly why most
                people&apos;s cold email campaigns go straight to spam.
              </p>

              <p>
                I&apos;m Tamerlan Musayev, and I run the outbound engine behind{" "}
                <Link href="/peptideleads">PeptideLeads</Link>. Right now I&apos;m
                operating 17 domains and 51 inboxes to reach peptide therapy clinics across
                the country. This post is about the boring, unsexy work that makes all of that
                actually land in someone&apos;s primary inbox instead of getting buried in spam
                or bouncing entirely.
              </p>

              <h2>Why Most People Fail at Cold Email</h2>

              <p>
                Here&apos;s what happens with 90% of people who try cold email: they buy one
                domain, set up a Gmail or Outlook account, write a decent email, blast it to
                500 people, and wonder why they got zero replies and their domain got
                blacklisted within a week.
              </p>

              <p>
                Cold email at scale is an infrastructure problem first and a copywriting problem
                second. You can have the best email ever written, but if your sending
                reputation is trash, nobody will ever see it. Tamerlan Musayev learned this the
                hard way early on. My first campaigns had solid copy and terrible deliverability.
                That forced me to actually learn how email infrastructure works.
              </p>

              <h2>The Domain Setup</h2>

              <p>
                You never send cold email from your primary domain. Ever. If your main domain
                gets blacklisted, you&apos;re done. Your regular business email stops working.
                Your website&apos;s reputation tanks. It&apos;s a disaster.
              </p>

              <p>
                Instead, you set up secondary domains that are variations of your main domain.
                I currently run 17 of these. Each domain gets 3 inboxes, giving me 51 total
                sending accounts. Each inbox sends a small volume — usually 25 to 35 emails
                per day max. This keeps the volume per inbox low enough that email providers
                don&apos;t flag it as suspicious behavior.
              </p>

              <p>
                The math works out: 51 inboxes at 30 emails per day is over 1,500 emails daily.
                That&apos;s serious volume, but because it&apos;s distributed across so many
                accounts, each individual inbox looks completely normal to Google and Microsoft.
              </p>

              <h2>DNS Records: SPF, DKIM, and DMARC</h2>

              <p>
                This is the part that makes most people&apos;s eyes glaze over. But if you
                skip this, nothing else matters. Every single one of my 17 domains has properly
                configured DNS records:
              </p>

              <ul>
                <li>
                  <strong>SPF (Sender Policy Framework):</strong> This tells receiving email
                  servers which IP addresses are authorized to send email on behalf of your
                  domain. Without it, your emails look like they could be spoofed.
                </li>
                <li>
                  <strong>DKIM (DomainKeys Identified Mail):</strong> This adds a cryptographic
                  signature to your emails that proves they haven&apos;t been tampered with in
                  transit. It&apos;s like a digital seal of authenticity.
                </li>
                <li>
                  <strong>DMARC (Domain-based Message Authentication, Reporting &amp;
                  Conformance):</strong> This tells receiving servers what to do if an email
                  fails SPF or DKIM checks. It also gives you reports on who&apos;s sending
                  email from your domain.
                </li>
              </ul>

              <p>
                Setting these up correctly for one domain is straightforward. Setting them up
                for 17 domains, making sure nothing conflicts, and monitoring them over time?
                That&apos;s the actual work. Tamerlan Musayev spent days getting this dialed in
                before sending a single outreach email.
              </p>

              <h2>Inbox Warmup</h2>

              <p>
                You can&apos;t just set up a new inbox and start blasting emails. A brand new
                email account that suddenly sends 30 emails a day will get flagged immediately.
                You have to warm it up.
              </p>

              <p>
                Warmup means gradually increasing your sending volume while simultaneously
                receiving replies. I use warmup tools that automatically send emails between
                my inboxes and a network of other accounts. These emails get opened, replied to,
                and marked as important — all signals that tell Gmail and Outlook that this is a
                legitimate inbox having real conversations.
              </p>

              <p>
                The warmup process takes about 2 to 3 weeks per inbox. That means when I set up
                a new batch of domains, I&apos;m waiting nearly a month before I can use them at
                full capacity. It&apos;s slow. It&apos;s annoying. And it&apos;s absolutely
                necessary.
              </p>

              <h2>List Hygiene</h2>

              <p>
                Your sending infrastructure can be perfect, but if you&apos;re emailing bad
                addresses, your reputation will still tank. Every email list needs to be
                verified before you send to it. I run every list through verification tools
                that check for:
              </p>

              <ul>
                <li>Invalid or non-existent email addresses</li>
                <li>Catch-all domains (which can be risky)</li>
                <li>Spam traps — email addresses specifically designed to catch spammers</li>
                <li>Role-based addresses (info@, support@, etc.) that rarely convert</li>
              </ul>

              <p>
                I aim for a bounce rate under 2% on every campaign. Anything higher and I pause,
                clean the list, and investigate. One bad campaign can damage a domain&apos;s
                reputation for weeks.
              </p>

              <h2>Deliverability Monitoring</h2>

              <p>
                Even after you do everything right, you have to keep monitoring. I check inbox
                placement rates regularly — meaning I verify that my emails are actually landing
                in the primary inbox, not promotions or spam. If I see a domain&apos;s placement
                dropping, I pull it from rotation, investigate the issue, and either fix it or
                replace it.
              </p>

              <p>
                This is an ongoing process. Tamerlan Musayev doesn&apos;t just set up the system
                and walk away. I&apos;m in the dashboards every single day looking at open rates,
                reply rates, bounce rates, and spam complaints. The numbers tell you everything
                if you actually pay attention to them.
              </p>

              <h2>The Boring Work Is the Competitive Advantage</h2>

              <p>
                Here&apos;s the real point of this post: the reason most people and most agencies
                suck at cold email is because they want to skip straight to the &quot;fun&quot;
                part — writing emails and watching replies come in. They don&apos;t want to spend
                three weeks warming up inboxes. They don&apos;t want to configure DNS records for
                17 domains. They don&apos;t want to verify lists and monitor deliverability daily.
              </p>

              <p>
                That unwillingness to do the boring work is my competitive advantage. While
                everyone else is getting flagged as spam, my emails are landing in primary
                inboxes, getting opened, and generating real conversations with clinic owners.
              </p>

              <p>
                If you&apos;re a clinic owner who wants those conversations to be with you,{" "}
                <Link href="/contact">reach out</Link>. And if you&apos;re someone
                trying to learn cold email, stop obsessing over subject lines and start building
                your infrastructure. Everything else follows from that.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="border-t border-navy-100 mt-16 pt-12">
              <h3 className="text-2xl font-serif text-navy-900 mb-6">Keep Reading</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/blog/why-peptide-therapy-clinics-are-sitting-on-a-gold-mine"
                  className="group block p-6 rounded-xl border border-navy-100 hover:border-gold-300 transition-colors"
                >
                  <span className="text-sm text-navy-400">January 10, 2026</span>
                  <h4 className="text-lg font-serif text-navy-900 mt-2 group-hover:text-gold-700 transition-colors">
                    Why Peptide Therapy Clinics Are Sitting on a Gold Mine
                  </h4>
                </Link>
                <Link
                  href="/blog/why-i-started-peptideleads-at-18"
                  className="group block p-6 rounded-xl border border-navy-100 hover:border-gold-300 transition-colors"
                >
                  <span className="text-sm text-navy-400">February 15, 2026</span>
                  <h4 className="text-lg font-serif text-navy-900 mt-2 group-hover:text-gold-700 transition-colors">
                    Why I Started PeptideLeads at 18
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

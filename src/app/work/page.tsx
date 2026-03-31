import { Metadata } from 'next';
import Link from 'next/link';
import PersonSchema from '@/components/PersonSchema';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import GoldBanner from '@/components/GoldBanner';
import Marquee from '@/components/Marquee';
import { HighlightLight, HighlightGold } from '@/components/HighlightText';

const BASE = 'https://tamerlanmusayev.com';

export const metadata: Metadata = {
  title: 'Work | Tamerlan Musayev',
  description:
    'Projects and work by Tamerlan Musayev — from PeptideLeads patient generation to Web3 communities and B2B lead generation infrastructure.',
  openGraph: {
    title: 'Work | Tamerlan Musayev',
    description:
      'Projects and work by Tamerlan Musayev — PeptideLeads, Web3, and B2B lead generation.',
    url: `${BASE}/work`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work | Tamerlan Musayev',
    description:
      'Projects and work by Tamerlan Musayev — PeptideLeads, Web3, and B2B lead gen.',
  },
  alternates: { canonical: `${BASE}/work` },
};

export default function WorkPage() {
  return (
    <>
      <PersonSchema pagePath="/work" />

      <PageHero
        bgText="WORK"
        label="My Work"
        title="What I've *built*"
      />

      <Marquee />

      {/* PeptideLeads */}
      <section className="section-padding">
        <ScrollReveal>
          <div className="s-label">Featured Project</div>
          <h2 className="s-head">
            <em>PeptideLeads</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <div className="project">
            <div className="project-tag">Live Project</div>
            <h3 className="project-t">PeptideLeads</h3>
            <p className="project-d">
              A patient generation agency built exclusively for peptide therapy clinics. I deliver exclusive, qualified
              patient leads on a pure performance model — no retainers, no ad spend from the clinic, and exclusive zip
              code territories. I built the entire infrastructure from scratch: website, SEO, cold email systems, ad
              campaigns, and CRM automation.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40 }}>
              <div>
                <div className="met-v">$50</div>
                <div className="met-l">Per Qualified Patient</div>
              </div>
              <div>
                <div className="met-v">$0</div>
                <div className="met-l">Zero Upfront Cost</div>
              </div>
              <div>
                <div className="met-v">8,000+</div>
                <div className="met-l">SEO Pages Built</div>
              </div>
              <div>
                <div className="met-v">100%</div>
                <div className="met-l">Performance Based</div>
              </div>
            </div>
            <div style={{ marginTop: 60, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <Link href="/work/peptideleads" className="hero-cta">
                <span>Full Case Study</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="https://peptideleads.com" target="_blank" rel="noopener noreferrer" className="hero-cta-outline">
                Visit Site
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Web3 */}
      <section className="section-padding section-dark">
        <ScrollReveal>
          <div className="s-label">Previous Work</div>
          <h2 className="s-head">
            Web3 &amp; <em>NFT</em> operations
          </h2>
        </ScrollReveal>
        <div style={{ maxWidth: 680 }}>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: '#8a8580', lineHeight: 1.85, marginBottom: 24 }}>
              Before PeptideLeads, I spent several years deep in Web3 and NFTs. I built an 8,000+ following across
              communities, traded high-value collections including Invisible Friends, and served as an admin in the
              Alpha Omega community. I managed collaboration campaigns between projects, ran community operations, and
              generated six figures in revenue.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: '#8a8580', lineHeight: 1.85, marginBottom: 24 }}>
              What I took away from that era: how to build an audience, how to sell in fast-moving markets, how to
              manage communities at scale, and when to walk away from something that has peaked. Those skills
              transferred directly into everything I do now.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginTop: 40 }}>
              <div>
                <div className="met-v" style={{ color: 'var(--gold2)' }}>8,000+</div>
                <div className="met-l">Community Following</div>
              </div>
              <div>
                <div className="met-v" style={{ color: 'var(--gold2)' }}>6 Figures</div>
                <div className="met-l">Revenue Generated</div>
              </div>
              <div>
                <div className="met-v" style={{ color: 'var(--gold2)' }}>Admin</div>
                <div className="met-l">Alpha Omega Group</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* B2B Lead Gen */}
      <section className="section-padding">
        <ScrollReveal>
          <div className="s-label">Foundation</div>
          <h2 className="s-head">
            B2B <em>lead generation</em>
          </h2>
        </ScrollReveal>
        <div style={{ maxWidth: 680 }}>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, marginBottom: 24 }}>
              Between Web3 and PeptideLeads, I went deep on <HighlightLight>B2B lead generation</HighlightLight>. I
              trained under an agency founder and learned the full stack: cold email infrastructure, domain management,
              inbox warmup, data scraping, list building, enrichment workflows, and outbound automation.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, marginBottom: 24 }}>
              I built and managed infrastructure across multiple domains and inboxes for high-volume outreach campaigns.
              That technical knowledge became the backbone of PeptideLeads — the same systems I use to reach clinics,
              book calls, and deliver patients at scale.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85 }}>
              Read more about the technical side in my post on{' '}
              <Link href="/blog/the-cold-email-infrastructure-nobody-talks-about" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
                cold email infrastructure
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-dark">
        <ScrollReveal>
          <div className="s-label">Next Step</div>
          <h2 className="s-head">
            Want to <em>work together</em>?
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p style={{ fontSize: '1.05rem', color: '#8a8580', lineHeight: 1.85, maxWidth: 520, marginBottom: 40 }}>
            If you run a peptide therapy clinic and want qualified patients without upfront costs, let&apos;s talk. Or if
            you just want to connect, I am always open to that too.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <Link href="/contact" className="hero-cta">
              <span>Get In Touch</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/about" className="hero-cta-outline">
              About Me
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <GoldBanner />
    </>
  );
}

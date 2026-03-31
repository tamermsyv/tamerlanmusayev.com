import { Metadata } from 'next';
import Link from 'next/link';
import PersonSchema from '@/components/PersonSchema';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import GoldBanner from '@/components/GoldBanner';
import { HighlightLight, HighlightGold } from '@/components/HighlightText';

const BASE = 'https://tamerlanmusayev.com';

export const metadata: Metadata = {
  title: 'PeptideLeads | Tamerlan Musayev',
  description:
    'How PeptideLeads works — Tamerlan Musayev built a patient generation agency for peptide therapy clinics with zero upfront cost and a pure performance model.',
  openGraph: {
    title: 'PeptideLeads | Tamerlan Musayev',
    description:
      'How Tamerlan Musayev built PeptideLeads — a performance-based patient generation agency for peptide therapy clinics.',
    url: `${BASE}/work/peptideleads`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeptideLeads | Tamerlan Musayev',
    description:
      'How Tamerlan Musayev built PeptideLeads — performance-based patient generation for peptide clinics.',
  },
  alternates: { canonical: `${BASE}/work/peptideleads` },
};

export default function PeptideLeadsPage() {
  return (
    <>
      <PersonSchema pagePath="/work/peptideleads" />

      <PageHero
        bgText="PEPTIDE"
        label="Featured Project"
        title="How *PeptideLeads* works"
      />

      {/* Business Model */}
      <section className="section-padding">
        <ScrollReveal>
          <div className="s-label">The Model</div>
          <h2 className="s-head">
            Pay per <em>patient</em>, nothing else
          </h2>
        </ScrollReveal>
        <div style={{ maxWidth: 680 }}>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, marginBottom: 24 }}>
              Most marketing agencies charge clinics a monthly retainer — $3,000 to $10,000 per month — and then ask
              the clinic to cover ad spend on top of that. The clinic takes all the risk and hopes the agency delivers.
              That model never made sense to me.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, marginBottom: 24 }}>
              With PeptideLeads, I flipped it. <HighlightGold>I cover all the ad spend.</HighlightGold> I build the
              infrastructure. I run the campaigns. The clinic pays a flat $50 per qualified patient lead that I deliver
              — and nothing else. No retainers, no setup fees, no long-term contracts. If I do not deliver, I do not
              get paid.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85 }}>
              Each clinic gets an <HighlightLight>exclusive zip code territory</HighlightLight>, meaning their leads
              are never shared with a competing clinic. That exclusivity is a core part of the value — clinics get
              patients that no one else is getting.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding section-dark">
        <ScrollReveal>
          <div className="s-label">Infrastructure</div>
          <h2 className="s-head">
            The <em>systems</em> behind it
          </h2>
        </ScrollReveal>
        <div style={{ maxWidth: 680 }}>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: '#8a8580', lineHeight: 1.85, marginBottom: 32 }}>
              PeptideLeads is not just a landing page and some ads. I built the entire operation from scratch:
            </p>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              {
                name: 'Programmatic SEO',
                desc: '8,000+ pages targeting peptide therapy keywords across every US market. Built with Next.js, deployed for speed and scale.',
              },
              {
                name: 'Cold Email Systems',
                desc: '17 domains, 51 inboxes, fully warmed and optimized. Custom outreach sequences that land in primary inboxes and book calls.',
              },
              {
                name: 'Paid Advertising',
                desc: 'Google Ads and Meta campaigns targeting patients actively searching for peptide therapy in specific zip codes.',
              },
              {
                name: 'Data Pipeline',
                desc: 'Proprietary database of every peptide clinic in the US. Custom scraping, enrichment, and verification workflows.',
              },
              {
                name: 'CRM Automation',
                desc: 'Leads are captured, qualified, and routed to the right clinic in real time. Follow-up sequences run automatically.',
              },
              {
                name: 'Website & Funnel',
                desc: 'Conversion-optimized pages for each market and service type. Built to capture patient intent and convert at scale.',
              },
            ].map((item) => (
              <ScrollReveal key={item.name}>
                <div className="sk">
                  <div className="sk-name">{item.name}</div>
                  <div className="sk-desc">{item.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <ScrollReveal>
          <div className="s-label">Process</div>
          <h2 className="s-head">
            How it works for <em>clinics</em>
          </h2>
        </ScrollReveal>
        <div className="timeline" style={{ maxWidth: 680 }}>
          <ScrollReveal>
            <div className="tl-item">
              <div className="tl-year">Step 01</div>
              <div className="tl-title">Book a Call</div>
              <div className="tl-desc">
                We get on a 30-minute call. I learn about your clinic, your location, the peptide therapies you offer,
                and the type of patients you want. No pitch — just information gathering.
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="tl-item">
              <div className="tl-year">Step 02</div>
              <div className="tl-title">Territory Lock-In</div>
              <div className="tl-desc">
                If it is a good fit, I lock in your exclusive zip code territory. No other clinic in your area will
                receive leads from PeptideLeads. Your territory is yours.
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="tl-item">
              <div className="tl-year">Step 03</div>
              <div className="tl-title">I Build the Infrastructure</div>
              <div className="tl-desc">
                I set up targeted ad campaigns, activate SEO pages for your market, and configure the CRM pipeline.
                All costs are on me. You do not pay anything at this stage.
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="tl-item">
              <div className="tl-year">Step 04</div>
              <div className="tl-title">Patients Start Coming In</div>
              <div className="tl-desc">
                Qualified patient leads are delivered directly to your clinic. You only pay $50 per lead that meets
                the qualification criteria. That is it — pure performance.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding section-dark">
        <ScrollReveal>
          <div className="s-label">Numbers</div>
          <h2 className="s-head">
            By the <em>numbers</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40 }}>
            <div>
              <div className="met-v" style={{ color: 'var(--gold2)' }}>$50</div>
              <div className="met-l">Per Qualified Patient</div>
            </div>
            <div>
              <div className="met-v" style={{ color: 'var(--gold2)' }}>$0</div>
              <div className="met-l">Zero Upfront Cost</div>
            </div>
            <div>
              <div className="met-v" style={{ color: 'var(--gold2)' }}>50</div>
              <div className="met-l">States Covered</div>
            </div>
            <div>
              <div className="met-v" style={{ color: 'var(--gold2)' }}>100%</div>
              <div className="met-l">Performance Based</div>
            </div>
            <div>
              <div className="met-v" style={{ color: 'var(--gold2)' }}>8,000+</div>
              <div className="met-l">SEO Pages Built</div>
            </div>
            <div>
              <div className="met-v" style={{ color: 'var(--gold2)' }}>17</div>
              <div className="met-l">Email Domains</div>
            </div>
            <div>
              <div className="met-v" style={{ color: 'var(--gold2)' }}>51</div>
              <div className="met-l">Active Inboxes</div>
            </div>
            <div>
              <div className="met-v" style={{ color: 'var(--gold2)' }}>Exclusive</div>
              <div className="met-l">Zip Code Territories</div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <ScrollReveal>
          <div className="s-label">Next Step</div>
          <h2 className="s-head">
            Ready to get <em>patients</em>?
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, maxWidth: 520, marginBottom: 40 }}>
            If you run a peptide therapy clinic and want qualified patients without retainers or ad spend, book a call.
            I will walk you through the model and check if your territory is available.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <a href="https://calendly.com/tamermsyv/30min" target="_blank" rel="noopener noreferrer" className="hero-cta">
              <span>Book a Call</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <Link href="/contact" className="hero-cta-outline">
              Contact Me
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <GoldBanner />
    </>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import PersonSchema from '@/components/PersonSchema';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import GoldBanner from '@/components/GoldBanner';
import { HighlightLight } from '@/components/HighlightText';

const BASE = 'https://tamerlanmusayev.com';

export const metadata: Metadata = {
  title: 'Press | Tamerlan Musayev',
  description:
    'Press and media resources for Tamerlan Musayev — founder of PeptideLeads, Azerbaijani-American entrepreneur based in Houston, Texas.',
  openGraph: {
    title: 'Press | Tamerlan Musayev',
    description:
      'Press and media resources for Tamerlan Musayev — founder of PeptideLeads.',
    url: `${BASE}/press`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press | Tamerlan Musayev',
    description:
      'Press and media resources for Tamerlan Musayev — founder of PeptideLeads.',
  },
  alternates: { canonical: `${BASE}/press` },
};

export default function PressPage() {
  return (
    <>
      <PersonSchema pagePath="/press" />

      <PageHero
        bgText="PRESS"
        label="Media & Press"
        title="In the *media*"
      />

      {/* Bio + Headshot */}
      <section className="section-padding">
        <ScrollReveal>
          <div className="s-label">Bio</div>
          <h2 className="s-head">
            About <em>Tamerlan</em>
          </h2>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'start' }}>
          <ScrollReveal>
            <div style={{ maxWidth: 600 }}>
              <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, marginBottom: 24 }}>
                Tamerlan Musayev is an Azerbaijani-American entrepreneur based in Houston, Texas. He is the founder
                of PeptideLeads, a patient generation agency built exclusively for peptide therapy clinics. PeptideLeads
                operates on a performance-only model — clinics pay per qualified patient lead with zero upfront cost,
                while Musayev covers all advertising spend and infrastructure. The company has built over 8,000
                programmatic SEO pages and maintains a proprietary database of peptide clinics across all 50 states.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, marginBottom: 32 }}>
                Before founding PeptideLeads, Musayev built a following of over 8,000 in the Web3 and NFT space,
                where he managed communities, ran collaboration campaigns, and generated six figures in revenue. He
                later trained in B2B lead generation — cold email infrastructure, data pipelines, and outbound
                automation — which became the technical foundation for PeptideLeads. He is fluent in English and
                Russian.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div
              style={{
                aspectRatio: '3/4',
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: 340,
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '2.4rem',
                    color: 'var(--muted)',
                    marginBottom: 8,
                  }}
                >
                  TM
                </div>
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}
                >
                  Headshot
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Featured.com */}
        <ScrollReveal>
          <div style={{ marginTop: 48 }}>
            <a
              href="https://featured.com/tamerlan-musayev"
              target="_blank"
              rel="noopener noreferrer"
              className="con-link"
              style={{ maxWidth: 400 }}
            >
              <span>Featured.com Profile</span>
              <span className="arr">&rarr;</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Quick Facts */}
      <section className="section-padding section-dark">
        <ScrollReveal>
          <div className="s-label">Quick Facts</div>
          <h2 className="s-head">
            At a <em>glance</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40 }}>
            <div className="info" style={{ borderColor: 'var(--gold2)' }}>
              <div className="info-l">Full Name</div>
              <div className="info-v" style={{ color: '#e8e4df' }}>Tamerlan Musayev</div>
            </div>
            <div className="info" style={{ borderColor: 'var(--gold2)' }}>
              <div className="info-l">Title</div>
              <div className="info-v" style={{ color: '#e8e4df' }}>Founder &amp; CEO</div>
            </div>
            <div className="info" style={{ borderColor: 'var(--gold2)' }}>
              <div className="info-l">Company</div>
              <div className="info-v" style={{ color: '#e8e4df' }}>PeptideLeads</div>
            </div>
            <div className="info" style={{ borderColor: 'var(--gold2)' }}>
              <div className="info-l">Location</div>
              <div className="info-v" style={{ color: '#e8e4df' }}>Houston, Texas</div>
            </div>
            <div className="info" style={{ borderColor: 'var(--gold2)' }}>
              <div className="info-l">Languages</div>
              <div className="info-v" style={{ color: '#e8e4df' }}>English, Russian</div>
            </div>
            <div className="info" style={{ borderColor: 'var(--gold2)' }}>
              <div className="info-l">Background</div>
              <div className="info-v" style={{ color: '#e8e4df' }}>Azerbaijani-American</div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Media Inquiries */}
      <section className="section-padding">
        <ScrollReveal>
          <div className="s-label">Media Inquiries</div>
          <h2 className="s-head">
            Get in <em>touch</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, maxWidth: 520, marginBottom: 32 }}>
            For media inquiries, interview requests, or press-related questions, email{' '}
            <a href="mailto:tamer@peptideleads.com" style={{ color: 'var(--gold)' }}>tamer@peptideleads.com</a>.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <Link href="/about" className="hero-cta">
              <span>Full Story</span>
            </Link>
            <Link href="/work" className="hero-cta-outline">
              See My Work
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <GoldBanner />
    </>
  );
}

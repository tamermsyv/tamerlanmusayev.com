import { Metadata } from 'next';
import Link from 'next/link';
import PersonSchema from '@/components/PersonSchema';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import GoldBanner from '@/components/GoldBanner';
import { HighlightLight } from '@/components/HighlightText';

const BASE = 'https://tamerlanmusayev.com';

export const metadata: Metadata = {
  title: 'Contact Tamerlan Musayev',
  description:
    'Get in touch with Tamerlan Musayev — founder of PeptideLeads based in Houston, TX. Book a call, send a message, or connect on LinkedIn.',
  openGraph: {
    title: 'Contact Tamerlan Musayev',
    description:
      'Get in touch with Tamerlan Musayev. Book a call, email, or connect on LinkedIn.',
    url: `${BASE}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Tamerlan Musayev',
    description:
      'Get in touch with Tamerlan Musayev — founder of PeptideLeads, Houston TX.',
  },
  alternates: { canonical: `${BASE}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <PersonSchema pagePath="/contact" />

      <PageHero
        bgText="CONTACT"
        label="Get In Touch"
        title="Let's *connect*"
      />

      {/* Connect + Info */}
      <section className="section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 80 }}>
          <div>
            <ScrollReveal>
              <div className="s-label">Reach Out</div>
              <h2 className="s-head">
                Links &amp; <em>channels</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, marginBottom: 32 }}>
                Whether you are a clinic owner looking for patients, someone who wants to collaborate, or just want to
                say hello — I am open to it. Pick whichever channel works best for you.
              </p>
              <a href="https://peptideleads.com" target="_blank" rel="noopener noreferrer" className="con-link">
                <span>PeptideLeads</span>
                <span className="arr">&rarr;</span>
              </a>
              <a href="https://linkedin.com/in/tamerlanmusayev" target="_blank" rel="noopener noreferrer" className="con-link">
                <span>LinkedIn</span>
                <span className="arr">&rarr;</span>
              </a>
              <a href="https://calendly.com/tamermsyv/30min" target="_blank" rel="noopener noreferrer" className="con-link">
                <span>Book a Call</span>
                <span className="arr">&rarr;</span>
              </a>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal>
              <div style={{ marginTop: 80 }}>
                <div className="info">
                  <div className="info-l">Email</div>
                  <div className="info-v">
                    <a href="mailto:tamer@peptideleads.com">tamer@peptideleads.com</a>
                  </div>
                </div>
                <div className="info">
                  <div className="info-l">Location</div>
                  <div className="info-v">Houston, Texas</div>
                </div>
                <div className="info">
                  <div className="info-l">Languages</div>
                  <div className="info-v">English, Russian</div>
                </div>
                <div className="info">
                  <div className="info-l">Background</div>
                  <div className="info-v">Azerbaijani-American</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <ScrollReveal>
          <div className="s-label">Message</div>
          <h2 className="s-head">
            Send a <em>message</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <div style={{ maxWidth: 600 }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--gold)',
                    marginBottom: 8,
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'var(--bg2)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    fontFamily: 'var(--sans)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--gold)',
                    marginBottom: 8,
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'var(--bg2)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    fontFamily: 'var(--sans)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--gold)',
                    marginBottom: 8,
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="What's on your mind..."
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'var(--bg2)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    fontFamily: 'var(--sans)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.3s',
                  }}
                />
              </div>
              <button type="submit" className="hero-cta" style={{ alignSelf: 'flex-start' }}>
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section className="section-padding section-dark">
        <ScrollReveal>
          <div className="s-label">FAQ</div>
          <h2 className="s-head">
            Common <em>questions</em>
          </h2>
        </ScrollReveal>
        <div style={{ maxWidth: 680 }}>
          <ScrollReveal>
            <div style={{ marginBottom: 48 }}>
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.4rem',
                  color: '#e8e4df',
                  marginBottom: 12,
                }}
              >
                What kind of clients do you work with?
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#8a8580', lineHeight: 1.85 }}>
                PeptideLeads works exclusively with peptide therapy clinics — med spas, functional medicine practices,
                and hormone clinics that offer peptide therapies. I do not take on clients outside this niche because
                specialization is what makes the system work.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ marginBottom: 48 }}>
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.4rem',
                  color: '#e8e4df',
                  marginBottom: 12,
                }}
              >
                How does the payment model work?
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#8a8580', lineHeight: 1.85 }}>
                You pay $50 per qualified patient lead. I cover all ad spend, infrastructure costs, and campaign
                management. There are no retainers, no setup fees, and no long-term contracts. If I do not deliver
                leads, you do not pay. It is that simple.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ marginBottom: 48 }}>
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.4rem',
                  color: '#e8e4df',
                  marginBottom: 12,
                }}
              >
                Can you work with clinics outside Texas?
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#8a8580', lineHeight: 1.85 }}>
                Yes. PeptideLeads operates across all 50 states. The infrastructure — SEO pages, ad campaigns, email
                outreach — is built to target any US zip code. I am based in Houston, but the system is location
                independent.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 20 }}>
              <Link href="/work/peptideleads" className="hero-cta">
                <span>How PeptideLeads Works</span>
              </Link>
              <Link href="/about" className="hero-cta-outline">
                About Me
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GoldBanner />
    </>
  );
}

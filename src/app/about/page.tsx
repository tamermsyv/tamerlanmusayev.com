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
  title: 'About Tamerlan Musayev | Founder & Builder',
  description:
    'The personal story of Tamerlan Musayev — Azerbaijani-American entrepreneur from Houston, TX. From Web3 to founding PeptideLeads, a patient generation agency.',
  openGraph: {
    title: 'About Tamerlan Musayev | Founder & Builder',
    description:
      'The personal story of Tamerlan Musayev — Azerbaijani-American entrepreneur building PeptideLeads from Houston, TX.',
    url: `${BASE}/about`,
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Tamerlan Musayev | Founder & Builder',
    description:
      'The personal story of Tamerlan Musayev — Azerbaijani-American entrepreneur from Houston, TX.',
  },
  alternates: { canonical: `${BASE}/about` },
};

export default function AboutPage() {
  return (
    <>
      <PersonSchema pagePath="/about" />

      <PageHero
        bgText="ABOUT"
        label="About Me"
        title="The story *behind* the work"
      />

      <Marquee />

      {/* Background */}
      <section className="section-padding">
        <ScrollReveal>
          <div className="s-label">Background</div>
          <h2 className="s-head">
            Where I <em>come from</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <div style={{ maxWidth: 680 }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, marginBottom: 24 }}>
              I was born in Azerbaijan and moved to the US when I was around four. I grew up in Katy, Texas — a suburb
              outside Houston. My family is <HighlightLight>Azerbaijani and Russian</HighlightLight>, and I grew up
              speaking both English and Russian at home. That dual-culture upbringing shaped a lot of how I think —
              practical, resourceful, and always looking at problems from more than one angle.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85 }}>
              Houston has been home for most of my life. It is where I went to school, where I started my first
              projects, and where I still operate today. Everything I have built started from here.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Journey */}
      <section className="section-padding section-dark">
        <ScrollReveal>
          <div className="s-label">Journey</div>
          <h2 className="s-head">
            How I <em>got here</em>
          </h2>
        </ScrollReveal>
        <div style={{ maxWidth: 680 }}>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: '#8a8580', lineHeight: 1.85, marginBottom: 24 }}>
              My first real exposure to business was during the Web3 and NFT era. I got in early, built an
              8,000-person following, managed communities, ran collaboration campaigns between projects, and served as
              an admin for alpha groups like Alpha Omega. I traded collections like Invisible Friends and generated
              six figures in revenue. It taught me how to sell, how to read markets, and how to move fast.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: '#8a8580', lineHeight: 1.85, marginBottom: 24 }}>
              When the hype cycle cooled off, I wanted something with real staying power. I transitioned into B2B lead
              generation — cold email systems, data scraping, deliverability optimization, outbound automation. I
              trained under an agency founder who had been doing this for years, and I absorbed everything I could
              about building infrastructure that generates pipeline at scale.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: '#8a8580', lineHeight: 1.85 }}>
              That foundation led me to start <HighlightGold>PeptideLeads</HighlightGold> — a patient generation
              agency for peptide therapy clinics. I saw an entire industry with terrible marketing and no one
              building a real solution. So I built one.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What drives me */}
      <section className="section-padding">
        <ScrollReveal>
          <div className="s-label">What Drives Me</div>
          <h2 className="s-head">
            Systems over <em>shortcuts</em>
          </h2>
        </ScrollReveal>
        <div style={{ maxWidth: 680 }}>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, marginBottom: 24 }}>
              I care about building things that work without me babysitting them. Cold email infrastructure that sends
              thousands of emails a day without deliverability issues. SEO systems that compound traffic month over
              month. CRM automations that route leads to clinics in real time. That is the kind of work I find
              satisfying — the part most people skip because it is not flashy.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, marginBottom: 24 }}>
              With <HighlightLight>PeptideLeads</HighlightLight>, I cover all the ad spend and infrastructure costs
              myself. Clinics only pay per qualified patient. That model forces me to be good at what I do — if my
              systems do not perform, I lose money. I like that alignment.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, marginBottom: 40 }}>
              If you want to see what that looks like in practice, check out the{' '}
              <Link href="/work/peptideleads" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
                PeptideLeads deep dive
              </Link>
              . Or read some of my thinking on the{' '}
              <Link href="/blog" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
                blog
              </Link>
              .
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <Link href="/work" className="hero-cta">
                <span>See My Work</span>
              </Link>
              <Link href="/contact" className="hero-cta-outline">
                Get In Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GoldBanner />
    </>
  );
}

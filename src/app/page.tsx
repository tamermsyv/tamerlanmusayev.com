'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [loaderDone, setLoaderDone] = useState(false);
  const [count, setCount] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Loader counter animation
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoaderDone(true);
        }, 400);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Hero word reveal after loader completes
  useEffect(() => {
    if (!loaderDone) return;
    const words = document.querySelectorAll('.hero-name .word');
    words.forEach((word, i) => {
      setTimeout(() => {
        word.classList.add('show');
      }, i * 120);
    });
  }, [loaderDone]);

  // Scroll reveal for .rv elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.rv');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loaderDone]);

  // Highlight animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const hls = document.querySelectorAll('.hl, .hlg');
    hls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loaderDone]);

  return (
    <>
      {/* Loader */}
      <div className={`loader ${loaderDone ? 'done' : ''}`}>
        <div className="loader-count">{count}</div>
        <div className="loader-bar">
          <div className="loader-bar-fill" style={{ width: `${count}%` }} />
        </div>
        <div className="loader-text">Loading Experience</div>
      </div>

      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">MUSAYEV</div>
        <div className="hero-content">
          <div className="hero-label">Founder &bull; Builder &bull; Houston, TX</div>
          <h1 className="hero-name">
            <span className="word">Building&nbsp;</span>
            <span className="word">systems</span>
            <br />
            <span className="word">that&nbsp;</span>
            <span className="word"><em>generate</em></span>
            <br />
            <span className="word">real&nbsp;</span>
            <span className="word">results.</span>
          </h1>
          <p className="hero-tagline">Azerbaijani-American. Fluent in English &amp; Russian.</p>
          <p className="hero-desc">
            I run PeptideLeads — a patient generation agency for peptide therapy clinics. I build the infrastructure, run campaigns, and deliver qualified patients at scale.
          </p>
          <div className="hero-cta-row">
            <a href="https://peptideleads.com" target="_blank" rel="noopener noreferrer" className="hero-cta">
              <span>See PeptideLeads</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <Link href="/contact" className="hero-cta-outline">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          {[...Array(2)].map((_, rep) => (
            <span key={rep} style={{ display: 'contents' }}>
              <span className="marquee-item">Founder of PeptideLeads <span className="m-dot" /></span>
              <span className="marquee-item"><em>Patient Generation</em> <span className="m-dot" /></span>
              <span className="marquee-item">Cold Email Infrastructure <span className="m-dot" /></span>
              <span className="marquee-item"><em>SEO at Scale</em> <span className="m-dot" /></span>
              <span className="marquee-item">Houston, Texas <span className="m-dot" /></span>
              <span className="marquee-item"><em>Azerbaijani-American</em> <span className="m-dot" /></span>
              <span className="marquee-item">Full-Stack Builder <span className="m-dot" /></span>
              <span className="marquee-item"><em>Performance Marketing</em> <span className="m-dot" /></span>
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="section-padding">
        <div className="rv">
          <div className="s-label">About</div>
          <h2 className="s-head">
            An <em>entrepreneur</em> building real
            <br />businesses from scratch.
          </h2>
        </div>
        <div className="rv" style={{ maxWidth: 680 }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, marginBottom: 24 }}>
            I&apos;m Tamerlan Musayev — an <span className="hl">Azerbaijani-American entrepreneur</span> based in Houston, Texas.
            I started in Web3 and NFTs, where I built a following and generated six figures before turning 18.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85, marginBottom: 24 }}>
            Now I run <span className="hlg">PeptideLeads</span>, a patient generation agency built exclusively for peptide therapy clinics.
            I handle the infrastructure, run the campaigns, and deliver <span className="hl">qualified patients at scale</span> — on a pure performance model.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--dim)', lineHeight: 1.85 }}>
            I&apos;m fluent in English and Russian. I believe in building systems that generate measurable results, not vanity metrics.
          </p>
        </div>
      </section>

      {/* Gold Banner */}
      <div className="gold-banner">
        <div className="gb-track">
          {[...Array(2)].map((_, rep) => (
            <span key={rep} style={{ display: 'contents' }}>
              <span className="gb-item">Founder <span>&mdash;</span></span>
              <span className="gb-item">Builder <span>&mdash;</span></span>
              <span className="gb-item">Strategist <span>&mdash;</span></span>
              <span className="gb-item">Operator <span>&mdash;</span></span>
              <span className="gb-item">Entrepreneur <span>&mdash;</span></span>
              <span className="gb-item">Developer <span>&mdash;</span></span>
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <section className="section-padding section-dark">
        <div className="rv">
          <div className="s-label">Experience</div>
          <h2 className="s-head">The path <em>so far</em></h2>
        </div>
        <div className="timeline">
          <div className="tl-item rv">
            <div className="tl-year">2026 — PRESENT</div>
            <div className="tl-title">Founder — PeptideLeads</div>
            <div className="tl-desc">
              Built a patient generation agency for peptide therapy clinics. Delivering exclusive, qualified patient leads at $50 each with zero upfront cost. Built 8,000+ programmatic SEO pages, cold email infrastructure across 17 domains and 51 inboxes, and a proprietary database of every peptide clinic in the US.
            </div>
          </div>
          <div className="tl-item rv">
            <div className="tl-year">2021 — 2025</div>
            <div className="tl-title">Web3 &amp; NFT Operations</div>
            <div className="tl-desc">
              Built an 8,000+ following across Web3 communities. Traded high-value NFT collections including Invisible Friends. Served as admin in the Alpha Omega community. Generated six figures in revenue before turning 18.
            </div>
          </div>
          <div className="tl-item rv">
            <div className="tl-year">2024 — 2025</div>
            <div className="tl-title">B2B Lead Generation</div>
            <div className="tl-desc">
              Developed expertise in cold email systems, lead scraping, data enrichment, and outbound automation. Built and managed infrastructure for high-volume outreach campaigns that consistently deliver results.
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="section-padding">
        <div className="rv">
          <div className="s-label">Work</div>
          <h2 className="s-head">Featured <em>project</em></h2>
        </div>
        <div className="project rv">
          <div className="project-tag">Live Project</div>
          <h3 className="project-t">PeptideLeads</h3>
          <p className="project-d">
            A patient generation agency built exclusively for peptide therapy clinics. We deliver exclusive, high-quality patient leads on a pure performance model — no retainers, no ad spend from the clinic, and exclusive zip code territories.
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
              <div className="met-v">50</div>
              <div className="met-l">States Covered</div>
            </div>
            <div>
              <div className="met-v">100%</div>
              <div className="met-l">Performance Based</div>
            </div>
          </div>
          <div style={{ marginTop: 60 }}>
            <a href="https://peptideleads.com" target="_blank" rel="noopener noreferrer" className="hero-cta">
              <span>Visit PeptideLeads</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding section-dark">
        <div className="rv">
          <div className="s-label">Skills</div>
          <h2 className="s-head">What I <em>bring</em></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          <div className="sk rv">
            <div className="sk-icon">&#9670;&#9670;&#9670;</div>
            <div className="sk-name">Cold Email Systems</div>
            <div className="sk-desc">
              Infrastructure setup across multiple domains and inboxes. Warmup, deliverability optimization, and high-volume outbound that lands in primary inboxes.
            </div>
          </div>
          <div className="sk rv">
            <div className="sk-icon">&#9670;&#9670;&#9670;</div>
            <div className="sk-name">SEO at Scale</div>
            <div className="sk-desc">
              Programmatic SEO with 8,000+ pages built. Technical SEO, keyword research, and content systems that drive organic traffic at scale.
            </div>
          </div>
          <div className="sk rv">
            <div className="sk-icon">&#9670;&#9670;&#9670;</div>
            <div className="sk-name">Full-Stack Development</div>
            <div className="sk-desc">
              Building production-grade web applications from scratch. Next.js, React, TypeScript, Node.js, databases, APIs, and deployment pipelines.
            </div>
          </div>
          <div className="sk rv">
            <div className="sk-icon">&#9670;&#9670;&#9670;</div>
            <div className="sk-name">Lead Scraping &amp; Data</div>
            <div className="sk-desc">
              Custom scraping pipelines, data enrichment workflows, and database building. Proprietary tools for finding and qualifying leads at volume.
            </div>
          </div>
          <div className="sk rv">
            <div className="sk-icon">&#9670;&#9670;&#9670;</div>
            <div className="sk-name">Automation &amp; CRM</div>
            <div className="sk-desc">
              End-to-end workflow automation. CRM setup, lead routing, follow-up sequences, and integrations that keep operations running without manual intervention.
            </div>
          </div>
          <div className="sk rv">
            <div className="sk-icon">&#9670;&#9670;&#9670;</div>
            <div className="sk-name">Sales &amp; Strategy</div>
            <div className="sk-desc">
              Business development, client acquisition, pricing strategy, and go-to-market planning. Turning opportunities into revenue-generating systems.
            </div>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 80 }}>
          <div>
            <div className="rv">
              <div className="s-label">Connect</div>
              <h2 className="s-head">Let&apos;s <em>talk</em></h2>
            </div>
            <div className="rv">
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
            </div>
          </div>
          <div>
            <div className="rv" style={{ marginTop: 80 }}>
              <div className="info">
                <div className="info-l">Email</div>
                <div className="info-v"><a href="mailto:tamer@peptideleads.com">tamer@peptideleads.com</a></div>
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
          </div>
        </div>
      </section>
    </>
  );
}

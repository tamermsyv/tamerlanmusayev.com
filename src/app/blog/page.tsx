'use client';

import { useState } from 'react';
import Link from 'next/link';
import PersonSchema from '@/components/PersonSchema';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import GoldBanner from '@/components/GoldBanner';
import { blogPosts } from '@/lib/blog-data';

const CATEGORIES = [
  'All',
  'Peptide Marketing',
  'Cold Email',
  'SEO',
  'Entrepreneurship',
  'Personal',
  'Comparisons',
];


export default function BlogPage() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === active);

  return (
    <>
      <PersonSchema pagePath="/blog" />

      <PageHero
        bgText="BLOG"
        label="Blog"
        title="Thoughts & *insights*"
      />

      {/* Category Filters */}
      <section className="section-padding" style={{ paddingBottom: 0 }}>
        <ScrollReveal>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              marginBottom: 56,
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '10px 24px',
                  border: '1px solid',
                  borderColor: active === cat ? 'var(--gold)' : 'var(--border)',
                  background: active === cat ? 'var(--gold)' : 'transparent',
                  color: active === cat ? '#fff' : 'var(--dim)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Blog Grid */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 24,
          }}
        >
          {filtered.map((post) => (
            <ScrollReveal key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-cat">{post.category}</div>
                <div className="blog-card-title">{post.title}</div>
                <div className="blog-card-excerpt">{post.excerpt || post.description}</div>
                <div
                  style={{
                    marginTop: 16,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    fontFamily: 'var(--mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    color: 'var(--muted)',
                  }}
                >
                  <span>Tamerlan Musayev</span>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gold)' }} />
                  <span>{post.category}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--muted)' }}>
              No posts in this category yet.
            </p>
          </div>
        )}

        <ScrollReveal>
          <div style={{ marginTop: 60, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <Link href="/about" className="hero-cta-outline">
              About Me
            </Link>
            <Link href="/work" className="hero-cta-outline">
              My Work
            </Link>
            <Link href="/contact" className="hero-cta-outline">
              Contact
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <GoldBanner />
    </>
  );
}

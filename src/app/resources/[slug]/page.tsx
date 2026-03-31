import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { resourcePages } from '@/lib/resource-data';
import { SITE_URL } from '@/lib/constants';
import PersonSchema from '@/components/PersonSchema';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import GoldBanner from '@/components/GoldBanner';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resourcePages.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = resourcePages.find((r) => r.slug === slug);
  if (!resource) return {};

  return {
    title: resource.title,
    description: resource.description,
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: `${SITE_URL}/resources/${resource.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: resource.title,
      description: resource.description,
    },
    alternates: { canonical: `${SITE_URL}/resources/${resource.slug}` },
  };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = resourcePages.find((r) => r.slug === slug);
  if (!resource) notFound();

  return (
    <>
      <PersonSchema pagePath={`/resources/${resource.slug}`} />

      <PageHero
        bgText="RESOURCES"
        label="Resources"
        title={resource.headline}
      />

      <section className="section-padding">
        <ScrollReveal>
          <div
            className="blog-content"
            style={{ maxWidth: 720, margin: '0 auto' }}
            dangerouslySetInnerHTML={{ __html: resource.content }}
          />
        </ScrollReveal>

        <ScrollReveal>
          <div
            style={{
              maxWidth: 720,
              margin: '60px auto 0',
              padding: '48px 40px',
              border: '1px solid var(--border)',
              borderRadius: 12,
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.8rem',
                color: 'var(--heading)',
                marginBottom: 16,
              }}
            >
              Need help implementing this?
            </h2>
            <p
              style={{
                color: 'var(--dim)',
                fontSize: '1rem',
                marginBottom: 28,
                maxWidth: 500,
                margin: '0 auto 28px',
              }}
            >
              I work with clinics and healthcare businesses to build marketing
              systems that generate real patients. Let&apos;s talk about your
              situation.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="hero-cta">
                Book a Call
              </Link>
              <Link href="/work/peptideleads" className="hero-cta-outline">
                See My Work
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <GoldBanner />
    </>
  );
}

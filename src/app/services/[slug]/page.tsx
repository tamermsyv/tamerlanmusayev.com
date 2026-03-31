import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicePages } from '@/lib/service-data';
import { SITE_URL } from '@/lib/constants';
import PersonSchema from '@/components/PersonSchema';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import GoldBanner from '@/components/GoldBanner';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${SITE_URL}/services/${service.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.description,
    },
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PersonSchema pagePath={`/services/${service.slug}`} />

      <PageHero
        bgText="SERVICES"
        label="Services"
        title={service.headline}
      />

      <section className="section-padding">
        <ScrollReveal>
          <div
            className="blog-content"
            style={{ maxWidth: 720, margin: '0 auto' }}
            dangerouslySetInnerHTML={{ __html: service.content }}
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
              Ready to get started?
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
              Book a free consultation to discuss how this service can work for
              your business.
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

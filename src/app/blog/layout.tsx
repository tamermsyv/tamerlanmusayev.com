import { Metadata } from 'next';

const BASE = 'https://tamerlanmusayev.com';

export const metadata: Metadata = {
  title: 'Blog | Tamerlan Musayev',
  description:
    'Thoughts and insights from Tamerlan Musayev on peptide marketing, cold email, SEO, entrepreneurship, and building systems that generate real results.',
  openGraph: {
    title: 'Blog | Tamerlan Musayev',
    description:
      'Articles by Tamerlan Musayev on entrepreneurship, cold email, SEO, and healthcare marketing.',
    url: `${BASE}/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Tamerlan Musayev',
    description:
      'Articles by Tamerlan Musayev on entrepreneurship and healthcare marketing.',
  },
  alternates: { canonical: `${BASE}/blog` },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

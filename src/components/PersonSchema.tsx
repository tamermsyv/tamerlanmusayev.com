'use client';

interface PersonSchemaProps {
  pagePath: string;
}

export default function PersonSchema({ pagePath }: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tamerlan Musayev',
    url: 'https://tamerlanmusayev.com',
    jobTitle: 'Founder of PeptideLeads',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Houston',
      addressRegion: 'Texas',
    },
    sameAs: [
      'https://linkedin.com/in/tamerlanmusayev',
      'https://peptideleads.com',
      'https://calendly.com/tamermsyv/30min',
      'https://featured.com/tamerlan-musayev',
    ],
    knowsLanguage: ['English', 'Russian'],
    nationality: [
      { '@type': 'Country', name: 'Azerbaijani' },
      { '@type': 'Country', name: 'American' },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

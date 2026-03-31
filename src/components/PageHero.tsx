'use client';

interface PageHeroProps {
  bgText: string;
  label: string;
  title: string;
  description?: string;
}

export default function PageHero({ bgText, label, title, description }: PageHeroProps) {
  const renderTitle = (text: string) => {
    const parts = text.split('*');
    return parts.map((part, i) =>
      i % 2 === 1 ? <em key={i}>{part}</em> : <span key={i}>{part}</span>
    );
  };

  return (
    <section className="page-hero">
      <div className="page-hero-bg">{bgText}</div>
      <p className="s-label">{label}</p>
      <h1 className="s-head">{renderTitle(title)}</h1>
      {description && <p className="page-hero-desc">{description}</p>}
    </section>
  );
}

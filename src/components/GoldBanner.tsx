'use client';

const items = [
  'Tamerlan Musayev',
  'Houston, Texas',
  'PeptideLeads',
  'Azerbaijani-American',
  'Founder',
  'English & Russian',
];

export default function GoldBanner() {
  const track = items.map((item, i) => (
    <span className="gb-item" key={i}>{item} &#10022; </span>
  ));

  return (
    <div className="gold-banner">
      <div className="gb-track">
        {track}
        {track}
      </div>
    </div>
  );
}

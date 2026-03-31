'use client';

const skills = [
  'Lead Generation',
  'Cold Email',
  'SEO Architecture',
  'Healthcare Marketing',
  'Full-Stack Dev',
  'Sales',
  'Automation',
  'Paid Ads',
];

export default function Marquee() {
  const items = skills.map((skill, i) => (
    <span className="marquee-item" key={i}>
      <span className="m-dot" /> {skill}
    </span>
  ));

  return (
    <div className="marquee">
      <div className="marquee-track">
        {items}
        {items}
      </div>
    </div>
  );
}

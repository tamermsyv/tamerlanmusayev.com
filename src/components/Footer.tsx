'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <p className="ft-text">&copy; 2026 Tamerlan Musayev &mdash; Houston, Texas</p>
      <button className="ft-top" onClick={scrollToTop} aria-label="Back to top">
        &uarr; Back to Top
      </button>
    </footer>
  );
}

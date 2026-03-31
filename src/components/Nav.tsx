'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <Link href="/" className="nav-logo" onClick={closeMenu}>
        Tamerlan <strong>Musayev</strong>
      </Link>

      <div className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <button
        className={`mobile-menu-btn${menuOpen ? ' active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/work" onClick={closeMenu}>Work</Link>
        <Link href="/blog" onClick={closeMenu}>Blog</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
}

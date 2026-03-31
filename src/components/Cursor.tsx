'use client';
import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    if (window.innerWidth <= 768) return;
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    if (!cursor || !ring) return;

    let mx = 0, my = 0, cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx - 6 + 'px';
      cursor.style.top = my - 6 + 'px';
    };

    document.addEventListener('mousemove', onMove);

    function animateRing() {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      if (ring) {
        ring.style.left = cx + 'px';
        ring.style.top = cy + 'px';
      }
      requestAnimationFrame(animateRing);
    }
    animateRing();

    const hovers = document.querySelectorAll('a, button, .sk, .con-link, .hero-cta, .hero-cta-outline');
    hovers.forEach(el => {
      el.addEventListener('mouseenter', () => ring?.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring?.classList.remove('hover'));
    });

    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
    </>
  );
}

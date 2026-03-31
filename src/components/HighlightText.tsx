'use client';
import { useEffect, useRef, ReactNode } from 'react';

function useHighlight(ref: React.RefObject<HTMLSpanElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('on');
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

export function HighlightLight({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  useHighlight(ref);
  return <span ref={ref} className="hl">{children}</span>;
}

export function HighlightGold({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  useHighlight(ref);
  return <span ref={ref} className="hlg">{children}</span>;
}

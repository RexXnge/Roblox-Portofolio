'use client';

import { useEffect } from 'react';

const NAV_OFFSET = 80;

export default function ClientScripts() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- Smooth anchor scrolling (delegated, sticky-nav offset) ----
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
      history.pushState(null, '', hash);
    };
    document.addEventListener('click', handleClick);

    // ---- Nav border on scroll ----
    const nav = document.getElementById('nav');
    const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}

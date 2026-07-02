'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1];

/**
 * Scroll-triggered reveal. Fades + rises into view once.
 *
 * SSR-safe: before mount it renders a plain element with a deterministic hidden
 * style (identical on server + first client render, so no hydration mismatch).
 * After mount, Motion takes over and animates on scroll into view.
 * Respects prefers-reduced-motion (static, fully visible once mounted).
 */
export default function Reveal({
  children,
  as = 'div',
  className,
  delay = 0,
  y = 28,
  style,
}) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const Plain = as;

  // Server + first client render: deterministic hidden (no reduce branch here,
  // so SSR and hydration always match regardless of user motion preference).
  if (!mounted) {
    return (
      <Plain
        className={className}
        style={{ opacity: 0, transform: `translateY(${y}px)`, ...style }}
      >
        {children}
      </Plain>
    );
  }

  if (reduce) {
    return (
      <Plain className={className} style={style}>
        {children}
      </Plain>
    );
  }

  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1];

function HeroContent() {
  return (
    <>
      <div>
        <h1>
          Roblox Developer <br />&amp; <span className="accent">Scripter</span>
        </h1>
        <p className="bio">
          Three years building high-quality Roblox experiences. I turn game
          design into clean, secure LuaU systems that scale to real players.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            View Projects
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-ghost">Hire me</a>
        </div>
      </div>

      <div className="hero-panel">
        <div className="label">developer.stats</div>
        <div className="stat-row">
          <div className="stat-num"><span className="accent">3</span>+</div>
          <div className="stat-desc">years scripting in Roblox Studio &amp; LuaU</div>
        </div>
        <div className="stat-row">
          <div className="stat-num">100%</div>
          <div className="stat-desc">server-authoritative, exploit-aware systems</div>
        </div>
        <div className="stat-row">
          <div className="stat-num">12+</div>
          <div className="stat-desc">shipped systems: data, economy, gameplay</div>
        </div>
      </div>
    </>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Server + first client render: plain hidden grid (deterministic, no mismatch).
  if (!mounted) {
    return (
      <header className="hero">
        <div className="wrap">
          <div className="hero-grid" style={{ opacity: 0 }}>
            <HeroContent />
          </div>
        </div>
      </header>
    );
  }

  if (reduce) {
    return (
      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <HeroContent />
          </div>
        </div>
      </header>
    );
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <header className="hero">
      <div className="wrap">
        <motion.div className="hero-grid" variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <h1>
              Roblox Developer <br />&amp; <span className="accent">Scripter</span>
            </h1>
            <p className="bio">
              Three years building high-quality Roblox experiences. I turn game
              design into clean, secure LuaU systems that scale to real players.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                View Projects
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#contact" className="btn btn-ghost">Hire me</a>
            </div>
          </motion.div>

          <motion.div className="hero-panel" variants={item}>
            <div className="label">developer.stats</div>
            <div className="stat-row">
              <div className="stat-num"><span className="accent">3</span>+</div>
              <div className="stat-desc">years scripting in Roblox Studio &amp; LuaU</div>
            </div>
            <div className="stat-row">
              <div className="stat-num">100%</div>
              <div className="stat-desc">server-authoritative, exploit-aware systems</div>
            </div>
            <div className="stat-row">
              <div className="stat-num">12+</div>
              <div className="stat-desc">shipped systems: data, economy, gameplay</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const projects = [
  {
    yt: 'axFsD3SD1T8',
    seed: 'roblox-obby-tycoon',
    alt: 'Tycoon game preview',
    title: 'Map Voting System',
    desc: 'A map voting system letting players choose the next map between rounds, with live vote tallies and a fair tie-break flow.',
    stack: ['LuaU', 'Round System', 'Voting', 'UI'],
  },
  {
    yt: 'ScMzIvxBSi4',
    seed: 'roblox-round-arena',
    alt: 'Round-based arena preview',
    title: 'Arena Rounds',
    desc: 'A round-based PvP framework with a map voting system, matchmaking states, live leaderboards, and a combat and progression loop tuned for fast sessions.',
    stack: ['LuaU', 'Round System', 'Voting', 'Combat'],
  },
  {
    yt: 'ScMzIvxBSi4',
    seed: 'roblox-trading-rpg',
    alt: 'Trading RPG preview',
    title: 'Questline RPG',
    desc: 'An RPG core with missions, daily rewards, and a secure player-to-player trading system. Server-authoritative to keep duping and exploits out.',
    stack: ['LuaU', 'Quests', 'Trading', 'Daily Rewards'],
  },
  {
    yt: 'ScMzIvxBSi4',
    seed: 'roblox-donation-hub',
    alt: 'Donation game preview',
    title: 'Donation Hub',
    desc: 'A social donation game with a secure Game Pass and DevProduct board, live donation leaderboards, and a custom notification and UI system.',
    stack: ['LuaU', 'Game Passes', 'UI Systems', 'Notifications'],
  },
];

function ProjectCard({ project, index }) {
  const [playing, setPlaying] = useState(false);

  return (
    <Reveal as="article" className="project" y={0} delay={index * 0.08}>
      <div className="media" onClick={() => setPlaying(true)}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${project.yt}?autoplay=1&rel=0`}
            title={`${project.title} demo`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${project.yt}/hqdefault.jpg`}
              alt={project.alt}
              loading="lazy"
            />
            <div className="play">
              <span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </>
        )}
      </div>
      <div className="body">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="stack">
          {project.stack.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 className="sec-title">Past projects</h2>
          <p className="sec-sub">A few systems and games I&apos;ve scripted. Click a preview to play the demo.</p>
        </Reveal>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard project={p} index={i} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

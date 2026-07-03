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
    yt: 'CTkGiPE6N5k',
    seed: 'roblox-sprint-system',
    alt: 'Sprint system preview',
    title: 'Advanced Sprint System',
    desc: 'A stamina-based sprint system with smooth FOV and camera tilt transitions, movement-state animations, and server-side stamina validation to stop speed exploits.',
    stack: ['LuaU', 'Movement', 'Camera', 'Anti-Exploit'],
  },
  {
    yt: 'R23wy7IZJLo',
    seed: 'roblox-place-system',
    alt: 'Place system preview',
    title: 'Place System',
    desc: 'A grid-based building/placement system. Press 1-3 to pick an item, preview follows the mouse snapped to a grid, R rotates it 45 degrees, and clicking places it with a smooth rise-from-the-ground animation. Placement is restricted to the baseplate only (no floating or stacking on other items), and the server validates distance, surface, and occupied grid cells so a client can’t exploit the remote to spam or place through walls.',
    stack: ['LuaU', 'RemoteEvent', 'Raycasting', 'TweenService'],
  },
  {
    yt: 'H6T7oIJhxXM',
    seed: 'roblox-weapon-recoil',
    alt: 'Weapon recoil preview',
    title: 'Weapon with Recoil System',
    desc: 'A gun with a spring-physics recoil system: each shot kicks the camera pitch/yaw which springs back to center, layered with procedural noise-based shake and an FOV punch that eases back to base. Recoil is driven by the player’s actual clicks client-side, so it stacks the faster you fire instead of resetting between shots, while the server stays authoritative over fire rate and damage.',
    stack: ['LuaU', 'Camera', 'RenderStepped', 'Spring Physics'],
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

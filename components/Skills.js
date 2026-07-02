import Reveal from './Reveal';

const groups = [
  {
    idx: '01',
    title: 'Core Scripting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
    tags: ['DataStores', 'Leaderstats', 'Save Systems', 'ProfileService', 'ProfileStore', 'Custom Frameworks'],
  },
  {
    idx: '02',
    title: 'Monetization',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5a2.5 2 0 0 1 2.5-1.5c1.4 0 2.5.8 2.5 1.8s-1 1.7-2.5 1.7-2.5.8-2.5 1.8.9 1.7 2.5 1.7a2.5 2 0 0 0 2.5-1.5" strokeLinecap="round" />
      </svg>
    ),
    tags: ['Donation Systems', 'Game Passes', 'DevProducts', 'Secure Purchases', 'Receipt Handling'],
  },
  {
    idx: '03',
    title: 'Gameplay Systems',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
        <circle cx="18" cy="18" r="2.5" />
      </svg>
    ),
    tags: ['Missions', 'Quests', 'Daily Rewards', 'Trading Systems', 'Notifications', 'UI Systems'],
  },
  {
    idx: '04',
    title: 'Core Mechanics',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" strokeLinejoin="round" />
      </svg>
    ),
    tags: ['Voting Systems', 'Round Systems', 'Combat Loops', 'Progression', 'Sprinting', 'Stamina'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 className="sec-title">What I build</h2>
          <p className="sec-sub">Four areas I ship end to end, from architecture to live tuning.</p>
        </Reveal>
        <div className="skills-grid">
          {groups.map((g, i) => (
            <Reveal className="skill-card" delay={i * 0.08} y={0} key={g.idx}>
              <div className="idx">{g.idx}</div>
              <h3>{g.icon}{g.title}</h3>
              <div className="tags">
                {g.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

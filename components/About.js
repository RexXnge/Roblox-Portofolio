import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <Reveal>
            <h2 className="sec-title">I build the systems that make games feel finished.</h2>
            <div className="about-body" style={{ marginTop: '28px' }}>
              <p>
                I&apos;m a Roblox developer focused on{' '}
                <strong>scripting and backend systems</strong>. Over three years
                I&apos;ve moved from tinkering in Studio to shipping the kind of
                infrastructure players never notice, because it just works: reliable
                saves, secure monetization, and gameplay loops that keep people coming
                back.
              </p>
              <p>
                My passion is the invisible engineering:{' '}
                <strong>
                  data that never corrupts, economies that can&apos;t be exploited, and
                  clean frameworks
                </strong>{' '}
                other developers can build on. I care about doing it properly, not just
                making it run.
              </p>
            </div>
          </Reveal>
          <Reveal as="ul" className="about-list" delay={0.1}>
            <li>
              <span className="k">01</span>
              <span className="v">
                <strong>LuaU specialist</strong>
                <span>Three years of production scripting, from prototypes to live games.</span>
              </span>
            </li>
            <li>
              <span className="k">02</span>
              <span className="v">
                <strong>Security-first</strong>
                <span>Server-side validation on everything that touches player data or money.</span>
              </span>
            </li>
            <li>
              <span className="k">03</span>
              <span className="v">
                <strong>Framework driven</strong>
                <span>Reusable, modular systems using ProfileService / ProfileStore and custom frameworks.</span>
              </span>
            </li>
            <li>
              <span className="k">04</span>
              <span className="v">
                <strong>Player-focused</strong>
                <span>Progression and reward loops designed around real retention, not guesswork.</span>
              </span>
            </li>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

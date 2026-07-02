import Reveal from './Reveal';

export default function Experience() {
  return (
    <section className="exp">
      <div className="wrap">
        <Reveal className="big">
          <span className="accent">3+</span> years<br />Roblox Studio developer
        </Reveal>
        <Reveal className="side" as="p" delay={0.1}>
          From first script to live game, I&apos;ve spent three years learning what
          actually holds up under real players, and building it that way from the start.
        </Reveal>
      </div>
    </section>
  );
}

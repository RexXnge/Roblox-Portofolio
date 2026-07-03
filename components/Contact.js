import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal>
          <h2 className="sec-title">Let&apos;s build something.</h2>
          <p className="contact-lead">
            Got a game that needs solid scripting? I&apos;m open for commissions and
            long-term work. Reach out and let&apos;s talk.
          </p>
          <a href="https://discord.com/users/1258492726597652542" target="_blank" rel="noopener" className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.24.5c1.7.4 2.9 1 4.14 1.86A16.7 16.7 0 0 0 4.7 5.36 12 12 0 0 1 8.83 3.5L8.6 3a19.8 19.8 0 0 0-4.9 1.4C1.3 8 .64 11.5.96 15a20 20 0 0 0 6 3l.5-1c-1-.35-1.87-.8-2.63-1.35l.6-.44a14.3 14.3 0 0 0 12.14 0l.6.44c-.76.55-1.64 1-2.63 1.35l.5 1a20 20 0 0 0 6-3c.4-4.2-.66-7.66-2.35-10.6ZM8.5 13.2c-.96 0-1.75-.88-1.75-1.95S7.53 9.3 8.5 9.3s1.76.88 1.75 1.95c0 1.07-.79 1.95-1.75 1.95Zm7 0c-.96 0-1.75-.88-1.75-1.95s.78-1.95 1.75-1.95 1.76.88 1.75 1.95c0 1.07-.78 1.95-1.75 1.95Z" />
            </svg>
            Message me on Discord
          </a>
          <div className="socials">
            <a className="social" href="https://www.roblox.com/users/1860239926/profile" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.5 3 3 18.5 18.5 21 21 5.5 5.5 3Zm7.9 10.7-3.3-.8.8-3.3 3.3.8-.8 3.3Z" />
              </svg>
              Roblox
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

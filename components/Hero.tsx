import { SITE_CONFIG } from "@/lib/site-data";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-layout">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            ISHACK S
          </div>

          <h1 className="hero-title">
            I TURN IDEAS
            <br />
            <span>INTO REALITY.</span>
          </h1>

          <p className="hero-description">
            I&apos;m a computer science student exploring AI, software
            engineering, and game development. I build projects, experiment with
            emerging technologies, and work toward creating interactive worlds
            of my own.
          </p>

          <p className="hero-interests">
            SOFTWARE ENGINEERING / AI &amp; ML / GAME DEVELOPMENT
          </p>

          <div className="hero-actions">
            <a href="#projects" id="hero-cta-projects" className="hero-project-link">
              EXPLORE PROJECTS <span aria-hidden="true">-&gt;</span>
            </a>
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              GITHUB <span aria-hidden="true">-&gt;</span>
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.74h-2.96v-4.6c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.68H9.2V9h2.84v1.29h.04c.4-.74 1.36-1.52 2.8-1.52 3 0 3.57 1.97 3.57 4.53v5.15Z" />
              </svg>
              LINKEDIN <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>

        <div className="hero-frame">
          <div className="hero-frame-grid" aria-hidden="true" />
          <div className="hero-beam" aria-hidden="true" />

          <header className="hero-frame-header">
            <span className="hero-system-name">ISHACK//OS</span>
            <span className="hero-build-status">BUILD MODE: ON</span>
          </header>

          <div className="hero-orbit-system" aria-hidden="true">
            <div className="hero-orbit-glow" />
            <svg
              className="hero-orbit-paths"
              viewBox="0 0 640 300"
              fill="none"
            >
              <ellipse
                cx="320"
                cy="150"
                rx="252"
                ry="72"
                className="hero-orbit hero-orbit-outer"
              />
              <ellipse
                cx="320"
                cy="150"
                rx="204"
                ry="61"
                className="hero-orbit hero-orbit-middle"
              />
              <ellipse
                cx="320"
                cy="150"
                rx="156"
                ry="50"
                className="hero-orbit hero-orbit-inner"
              />
            </svg>

            <span className="hero-orbit-marker hero-marker-one" />
            <span className="hero-orbit-marker hero-marker-two" />
            <span className="hero-orbit-marker hero-marker-three" />
            <span className="hero-cross hero-cross-one" />
            <span className="hero-cross hero-cross-two" />

            <div className="hero-core">
              <span>ISK</span>
              <small>ISHACK S</small>
            </div>
          </div>

          <div className="hero-caption hero-caption-right">
            <span>ISHACK S</span>
            <span>WORLD BUILDER</span>
          </div>

          <footer className="hero-frame-footer">
            <span>CREATIVE SYSTEMS</span>
            <span>BUILT BY ISHACK S</span>
          </footer>
        </div>
      </div>
    </section>
  );
}

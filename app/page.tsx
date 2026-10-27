import {
  achievements,
  archivedProjects,
  certifications,
  ctfShowcase,
  education,
  featuredProjects,
  identity,
  profile,
  technicalProfile,
} from "./site-data";

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span>{number}</span>
      <span className="label-line" aria-hidden="true" />
      {children}
    </p>
  );
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">-&gt;</span>;
}

function SocialIcon({ network }: { network: "github" | "linkedin" }) {
  if (network === "github") {
    return (
      <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.9 2.17 3.37 1.55.1-.73.4-1.23.7-1.52-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.95 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.53.23 2.67.11 2.95.72.78 1.16 1.78 1.16 3 0 4.27-2.61 5.21-5.1 5.49.4.34.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.53v16.94c0 .85.69 1.53 1.55 1.53h16.9c.86 0 1.55-.68 1.55-1.53V3.53c0-.85-.69-1.53-1.55-1.53ZM7.93 18.34H4.99V9.06h2.94v9.28ZM6.46 7.79a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4Zm11.88 10.55H15.4v-4.51c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.59H9.23V9.06h2.82v1.27h.04c.39-.73 1.35-1.5 2.78-1.5 2.97 0 3.47 1.95 3.47 4.49v5.02Z" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
  archived = false,
}: {
  project: (typeof featuredProjects)[number] | (typeof archivedProjects)[number];
  index: number;
  archived?: boolean;
}) {
  const art = project.visual;
  const repositoryUrl = project.repositoryUrl;
  const demoUrl = project.demoUrl;

  return (
    <article className={`project-card project-${art}${archived ? " archive-card" : ""}`}>
      <div className="project-art" aria-hidden="true">
        <span className="art-index">0{index + 1} / PROJECT FILE</span>
        <div className="art-mark">
          {art === "scholarflow" && <div className="scholar-art"><i /><i /><i /><b>SF</b></div>}
          {art === "logsmite" && <div className="log-art"><span>&gt;_</span><i /><i /><i /></div>}
          {art === "schel" && <div className="schel-art"><b>S</b><i /><i /><i /></div>}
          {archived && <div className="archive-artmark"><span>{project.code.split(" / ")[0]}</span><i /></div>}
        </div>
        <span className="art-coordinate">{project.code}</span>
      </div>
      <div className="project-info">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          {project.status && <span className="project-status">{project.status}</span>}
        </div>
        <p className="project-category">{project.category}</p>
        <p className="project-description">{project.description}</p>
        <p className="project-focus"><span>SHOWCASE DIRECTION /</span> {project.showcase}</p>
        {project.technologyTags.length > 0 && (
          <ul className="project-tags" aria-label="Verified technology tags">
            {project.technologyTags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        )}
        {(repositoryUrl || demoUrl) && (
          <div className="project-links">
            {repositoryUrl && <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">VIEW SOURCE <Arrow /></a>}
            {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer">LIVE DEMO <Arrow /></a>}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={`${identity.system} home`}>
          <span>ISK</span><span className="wordmark-slash">{"//"}</span>OS
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#archive">Archive</a>
          <a href="#stack">Skills</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="#contact">
          <span className="status-dot" aria-hidden="true" />
          <span>Initiate contact</span>
          <Arrow />
        </a>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <div className="boot-panel" aria-label="ISK OS terminal boot sequence">
            <div className="boot-heading">
              <span className="terminal-mark" aria-hidden="true">&gt;_</span>
              <span>{identity.system} / BOOT SEQUENCE 001</span>
              <a href="#main-content">SKIP INTRO <Arrow /></a>
            </div>
            <p><span className="terminal-prompt">root@isk:~$</span> initialize --portfolio</p>
            <p className="boot-output">Loading {identity.system}... <span>ready</span><span className="cursor" aria-hidden="true" /></p>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> {profile.eyebrow}</p>
              <h1 id="hero-title">I TURN IDEAS<br /><span>INTO REALITY.</span></h1>
              <p className="hero-intro">{profile.intro}</p>
              <p className="hero-supporting">{profile.supportingLine}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">EXPLORE PROJECTS <Arrow /></a>
                <a
                  className="button button-quiet social-button"
                  href={identity.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit ISHACK's GitHub profile (opens in a new tab)"
                >
                  <SocialIcon network="github" /> GITHUB <Arrow />
                </a>
                <a
                  className="button button-quiet social-button"
                  href={identity.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit ISHACK's LinkedIn profile (opens in a new tab)"
                >
                  <SocialIcon network="linkedin" /> LINKEDIN <Arrow />
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="visual-topline"><span>{identity.system}</span><span>BUILD MODE: ON</span></div>
              <div className="visual-grid">
                <div className="orbit orbit-outer" />
                <div className="orbit orbit-inner" />
                <div className="orbit-core"><span>ISK</span><small>ISHACK S / SYS_01</small></div>
                <span className="orbit-node node-one" />
                <span className="orbit-node node-two" />
                <span className="orbit-node node-three" />
                <span className="crosshair crosshair-one">+</span>
                <span className="crosshair crosshair-two">+</span>
                <span className="visual-coordinate">ISHACK S<br />WORLD BUILDER</span>
              </div>
              <div className="visual-footer"><span>CREATIVE SYSTEMS</span><span>BUILT BY ISK</span></div>
            </div>
          </div>
          <div className="hero-bottomline">
            <span>ISHACK S / SOFTWARE &amp; GAME DEVELOPMENT</span>
            <span>SCROLL TO EXPLORE <span className="scroll-tick" aria-hidden="true">↓</span></span>
            <span>{identity.system}</span>
          </div>
        </section>

        <section className="work-section section-shell" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <SectionLabel number="01">FEATURED PROJECTS</SectionLabel>
              <h2 id="work-title">Built from <span>curiosity.</span></h2>
            </div>
            <p className="section-aside">ISHACK S / ISK<br />Selected from the project archive.</p>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
          <p className="placeholder-note"><span aria-hidden="true">*</span> Showcase directions describe supplied project briefs, not verified completed features. Technologies and implementation details appear only when confirmed.</p>
        </section>

        <section className="archive-section section-shell" id="archive" aria-labelledby="archive-title">
          <div className="archive-console">
            <div className="archive-console-top">
              <div>
                <SectionLabel number="01.B">ISK&apos;S PROJECT ARCHIVE</SectionLabel>
                <h2 id="archive-title">More worlds<br /><span>in the system.</span></h2>
              </div>
              <div className="archive-readout">
                <span>DATABASE / PROJECTS</span>
                <strong>04 ENTRIES</strong>
                <span>ROOT: {identity.system}</span>
              </div>
            </div>
            <div className="archive-grid">
              {archivedProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index + 3} archived />
              ))}
            </div>
            <p className="archive-console-bottom"><span>NO LINKS OR TECH STACKS ADDED WITHOUT VERIFICATION</span><span>END OF INDEX_</span></p>
          </div>
        </section>

        <section className="ctf-section section-shell" aria-labelledby="ctf-title">
          <div className="ctf-panel">
            <div className="ctf-topline">
              <p className="section-label"><span>01.C</span><span className="label-line" aria-hidden="true" />{ctfShowcase.eyebrow}</p>
              <span className="ctf-signal"><span className="status-dot" aria-hidden="true" /> CHALLENGE ONLINE</span>
            </div>
            <div className="ctf-content">
              <div className="ctf-copy">
                <p className="ctf-project-id">CTF / FIELD CHALLENGE / ISK</p>
                <h2 id="ctf-title">{ctfShowcase.name}</h2>
                <p className="ctf-category">{ctfShowcase.category}</p>
                <p className="ctf-description">{ctfShowcase.description}</p>
                <div className="ctf-actions">
                  <a
                    className="button button-primary ctf-enter"
                    href={ctfShowcase.challengeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Enter The Final Stand live challenge in a new tab"
                  >
                    ENTER THE CHALLENGE <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    className="button button-quiet ctf-source"
                    href={ctfShowcase.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Inspect The Final Stand source code in a new tab"
                  >
                    INSPECT SOURCE CODE <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
              <div className="ctf-terminal" aria-label="Challenge details">
                <div className="ctf-terminal-header"><span>ISK//OS / CTF CONSOLE</span><span>SECURE LINK</span></div>
                <div className="ctf-console-art" aria-hidden="true">
                  <span className="console-cross console-cross-one">+</span>
                  <span className="console-cross console-cross-two">+</span>
                  <div className="console-target"><span>FLAG</span><i /></div>
                </div>
                <div className="ctf-terminal-lines">
                  <p><span>&gt;</span> MISSION TYPE: CTF</p>
                  <p><span>&gt;</span> OBJECTIVE: FIND THE FLAG</p>
                </div>
              </div>
            </div>
            <div className="ctf-bottomline"><span>OFF THE MAIN QUEST</span><span>INVESTIGATE / DECODE / DISCOVER_</span></div>
          </div>
        </section>

        <section className="stack-section section-shell" id="stack" aria-labelledby="stack-title">
          <div className="section-heading">
            <div>
              <SectionLabel number="02">CAPABILITIES &amp; PROOF</SectionLabel>
              <h2 id="stack-title">Curious by nature.<br /><span>Evidence over hype.</span></h2>
            </div>
            <p className="section-aside">Selected skills, education, and achievements.</p>
          </div>
          <div className="stack-grid">
            <div className="stack-card">
              <p className="card-kicker"><span>01</span> / TECHNICAL PROFILE</p>
              <h3>Areas of<br />exploration</h3>
              <ul className="track-list">
                {technicalProfile.map((track) => (
                  <li key={track.code}>
                    <span className="track-code">{track.code}</span>
                    <span className="track-content"><strong>{track.name}</strong><small>{track.details}</small></span>
                  </li>
                ))}
              </ul>
              <div className="education-detail">
                <span className="track-code">EDU</span>
                <span><strong>{education.institution}</strong><small>{education.degree} · CGPA: {education.cgpa}</small></span>
              </div>
              <div className="stack-terminal"><span>ishack.profile / verified</span><span className="cursor" aria-hidden="true" /></div>
            </div>
            <div className="stack-card achievement-card">
              <p className="card-kicker"><span>02</span> / SELECTED HACKATHON ACHIEVEMENTS</p>
              <h3>Show the work.<br />Then the win.</h3>
              <ul className="achievement-list">
                {achievements.map((achievement) => (
                  <li key={`${achievement.result}-${achievement.event}`}>
                    <strong>{achievement.result}</strong>
                    <span> — {achievement.event}</span>
                  </li>
                ))}
              </ul>
              <div className="achievement-stamp" aria-hidden="true">VERIFIED<br />ONLY</div>
            </div>
            <div className="stack-card certifications-card">
              <p className="card-kicker"><span>03</span> / CERTIFICATIONS &amp; COURSES</p>
              <h3>Additional learning.</h3>
              <ul className="certification-list">
                {certifications.map((certification) => <li key={certification}>{certification}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section section-shell" id="about" aria-labelledby="about-title">
          <div className="about-label">
            <SectionLabel number="03">ABOUT THE DEVELOPER</SectionLabel>
            <div className="about-identifier">
              <span className="identifier-icon">I<span>{"//"}</span></span>
              <div><span>PROFESSIONAL IDENTITY</span><strong>{identity.name}</strong></div>
            </div>
          </div>
          <div className="about-copy">
            <p className="about-alias">SIGNATURE ALIAS / {identity.alias}</p>
            <h2 id="about-title">Curiosity first.<br /><span>Build with intent.</span></h2>
            <p>{profile.about}</p>
            <a href="#contact" className="text-link">Continue the conversation <Arrow /></a>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
          <div className="contact-frame">
            <div className="contact-topline"><span>04 / OPEN CHANNEL</span><span><span className="status-dot" aria-hidden="true" /> SIGNAL READY</span></div>
            <div className="contact-main">
              <div>
                <p className="eyebrow">{identity.name} / {identity.alias}</p>
                <h2 id="contact-title">Let&apos;s build<br /><span>something real.</span></h2>
              </div>
              <div className="contact-info">
                <p>Have a project, a question, or a world that needs building? Reach out through a verified contact channel.</p>
                {identity.contactUrl ? (
                  <a className="contact-placeholder" href={identity.contactUrl}>ishackgamer8@gmail.com <Arrow /></a>
                ) : (
                  <p className="contact-placeholder">[Add a verified email address or contact link]</p>
                )}
                <a href="#top" className="button button-primary">Back to top <Arrow /></a>
              </div>
            </div>
            <div className="contact-bottomline"><span>NO SIGNAL LOST IN TRANSLATION</span><span>END TRANSMISSION_</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="wordmark" href="#top" aria-label={`${identity.system}, back to top`}>
          <span>ISK</span><span className="wordmark-slash">{"//"}</span>OS
        </a>
        <p>BUILT BY ISK. <span>IDENTITY: {identity.name}</span></p>
        <div className="footer-socials" aria-label="Social profiles">
          {identity.githubUrl ? (
            <a href={identity.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit ISHACK's GitHub profile (opens in a new tab)"><SocialIcon network="github" /> GITHUB <small>OPEN PROFILE</small></a>
          ) : (
            <span>GITHUB <small>[ADD PROFILE URL]</small></span>
          )}
          {identity.linkedInUrl ? (
            <a href={identity.linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit ISHACK's LinkedIn profile (opens in a new tab)"><SocialIcon network="linkedin" /> LINKEDIN <small>OPEN PROFILE</small></a>
          ) : (
            <span>LINKEDIN <small>[ADD PROFILE URL]</small></span>
          )}
        </div>
        <span className="copyright">{identity.system}</span>
      </footer>
    </>
  );
}

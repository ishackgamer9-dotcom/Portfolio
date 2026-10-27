"use client";

import { SITE_CONFIG } from "@/lib/site-data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        background: "var(--bg-panel)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="contact-grid"
        >
          {/* Left: heading + intro */}
          <div>
            <div className="section-id" style={{ marginBottom: "1.5rem" }}>
              05 / CONTACT
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              LET&apos;S BUILD
              <br />
              <span style={{ color: "var(--accent-green)" }}>
                SOMETHING REAL.
              </span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                maxWidth: "420px",
              }}
            >
              Have a project, an opportunity, or an interesting technical
              problem? I&apos;d be glad to connect.
            </p>
          </div>

          {/* Right: contact actions */}
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {/* Email */}
              <ContactRow
                href={`mailto:${SITE_CONFIG.email}`}
                label="Send an Email"
                sublabel={SITE_CONFIG.email}
                icon={<EmailIcon />}
                isExternal={false}
              />

              {/* GitHub */}
              <ContactRow
                href={SITE_CONFIG.github}
                label="GitHub Profile"
                sublabel="github.com/ISHACK-S"
                icon={<GitHubIcon />}
                isExternal
              />

              {/* LinkedIn */}
              <ContactRow
                href={SITE_CONFIG.linkedin}
                label="LinkedIn"
                sublabel="in/ishack-s-45b423316"
                icon={<LinkedInIcon />}
                isExternal
              />

              {/* CV download */}
              {SITE_CONFIG.cvPath && (
                <ContactRow
                  href={SITE_CONFIG.cvPath}
                  label="Download CV"
                  sublabel="ISHACK-S-CV.pdf"
                  icon={<DownloadIcon />}
                  download="ISHACK-S-CV.pdf"
                  isExternal={false}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

function ContactRow({
  href,
  label,
  sublabel,
  icon,
  isExternal,
  download,
}: {
  href: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  isExternal: boolean;
  download?: string;
}) {
  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...(download ? { download } : {})}
      aria-label={label}
      className="contact-row"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem 1.25rem",
        background: "var(--bg-panel-2)",
        border: "1px solid var(--border-color)",
        textDecoration: "none",
        transition: "border-color 0.2s ease, background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
        color: "inherit",
      }}
    >
      <div
        className="contact-icon"
        style={{
          width: "40px",
          height: "40px",
          background: "color-mix(in srgb, var(--accent-cyan) 9%, transparent)",
          border: "1px solid color-mix(in srgb, var(--accent-cyan) 24%, transparent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--accent-cyan)",
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div style={{ flexGrow: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            marginBottom: "0.15rem",
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.03em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {sublabel}
        </p>
      </div>
      <div style={{ color: "var(--text-secondary)", flexShrink: 0 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>
    </a>
  );
}

function EmailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 15V3M6 9l6 6 6-6M3 21h18" />
    </svg>
  );
}

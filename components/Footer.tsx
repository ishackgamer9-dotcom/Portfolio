"use client";

import { SITE_CONFIG } from "@/lib/site-data";

const currentYear = new Date().getFullYear();

const FOOTER_LINKS = [
  { label: "GitHub", href: SITE_CONFIG.github, external: true },
  { label: "LinkedIn", href: SITE_CONFIG.linkedin, external: true },
  {
    label: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        padding: "2rem 0",
        background: "var(--bg-main)",
      }}
      role="contentinfo"
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Identity */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            className="status-dot"
            style={{ width: "5px", height: "5px" }}
            aria-hidden="true"
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "var(--text-secondary)",
              textTransform: "uppercase",
            }}
          >
            ISHACK S
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--border-bright)",
              marginLeft: "0.5rem",
            }}
          >
            © {currentYear}
          </span>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation">
          <ul
            style={{
              display: "flex",
              gap: "1.5rem",
              listStyle: "none",
              alignItems: "center",
            }}
          >
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent-green)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
            {SITE_CONFIG.cvPath && (
              <li>
                <a
                  href={SITE_CONFIG.cvPath}
                  download="ISHACK-S-CV.pdf"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent-green)",
                    textDecoration: "none",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  aria-label="Download CV PDF"
                >
                  CV ↓
                </a>
              </li>
            )}
          </ul>
        </nav>

        {/* Build info */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            color: "var(--border-bright)",
            letterSpacing: "0.05em",
          }}
          aria-hidden="true"
        >
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}

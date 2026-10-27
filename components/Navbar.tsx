"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/site-data";

const NAV_LINKS = [
  { label: "Profile", href: "#about", id: "01" },
  { label: "Projects", href: "#projects", id: "02" },
  { label: "Skills", href: "#skills", id: "03" },
  { label: "Achievements", href: "#achievements", id: "04" },
  { label: "Contact", href: "#contact", id: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="navbar"
      style={{
        borderBottomColor: scrolled
          ? "rgba(41,52,45,0.8)"
          : "rgba(41,52,45,0.4)",
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          aria-label="ISHACK S — Back to top"
          style={{ textDecoration: "none" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span
              className="status-dot"
              style={{ flexShrink: 0 }}
              aria-hidden="true"
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "var(--text-primary)",
                textTransform: "uppercase",
              }}
            >
              ISHACK S
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            listStyle: "none",
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.4rem 0.75rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                  borderRadius: "2px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <span
                  style={{ color: "var(--accent-green)", fontSize: "0.6rem" }}
                  aria-hidden="true"
                >
                  {link.id}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CV download button (desktop) */}
        {SITE_CONFIG.cvPath && (
          <a
            href={SITE_CONFIG.cvPath}
            download="ISHACK-S-CV.pdf"
            className="btn-secondary hidden-mobile"
            style={{ padding: "0.5rem 1rem", fontSize: "0.65rem" }}
            aria-label="Download CV PDF"
          >
            CV ↓
          </a>
        )}

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            background: "none",
            border: "1px solid var(--border-color)",
            color: "var(--text-primary)",
            padding: "0.5rem",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "18px",
              height: "1.5px",
              background: "currentColor",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              transform: menuOpen ? "rotate(45deg) translateY(5.5px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "18px",
              height: "1.5px",
              background: "currentColor",
              transition: "opacity 0.2s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "18px",
              height: "1.5px",
              background: "currentColor",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              transform: menuOpen ? "rotate(-45deg) translateY(-5.5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--bg-panel)",
            borderTop: "1px solid var(--border-color)",
            padding: "1rem 2rem 1.5rem",
          }}
          className="show-mobile"
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem 0",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    borderBottom: "1px solid var(--border-color)",
                  }}
                >
                  <span style={{ color: "var(--accent-green)" }}>{link.id}</span>
                  {link.label}
                </a>
              </li>
            ))}
            {SITE_CONFIG.cvPath && (
              <li style={{ marginTop: "0.75rem" }}>
                <a
                  href={SITE_CONFIG.cvPath}
                  download="ISHACK-S-CV.pdf"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Download CV
                </a>
              </li>
            )}
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

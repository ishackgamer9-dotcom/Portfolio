"use client";

import { SKILLS } from "@/lib/site-data";
import type { ReactElement } from "react";

const ICONS: Record<string, ReactElement> = {
  code: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  globe: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  database: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  brain: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96-.46 2.5 2.5 0 01-1.07-4.71 3 3 0 11.99-5.78A2.5 2.5 0 019.5 2z" />
      <path d="M14.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 004.96-.46 2.5 2.5 0 001.07-4.71 3 3 0 10-.99-5.78A2.5 2.5 0 0014.5 2z" />
    </svg>
  ),
  tool: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      style={{
        background: "var(--bg-panel)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div className="section-id" style={{ marginBottom: "1rem" }}>
            03 / CAPABILITIES
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "var(--text-primary)",
              textTransform: "uppercase",
            }}
          >
            TECHNICAL
            <br />
            <span style={{ color: "var(--accent-green)" }}>SKILLS</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {SKILLS.map((skill) => (
            <SkillCategory key={skill.category} skill={skill} />
          ))}
        </div>

        {/* Disclaimer note */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-secondary)",
            marginTop: "2rem",
            opacity: 0.7,
            letterSpacing: "0.03em",
          }}
        >
          Skills reflect areas of active exploration and hands-on project experience.
        </p>
      </div>
    </section>
  );
}

type Skill = {
  category: string;
  icon: string;
  items: string[];
};

function SkillCategory({ skill }: { skill: Skill }) {
  return (
    <div
      className="panel-secondary"
      style={{
        padding: "1.5rem",
        transition: "border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(50,215,255,0.35)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)";
      }}
    >
      {/* Category header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.25rem",
        }}
      >
        <div className="skill-icon">
          {ICONS[skill.icon] || ICONS.code}
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
          }}
        >
          {skill.category}
        </span>
      </div>

      {/* Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {skill.items.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "4px",
                background: "var(--accent-green)",
                borderRadius: "50%",
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span
              style={{
                fontSize: "0.875rem",
                color: "var(--text-primary)",
                fontWeight: 400,
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

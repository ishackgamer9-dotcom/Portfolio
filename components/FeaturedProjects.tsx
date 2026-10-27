import type { CSSProperties } from "react";
import { FEATURED_PROJECTS } from "@/lib/site-data";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{
        background: "var(--bg-panel)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div className="container">
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div className="section-id" style={{ marginBottom: "1rem" }}>
              02 / PROJECTS
            </div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "var(--text-primary)",
                textTransform: "uppercase",
              }}
            >
              FEATURED
              <br />
              <span className="gradient-text">BUILDS</span>
            </h2>
          </div>

          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              maxWidth: "360px",
              lineHeight: 1.7,
            }}
          >
            A selection of projects I&apos;ve built to explore ideas, solve
            problems, and learn by doing.
          </p>
        </div>

        {/* Project cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {FEATURED_PROJECTS.map((project, index) => (
            <FeaturedCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

type FeaturedProject = {
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  repoUrl: string | null;
  demoUrl: string | null;
  accent: string;
};

function FeaturedCard({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <article
      className="project-card"
      data-project={project.number}
      style={{
        "--project-accent": project.accent,
        padding: "2.5rem",
        display: "grid",
        gridTemplateColumns: "1fr 1.2fr",
        gap: "3rem",
        alignItems: "center",
      } as CSSProperties}
    >
      {/* Left: meta + description */}
      <div style={{ order: isEven ? 0 : 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "3rem",
              fontWeight: 700,
              color: "var(--project-accent, var(--accent-green))",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              userSelect: "none",
            }}
            aria-hidden="true"
          >
            {project.number}
          </span>
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                color: "var(--text-secondary)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.25rem",
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        <h3
          style={{
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "var(--text-primary)",
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.75,
            color: "var(--text-secondary)",
            marginBottom: "1.5rem",
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginBottom: "1.75rem",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="tag-chip"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label={`View ${project.name} on GitHub`}
            >
              VIEW REPO
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label={`View ${project.name} live demo`}
            >
              LIVE DEMO
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Right: visual panel */}
      <div style={{ order: isEven ? 1 : 0 }}>
        <ProjectVisualPanel project={project} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          article.project-card {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          article.project-card > div {
            order: 0 !important;
          }
        }
      `}</style>
    </article>
  );
}

function ProjectVisualPanel({ project }: { project: FeaturedProject }) {
  return (
    <div
      className="project-visual-panel"
      data-project={project.number}
      style={{
        "--project-accent": project.accent,
        background: "var(--bg-panel-2)",
        border: "1px solid var(--border-color)",
        padding: "1.75rem",
        position: "relative",
        overflow: "hidden",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      } as CSSProperties}
    >
      {/* Terminal header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          paddingBottom: "0.75rem",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        {["#FF5F57", "#FFBD2E", "#28C840"].map((color) => (
          <div
            key={color}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: color,
              opacity: 0.6,
            }}
          />
        ))}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-secondary)",
            marginLeft: "0.5rem",
          }}
        >
          {project.name.toLowerCase().replace(/ /g, "-")}.md
        </span>
      </div>

      {/* Simulated content */}
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
        <p style={{ color: "var(--project-accent, var(--accent-green))", marginBottom: "0.5rem" }}>
          # {project.name}
        </p>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          {project.category}
        </p>
        <div style={{ marginTop: "0.75rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                padding: "0.1rem 0.4rem",
                background: "color-mix(in srgb, var(--project-accent, var(--accent-green)) 8%, transparent)",
                border: "1px solid color-mix(in srgb, var(--project-accent, var(--accent-green)) 24%, transparent)",
                color: "var(--project-accent, var(--accent-green))",
                fontSize: "0.65rem",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative corner accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "60px",
          height: "60px",
          borderTop: `1px solid ${project.accent}30`,
          borderLeft: `1px solid ${project.accent}30`,
          top: "auto",
          left: "auto",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          borderBottom: `1px solid ${project.accent}20`,
          borderRight: `1px solid ${project.accent}20`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

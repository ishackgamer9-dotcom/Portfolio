import { ARCHIVE_PROJECTS } from "@/lib/site-data";

type ArchiveProject = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  repoUrl: string | null;
  demoUrl: string | null;
  status: string;
  isCTF?: boolean;
};

const STATUS_LABELS: Record<string, string> = {
  concept: "Concept",
  prototype: "Prototype",
  published: "Published",
};

export default function ProjectArchive() {
  return (
    <section
      id="archive"
      className="section-padding"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      <div className="container">
        {/* Section header */}
        <div style={{ marginBottom: "3rem" }}>
          <div className="section-id" style={{ marginBottom: "1rem" }}>
            02b / ADDITIONAL BUILDS
          </div>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "var(--text-primary)",
              textTransform: "uppercase",
            }}
          >
            MORE EXPERIMENTS &{" "}
            <span className="gradient-text">BUILDS</span>
          </h2>
        </div>

        {/* Grid of archive cards */}
        <div
          className="archive-project-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "1px",
            background: "var(--border-color)",
            border: "1px solid var(--border-color)",
          }}
        >
          {ARCHIVE_PROJECTS.map((project, index) => (
            <ArchiveCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchiveCard({
  project,
  index,
}: {
  project: ArchiveProject;
  index: number;
}) {
  return (
    <article
      className="archive-project-card"
      data-project-index={index + 1}
      data-status={project.status}
      style={{
        background: "var(--bg-panel)",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* CTF special indicator */}
      {project.isCTF && (
        <div
          className="archive-ctf-accent"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, var(--accent-violet), var(--accent-green))",
          }}
          aria-hidden="true"
        />
      )}

      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "0.5rem",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              color: "var(--project-accent, var(--text-secondary))",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "0.35rem",
            }}
          >
            {project.category}
          </span>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              lineHeight: 1.3,
            }}
          >
            {project.name}
          </h3>
        </div>

        {/* Status badge */}
        <span
          className="archive-status"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "0.15rem 0.5rem",
            flexShrink: 0,
          }}
        >
          {STATUS_LABELS[project.status] ?? project.status}
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "0.875rem",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
          flexGrow: 1,
        }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={project.isCTF ? "tag-chip tag-chip-violet" : "tag-chip"}
            style={{ fontSize: "0.6rem" }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {project.isCTF ? (
          <>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "0.65rem", padding: "0.5rem 0.9rem" }}
                aria-label={`Enter ${project.name} challenge`}
              >
                ENTER CHALLENGE
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label={`View ${project.name} source code`}
              >
                SOURCE
              </a>
            )}
          </>
        ) : (
          <>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label={`View ${project.name} on GitHub`}
              >
                REPO
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ borderColor: "color-mix(in srgb, var(--project-accent) 32%, transparent)", color: "var(--project-accent)" }}
                aria-label={`View ${project.name} live demo`}
              >
                LIVE DEMO
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            )}
          </>
        )}
      </div>
    </article>
  );
}

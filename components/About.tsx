"use client";

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ borderTop: "1px solid var(--border-color)" }}>
      <div className="container">
        {/* Section identifier */}
        <div className="section-id" style={{ marginBottom: "3rem" }}>
          01 / PROFILE
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left — Heading */}
          <div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "var(--text-primary)",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              CURIOUS BY NATURE.{" "}
              <span style={{ color: "var(--accent-green)" }}>
                ENGINEERED THROUGH PRACTICE.
              </span>
            </h2>

            {/* Education card */}
            <div
              className="panel"
              style={{
                padding: "1.5rem",
                marginTop: "2rem",
              }}
            >
              <div
                className="section-id"
                style={{ marginBottom: "1rem", fontSize: "0.6rem" }}
              >
                EDUCATION
              </div>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  marginBottom: "0.25rem",
                }}
              >
                B.E. Computer Science and Engineering
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  marginBottom: "0.75rem",
                }}
              >
                Chennai Institute of Technology
              </p>

              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-secondary)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    CGPA
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "var(--accent-green)",
                    }}
                  >
                    8.61
                    <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                      /10.0
                    </span>
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-secondary)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    DEGREE
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                    }}
                  >
                    B.E. CSE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Bio */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                I&apos;m a Computer Science and Engineering student at Chennai
                Institute of Technology with a strong interest in software
                engineering and intelligent systems. My work spans web
                applications, developer tools, machine learning experiments, and
                cybersecurity challenges.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                I enjoy exploring how systems work, learning new technologies
                through implementation, and transforming ideas into projects that
                solve problems or create interesting experiences.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                I&apos;m continuing to strengthen my engineering fundamentals
                while exploring AI, computer vision, and game development.
              </p>
            </div>

            {/* Interest areas */}
            <div style={{ marginTop: "2rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                AREAS OF FOCUS
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {[
                  "Software Engineering",
                  "Full-Stack Web Dev",
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Computer Vision",
                  "Cybersecurity",
                  "Game Development",
                ].map((area) => (
                  <span key={area} className="tag-chip">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

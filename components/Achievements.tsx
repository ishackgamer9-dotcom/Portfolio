
import { ACHIEVEMENTS } from "@/lib/site-data";
import { CERTIFICATIONS } from "@/lib/site-data";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
          }}
          className="achievements-grid"
        >
          {/* Left: Hackathons & Achievements */}
          <div>
            <div className="section-id" style={{ marginBottom: "1rem" }}>
              04 / ACHIEVEMENTS
            </div>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "var(--text-primary)",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
                lineHeight: 1.2,
              }}
            >
              EVIDENCE{" "}
              <span style={{ color: "var(--accent-green)" }}>OVER HYPE.</span>
            </h2>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
              }}
            >
              Hackathon results, CTF placements, and competition recognitions.
            </p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {ACHIEVEMENTS.map((achievement, i) => (
                <div key={i} className="achievement-item">
                  <div style={{ flexShrink: 0, paddingTop: "0.1rem" }}>
                    <span className="achievement-result-badge">
                      {achievement.result}
                    </span>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "0.25rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {achievement.title}
                    </p>
                    {achievement.organizer && (
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-secondary)",
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {achievement.organizer}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications */}
          <CertificationsPanel />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

function CertificationsPanel() {
  return (
    <div>
      <div className="section-id" style={{ marginBottom: "1rem" }}>
        04b / CERTIFICATIONS
      </div>
      <h2
        style={{
          fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          color: "var(--text-primary)",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
          lineHeight: 1.2,
        }}
      >
        VERIFIED{" "}
        <span style={{ color: "var(--accent-green)" }}>LEARNING.</span>
      </h2>
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--text-secondary)",
          marginBottom: "2.5rem",
          lineHeight: 1.7,
        }}
      >
        Certifications completed across programming, cloud, and data technologies.
      </p>

      <div
        className="panel"
        style={{ padding: "0 1.25rem" }}
      >
        {CERTIFICATIONS.map((cert, i) => (
          <div key={i} className="cert-item">
            {/* Issuer badge */}
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "var(--bg-panel-2)",
                border: "1px solid var(--border-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              <CertIcon issuer={cert.issuer} />
            </div>

            <div style={{ flexGrow: 1, minWidth: 0 }}>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "0.2rem",
                  lineHeight: 1.4,
                }}
              >
                {cert.name}
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.04em",
                }}
              >
                {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CertIcon({ issuer }: { issuer: string }) {
  const first = issuer.charAt(0);
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.65rem",
        fontWeight: 700,
        color: "var(--accent-green)",
      }}
    >
      {first}
    </span>
  );
}

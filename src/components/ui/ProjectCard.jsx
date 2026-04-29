import { useState } from "react";
import { STATUS_META } from "../../data/projects";

function StatusBadge({ status }) {
  const meta = STATUS_META[status] ?? STATUS_META.Live;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500,
      letterSpacing: "0.08em", textTransform: "uppercase",
      padding: "3px 10px", borderRadius: 100,
      color: meta.color,
      border: `1px solid ${meta.color}55`,
      background: meta.color + "18",
    }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: meta.color, display: "inline-block" }} />
      {meta.label}
    </span>
  );
}

function TechTag({ label }) {
  return (
    <span style={{
      fontSize: 11, fontFamily: "'IBM Plex Mono', monospace",
      color: "#475569", background: "#0f172a",
      border: "1px solid #1e293b",
      padding: "3px 10px", borderRadius: 4,
      letterSpacing: "0.02em",
    }}>{label}</span>
  );
}

export default function ProjectCard({ project, animDelay = 0, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        background: "#0c1520",
        borderRadius: 16,
        border: `1px solid ${hovered ? project.accent + "55" : "#1e293b"}`,
        overflow: "hidden",
        cursor: "default",
        boxShadow: hovered ? `0 0 40px ${project.accent}15` : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${animDelay}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${animDelay}s, border-color 0.25s, box-shadow 0.25s`,
      }}
    >
      {/* Accent bottom bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: project.accent,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
        borderRadius: "0 0 16px 16px",
      }} />

      <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
        
        {/* Top row: icon + badges */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12, fontSize: 20,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: project.accent + "18",
            border: `1px solid ${project.accent}44`,
            flexShrink: 0,
          }}>{project.icon}</div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <StatusBadge status={project.status} />
            <span style={{
              fontSize: 10, fontFamily: "'IBM Plex Mono', monospace",
              color: "#334155", background: "#0f172a",
              padding: "3px 8px", borderRadius: 4, letterSpacing: "0.08em",
            }}>{project.tag}</span>
          </div>
        </div>

        {/* Title + category */}
        <div>
          <h2 style={{
            fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em",
            color: hovered ? "#f1f5f9" : "#cbd5e1",
            transition: "color 0.2s", marginBottom: 4,
          }}>{project.title}</h2>
          <p style={{
            fontSize: 11, fontFamily: "'IBM Plex Mono', monospace",
            color: "#1e3a4a", textTransform: "uppercase", letterSpacing: "0.08em",
          }}>{project.category}</p>
        </div>

        {/* Description */}
        <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.75 }}>
          {project.description}
        </p>

        {/* Stats box */}
        {/* <div style={{
          display: "flex", gap: 20, flexWrap: "wrap",
          background: "#080e16", borderRadius: 10, padding: "12px 16px",
        }}>
          {Object.entries(project.stats).map(([key, val]) => (
            <div key={key} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{
                fontSize: 18, fontWeight: 700,
                fontFamily: "'IBM Plex Mono', monospace",
                color: project.accent, letterSpacing: "-0.01em",
              }}>{val}</span>
              <span style={{
                fontSize: 9, fontFamily: "'IBM Plex Mono', monospace",
                color: "#1e3a4a", textTransform: "uppercase", letterSpacing: "0.1em",
              }}>{key}</span>
            </div>
          ))}
        </div> */}

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tech.map(t => <TechTag key={t} label={t} />)}
        </div>

        {/* Divider */}
        <div style={{ borderTop: `1px solid ${hovered ? project.accent + "33" : "#1e293b"}`, transition: "border-color 0.3s" }} />

        {/* Links */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {project.links.github && (
            <a href={project.links.github} style={{
              fontSize: 12, fontWeight: 600, fontFamily: "'Syne', sans-serif",
              color: "#475569", background: "#0f172a",
              border: "1px solid #1e293b", padding: "7px 14px",
              borderRadius: 8, textDecoration: "none",
            }}>GitHub ↗</a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} style={{
              fontSize: 12, fontWeight: 700, fontFamily: "'Syne', sans-serif",
              padding: "7px 14px", borderRadius: 8, textDecoration: "none",
              background: project.accent, color: "#000",
            }}>Live Demo →</a>
          )}
          {project.links.paper && (
            <a href={project.links.paper} style={{
              fontSize: 12, fontWeight: 700, fontFamily: "'Syne', sans-serif",
              padding: "7px 14px", borderRadius: 8, textDecoration: "none",
              background: project.accent, color: "#000",
            }}>Read Paper →</a>
          )}
        </div>
      </div>
    </article>
  );
}

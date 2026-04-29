import { useState } from "react";
import { PROJECTS } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import FilterBar from "../ui/FilterBar";

export default function ProjectsSection({ visible }) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" style={{ position: "relative", zIndex: 10 }}>
      <FilterBar active={active} onChange={setActive} />

      <div style={{ padding: "0 clamp(16px, 4vw, 64px) 80px", maxWidth: 1300, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          /* auto-fill: as many columns as fit, each at least 320px, at most 1fr */
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          gap: 20,
        }}>
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              animDelay={0.3 + i * 0.07}
              visible={visible}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "96px 0", textAlign: "center" }}>
            <span style={{ fontSize: 40, marginBottom: 16 }}>🔍</span>
            <p style={{ color: "#475569", fontFamily: "'IBM Plex Mono', monospace", fontSize: 13 }}>
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

import { HERO_STATS } from "../../data/projects";

export default function Hero({ visible }) {
  return (
    <section style={{
      maxWidth: 820,
      margin: "0 auto",
      padding: "clamp(48px, 8vw, 96px) clamp(16px, 4vw, 40px) clamp(40px, 6vw, 64px)",
      textAlign: "center",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: "opacity 0.9s ease 0.15s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s",
    }}>

      {/* Badge row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 11, fontFamily: "'IBM Plex Mono', monospace",
          color: "#00FFB2", background: "rgba(0,255,178,0.1)",
          border: "1px solid rgba(0,255,178,0.25)",
          padding: "6px 16px", borderRadius: 100,
          letterSpacing: "0.1em", textTransform: "uppercase",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00FFB2", display: "inline-block" }} />
          Available for projects
        </div>
        {/* <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          fontSize: 11, fontFamily: "'IBM Plex Mono', monospace",
          color: "#94a3b8", background: "rgba(255,255,255,0.04)",
          border: "1px solid #1e293b",
          padding: "6px 14px", borderRadius: 100,
          letterSpacing: "0.06em",
        }}>
          <span style={{ fontSize: 13 }}>⚡</span> Powered by OpenAI API
        </div> */}
      </div>

      {/* Headline */}
      <h1 style={{
        fontSize: "clamp(38px, 7vw, 78px)",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        lineHeight: 1.05,
        color: "#e2e8f0",
        marginBottom: 20,
      }}>
        I Build{" "}
        <span style={{
          background: "linear-gradient(90deg, #00FFB2, #0097ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>AI-Powered</span>
        <br />Products
      </h1>

      {/* Subheading */}
      <p style={{
        fontSize: "clamp(15px, 2vw, 18px)",
        color: "#475569",
        lineHeight: 1.75,
        maxWidth: 520,
        margin: "0 auto 36px",
      }}>
        Full-stack developer specialising in AI API integrations —
        chatbots, automations, and smart tools that ship fast and scale.
      </p>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 48, flexWrap: "wrap" }}>
        <a href="#projects" style={{
          fontSize: 14, fontWeight: 700, padding: "11px 24px",
          background: "#00FFB2", color: "#000", borderRadius: 10,
          textDecoration: "none",
        }}>See My Projects →</a>
        <a href="#contact" style={{
          fontSize: 14, fontWeight: 600, padding: "11px 24px",
          color: "#64748b", background: "#0f172a",
          border: "1px solid #1e293b", borderRadius: 10, textDecoration: "none",
        }}>Get in Touch</a>
      </div>

      {/* Stats */}
      <div style={{
        display: "flex", justifyContent: "center",
        gap: "clamp(24px, 5vw, 56px)",
        borderTop: "1px solid #0f172a", paddingTop: 32,
        flexWrap: "wrap",
      }}>
        {HERO_STATS.map((s) => (
          <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <span style={{
              fontSize: "clamp(20px, 3.5vw, 30px)",
              fontWeight: 800, color: "#e2e8f0", letterSpacing: "-0.02em",
              fontFamily: s.value === "GPT-4o" ? "'IBM Plex Mono', monospace" : "inherit",
            }}>{s.value}</span>
            <span style={{
              fontSize: 10, fontFamily: "'IBM Plex Mono', monospace",
              color: "#334155", textTransform: "uppercase", letterSpacing: "0.12em",
            }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

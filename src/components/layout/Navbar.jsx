import { useState, useEffect } from "react";

const NAV_LINKS = ["Projects", "Stack", "Contact"];

export default function Navbar({ visible }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(16px, 4vw, 64px)",
          height: 62,
          borderBottom: "1px solid #0f172a",
          background: "rgba(8,12,16,0.92)",
          backdropFilter: "blur(20px)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "linear-gradient(135deg, #00FFB2, #0097ff)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 14, color: "#000",
          }}>◈</div>
          <span style={{ fontSize: 16, fontWeight: 700, color: "#e2e8f0", letterSpacing: "-0.01em" }}>
            AI.Works
          </span>
        </a>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{
                fontSize: 14, color: "#64748b", padding: "6px 14px",
                borderRadius: 8, textDecoration: "none",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color = "#e2e8f0"}
                onMouseLeave={e => e.target.style.color = "#64748b"}
              >{link}</a>
            ))}
            <a href="#contact" style={{
              marginLeft: 8, fontSize: 14, fontWeight: 700,
              padding: "8px 18px", background: "#00FFB2", color: "#000",
              borderRadius: 10, textDecoration: "none",
            }}>Hire Me ↗</a>
          </nav>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: 22, height: 2,
                background: "#8da4bc", borderRadius: 2,
                transition: "transform 0.25s ease, opacity 0.25s ease",
                transform: menuOpen
                  ? i === 0 ? "translateY(7px) rotate(45deg)"
                  : i === 2 ? "translateY(-7px) rotate(-45deg)" : "none"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        )}
      </header>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <div style={{
          position: "fixed", top: 62, left: 0, right: 0, zIndex: 40,
          background: "rgba(8,12,16,0.97)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid #0f172a",
          transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
          opacity: menuOpen ? 1 : 0,
          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
          pointerEvents: menuOpen ? "auto" : "none",
        }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: 4, padding: "16px 20px 24px" }}>
            {NAV_LINKS.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: 15, color: "#64748b", padding: "12px 16px",
                  borderRadius: 12, textDecoration: "none",
                  transition: "background 0.2s",
                }}
              >{link}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{
              marginTop: 8, fontSize: 15, fontWeight: 700,
              padding: "12px 16px", background: "#00FFB2", color: "#000",
              borderRadius: 12, textDecoration: "none", textAlign: "center",
            }}>Hire Me ↗</a>
          </nav>
        </div>
      )}
    </>
  );
}

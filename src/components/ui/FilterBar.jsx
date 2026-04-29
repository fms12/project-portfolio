import { CATEGORIES } from "../../data/projects";

export default function FilterBar({ active, onChange }) {
  return (
    <div style={{
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
      padding: "0 clamp(16px, 4vw, 64px) 36px",
    }}>
      <div style={{
        display: "flex",
        gap: 8,
        width: "max-content",
        margin: "0 auto",
      }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            style={{
              whiteSpace: "nowrap",
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "'Syne', sans-serif",
              padding: "7px 16px",
              borderRadius: 100,
              border: active === cat ? "1px solid rgba(0,255,178,0.3)" : "1px solid #1e293b",
              background: active === cat ? "#0f172a" : "transparent",
              color: active === cat ? "#00FFB2" : "#475569",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >{cat}</button>
        ))}
      </div>
    </div>
  );
}

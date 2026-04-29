export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,255,178,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,178,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

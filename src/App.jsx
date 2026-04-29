import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ProjectsSection from "./components/sections/ProjectsSection";
import StackSection from "./components/sections/StackSection";
import GridBackground from "./components/ui/GridBackground";

export default function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080c10",
        color: "#94a3b8",
        fontFamily: "'Syne', sans-serif",
        position: "relative",
        caretColor: "#00FFB2",
      }}
    >
      <GridBackground />
      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar visible={visible} />
        <Hero visible={visible} />
        <ProjectsSection visible={visible} />
        <StackSection />
        <Footer />
      </div>
    </div>
  );
}

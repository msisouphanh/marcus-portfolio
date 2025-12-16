import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./components/NavigationBar.tsx";
import Bio from "./components/Bio.tsx";
import TechStack from "./components/TechStack.tsx";
import Projects from "./components/Projects.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="font-sans">
      <Nav />
      <Bio />
      <TechStack />
      <Projects />
    </main>
  </StrictMode>
);

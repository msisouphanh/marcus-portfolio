import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./components/NavigationBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Nav />
  </StrictMode>
);

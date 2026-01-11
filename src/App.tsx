import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/NavigationBar.tsx";
import Home from "./pages/Home.tsx";
import ProjectsPage from "./pages/ProjectPage.tsx";

function App() {
  return (
    <main className="font-sans">
      <Nav />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </HashRouter>
    </main>
  );
}

export default App;

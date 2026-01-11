import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/NavigationBar.tsx";
import Home from "./pages/Home.tsx";
import ProjectsPage from "./pages/ProjectPage.tsx";

function App() {
  return (
    <HashRouter>
      <main className="font-sans">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;

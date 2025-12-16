import Bio from "../components/Bio";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";

function Home() {
  return (
    <>
      <Bio />
      <TechStack />
      <Projects showViewMore={true} />
    </>
  );
}

export default Home;

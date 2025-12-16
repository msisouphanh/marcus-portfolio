import { FiGlobe, FiGithub } from "react-icons/fi";
import rawProjectsData from "../projects.json";
import { Link } from "react-router-dom";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  live: string | null;
  repo: string | null;
  image: string;
}

interface Props {
  showViewMore: boolean;
}

const iconSize = 14 as number;

function Projects({ showViewMore }: Props) {
  const projectsData = showViewMore
    ? (rawProjectsData as Project[])
    : (rawProjectsData.slice(0, 2) as Project[]);

  return (
    <>
      <div className="w-full">
        <div className="max-w-2xl mx-auto px-4 mb-18">
          <div className="flex justify-between mt-18 mb-4">
            <h1 className="font-semibold text-2xl dark:text-zinc-100">
              Projects
            </h1>
            {showViewMore && (
              <div className="flex items-center">
                <span className="text-md pt-2 dark:text-zinc-300">
                  <Link
                    to="/projects"
                    className="navigation-bar"
                    aria-label="View More Projects"
                  >
                    View More
                  </Link>
                </span>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {projectsData.map((item) => (
              <div
                className="flex flex-col rounded-xl shadow-md border p-4 transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/30"
              >
                <div className="h-45 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full rounded-xl object-cover"
                  ></img>
                </div>
                <h1
                  key={item.name}
                  className="text-lg font-semibold mb-1 dark:text-zinc-100"
                >
                  {item.name}
                </h1>
                <p className="text-sm dark:text-zinc-400 mb-6">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.technologies.map((tech) => (
                    <span className="text-[10px] border border-slate-700 px-1 py-0.5 rounded-md dark:text-zinc-300 font-bold bg-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.live && (
                    <button className="btn-unlocked">
                      <FiGlobe size={iconSize} />
                      <span>Website</span>
                    </button>
                  )}
                  {item.repo ? (
                    <button className="btn-unlocked">
                      <FiGithub size={iconSize} />
                      <span>Source</span>
                    </button>
                  ) : (
                    <button className="btn-locked" disabled>
                      <FiGithub size={iconSize} />
                      <span>Source</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

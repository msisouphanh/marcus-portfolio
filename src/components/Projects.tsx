import rawProjectsData from "../projects.json";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  live: string | null;
  repo: string | null;
  image: string;
}

const projectsData = rawProjectsData.slice(0, 2) as Project[];

function Projects() {
  return (
    <>
      <div className="w-full">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="mt-8 mb-4 text-xl font-semibold">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {projectsData.map((item) => (
              <div className="flex flex-col rounded-xl shadow-md border p-4">
                <div className="h-40 bg-gray-200 rounded-lg mb-4">image</div>
                <h1 key={item.name} className="text-lg font-semibold mb-2">
                  {item.name}
                </h1>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech) => (
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  {item.live && (
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                      Website
                    </button>
                  )}
                  {item.repo ? (
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                      Source
                    </button>
                  ) : (
                    <button
                      className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled
                    >
                      Source
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

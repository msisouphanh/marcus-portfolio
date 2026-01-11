import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiUnity,
  SiPython,
  SiMysql,
} from "react-icons/si";

export const techStack = [
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss3 },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: SiPython },
  { name: "Unity", Icon: SiUnity },
  { name: "SQL", Icon: SiMysql },
];

function TechStack() {
  return (
    <div className="w-full mt-18">
      <div className="flex max-w-2xl mx-auto px-4 mb-4">
        <h1 className="font-semibold text-2xl dark:text-zinc-100">
          Technologies
        </h1>
      </div>
      <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2 max-w-2xl mx-auto px-4">
        {techStack.map(({ name, Icon }) => (
          <div
            className="transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-lg dark:text-zinc-700 dark:bg-zinc-900/30"
          >
            <figure
              key={name}
              className="border rounded-lg shadow-md flex flex-col items-center justify-center w-full aspect-square"
            >
              <Icon size={28} className="mb-1 dark:text-zinc-100" />
              <figcaption className="mt-0.5 text-xs dark:text-gray-300">
                {name}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;

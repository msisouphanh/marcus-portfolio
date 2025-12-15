import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiUnity,
} from "react-icons/si";

export const techStack = [
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss3 },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Unity", Icon: SiUnity },
];

function TechStack() {
  return (
    <div className="w-full mt-8">
      <div className="grid grid-cols-4 md:grid-cols-7 gap-2 max-w-2xl mx-auto px-4">
        {techStack.map(({ name, Icon }) => (
          <figure
            key={name}
            className="border-2 rounded-lg shadow-md flex flex-col items-center justify-center w-full aspect-square"
          >
            <Icon size={32} className="mb-1" />
            <figcaption className="mt-0.5 text-xs">{name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default TechStack;

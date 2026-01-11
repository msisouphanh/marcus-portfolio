import { FaGithub, FaLinkedin } from "react-icons/fa";

function Bio() {
  return (
    <>
      <div className="w-full flex justify-center mt-6">
        <div className="flex flex-row items-center md:items-start max-w-2xl mx-auto px-4">
          <div className="mr-8 shrink-0">
            <img
              className="rounded-full w-34 h-34 mt-1.5"
              src="https://msisouphanh.github.io/marcus-portfolio/profile.jpg"
              alt="Image of User"
            ></img>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mt-0 dark:text-zinc-100">
              Hi, I am Marcus!
            </h2>
            <p className="text-md dark:text-zinc-200">
              I am recent Infotmation Technology graduate at York University,
              currently learning how to improve in UX/UI design, and improving
              development front-end skills with React and Tailwind CSS
            </p>
            <div className="flex mt-3 dark:text-zinc-200">
              <a
                href="https://www.linkedin.com/in/marcus-s-384602269/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="mr-4 transition-transform duration-200 ease-in-out hover:scale-125"
                  size={30}
                />
              </a>
              <a
                href="https://github.com/msisouphanh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="transition-transform duration-200 ease-in-out hover:scale-125"
                  size={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;

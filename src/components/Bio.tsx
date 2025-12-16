import { FaGithub, FaLinkedin } from "react-icons/fa";

function Bio() {
  return (
    <>
      <div className="w-full flex justify-center mt-6">
        <div className="flex flex-row items-center md:items-start max-w-2xl mx-auto px-4">
          <div className="mr-8 shrink-0">
            <img
              className="rounded-full w-34 h-34 mt-1.5"
              src="1686172732256.jpg"
              alt="Image of User"
            ></img>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mt-0 dark:text-zinc-100">
              Hi, I am Marcus!
            </h2>
            <p className="text-md dark:text-zinc-200">
              I am recent graduate at York University, currently learning how to
              improve in UX/UI design, and improving development front-end
              skills with React and Tailwind CSS
            </p>
            <div className="flex mt-3 dark:text-zinc-200">
              <FaLinkedin className="mr-4 " size={30} />
              <FaGithub size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;

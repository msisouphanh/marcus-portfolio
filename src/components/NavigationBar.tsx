import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <nav className="w-full">
        <ul className="flex text-md space-x-9 mx-auto px-4 max-w-2xl mt-8 mb-16 items-center">
          <li>
            <Link to="/marcus-portfolio" className="navigation-bar">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="navigation-bar">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;

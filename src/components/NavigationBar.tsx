function NavigationBar() {
  return (
    <>
      <nav className="w-full">
        <ul className="flex text-md space-x-9 mx-auto px-4 max-w-2xl mt-8 mb-16 items-center ">
          <li>
            <a className="navigation-bar" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="navigation-bar" href="#">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavList = () => {
    const location = useLocation();

    const navLinks = [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Contact Us", path: "/contact" },
      { name: "Enquiry", path: "/enquiry" },
    ];

    return (
      <ul className="flex flex-col md:flex-row space-y-2 lg:space-x-10  md:space-y-0 md:space-x-10 ">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className={`block md:inline-block py-2 px-3 rounded hover:font-bold font-roboto text-[1.2rem] lg:text-[1.5rem] ${
                location.pathname === link.path ? "font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="max-w-screen w-[100%] ">
      <div className="flex items-center justify-around px-4 py-2 md:px-6">
        <div className="flex items-center ">
          {/* <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg ml-2"> Company Name</span> */}
        </div>
        <div className=" w-[100%] flex-1 md:hidden">
          <button
            type="button"
            className="text-black focus:outline-none "
            onClick={toggleMenu}
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 ${
                isMenuOpen ? "transform rotate-45" : ""
              }`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M12 6v12M6 12h12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex ${isMenuOpen ? "flex" : "hidden"}`}>
          <NavList />
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <NavList />
      </div>
    </nav>
  );
};

export default Header;

import logo from "../assets/images/logo.svg";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navData = [
    ["Home", "/"],
    ["Projects", "#projects"],
    ["Events", "#events"],
    ["Partners", "#partners"],
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between bg-darkBlue p-6 z-50">
      <div>
        <img src={logo} alt="AIESEC logo" className="h-10" />
      </div>
      <div className="hidden md:flex md:flex-row md:w-[50%] md:justify-between md:items-center md:space-x-8 lg:w-[60%]">
        {navData.map(([title, url], index) => (
          <a key={index} href={url} className="text-white">
            {title}
          </a>
        ))}
      </div>
      <div className="md:hidden">
        {isOpen ? (
          <HiX
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <HiMenu
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center gap-12 bg-darkBlue text-white z-50">
          <HiX className="text-2xl cursor-pointer" onClick={toggleMenu} />
          <div className="flex flex-col items-center gap-8">
            {navData.map(([title, url], index) => (
              <a
                key={index}
                href={url}
                className="text-2xl"
                onClick={toggleMenu}
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

import logo from "../assets/images/logo.svg";
const Nav = () => {
  const navData = [
    ["Home", "/"],
    ["Projects", "#projects"],
    ["Events", "#events"],
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 flex flex-row items-center gap-12 bg-darkBlue p-6 font-semibold z-50">
      <div className="">
        <img src={logo} alt="aiesec logo" />
      </div>
      <div className="flex flex-row items-center justify-between w-[70%]">
        {navData.map(([title, url], index) => (
          <a href={url} key={index} className="text-white">
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;

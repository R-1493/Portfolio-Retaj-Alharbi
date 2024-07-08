import { LogoImg } from "../utils/index";
import { navLists } from "../constants/index";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full max-w-screen-xl mx-auto">
        <img src={LogoImg} alt="logo" width={36} height={36} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import { useState } from "react";
import ProfileDropDown from "../DropDownProfile";
import { Menu } from "lucide-react";

const Nav = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
      <div className="md:flex items-center justify-between bg-white px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-black-600 mr-1 pt-2">Gloma</span>
        </div>

        <div className="flex items-center absolute right-8 top-1.5 gap-2">
          <ProfileDropDown />
          <div onClick={() => setOpen(!open)} className="text-3xl cursor-pointer md:hidden"
          >
            <Menu />
          </div>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {/* {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

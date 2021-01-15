import React from "react";
import Navitem from "./Navitem";

const Header = () => {
  return (
    <header className="w-full absolute left-0 top-0 p-6 ">

      <div className="flex justify-between">
        <div>
          <h1 className="text-1xl font-bold mr-48">MedAziz11💫</h1>
          <span className="text-xs">in code we trust👨‍💻</span>
        </div>

        <div className="absolute right-4 top-0">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
          ></button>

          <div className="flex">
            <Navitem title="Home" id="1" />
            <Navitem title="Description" id="2" />
            <Navitem title="Projects" id="3" />
          </div>
        </div>
        <div className="sm:hidden">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;

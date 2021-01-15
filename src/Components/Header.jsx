import React from "react";
import Navitem from "./Navitem";
import { ReactComponent as Github } from "../svg/github.svg";
import { ReactComponent as In } from "../svg/In.svg";
import { ReactComponent as Twitter } from "../svg/twitter.svg";

const Header = () => {
  return (
    <header className="w-full absolute left-0 top-0 p-6 ">
      <div className="flex justify-between">
        <div>
          <h1 className="text-1xl font-bold mr-48">MedAziz11💫</h1>
          <span className="text-xs">in code we trust👨‍💻</span>
        </div>

        <div className="absolute right-4 top-4">
          <div className="flex">
            <Navitem title="Home" id="1" />
            <Navitem title="Description" id="2" />
            <Navitem title="Projects" id="3" />
          </div>

          <a
            href="https://www.linkedin.com/in/med-aziz-chagour-6b6133199/"
            className="absolute p-1 right-0"
          >
            <In className="svg" />
          </a>

          <a
            href="https://github.com/MedAziz11"
            className="absolute py-10 pr-1 right-0"
          >
            <Github className="svg" />
          </a>

          <a
            href="https://twitter.com/chagourmedaziz"
            className="absolute py-20 right-0"
          >
            <Twitter className="svg" />
          </a>
        </div>
        
        </div>
    </header>
  );
};

export default Header;

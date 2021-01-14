import React from "react";
import Navitem from "./Navitem";

import { ReactComponent as Github } from "../svg/github.svg";
import { ReactComponent as In } from "../svg/In.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex">
        <Navitem title = { <a href="https://www.linkedin.com/in/med-aziz-chagour-6b6133199" ><In/></a>}/>
        <Navitem title = { <a href="https://github.com/MedAziz11"> <Github/></a>} />
      </div>
      <div>
        <Navitem title="Home" />
        <Navitem title="Projects" />
        <Navitem title="About me" />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navitem from "./Navitem";

import Description from "./Description/Description";
import Projects from "./Projects/Projects";
import Home from "./Home";

const Navbar = () => {
  return (
    <Router>
      <header className="w-full absolute left-0 top-0 p-6  sm:mb-56">
        <div className="flex justify-between">
          <div>
            <h1 className="text-1xl font-bold mr-48">MedAziz11💫</h1>
            <span className="text-xs">in code we trust👨‍💻</span>
          </div>

          <div className="absolute right-4 top-4">
            <div className="flex">
              <Link to="/">
                <Navitem title="Home" id="1" />
              </Link>
              <Link to="/description">
                <Navitem title="Description" id="2" />
              </Link>
              <Link to="/projects">
                <Navitem title="Projects" id="3" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Switch>
        <Route component={Description} path="/description" />
        <Route component={Projects} path="/projects" />
        <Route component={Home} path="/"/>
      </Switch>
    </Router>
  );
};

export default Navbar;

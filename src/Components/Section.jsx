import React from "react";
import Typical from "react-typical";
import { ReactComponent as Github } from "../svg/github.svg";
import { ReactComponent as In } from "../svg/In.svg";
import { ReactComponent as Twitter } from "../svg/twitter.svg";

const Section = () => {
  return (
    <div className="min-h-screen md:w-9/12 xl:w-8/12 my-64 sm:my-9 ">
      <a
        href="https://www.linkedin.com/in/med-aziz-chagour-6b6133199/"
        className="absolute p-1 right-0 m-2 mt-4"
      >
        <In className="svg" />
      </a>

      <a
        href="https://github.com/MedAziz11"
        className="absolute py-10 pr-1 right-0 m-2 mt-4"
      >
        <Github className="svg" />
      </a>

      <a
        href="https://twitter.com/chagourmedaziz"
        className="absolute py-20 right-0 m-2"
      >
        <Twitter className="svg" />
      </a>
      <h1 className="name">
        Mohamed Aziz
        <br />
        Chagour
      </h1>

      <p className="student">Computer Science Student</p>
      <div className="typical">
        <Typical
          steps={[
            "Pythonista 🐍",
            1000,
            "Backend lover 💻",
            1000,
            "Machine Learning enthusiast 👾",
            1500,
          ]}
          loop={Infinity}
        />
      </div>
    </div>
  );
};

export default Section;

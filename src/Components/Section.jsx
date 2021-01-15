import React from "react";
import Typical from "react-typical";

const Section = () => {
  return (
    <section class="min-h-screen md:w-9/12 xl:w-8/12 py-50 sm:py-0">
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
    </section>
  );
};

export default Section;

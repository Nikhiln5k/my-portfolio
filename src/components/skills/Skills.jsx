import React from "react";
import "./Skills.css";

function Skills() {
  const data = [
    { skillClass: "fa-brands fa-html5" },
    { skillClass: "fa-brands fa-js" },
    { skillClass: "fa-brands fa-css3-alt" },
    { skillClass: "fa-brands fa-react" },
    { skillClass: "fa-brands fa-angular" },
    { skillClass: "fa-brands fa-node" },
    { skillClass: "fa-brands fa-java" },
    { skillClass: "fa-brands fa-vuejs" },
  ];
  return (
    <>
      <section className="w-100">
        <div className="skills-container p-5">
          {data.map((item, i) => (
            <div key={i} className="skills" style={{ fontSize: "5rem" }}>
              <i className={item.skillClass}></i>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;

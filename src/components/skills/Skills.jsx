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
      {/* <section className="w-100">
        <div className="skills-container p-5">
          <ul>
            {data.map((item, i) => (
              <li key={i} className="skills">
                <i className={item.skillClass}></i>
              </li>
            ))}
          </ul>
          <ul aria-hidden="true">
            {data.map((item, i) => (
              <li key={i} className="skills" style={{ fontSize: "5rem" }}>
                <i className={item.skillClass}></i>
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      <section class="section p-3 d-flex justify-content-center bg-off-white clientsSection">
        <div class="container mt-5">
          <div class="row">
            <div class="col-12">
              <div class="clientsCarousel">
                <div class="d-flex carouselTrack">
                  {data.map((item, i) => (
                    <div key={i} className="clientLogo">
                      <i className={item.skillClass}></i>
                    </div>
                  ))}
                  {data.map((item, i) => (
                    <div key={i} className="clientLogo">
                      <i className={item.skillClass}></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;

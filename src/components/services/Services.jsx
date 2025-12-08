import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";
import { backendData, frontendData } from "../../services";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
      { background: "var(--bg-color)" },
      {
        background: "linear-gradient(to bottom, var(--bg-color), #fff)",
        duration: 5,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="section d-flex justify-content-center align-items-center flex-column gap-3 p-5 "
        style={{ zIndex: "3", position: "relative" }}
      >
        <div className="banner-head text-center">
          <p className="head d-flex flex-column fs-2 fw-bold">
            <span>Collaborate with brands and agencies to </span>
            <span>create impactful results.</span>
          </p>
        </div>
        <div className="title">
          <span className="fw-bold">Services</span>
        </div>
        <div className="d-flex justify-content-center flex-wrap gap-5">
          <div className="cards">
            <span className="mb-2 fs-3 d-none d-md-inline">
              <i className="fa-solid fa-code"></i>
            </span>
            <h4>
              <i className="fa-solid fa-code d-inline d-md-none me-2"></i>
              Frontend Development
            </h4>
            <hr />
            <p className="mt-2">
              Crafting seamless and interactive user interfaces that bring ideas
              to life.
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              {frontendData.map((item, i) => (
                <img
                  key={i}
                  src={item.img}
                  alt=""
                  width="35"
                  height="35"
                  style={{
                    borderRadius: "50%",
                    boxShadow: "5px 2px 14px #0009",
                    // border: "2px solid white",
                    borderLeft: "1px solid white",
                    borderBottom: "1px solid white",
                    marginLeft: i === 0 ? "0px" : "-15px", // X-axis overlap
                  }}
                />
              ))}
            </div>
          </div>
          <div className="cards">
            <span className="mb-2 fs-3 d-none d-md-inline">
              <i className="fa-solid fa-globe"></i>
            </span>
            <h4>
              <i className="fa-solid fa-globe d-inline d-md-none me-2"></i>
              Backend Development
            </h4>
            <hr />
            <p className="mt-2">
              Crafting robust and scalable server-side solutions to power
              seamless digital experiences.
            </p>
            
            <div style={{ display: "flex", alignItems: "center" }}>
              {backendData.map((item, i) => (
                <img
                  key={i}
                  src={item.img}
                  alt=""
                  width="35"
                  height="35"
                  style={{
                    borderRadius: "50%",
                    boxShadow: "5px 2px 14px #0009",
                    // border: "2px solid white",
                    borderLeft: "1px solid white",
                    borderBottom: "1px solid white",
                    marginLeft: i === 0 ? "0px" : "-15px", // X-axis overlap
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

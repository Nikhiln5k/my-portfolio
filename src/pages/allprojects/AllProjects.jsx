import React, { useState } from "react";
import './AllProjects.css'
import { Card } from "react-bootstrap";
import { data } from "../../projects";

function AllProjects() {

  const [toggleState, setToggleState] = useState(0);

  const toggleButton = (i) => {
    setToggleState(i);
  };


  const tabItems = [
    {
      name: "All",
      content: data,
    },
    { name: "Fullstack", content: data.filter(project => project.type === "Fullstack") },
    {
      name: "React",
      content: data.filter(project => project.type === "React"),
    },
    {
      name: "HTML",
      content: data.filter(project => project.type === "HTML"),
    },
  ];

  return (
    <>
      <div className="tabs-page">
          <div className="tabs">
            <div className="all-projects p-5">
              <div className="text-white">
                <h2>All Projects</h2>
                <hr />
              </div>
              <ul className="d-flex gap-3 align-items-center justify-content-start text-center">
                {tabItems.map((item, i) => (
                  <li>
                    <button
                      onClick={() => toggleButton(i)}
                      className={
                        toggleState === i
                          ? "active-btn"
                          : "nonactive-btn font-bold"
                      }
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {tabItems.map((item, i) => (
              <div className="container">
                <div
                  className={toggleState === i ? "card-wraper" : "d-none"}
                >
                  {item.content.map((data) => (
                    <>
                      <Card className="project-card text-center btn md:w-50" style={{ border: "none", borderRadius: "6px", background: "transparent", width:"300px" }}>
                        <a href={data.link} style={{textDecoration:"none", color:"white"}}>
                          <Card.Img style={{ borderRadius: "15px", filter: "grayscale(70%)"}} variant="top" src={data.img} />
                          <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                          </Card.Body>
                        </a>
                      </Card>
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
}

export default AllProjects;

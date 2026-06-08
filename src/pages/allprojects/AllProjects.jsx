import React, { useState } from "react";
import './AllProjects.css'
import { Card } from "react-bootstrap";
import { data } from "../../projects";
import { useNavigate } from "react-router-dom";

function AllProjects() {

  const [toggleState, setToggleState] = useState(0);

  const toggleButton = (i) => {
    setToggleState(i);
  };

  const navigate = useNavigate("/");


  const tabItems = [
    {
      name: "All",
      content: data,
    },
    {
      name: "Fullstack",
      content: data.filter((project) => project.type === "Fullstack"),
    },
    {
      name: "React",
      content: data.filter((project) => project.type === "React"),
    },
    {
      name: "HTML",
      content: data.filter((project) => project.type === "HTML"),
    },
    {
      name: "Backend",
      content: data.filter((project) => project.type === "Backend"),
    },
  ];

  return (
    <>
      <div className="tabs-page">
        <div className="tabs">
          <div className="all-projects p-5">
            <div className="text-white d-flex gap-3 align-items-center justify-content-start">
              <button onClick={() => navigate(-1)} className="back-btn"><i className="fa-solid fa-arrow-left text-white"></i></button>
              <h2 style={{margin: 0}}>All Projects</h2>
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
              <div className={toggleState === i ? "card-wraper" : "d-none"}>
                {item.content.map((data) => (
                  <>
                    {/* <Card className="project-card text-center btn md:w-50" style={{ border: "none", borderRadius: "6px", background: "transparent", width:"300px" }}>
                        <a href={data.link} style={{textDecoration:"none", color:"white"}}>
                          <Card.Img style={{ borderRadius: "15px", filter: "grayscale(70%)"}} variant="top" src={data.img} />
                          <Card.Body>
                            <Card.Title><p style={{color:"#FFF", fontSize:""}}>{data.title}</p></Card.Title>
                          </Card.Body>
                        </a>
                      </Card> */}
                    <Card className="project-card text-center">
                      <a href={data.link} className="project-link">
                        <Card.Img
                          variant="top"
                          src={data.img}
                          className="project-image"
                        />

                        <Card.Body className="project-body">
                          <Card.Title className="project-title">
                            {data.title}
                          </Card.Title>
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

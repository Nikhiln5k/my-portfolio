import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import cv from "../../assets/Nikhil_Resume.pdf";
import profile from "../../assets/profile1.jpg";

function AboutPage() {
  const data = [
    { skill: "Frontend Development" },
    { skill: "Backend Development" },
    { skill: "Database Management" },
    { skill: "Version Control" },
    { skill: "Testing & Debugging" },
    { skill: "Project Management" },
    { skill: "Problem Solving" },
  ];
  return (
    <>
      <section className="d-flex flex-column justify-content-center align-items-center p-5" style={{backgroundColor: "#000" }}>
        <Row className="p-2" style={{ border: "1px solid #2424245e", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px",}}>
          <Col className="p-2 d-flex justify-content-center" md={6} sm={12}>
            <div style={{ width: "300px", height: "400px", overflow: "hidden" }}>
              <img src={profile} style={{ width: "100%", borderRadius: "15px", filter: "grayscale(90%)",}} alt="profile pic"/>
            </div>
          </Col>
          <Col className="d-flex align-items-center p-3" md={6} sm={12}>
            <div className="banner-head fw-bold" style={{ backgroundClip: "text", background: "transparent" }}>
              <p>
                <span style={{ backgroundImage: "linear-gradient(97deg, rgb(230,230,230) 0%, rgb(100,100,100, 0.55) 100%, rgb(12,12,12, 0.55) 100%)",}}>
                  Hi There!
                </span>
              </p>
              <span className="text-white">
                Fuelled by a passion for developing web applications, I have a
                desire to excel and continuously improve in my work. Learn more
                about my journey below.
              </span>
              <div className="mt-5">
                <Link to={cv} target="_blank" style={{ textDecoration: "none", backgroundColor: "#000", padding: "15px 20px 15px 20px", borderRadius: "25px", border: "2px solid #2424245e", color: "white",}}>
                  View my CV
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="p-md-5 mt-5 w-100" style={{ background: "linear-gradient(50deg, #2424245e, #000)", borderTopLeftRadius: "100px", borderBottomLeftRadius: "20px",}}>
          <Col className="text-white" style={{float:"left"}} md={6} sm={12}>
            <h2>My career journey</h2>
            <p className="mt-4" style={{ color: "#999" }}>
              I’m a passionate full-stack developer with a strong foundation in the MERN stack and a commitment to delivering seamless, user-friendly applications. Currently, I’m honing my skills as a Software Developer Intern at Smart Matrix Global Technologies Pvt Ltd, where I’m gaining hands-on experience in developing full-scale web applications using technologies like React, Angular, Node.js, and PostgreSQL.
              <p className="mt-2" style={{ color: "#999" }}>
                I’m involved in both frontend and backend development, contributing to projects that emphasize efficient data management, responsive design, and intuitive user interfaces. My work includes collaborating with cross-functional teams, implementing complex features, and solving real-world challenges, all of which have enhanced my skills and understanding of modern web development practices.
              </p>
              <p className="mt-2" style={{ color: "#999" }}>
                As I continue to grow in this field, I’m excited to take on new challenges and build impactful applications that enhance user experiences and meet business objectives.
              </p>
            </p>
          </Col>
          <Col md={6} sm={12}>
            <div className="d-flex gap-2 flex-wrap">
              {data?.map((item, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #2424245e",
                    padding: "10px 15px 10px 15px",
                    borderRadius: "20px",
                  }}
                >
                  <span style={{ color: "#999" }}>{item.skill}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
          <div className="text-center mt-5">
            <div>
              <p className="text-white">© 2024 All rights reserved</p>
            </div>
          </div>
      </section>
    </>
  );
}

export default AboutPage;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/profilepic1.jpg";
import './AboutPage.css'
import Cursor from "../../components/cursor/Cursor";

function AboutPage() {
  const data = [
    { skill: "Frontend Development" },
    { skill: "Backend Development" },
    { skill: "Database Management" },
    { skill: "Version Control" },
    { skill: "Testing & Debugging" },
    { skill: "Project Management" },
    // { skill: "Problem Solving" },
  ];
  const navigate = useNavigate("/");
  return (
    <>
    <Cursor/>
      <section className="about-section d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: "#000" }}>
        <Row className="w-100 mb-3 mt-2">
          <Col style={{float:"left"}} md={6} sm={12}>
            <button onClick={() => navigate(-1)} className="back-btn"><i className="fa-solid fa-arrow-left text-white"></i></button>
          </Col>
        </Row>
        <Row className="p-2" style={{ border: "1px solid #2424245e", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px",}}>
          <Col className="p-2 d-flex justify-content-center" md={6} sm={12}>
            <div style={{ width: "300px", height: "400px", overflow: "hidden" }}>
              <img src={profile} style={{ width: "100%", borderRadius: "15px", filter: "grayscale(90%)",}} alt="profile pic"/>
            </div>
          </Col>
          <Col className="about-intro d-flex align-items-center" md={6} sm={12}>
            <div className="banner-head fw-bold" style={{ backgroundClip: "text", background: "transparent" }}>
              <p>
                <span style={{ backgroundImage: "linear-gradient(97deg, rgb(230,230,230) 0%, rgb(100,100,100, 0.55) 100%, rgb(12,12,12, 0.55) 100%)",}}>
                  Hi There!
                </span>
              </p>
              <span className="text-white">
                {/* Fueled by a passion for developing web applications, I have a
                desire to excel and continuously improve in my work. Learn more
                about my journey below. */}
                Driven by a commitment to engineering excellence, I build scalable web applications designed for performance and user experience. Explore my professional journey below.
              </span>
              <div className="mt-5">
                <Link to="../../assets/Nikhil_Resume.pdf" target="_blank" style={{ textDecoration: "none", backgroundColor: "#000", padding: "15px 20px 15px 20px", borderRadius: "25px", border: "2px solid #8884", color: "white",}}>
                  View my CV
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="about mt-5 w-100" style={{ background: "linear-gradient(50deg, #2424245e, #000)", borderTopLeftRadius: "100px", borderBottomLeftRadius: "20px",}}>
          <Col className="text-white" style={{float:"left"}} md={6} sm={12}>
            <h2>My career journey</h2>
            <p className="mt-4" style={{ color: "#999" }}>
              {/* I’m a full-stack developer with a strong foundation in the MERN stack and a focus on building clean, user-friendly applications. I am currently working as a Backend Developer at TouchWorld Technology LLC, where I contribute to building scalable systems and efficient backend architectures. */}
              I am a Full-Stack Developer specializing in building highly scalable, user-centric web applications. With a strong foundation in the MERN stack and advanced proficiency in Angular, React, Node.js, TypeScript, and PostgreSQL, I engineer clean, efficient software architectures. Currently serving as a Backend Developer at TouchWorld Technology LLC, I focus on designing robust APIs, optimizing complex database interactions, and developing high-performance backend systems. Whether I am architecting secure task management solutions or developing dynamic data dashboards, my goal is to deliver impactful, reliable, and modern technical solutions that drive business success.
              {/* <p className="mt-2" style={{ color: "#999" }}>
                I have hands-on experience across both frontend and backend development, working with technologies such as React, Angular, Node.js, and PostgreSQL. My work involves developing robust APIs, optimizing database interactions, and collaborating with teams to deliver responsive, high-quality web applications.
              </p>
              <p className="mt-2" style={{ color: "#999" }}>
                I’m continuously improving my skills and enjoy taking on new challenges that help me build impactful, reliable solutions aligned with modern development standards.
              </p> */}
            </p>
          </Col>
          <Col className="tech-skills" md={6} sm={12}>
            <div className="d-flex gap-2 flex-wrap">
              {data?.map((item, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #8884",
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
          {/* <div className="text-center mt-5">
            <div>
              <p className="text-white">🖂 nikhilsk289@gmail.com</p>
            </div>
          </div> */}
      </section>
    </>
  );
}

export default AboutPage;

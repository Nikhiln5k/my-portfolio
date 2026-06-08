import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { data } from "../../projects";

function Projects() {
  // const data = [
  //   {
  //     title: "Netflix Clone",
  //     img: netflix,
  //     link: "https://netfix-clone-seven.vercel.app/",
  //   },
  //   {
  //     title: "Media Player",
  //     img: mediaplayer,
  //     link: "https://github-login-tt6i.vercel.app/",
  //   },
  //   {
  //     title: "Travel Web",
  //     img: travelweb,
  //     link: "https://travel-website-pink-delta.vercel.app/",
  //   },
  //   {
  //     title: "Weather App",
  //     img: weatherapp,
  //     link: "https://weather-app-kappa-two-84.vercel.app/",
  //   },
  // ];
  return (
    <>
      <section className="d-flex flex-column gap-3 justify-content-center align-items-center mt-5 mb-5">
        <div className="title">
          <span className="fw-bold">Personal Projects</span>
        </div>
        {/* <div className="d-flex justify-content-center gap-2 flex-wrap">
          {data?.map((item,i) => (
            <a href={item.link} style={{textDecoration:"none", color:"#444"}}>
              <Card className="text-center btn" style={{ border: "none", borderRadius: "6px", width: "300px", background: "transparent", }}>
                <Card.Img style={{ borderRadius: "15px", filter: "grayscale(70%)"}} variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </a>
          ))}
        </div> */}
        <div
          className="projects d-flex justify-content-center flex-column gap-2 w-100"
          style={{ overflow: "hidden" }}
        >
          <OwlCarousel
            className="owl-theme"
            loop
            autoplay
            autoplayTimeout={3000} // Smooth timing
            autoplaySpeed={1200} // Smooth slide speed
            smartSpeed={1200} // Controls animation smoothness
            center
            dots={false} // cleaner look
            nav={false}
            stagePadding={40} // gives room for larger center item
            responsive={{
              0: { items: 1, stagePadding: 20 },
              600: { items: 2, stagePadding: 30 },
              1000: { items: 3, stagePadding: 40 },
            }}
          >
            {data?.slice(0, 4).map((item, i) => (
              <div key={i} className="item">
                <a
                  href={item.link}
                  style={{ textDecoration: "none", color: "#444" }}
                >
                  <Card
                    className="text-center btn card-item"
                    style={{
                      border: "none",
                      borderRadius: "6px",
                      background: "transparent",
                    }}
                  >
                    <Card.Img
                    className="card-img"
                      style={{ borderRadius: "15px", filter: "grayscale(70%)" }}
                      variant="top"
                      src={item.img}
                    />
                    <Card.Body>
                      <Card.Title style={{fontSize: "14px"}}>{item.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            ))}
          </OwlCarousel>
        </div>
        <Link to={"/projects"}>
          <button className="primary-btn">See All Projects</button>
        </Link>
      </section>
    </>
  );
}

export default Projects;

import React from "react";
import Card from "react-bootstrap/Card";
import netflix from "../../assets/netflix_clone.png";
import mediaplayer from "../../assets/media_player.png";
import travelweb from "../../assets/travel_web.png";
import weatherapp from "../../assets/weather_app.png";

function Projects() {
  const data = [
    { title: "Netflix Clone", img: netflix, link:"https://netfix-clone-seven.vercel.app/" },
    { title: "Media Player", img: mediaplayer, link:"https://github-login-tt6i.vercel.app/" },
    { title: "Travel Web", img: travelweb, link:"https://travel-website-pink-delta.vercel.app/" },
    { title: "Weather App", img: weatherapp, link:"https://weather-app-kappa-two-84.vercel.app/" },
  ];
  return (
    <>
      <section className="d-flex flex-column gap-3 justify-content-center align-items-center p-5" >
        <div className="title">
          <span className="fw-bold">Projects</span>
        </div>
        <div className="d-flex justify-content-center gap-2 flex-wrap">
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
        </div>
      </section>
    </>
  );
}

export default Projects;

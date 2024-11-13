import React from "react";
import { Link } from "react-router-dom";
import hand from '../../assets/shakehand.png'

function Footer() {
  return (
    <>
      <section className="d-flex justify-content-center align-items-center flex-column gap-3 bg-light w-100 p-5" style={{ borderTopLeftRadius: "100px", borderTopRightRadius: "100px" }}>
        <div className="d-flex">
          <div className="bg-light " style={{ width: "130px", height: "130px", overflow: "hidden", border: "2px solid grey", borderRadius: "50%",}}>
            <img src={hand} style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center",}} alt=""/>
          </div>
        </div>
        <div className="banner-head text-center">
          <p className='d-flex flex-column fw-bold'>
            <span>Tell me about your next</span>
            <span>project</span>
          </p>
        </div>
        <div className="d-flex gap-2">
          <Link className="primary-btn d-flex" to={"mailto:nikhilsk289@gmail.com"} style={{textDecoration:"none"}}>
              Email Me
          </Link>
          <button className="secondary-btn" onClick={() => window.open('https://wa.me/7592850289', '_blank')}>
            Whatsapp
          </button>
        </div>

        <div className='text-center mt-5'>
            <div>
                <p>© 2024 All rights reserved</p>
            </div>
            <div className="ms-3">
                <Link style={{textDecoration:"none", color:"#383838", marginRight:"15px"}} to={'https://www.linkedin.com/in/nikhil-s-kumar-4b6127297/'}>Linkedin</Link>
                <span className="me-3">/</span>
                <Link style={{textDecoration:"none", color:"#383838", marginRight:"15px"}} to={'https://github.com/Nikhiln5k'}>Github</Link>
            </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

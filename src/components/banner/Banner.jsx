import React from 'react'
import profile from '../../assets/profile1.jpg'
import './Banner.css'

function Banner() {
  return (
    <>
        <main
          className="banner col-md-12 col-12 p-5 d-flex flex-column justify-content-center align-items-center "
          style={{ borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px" }}
        >
          <div className="d-flex relative">
            <div className="bg-light " style={{width:"130px",height:"130px",overflow:"hidden", border:"2px solid grey", borderRadius:"50%"}}>
              <img src={profile} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition: "bottom"}} alt="" />
            </div>
            <div className='contact' style={{marginLeft:"6rem",marginTop:"2rem",position:"absolute",zIndex:"1",transform:"rotate(-15deg)"}}>
              <button className='bg-light text-dark fw-bold animate' style={{fontSize:"10px"}}>Hey Iam Nikhil 👋🏼</button>
            </div>
          </div>
          <div className="banner-head text-center">
            <p className='d-flex flex-column fw-bold'>
              <span>Building dynamic</span>
              <span>applications and user-focused</span>
              <span>experiences</span>
            </p>
          </div>
          <div>
            <a href='mailto:nikhilsk289@gmail.com' className="primary-btn d-flex align-items-center">
               Contact Me <i className="fa-solid fa-arrow-right ms-2 text-white"></i>
            </a>
          </div>
        </main>
    </>
  )
}

export default Banner
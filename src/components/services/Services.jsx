import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css'

gsap.registerPlugin(ScrollTrigger);

function Services() {

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(el,{background:"var(--bg-color)"}, {background:"linear-gradient(to bottom, var(--bg-color), #fff)", duration:5, scrollTrigger:{
      trigger:el,
      start:"top 80%",
      end:"top 30%",
      scrub:1
    }})
  }, []);
  
  return (
    <>
        <section ref={sectionRef} className='section d-flex justify-content-center align-items-center flex-column gap-3 p-5 ' style={{zIndex:"3", position:"relative"}}>
          <div className="banner-head text-center">
            <p className='head d-flex flex-column fs-2 fw-bold'>
              <span>Collaborate with brands and agencies to </span>
              <span>create impactful results.</span>
            </p>
          </div>
            <div className='title'>
                <span className='fw-bold'>Services</span>
            </div>
            <div className='d-flex justify-content-center flex-wrap align-items-center gap-5'>
                <div className="cards">
                    <span className='mb-2 fs-3 d-none d-md-inline'><i className="fa-solid fa-code"></i></span>
                    <h4><i className="fa-solid fa-code d-inline d-md-none me-2"></i>Frontend Development</h4><hr />
                    <p className='mt-2'>Crafting seamless and interactive user interfaces that bring ideas to life.</p>
                </div>
                <div className="cards">
                    <span className='mb-2 fs-3 d-none d-md-inline'><i className="fa-solid fa-globe"></i></span>
                    <h4><i className="fa-solid fa-globe d-inline d-md-none me-2"></i>Backend Development</h4><hr />
                    <p className='mt-2'>Crafting robust and scalable server-side solutions to power seamless digital experiences.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services

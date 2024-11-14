import React, { useEffect } from 'react'
import './Services.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function Services() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set(".section", { opacity: 0, background: "linear-gradient(to bottom, #e9e9e3, #d5deef)" });
    gsap.to(".section", {
      
      opacity: 1,
      scrollTrigger: {
        trigger: ".section",
        start: "top 60%",
        end: "top 20%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  console.log(gsap);
  
  return (
    <>
        <section className='section d-flex justify-content-center align-items-center flex-column gap-3 p-5 '>
        <div className="banner-head text-center">
            <p className='head d-flex flex-column fs-2 fw-bold'>
              <span style={{lineHeight:"40px"}}>Collaborate with brands and agencies to </span>
              <span style={{lineHeight:"40px"}}>create impactful results.</span>
            </p>
          </div>
            <div className='title'>
                <span className='fw-bold'>Services</span>
            </div>
            <div className='d-flex justify-content-center flex-wrap align-items-center gap-5'>
                <div className="cards">
                    <span className='mb-2 fs-3'><i class="fa-solid fa-globe"></i></span>
                    <h4>Web</h4><hr />
                    <p>Transforming ideas into exceptional web experiences.</p>
                </div>
                <div className="cards">
                    <span className='mb-2 fs-3'><i class="fa-solid fa-code"></i></span>
                    <h4>Development</h4><hr />
                    <p>Bringing your vision to life with the latest technology and design trends.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services

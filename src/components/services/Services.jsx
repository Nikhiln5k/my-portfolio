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
        start: "top 80%",
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
                    <span className='mb-2 fs-3 d-none d-md-inline'><i class="fa-solid fa-code"></i></span>
                    <h4><i class="fa-solid fa-code d-inline d-md-none me-2"></i>Frontend Development</h4><hr />
                    <p className='mt-2'>Crafting seamless and interactive user interfaces that bring ideas to life.</p>
                </div>
                <div className="cards">
                    <span className='mb-2 fs-3 d-none d-md-inline'><i class="fa-solid fa-globe"></i></span>
                    <h4><i class="fa-solid fa-globe d-inline d-md-none me-2"></i>Backend Development</h4><hr />
                    <p className='mt-2'>Crafting robust and scalable server-side solutions to power seamless digital experiences.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services

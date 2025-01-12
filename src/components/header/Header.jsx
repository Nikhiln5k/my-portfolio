import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Header.css'

gsap.registerPlugin(ScrollTrigger);

function Header() {
    const style = {
        textDecoration:"none",
        color:"#1b1b1b",
        fontSize:"14px",
        padding:"10px",
        margin:"10px"
    }

    const headerRef = useRef(null);

    useEffect(()=>{
        const matchmedia = gsap.matchMedia();

        matchmedia.add("(min-width: 768px)",()=>{
            gsap.to(headerRef.current, {
                width: "70%",
                duration: 3,
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top top",
                    end: "+=110px",
                    scrub: 3,
                    onEnter: () => headerRef.current?.classList.add("header-scroll"),
                    onLeaveBack: () => headerRef.current?.classList.remove("header-scroll"),
                },
                ease:'power2.inOut'
            });
        })
    },[])
  return (
    <>
        <header className='d-flex justify-content-center'>
            <Navbar ref={headerRef} className='header p-3 d-flex justify-content-md-between justify-content-center w-100'>
                <div className='d-flex align-items-center gap-2 me-3'>
                    <a style={style} href={'mailto:nikhilsk289@gmail.com'}>
                        <i className="fa-solid fa-envelope d-md-none d-inline" style={{fontSize:"2rem"}}></i>
                        <span className='d-none d-md-inline'>nikhilsk289@gmail.com</span>
                    </a>
                    <a href="https://drive.google.com/file/d/1uJxBXI0EtiQionp9sS3lhYu-kSa8-MpL/view?usp=sharing" target='_blank' rel="noreferrer" className='bg-light text-dark' style={{textDecoration:"none", borderRadius:"20px", padding:"10px 15px 10px 15px"}}>CV</a>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <Link style={style} to={'/about'} className='fw-md-normal fw-bold'><span>About <span className='d-none d-md-inline'>me</span></span></Link>
                    <span className="me-3 d-none d-md-inline">/</span>
                    <Link style={style} to={'https://www.linkedin.com/in/nikhil-s-kumar-4b6127297/'}>
                        <i className="fa-brands fa-linkedin-in d-md-none d-inline" style={{fontSize:"2rem"}}></i>
                        <span className='d-none d-md-inline fw-bold'>Linkedin</span>
                    </Link>
                    <span className="me-3 d-none d-md-inline">/</span>
                    <Link style={style} to={'https://github.com/Nikhiln5k'}>
                        <i className="fa-brands fa-github d-md-none d-inline" style={{fontSize:"2rem"}}></i>
                        <span className='d-none d-md-inline fw-bold'>Github</span>
                    </Link>
                </div>
            </Navbar>
        </header>
    </>
  )
}

export default Header
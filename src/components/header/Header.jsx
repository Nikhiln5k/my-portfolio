import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../../assets/Nikhil_Resume.pdf'
import { Navbar } from 'react-bootstrap'

function Header() {
    const style = {
        textDecoration:"none",
        color:"#1b1b1b",
        fontSize:"14px",
        padding:"10px",
        margin:"10px"
    }
  return (
    <>
        <header>
            <Navbar className='p-3 w-100 d-flex justify-content-md-between justify-content-around' sticky='top'>
                <div className='d-flex align-items-center'>
                    <a style={style} href={'mailto:nikhilsk289@gmail.com'}>
                        <i class="fa-solid fa-envelope d-md-none d-inline fs-1"></i>
                        <span className='d-none d-md-inline'>nikhilsk289@gmail.com</span>
                    </a>
                    <a href={resume} download={resume} target='_blank' className='bg-light text-dark' style={{textDecoration:"none", borderRadius:"20px", padding:"10px 15px 10px 15px"}}>CV</a>
                </div>
                <div className='d-flex align-items-center'>
                    <Link style={style} to={'/about'} className='fw-md-normal fw-bold'>About me</Link>
                    <span className="me-3 d-none d-md-inline">/</span>
                    <Link style={style} to={'https://www.linkedin.com/in/nikhil-s-kumar-4b6127297/'}>
                        <i class="fa-brands fa-linkedin-in d-md-none d-inline fs-1"></i>
                        <span className='d-none d-md-inline fw-bold'>Linkedin</span>
                    </Link>
                    <span className="me-3 d-none d-md-inline">/</span>
                    <Link style={style} to={'https://github.com/Nikhiln5k'}>
                        <i class="fa-brands fa-github d-md-none d-inline fs-1"></i>
                        <span className='d-none d-md-inline fw-bold'>Github</span>
                    </Link>
                </div>
            </Navbar>
        </header>
    </>
  )
}

export default Header
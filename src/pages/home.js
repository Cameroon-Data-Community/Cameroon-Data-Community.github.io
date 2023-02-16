import React from 'react'
import { Col,Nav } from 'react-bootstrap'


import NavMenu from "../components/navMenu";


export default function Home() {
  return (
    <div   id='homepage' className='mx-auto'>       
        <div className='mx-auto' id='homepage-header'>
          <div id='header-main'>
            <NavMenu/>

            <Col className='mx-auto px-2' id='header-col-1'>
              {/*<div className='test'>
              <p className=''>
                Typed text 1
              </p>
              </div>*/}
            
  
  

              <h1 className='text-center typing-text fw-bold mt-3 d-none d-sm-block' >
              
                Cameroon Data Community...
               </h1>
               <div className='col col-12 mx-auto text-center  d-sm-none'>
                  <p id='span1' className='  d-block mx-auto'>Cameroon Data</p>
                  <p id='span2' className='  d-block mx-auto'>Community</p>
               </div>
               
               {/*<div className=' d-md-none'>
               <span id='span'>Cameroon Data</span>
                <span id="span2" className='d-block d-md-inline'>Community...</span>
               </div>
              <p class="fs-1 xs-homepage-title d-sm-none text-center">
                <span class="title-word title-word-1">Cameroon </span>
                <span class="title-word title-word-2">Data </span>
                <span class="title-word title-word-3">Community </span>
                
              </p>*/}
              <p className='text-center fs-4 mt-3'  >...Is volunteer-driven community of Cameroonian data professionals and enthusiasts.</p>
              <Col xs={5} className='d-md-none mx-auto'>
                <span className='btn btn-signup d-block mx-auto mt-5 d-lg-none fs-2 rounded'>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScXzr1c5AC_GR6ifbBsbqw45Nxy4HJ0AHlEXDtiziWbq_N3OQ/viewform" target='_blank' rel="noreferrer">Join Us</a>
                  </span>
                </Col>
            </Col>
            </div>
        </div>
        <div className='container mt-2 mt-md-4'>
          <div id='homepage-about' className='row mt-2'>
            <h2 className='text-center'>Who We Are</h2>
            <Col xs={11} md={8} lg={6} className='mx-auto text-center text-lg-left'>
                <img src='./images/collaboration.png' alt='' width={300} height={300} className='rounded '/>
            </Col>
            <Col xs={11} md={8} lg={6} className='mx-auto '>
              <p className='mt-md-4 text-justify'>
                We are a community of Cameroonians (residing both home and abroad), who are Data Science/Machine Learning professionals and enthusiasts with the goal of growing the data ecosystem. 
                The community engages in a couple of activities including Mentorship, Career/Job opportunites, Events/Learning Recources, and Networking.
                 The community is open to people of all levels from beginner to senior professionals
              </p>
              <span className='d-block mx-auto btn btn-success w-sm-25 w-50'><Nav.Link href='/about-us'>Read More</Nav.Link></span>
            </Col>

          </div>
        </div>
        <div className='my-2'>
          <h2 className='text-center'>Our Events</h2>
        </div>

    </div>
  )
}



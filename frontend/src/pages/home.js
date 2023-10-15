import React, { useEffect, useState } from 'react'
import { Col,Nav, Row } from 'react-bootstrap'
//import axios from 'axios'

import NavMenu from "../components/navMenu";
//import Event from '../components/event';

export default function Home() {

 const [events,setEvents] =useState()
  
  return (
    <div   id='homepage' className='mx-auto mt-0'>       
        <div className='mx-auto' id='homepage-header'>
          <div id='header-main'>
            <NavMenu/>

            <Col className='mx-auto px-2' id='header-col-1'>
             
              <h1 className='text-center typing-text fw-bold mt-3 d-none d-sm-block' >
              
                Cameroon Data Community...
               </h1>
               <div className='col col-12 mx-auto text-center  d-sm-none'>
                  <p id='span1' className='  d-block mx-auto'>Cameroon Data</p>
                  <p id='span2' className='  d-block mx-auto'>Community</p>
               </div>
                             
              <p className='text-center fs-4 mt-3'  >...A volunteer-driven community of Cameroonian data professionals and enthusiasts.</p>
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
        {/*<div className='my-2'>
          <h2 className='text-center'>Our Events</h2>
              <Row>
                {events !== undefined &&(
                  <Col xs={12} sm={11} md={6} lg={4} xl={3} className='mx-auto'>
                    <Event title={events.name.text} url={events.url} date={events.start.local} src={events.logo.url}/>
                  </Col>
                )}
              </Row>
                </div>*/}

    </div>
  )
}



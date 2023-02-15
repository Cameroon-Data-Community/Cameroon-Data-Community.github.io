import React from 'react'
import { Col } from 'react-bootstrap'
//import {FaSlack,FaLinkedinIn} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import NavMenu from "../components/navMenu";


export default function Home() {
  return (
    <div   id='homepage' className='mx-auto'>       
        <div className='mx-auto' id='homepage-header'>
          <div id='header-main'>
            <NavMenu/>        
            <Col className='mx-auto px-2' id='header-col-1'>
              <h1 className='text-center typing-text fw-bold mt-3' >Cameroon Data Community...</h1>
              {/*<p class="fs-1 xs-homepage-title d-sm-none text-center">
                <span class="title-word title-word-1">Cameroon </span>
                <span class="title-word title-word-2">Data </span>
                <span class="title-word title-word-3">Community </span>
                
              </p>*/}
              <p className='text-center fs-4 mt-3'  >...Is volunteer-driven community of Cameroonian data professionals and enthusiasts.</p>
              
            </Col>
            </div>
        </div>
        <div className='container mt-2 mt-md-4'>
          <div id='homepage-about' className='row mt-2'>
            <h2 className='text-center'>Who We Are</h2>
            <Col xs={11} md={8} lg={6} className='mx-auto '>
                <img src='./images/collab.jpg' alt='' width={300} height={300} className='rounded'/>
            </Col>
            <Col xs={11} md={8} lg={6} className='mx-auto '>
              <p className='mt-md-4 '>
                We are a community of Cameroonians (residing both home and abroad), who are Data Science/Machine Learning professionals and enthusiasts with the goal of growing the data ecosystem. The community engages in a couple of activities including 
                &nbsp;<span>Mentorship, Career/Job opportunites, Events/Learning Recources, collaboration and networking.</span>
                 The community is open to people of all levels from beginner to senior professionals
              </p>
              <span className='d-block mx-auto btn btn-outline'><Link to='/about'>Learn More</Link></span>
            </Col>

          </div>
        </div>
        <div className='my-2'>
          <h2 className='text-center'>Our Events</h2>
        </div>

    </div>
  )
}

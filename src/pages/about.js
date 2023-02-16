import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NavMenu from '../components/navMenu'

import {BiNetworkChart} from 'react-icons/bi'
import {Helmet} from 'react-helmet'
//import { Container } from 'react-bootstrap'

export default function About() {
  return (
    <>
    <Helmet>
        <title>Cameroon Data Community - About</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <div className='' id='aboutpage'>
        <NavMenu/>
        <div className='mx-auto mt-md-3 mt-2'>

          <h2 className='text-center'>About Cameroon Data Community</h2>
          <Col xs={12} md={10} lg={10} className='mx-auto'>
            <Row className='mt-3 mx-auto'>
              <Col xs={10} md={8} lg={6}  className='mx-auto text-center' >
                <img src='./images/cdc-meetup-img-2.jpg' alt='Cameroon Data Community meetup' className='gallery-img rounded '/>
              </Col>
              <Col xs={10} md={8} lg={6} className='mx-auto'>
                <p className='text-justify mt-lg-4 px-3 mt-3'>
                We are a community of Cameroonians(residing both home and abroad), who are data science/machine learning professionals and enthusiasts with the goal of growing the data ecosystem. The community engages in a couple of activities including <em>Mentorship</em>, <b>Career/Job placements</b>, <b>Events/Learning Recources</b>, <b>Collaboration</b>, and <b>Networking</b>. The community is open to people of all levels from beginner to senior professionals
                </p>
              </Col>
            </Row>
          </Col>
          
         
            <h2 className='text-center mt-md-4 mt-2'>What to Expect from This Community</h2>
            <Row className='mt-md-3 mt-1'>
              <Col xs={11} sm={11} md={8} lg={5}  className='mx-auto'>
                <div className='d-flex align-items-center my-2'>
                  <img alt='' src='./images/mentorship.png' width={60} height={60}/>
                  <h3 className='fs-4 px-2'>Mentorship</h3>
                </div>
                <p>We know there are a lot of Cameroonians, enthusiastic about the opportunities in data, and who wish to make a career in the field but don’t know how to get started. Our aspiration is to provide them with an avenue where they could get tips and advice from professionals who know what it takes to get there.</p>
              </Col>
              <Col xs={11} sm={11} md={8} lg={5} className='mx-auto'>
                <div className='d-flex align-items-center my-2'>
                <img alt='' src='./images/career.png' width={60} height={60}/>
                  <h3 className='fs-4 px-2'>Career & Job Opportunities</h3></div>
                <p>Through this community we aim to provide companies looking for data professionals an arena to find talents across all levels of expertise (from beginners to advanced). </p>
                
              </Col>
          </Row>
          <Row >
              <Col xs={11} sm={11} md={8} lg={5}  className='mx-auto'>
              <div className='d-flex my-2'>
                <BiNetworkChart size={47}/>
                <h3 className='fs-4 text-md-right px-2' >Collaboration & Networking</h3>
                </div>
                <p className='text-justify'>
                This platform will be an avenue for data enthusiasts and professionals to get to know each other, collaborate, learn and grow together.
                </p>
              </Col>
              <Col xs={11} sm={11} md={8} lg={5} className='mx-auto'>             
              <div className='d-flex align-items-center my-2'>
              <img alt='' src='./images/events.png' width={60} height={60}/>
              <h3 className='fs-4 mx-2 px-2'>Events/ Learning Recources</h3>
              </div>
               
                <p className='text-justify'>
                 An avenue for workshops, training, hackathons and study jams on topics related to data and machine learning.
                </p>
              </Col>
          </Row>
          <div className='text-center my-2  mx-auto d-block'>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLScXzr1c5AC_GR6ifbBsbqw45Nxy4HJ0AHlEXDtiziWbq_N3OQ/viewform' target='_blank' className='text-white btn btn-primary'>Join us Now</a>
          </div>
        </div>
    </div>
    </>
    
  )
}

import React, { useEffect, useState } from 'react'
import { Col,Nav, Row } from 'react-bootstrap'
//import axios from 'axios'
import {FaCheckDouble} from 'react-icons/fa'
import {FaLocationDot,FaCalendarDays} from 'react-icons/fa6'
import NavMenu from "../components/navMenu";
//import Event from '../components/event';

export default function Anniversary() {


 const venue='Somatel Hotel - Bali, Douala'
 const date= '28th October 2023'
 const regLink='https://bit.ly/cdc-1yr-form'
  
  return (
    <div   id='anniv-page' className='mx-auto'>       
        <div className='mx-auto' id='annivpage-header'>
          <div id='header-main'>
            <NavMenu/>

            <Col className='mx-auto px-2' id='header-col-1'>
             
              <h1 className='text-center text-light fs-1'>
                    <span className=''>Cameroon Data Community's</span>
                    <span className='d-block'> First Anniversay!!! </span>

                </h1>
                <a href={regLink} className='btn btn-warning text- d-block mx-auto mt-3 col-5 col-md-4 col-lg-3'>Register Now</a>
                <p className='text-light fs-4 mb-4 text-center'>After an incredible series of online speaker sessions titled "The Journey of a Data Professional" over the past three weekends, we have come a long way in bringing together aspiring data professionals and industry experts. Now, it's time to take our celebrations offline and create an unforgettable experience",</p>
                <p className='fs-4 mb-3 text-center'>We are happy to inform you about the in-person event as well to celebrate this milestone on Saturday 28th Oct 2023, in Douala. </p>
                
                <div className='mt-4 '>
                   
                    <p className='fs-5 text-center'><FaCalendarDays color='rgb(173,255,47)'/> Date: {date}</p>
                        {/* <Col><p className='fs-5'>{date}</p></Col> */}
                    
                   <p className='fs-5 text-center'><FaLocationDot color='rgb(173,255,47)'/> Venue: {venue}</p>
                            {/* <Col><p className='fs-5'>{venue}</p></Col> */}
                        
                </div>
                <a href={regLink} className='btn btn-warning text- d-block mx-auto mt-3 col-5 col-md-4 col-lg-3'>Register Now</a>
            </Col>
            <div id='anniv-page-program' className='row mt-2 px-2 pt-2 text-center'>
            <h2 className='text-center text-light mt-3 fs-1'>Activities For the day</h2>
                
                    <td className=''>Presentations <FaCheckDouble size={23}/></td>
               
                    <td className=''>Panel Discussions on very interesting topics <FaCheckDouble size={23}/></td>
                
                    <td>Fun and Games <FaCheckDouble size={23}/></td>
                    
                    <td>Networking <FaCheckDouble size={23}/></td>
            
               
            <p className='fs-5 text-light text-center'> And so much more...</p>
          </div>
          <p className='text-center fs-5 text-light'>We look forward to having you at our event!!!</p>
            </div>
        </div>
       
    </div>
  )
}



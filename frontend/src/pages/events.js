import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import NavMenu from '../components/navMenu'

import {Helmet} from 'react-helmet'
import Event  from '../components/event';
//import { Container } from 'react-bootstrap'


export default function Events() {
    const [events,setEvents] =useState([])
    const [loading,setLoading]=useState(false)
    const [err,setErr]=useState(null)
    useEffect(()=>getEvents,[])
    const getEvents=()=>{
      setLoading(true)
      axios.get('http://localhost:5000/')
      .then(resp=>{
        setEvents(resp.data)

      })
      .catch(e=>{
        console.log(e);
        setErr(e)
      })
      .finally(()=>setLoading(false)      )
    }
    const fetchEvts=()=>{
      setErr(null)
      getEvents()
    }
  return (
    <>
    <Helmet>
        <title>Cameroon Data Community - Events</title>
        <meta name="description" content="Cameroon Data Community Upcomming Events" />
    </Helmet>
    <div className='' id='evtpage'>
        <NavMenu/>
        <div className='mx-auto mt-md-3 mt-2 mh-100 '>

          <h2 className='text-center'>Current and Upcomming Events</h2>
          
          <Row>
                {events.length>0 && events.map((evt,index)=>{
                    return (
                        <Col xs={12} sm={11} md={6} lg={4} xl={3} className='mx-auto' key={index}>
                        <Event title={evt.name} url={evt.link} date={evt.start} src={evt.logo}/>
                      </Col>
                    )
                }
                
                 
                )}
                {loading == true && (
                  <p  className='text-center fw-bold fs-4'>Loading Events...</p>
                )}
                {err!=null && (
                  <>
                    <p  className='text-center fw-bold fs-5'>OOps! There is has been an error with loading the events.</p>
                    <div class='text-center'>
                    <Button onClick={fetchEvts} class='btn-warning rounded'>Click here to refresh page</Button>
                    </div>
                    
                  </>
                )}

        </Row>
          
          
         
            
        </div>
    </div>
    </>
    
  )
}

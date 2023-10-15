//import React from 'react'


import { Container,Navbar,Nav } from "react-bootstrap";
export default function NavMenu() {
  return (
    <>
      <Navbar className=' mx-auto navbar-dark mt-0' expand='lg'>
        <Container fluid>
          <Navbar.Brand href="/">
            <b><img src="./images/Cameroon-Data-Community-logo.png" alt="" className="logo"/></b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="cdc-navbar-nav" color="white" />
          <Navbar.Collapse id="cdc-navbar-nav" >
            <Nav className="  mx-auto">
              <Nav.Link href="/" className="px-md-5">Home</Nav.Link>
              <Nav.Link href="/about-us" className="px-md-5">About</Nav.Link>
              <Nav.Link href="/events" className="px-md-5">Events</Nav.Link>
              <Nav.Link href="/anniversary" className="px-md-5">Anniversary</Nav.Link>
             {/*  <button className="px-md-5" id='fr-btn'>Francais</button> */}
              <div id="google_translate_element"></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
  )
}

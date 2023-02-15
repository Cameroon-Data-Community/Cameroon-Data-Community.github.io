//import React from 'react'

import { Link } from "react-router-dom";
import { Container,Navbar,Nav } from "react-bootstrap";
export default function NavMenu() {
  return (
    <Navbar className=' mx-auto navbar-dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="./images/Cameroon-Data-Community-logo.png" alt="" className="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="cdc-navbar-nav" color="white" />
        <Navbar.Collapse id="cdc-navbar-nav" >
          <Nav className="  mx-auto">
            <Nav.Link href="/" className="px-md-5">Home</Nav.Link>
            <Nav.Link href="/about-us" className="px-md-5">About</Nav.Link>
            <Nav.Link href="/" className="px-md-5">Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

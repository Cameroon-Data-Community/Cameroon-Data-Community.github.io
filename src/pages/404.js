//import React from 'react'

import { Col } from "react-bootstrap";
import NavMenu from "../components/navMenu";

export default function NotFound() {
  return (
    <div className=" " id="page-404">

      <NavMenu/>
      <Col className="mx-auto text-center">
      <p className="fs-1">Page Not found</p>
        <p className="fs-3">Oops, the page you are looking for does not exist:(</p>
      </Col>
        
    </div>
  )
}

//import React from 'react'

import { Col } from "react-bootstrap";
import NavMenu from "../components/navMenu";

export default function NotFound() {
  return (
    <div className=" " id="page-404">

      <NavMenu/>
      <Col className="mx-auto  px-2 mt-5">
      <p className="fs-1 text-center">Page Not found</p>
        <p className="fs-3 text-center">Oops, the page you are looking for does not exist:(</p>
      </Col>
        
    </div>
  )
}

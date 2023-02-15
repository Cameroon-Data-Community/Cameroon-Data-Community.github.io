import { Col, Nav, Row } from "react-bootstrap"
import {FaLinkedinIn,FaGithub,FaSlack } from 'react-icons/fa'


export default function Footer() {
    let year=new Date().getFullYear()
  return (
    <div classname="container-flui ">
        <footer classname="">
            <Row >
                <Col  md={6} className='mx-auto text-center'>
                    <div classname=" text-center">
                        <a href="/" classname="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <img className="logo" alt='cdc' src="./images/Cameroon-Data-Community-logo.png"/>
                        </a>
                        <span classname="mb-3 mb-md-0 text-muted">&copy; {year} Company, Inc</span>
                    </div>
                </Col>
                <Col md={6} className='mx-auto'>
                    <Row classname="text-center mx-auto" id="stuborn_links">
                       
                        <Col classname="ms-3 mx" xs={2} ><FaGithub size={28}/></Col>
                        <Col classname="ms-3"  xs={2}><FaSlack size={28}/></Col>
                        <Col classname="ms-3"  xs={2}><FaLinkedinIn size={28}/></Col>
                    </Row>
                </Col>
            </Row>
        </footer>
    </div>
  )
}

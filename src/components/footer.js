import { Col, Row } from "react-bootstrap"
import {FaLinkedinIn,FaGithub,FaSlack } from 'react-icons/fa'


export default function Footer() {
    let year=new Date().getFullYear()
  return (
   
        <footer className="">
            <Row >
                <Col  md={6} className='mx-auto text-center'>
                    <div className=" text-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1" rel="noreferrer">
                            <img className="logo" alt='cdc' src="./images/Cameroon-Data-Community-logo.png"/>
                        </a>
                        <span className="mb-3 mb-md-0 text-muted">&copy; {year} Cameroon Data Community</span>
                    </div>
                </Col>
                <Col md={6} className='mx-auto' id="links-col">
                    <Row className="text-center mx-auto d-flex align-items-center" id="stuborn_links">
                       <Col xs={3}></Col>
                        <Col className="ms-3 link" xs={2} ><a href="https://github.com/Cameroon-Data-Community/" target='_blank' rel="noreferrer"><FaGithub size={28}/></a></Col>
                        <Col className="ms-3 mx-auto link"  xs={2}> <a href="https://join.slack.com/t/cameroondatacommunity/shared_invite/zt-1ju8v7pz8-1nSGG4ENsEJmRQOOIW~iGg" target='_blank' rel="noreferrer"><FaSlack size={28}/></a></Col>
                        <Col className="ms-3 mx-auto link"  xs={2}> <a href="https://www.linkedin.com/company/cameroon-data-community" target='_blank' rel="noreferrer"><FaLinkedinIn size={28}/></a></Col>
                    </Row>
                </Col>
            </Row>
        </footer>
  
  )
}

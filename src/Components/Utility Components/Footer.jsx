import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className="footer-background footer mt-3 pt-2" style={{ maxHeight: "50px" }}>
            <Container className="">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col sm="6" className="d-flex align-items-center ">
                        <div className="footer-shroot ">Terms and Conditions</div>
                        <div className="footer-shroot mx-2">Privacy Policy</div>
                        <div className="footer-shroot mx-2">Contact Us</div>
                    </Col>
                    <Col
                        sm="6"
                        className="d-flex justify-content-end align-items-center ">
                        <div style={{ cursor: "pointer" }}>
                            <i class="fa-brands fa-facebook" style={{height:"20px", width:"20px"}}></i>
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <i class="fa-brands fa-square-instagram" style={{height:"20px", width:"20px"}}></i>
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <i class="fa-brands fa-square-x-twitter" style={{height:"20px", width:"20px"}}></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Footer

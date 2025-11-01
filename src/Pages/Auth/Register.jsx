import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'

const Register = () => {
  return (
    <BrowserRouter>
    <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">Register</label>
            <input
              placeholder="Full Name"
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              placeholder="Email"
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              placeholder="Password"
              type="password"
              className="user-input text-center mx-auto"
            />
            <button className="btn-login mx-auto mt-4">Register</button>
            <label className="mx-auto my-4">
              You have already an account ?{" "}
              
                <a href="/login" style={{ textDecoration: "none" }}>
                    <span style={{ cursor: "pointer" }} className="text-danger">
                    Login
                    </span>
                </a>
            
            </label>
          </Col>
        </Row>
      </Container>
      </BrowserRouter>
  )
}

export default Register

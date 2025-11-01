import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'

const Login = () => {
  return (
    <BrowserRouter>
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
              <label className="mx-auto title-login">Log In</label>
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
              <button className="btn-login mx-auto mt-4">Submit</button>
              <label className="mx-auto my-4">
                  You don't have an account ?{" "}
                  
                    <a href="/register" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                            Create a new account
                        </span>
                    </a>
                  
              </label>



          </Col>


          <label className="mx-auto my-4">

            <a href="/admin/allproducts" style={{textDecoration:'none'}}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                    For Admins 
                </span>
            </a>

            <a href="/user/allorders" style={{textDecoration:'none'}}>
                <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                    For User
                </span>
            </a>
      </label>
      </Row>
    </Container>
    </BrowserRouter>
  )
}

export default Login

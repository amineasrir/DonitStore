import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CatNavbar = () => {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">All</div>
            <div className="cat-text-header">Electronics</div>
            <div className="cat-text-header">Clooths</div>
            <div className="cat-text-header">Tools</div>
            <div className="cat-text-header">Gaming</div>
            <div className="cat-text-header">Sports</div>
            <div className="cat-text-header">Vehicles</div>
            <div className="cat-text-header">Discounts</div>
            <div className="cat-text-header">More</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CatNavbar

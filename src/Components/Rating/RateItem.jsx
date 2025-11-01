import React from 'react'
import { Col, Row } from 'react-bootstrap'

const RateItem = () => {
  return (
    <div>
            <Row className="mt-3">
                <Col className="d-felx me-5">
                    <div className="rate-name  d-inline ms-2">Ahmed</div>
                    <i className="fa-solid fa-star" style={{height:"16px", width:"16px", color:"gold"}}></i>
                    <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-felx me-4 pb-2">
                    <div className="rate-description  d-inline ms-2">
                        Good quality
                    </div>
                </Col>
            </Row>
        </div>
  )
}

export default RateItem

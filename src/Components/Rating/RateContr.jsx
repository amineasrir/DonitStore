import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import  Pagination from '../Utility Components/Pagination'
import RatePost from './RatePost'
import RateItem from './RateItem'

const RateContr = () => {
  return (
    <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">Rates</div>
                    <i className="fa-solid fa-star" style={{height:"16px", width:"16px", color:"gold"}}></i>
                    <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
                    <div className="rate-count d-inline p-1 pt-2">(160 Rate)</div>
                </Col>
            </Row>
            <RatePost />
            <RateItem />
            <RateItem />
            <RateItem />
            <RateItem />

            <Pagination />
        </Container>
  )
}

export default RateContr

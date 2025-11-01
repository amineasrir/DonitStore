import React from 'react'
import SideBar from '../../Components/User/SideBar'
import AllAddresses from '../../Components/User/AllAddresses'
import { Col, Container, Row } from 'react-bootstrap'

const MyAddresses = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <SideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <AllAddresses />
                </Col>
            </Row>
        </Container>
    )
}

export default MyAddresses

import React from 'react'
import SideBar from '../../Components/User/SideBar'
import UserAllOrders from '../../Components/User/UserAllOrders'
import { Col, Container, Row } from 'react-bootstrap'

const UsrAllOrders = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <SideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <UserAllOrders />
                </Col>
            </Row>
        </Container>
    )
}

export default UsrAllOrders

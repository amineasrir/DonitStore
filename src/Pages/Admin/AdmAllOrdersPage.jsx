import React from 'react'
import AllOrders from '../../Components/Admin/AllOrders'
import { Col, Container, Row } from 'react-bootstrap'

const AdmAllOrdersPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AllOrders />
                    <Pagination />
                </Col>
            </Row>
        </Container>
    )
}

export default AdmAllOrdersPage

import React from 'react'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import Pagination from '../../Components/Utility Components/Pagination'
import AdminAllProduct from '../../Components/Admin/AdminAllProduct'
import { Col, Container, Row } from 'react-bootstrap'

const AdmAllProdsPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllProduct />
                    <Pagination />
                </Col>
            </Row>
        </Container>
    )
}

export default AdmAllProdsPage

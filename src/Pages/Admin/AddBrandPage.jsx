import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProduct from '../../Components/Admin/AdminAllProduct'
import OrdersDetails from '../../Components/Admin/OrdersDetails'
import AddBrand from '../../Components/Admin/AddBrand'
import Pagination from '../../Components/Utility Components/Pagination'

const AddBrandPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AddBrand />
                </Col>
            </Row>
        </Container>
    )
}

export default AddBrandPage

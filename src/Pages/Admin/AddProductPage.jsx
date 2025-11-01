import React from 'react'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProduct from '../../Components/Admin/AdminAllProduct'
import AddBrand from '../../Components/Admin/AddBrand'
import Pagination from '../../Components/Utility Components/Pagination'
import AddProduct from '../../Components/Admin/AddProduct'
import { Col, Container, Row } from 'react-bootstrap'

const AddProductPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AddProduct />
                </Col>
            </Row>
        </Container>
    )
}

export default AddProductPage

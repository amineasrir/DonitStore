import React from 'react'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProduct from '../../Components/Admin/AdminAllProduct'
import Pagination from '../../Components/Utility Components/Pagination'
import AddSubCategory from '../../Components/Admin/AddSubCategory'
import { Col, Container, Row } from 'react-bootstrap'

const AddSubCategoryPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AddSubCategory />
                </Col>
            </Row>
        </Container>
    )
}

export default AddSubCategoryPage

import React from 'react'
import SideBar from '../../Components/User/SideBar'
import EditAddress from '../../Components/User/EditAddress'
import { Col, Container, Row } from 'react-bootstrap'

const EditAddressPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <SideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <EditAddress />
                </Col>
            </Row>
        </Container>
    )
}

export default EditAddressPage

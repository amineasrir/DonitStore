import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../../Components/User/SideBar'
import AddAddress from '../../Components/User/AddAddess'
const AddAddressPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <SideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <AddAddress />
                </Col>
            </Row>
        </Container>
    )
}

export default AddAddressPage

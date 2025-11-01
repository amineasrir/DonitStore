import React from 'react'
import SideBar from '../../Components/User/SideBar'
import UserProfile from '../../Components/User/UserProfile'
import { Col, Container, Row } from 'react-bootstrap'

const ProfilePage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <SideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <UserProfile />
                </Col>
            </Row>
        </Container>
    )
}

export default ProfilePage

import React from 'react'
import AddressCard from './AddressCard'
import { Col, Row } from 'react-bootstrap'

const AllAddresses = () => {
    return (
        <div>
            <div className="admin-content-text pb-4">My addresses</div>
            <AddressCard />
            <AddressCard />
            <AddressCard />

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <a href="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">Add a new address</button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default AllAddresses

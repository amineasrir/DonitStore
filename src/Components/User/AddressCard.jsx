import React from 'react'
import { Col, Row } from 'react-bootstrap'

const AddressCard = () => {
  return (
    <div className="user-address-card my-3 px-2">
            <Row className="d-flex justify-content-between  ">
                <Col xs="1">
                    <div className="p-2">Home</div>
                </Col>
                <Col xs="4" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                        <div className="d-flex mx-2">
                        <i class="fa-solid fa-trash"></i>
                            <a href="/user/edit-address" style={{ textDecoration: "none" }}>
                                <p className="item-delete-edit">Edit</p>
                            </a>
                        </div>
                        <div className="d-flex ">
                            <i class="fa-solid fa-trash"></i>
                            <p className="item-delete-edit">Delete</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <div
                        style={{
                            color: "#555550",
                            fontSize: "14px",
                        }}>
                            Marrakech, Targa 4567
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontSize: "16px",
                        }}>
                        Phone number
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        0021313432423
                    </div>
                </Col>
            </Row>
        </div>
  )
}

export default AddressCard

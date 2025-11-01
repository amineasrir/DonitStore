import React from 'react'
import { Col, Row } from 'react-bootstrap'

const AddBrand = () => {
  return (
    <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add new brand</div>
                <Col sm="8">
                    <div className="text-form pb-2">Logo</div>
                        <i class="fa-regular fa-file-image" style={{fontSize:"60px"}}></i>
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Brand name"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">Add</button>
                </Col>
            </Row>
        </div>
  )
}

export default AddBrand

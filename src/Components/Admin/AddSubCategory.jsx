import React from 'react'
import { Col, Row } from 'react-bootstrap'

const AddSubCategory = () => {
  return (
    <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add a new sub-category</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Sub-Category name"
                    />
                    <select name="languages" id="lang" className="select mt-3 px-2 ">
                        <option value="val">First Sub-Category</option>
                        <option value="val2">Second Sub-Category</option>
                        <option value="val2">Third Sub-Category</option>
                    </select>
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

export default AddSubCategory

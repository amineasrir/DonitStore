import Multiselect from 'multiselect-react-dropdown'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const AddProduct = () => {
    const onSelect = () => {

    }
    const onRemove = () => {

    }

    const options = [
        { name: "التصنيف الاول", id: 1 },
        { name: "التصنيف الثاني", id: 2 },
    ];
  return (
    <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add a new product</div>
                <Col sm="8">
                    <div className="text-form pb-2">Product picture</div>
                    <i class="fa-regular fa-file-image" style={{fontSize:"60px"}}></i>
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Product name"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Product description"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price before discount"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price"
                    />
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">Main Category</option>
                        <option value="val">First Category</option>
                        <option value="val2">Second Category</option>
                        <option value="val2">Third Category</option>
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">الماركة</option>
                        <option value="val2">التصنيف الماركة الاولي</option>
                        <option value="val2">التصنيف الماركة الثانيه</option>
                        <option value="val2">التصنيف الرابع</option>
                    </select>
                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "#E52C2C" }}></div>
                        <div
                            className="color ms-2 border mt-1 "
                            style={{ backgroundColor: "white" }}></div>
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "black" }}></div>
                        <i class="fa-solid fa-plus" style={{fontSize: "30px"}}></i>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">Add Product</button>
                </Col>
            </Row>
        </div>
  )
}

export default AddProduct

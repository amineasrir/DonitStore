import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Checkout = () => {
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                        className="copon-input d-inline text-center "
                        placeholder="Promo Code"
                    />
                    <button className="copon-btn d-inline ">Done</button>
                </div>
                <div className="product-price d-inline w-100 my-3  border">3400$</div>
                <a
                    href="/order/paymethoud"
                    style={{ textDecoration: "none" }}
                    className="product-cart-add  d-inline ">
                    <button className="product-cart-add w-100 px-2">Complete</button>
                </a>
            </Col>
        </Row>
  )
}

export default Checkout

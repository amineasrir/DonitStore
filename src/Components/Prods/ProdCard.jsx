import React from 'react'
import { Card, Col } from 'react-bootstrap'
import prod1 from "../../Assets/IMG/prod1.png";

const ProdCard = () => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">

        <Card
            className="my-2"
            style={{
                width: "100%",
                height: "345px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
            }}>
            <a href="/products/:id" style={{ textDecoration: 'none' }}>
                <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
            </a>
            <div className="d-flex justify-content-end mx-2">
                <i className="fa-solid fa-heart text-center"
                    style={{
                        height: "24px",
                        width: "26px",
                        color: "red",
                    }}
                />
            </div>
            <Card.Body>
                <Card.Title>
                    <div className="card-title">
                        Prod{" "}
                    </div>
                </Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-between ">
                        <div className="d-flex">
                            <i className="fa-solid fa-star" style={{height:"16px", width:"16px", color:"gold"}}></i>
                            <div className="card-rate mx-2">4.5</div>
                        </div>
                        <div className="d-flex">
                            <div className="card-price">880</div>
                            <div className="card-currency mx-1">$</div>
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default ProdCard

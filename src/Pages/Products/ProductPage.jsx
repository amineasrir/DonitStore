import React from 'react'
import CatNavbar from '../../Components/Category/CatNavbar'
import { Col, Container, Row } from 'react-bootstrap'
import FilterCountContainer from '../../Components/Utility Components/FilterCountContainer'
import FilterOptions from '../../Components/Utility Components/FilterOptions'
import CardContainer from '../../Components/Prods/CardContainer'
import Pagination from '../../Components/Utility Components/Pagination'
const ProductPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
      <CatNavbar />
      <Container>
        <FilterCountContainer title='0 result'/>
        <Row className='d-flex flex-row'>
          <Col sm='2' xs='2' md='1' className='d-fleex'>
            <FilterOptions />  
          </Col>
          <Col sm='10' xs='10' md='11'>
            <CardContainer title="" btnTitle=""/>
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  )
}

export default ProductPage

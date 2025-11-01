import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard'
import brand1 from '../../Assets/IMG/brand1.png'
import brand2 from '../../Assets/IMG/brand2.png'
import brand3 from '../../Assets/IMG/brand3.png'


const BrandsContainer = () => {
  return (
    <Container >
        <div className="admin-content-text mt-2 ">All Brands</div>
        <Row className='my-2 d-flex justify-content-between'>
        <BrandCard img={brand1}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand1}/>
    
      </Row>
    </Container>
  )
}

export default BrandsContainer

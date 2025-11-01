import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Utility Components/SubTitle'
import ProdCard from './ProdCard'

const CardContainer = ({title, btnTitle, pathText}) => {
  return (
    <Container>
      <SubTitle title={title} btnTitle={btnTitle} pathText={pathText}/>

      <Row className='my-2 d-flex justify-content-between'>
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
      </Row>
    </Container>
  )
}

export default CardContainer

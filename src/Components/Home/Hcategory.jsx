import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Utility Components/SubTitle'
import CatCard from '../Category/CatCard'
import labtop from '../../Assets/IMG/labtop.png'

const HCategory = () => { 
  return (
    <Container>
      <SubTitle title="Categories" btnTitle="more" pathText="/category"/>

      <Row className='my-2 d-flex justify-content-between'>
        <CatCard title="Prod" background="whitesmoke" img={labtop} />
        <CatCard title="Prod" background="whitesmoke" img={labtop} />
        <CatCard title="Prod" background="whitesmoke" img={labtop} />
        <CatCard title="Prod" background="whitesmoke" img={labtop} />
        <CatCard title="Prod" background="whitesmoke" img={labtop} />
        <CatCard title="Prod" background="whitesmoke" img={labtop} />
      </Row>
    </Container>
  )
}

export default HCategory




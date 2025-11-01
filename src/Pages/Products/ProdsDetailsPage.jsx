import React from 'react'
import CatNavbar from '../../Components/Category/CatNavbar'
import { Container } from 'react-bootstrap'
import ProdDetails from '../../Components/Prods/ProdDetails'
import RateContr from '../../Components/Rating/RateContr'
import CardContainer from '../../Components/Prods/CardContainer'

const ProdsDetailsPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <CatNavbar />
            <Container>
                <ProdDetails />
                <RateContr />
                <CardContainer title="Products maybe you like it" />
            </Container>
        </div>
    )
}

export default ProdsDetailsPage

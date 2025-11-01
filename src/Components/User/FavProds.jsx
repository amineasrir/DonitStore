import React from 'react'
import { Row } from 'react-bootstrap'
import ProdCard from '../Prods/ProdCard'
import Pagination from '../Utility Components/Pagination'
const FavProds = () => {
    return (
        <div>
            <div className="admin-content-text pb-4">Favorite products list</div>
            <Row className='justify-content-start'>
                <ProdCard />
                <ProdCard />
                <ProdCard />
                <ProdCard />
                <ProdCard />
                <ProdCard />
                <ProdCard />
                <ProdCard />
                <ProdCard />
                <ProdCard />
            </Row>
            <Pagination />
        </div>
    )
}

export default FavProds

import React from 'react'
import Pagination from '../../Components/Utility Components/Pagination'
import BrandsContainer from '../../Components/Brands/BrandsContainer'

const BrandsPage = () => {
  return (
    <div style={{minHeight: "670px"}}>
      <BrandsContainer />
      <Pagination />
    </div>
  )
}

export default BrandsPage

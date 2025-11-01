import React from 'react'
import CatContainer from '../../Components/Category/CatContainer';
import Pagination from '../../Components/Utility Components/Pagination';

const Categories = () => {
  return (
    <div style={{minHeight: "670px"}}>
      <CatContainer />
      <Pagination />
    </div>
  )
}

export default Categories;

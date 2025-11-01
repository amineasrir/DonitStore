import React from 'react'
import Slider from '../../Components/Home/Slider'
import HCategory from '../../Components/Home/Hcategory'
import CardContainer from '../../Components/Prods/CardContainer'
import PromoCard from '../../Components/Home/PromoCard'
import BrandChoices from '../../Components/Brands/BrandChoices'

const HomePage = () => {
  return (
    <div className='font' style={{minHeight : '670px'}}>
      <Slider />
      <HCategory />
      <CardContainer title="Top Sale" btnTitle="See More" pathText="/products"/>
      <PromoCard />
      <CardContainer title="Top Rate" btnTitle="See More" pathText="/products"/>
      <BrandChoices title="Brands" btnTitle="See More"/>
    </div>
  )
}

export default HomePage

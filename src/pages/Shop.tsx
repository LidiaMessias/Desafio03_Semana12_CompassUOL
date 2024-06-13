import React from 'react'
import ShopBanner from '../components/ShopBanner'
import ShopFilter from '../components/ShopFilter'
import ShopQualitys from '../components/ShopQualitys'
import ProductsList from '../components/ProductsList'

const Shop = () => {
  return (
    <>
      <ShopBanner/>
      <ShopFilter/>
      <ProductsList/>
      <ShopQualitys/>
    </>
  )
}

export default Shop
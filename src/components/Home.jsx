import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import NewArrivals from '../pages/Product'
import ProductHighlight from './ProductHighlight'
import TrendingCategories from '../pages/Trending'




const Home = () => {
  return (
    <div>
      
      <Banner/>
      <NewArrivals/>
      <ProductHighlight/>
      <TrendingCategories/>
      <NewArrivals/>
      
    </div>
  )
}

export default Home

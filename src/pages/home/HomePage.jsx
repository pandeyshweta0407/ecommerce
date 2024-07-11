import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/herosection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'

const HomePage = () => {
  return (
      <Layout>
             <HeroSection/>
             {/* <Category/> */}
             <HomePageProductCard/>
           
       
      </Layout>
  )
}

export default HomePage

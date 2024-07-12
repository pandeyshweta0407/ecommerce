import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/herosection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Login from '../registration/Login'

const HomePage = () => {

  const user = JSON.parse(localStorage.getItem('users'));

  return (
       <div>
        {
          user ?  ( <Layout>
            <HeroSection/>
            <HomePageProductCard/>
            </Layout>
            )  : ( <Login/> ) 
       
        }
       </div>

  )
}

export default HomePage

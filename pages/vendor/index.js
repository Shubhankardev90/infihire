import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import OurProducts from '../../components/OurProducts'
import DeliveryProcess from '../../components/DeliveryProcess'
import PricingPlan from '../../components/PricingPlan'
import Contact from '../../components/Contact'

const index = () => {
  return (
   <div>
    <Header/>
    <Hero/>
    <Features/>
    <OurProducts/>
    <DeliveryProcess/>
    <PricingPlan/>
    <Contact/>
    <Footer/>
   </div>
  )
}

export default index
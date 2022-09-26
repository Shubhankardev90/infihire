import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Differences from '../components/Differences'
import CoreTeam from '../components/CoreTeam'
import DeliveryProcess from '../components/DeliveryProcess'
import Features from '../components/Features'
import Achievements from '../components/Achievements'
import PricingPlan from '../components/PricingPlan'
import Contact from '../components/Contact'
const index = () => {
  return (
   <div className="wrapper">
    <Header/>
     <main>
     <Hero/>
     <Features/>
     <DeliveryProcess/>
     <CoreTeam/>
     <Differences/>
     <Achievements/>
    
     {/* <NewDifferences/> */}
     
    <PricingPlan/>
    <Contact/>
     </main>
     <Footer/>
   </div>
  )
}

export default index
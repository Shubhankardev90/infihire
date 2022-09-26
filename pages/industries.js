import React from 'react'
import IndustriesCard from '../components/IndustriesCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Box } from '@chakra-ui/react'

const industries = () => {
  return (
   <>
    <Header/>
    <main>
    <Box pt="7"pb="3">
        <h1 className="sectionHeadings">
        <span>Industries We Serve</span>
        <br />
        Lorem ipsum dolor sit, ame um ad asperiores tempore quos, pariatur quis!
      </h1>
        </Box>
   <IndustriesCard/>
    </main>
    <Footer/>
   </>
  )
}

export default industries
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ClientCards from '../components/ClientCards'
import {Box }from '@chakra-ui/react'

const clients = () => {
  return (
    <>
    <Header/>
    <main>
        <Box pt="7"pb="3">
        <h1 className="sectionHeadings">
        <span>Our Clients</span>
        <br />
        Lorem ipsum dolor sit, ame um ad asperiores tempore quos, pariatur quis!
        </h1>
        </Box>
        <ClientCards/>
    </main>
    <Footer/>
    </>
  )
}

export default clients
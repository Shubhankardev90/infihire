import React from 'react'
import {Flex,Box,Grid,GridItem,Heading} from '@chakra-ui/react'
import Link from 'next/link'
const IndustriesCard = () => {
  return (
   <>
    <Flex justifyContent="center">
        <Grid templateColumns={{xl:"repeat(5, calc(20% - 20px))",lg:"repeat(5, calc(20% - 20px))",md:"repeat(3, calc(32% - 20px))",base:"repeat(1, calc(90% - 20px))"}} gap="10px" py="5"px="5"w="100%" justifyContent="center">
          <GridItem boxShadow="0 0 5px #7c7c7c3c" px="3" py="6" borderRadius="5px" cursor="pointer" role="group" _hover={{backgroundColor:"#06a9ff",transition:"0.3s"}}>
            <Flex alignItems="center" justifyContent="center" height="100%">
                <Heading _groupHover={{color:"white",transition:"0.3s"}} transition="0.3s" color="#06a9ff" size="md" className='heading-font'>Advertising</Heading>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" px="3" py="6" borderRadius="5px" cursor="pointer" role="group" _hover={{backgroundColor:"#06a9ff",transition:"0.3s"}}>
            <Flex alignItems="center" justifyContent="center" height="100%">
                <Heading _groupHover={{color:"white",transition:"0.3s"}} transition="0.3s" color="#06a9ff" size="md" className='heading-font'>Education</Heading>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" px="3" py="6" borderRadius="5px" cursor="pointer" role="group" _hover={{backgroundColor:"#06a9ff",transition:"0.3s"}}>
            <Flex alignItems="center" justifyContent="center" height="100%">
                <Heading _groupHover={{color:"white",transition:"0.3s"}} transition="0.3s" color="#06a9ff" size="md" className='heading-font'>Communication</Heading>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" px="3" py="6" borderRadius="5px" cursor="pointer" role="group" _hover={{backgroundColor:"#06a9ff",transition:"0.3s"}}>
            <Flex alignItems="center" justifyContent="center" height="100%">
                <Heading _groupHover={{color:"white",transition:"0.3s"}} transition="0.3s" color="#06a9ff" size="md" className='heading-font'>Finance</Heading>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" px="3" py="6" borderRadius="5px" cursor="pointer" role="group" _hover={{backgroundColor:"#06a9ff",transition:"0.3s"}}>
            <Flex alignItems="center" justifyContent="center" height="100%">
                <Heading _groupHover={{color:"white",transition:"0.3s"}} transition="0.3s" color="#06a9ff" size="md" className='heading-font'>Infrastructure</Heading>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
   </>
  )
}

export default IndustriesCard
import React from "react";
import DifferenceStyles from "../styles/Differences.module.css";
import { Box, Flex, Grid, GridItem, Heading, Text,Divider } from "@chakra-ui/react";
import { FaCubes } from "react-icons/fa";
import { BsCheck,BsStars,BsPeopleFill } from "react-icons/bs";
import {BiTrendingUp,BiSupport} from 'react-icons/bi'
import {TbStairsUp} from 'react-icons/tb'


const Differences = () => {
  return (
    <>
    <section className={DifferenceStyles.container}>
      <h2 className="sectionHeadings">
        <span>Why Choose Us ?</span> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <Grid templateColumns={{xl:"repeat(3, calc(30% - 30px))",lg:"repeat(3, calc(30% - 30px))",md:"repeat(2, calc(50% - 30px))",base:"repeat(1, calc(90% - 30px))"}} px="5" mt="8"justifyContent="center" gap="30px">
        <GridItem>
          <Flex
            flexDir="column"
            backgroundColor="#eef0f2"
            alignItems="flex-start"
            rowGap="15px"
            p="4"
            height="100%"
            role='group'
            _hover={{backgroundColor:'#06a9ff',cursor:'pointer',transition:"0.3s"}}
            borderRadius="5px"
            position="relative"
          >
           <Box className={DifferenceStyles.tickLabel} p="4" backgroundColor="#06a9ff" color="white" borderRadius="50%"_groupHover={{backgroundColor:"white",color:"green"}}>
              <BiTrendingUp size="30"/>
            </Box>
            <Heading size="lg" className="heading-font" textAlign="left" color="#06a9ff" _groupHover={{transition:"0.5s",color:"#ffffff"}}>
            2x Speedified Recruitments
            </Heading>
            <Text fontSize="md" _groupHover={{transition:"0.5s",color:"#ffffff"}} fontWeight="semibold">
              Data-intelligence matches recruitment partners to best suited jobs
              to get maximum conversion
            </Text>
            
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            flexDir="column"
            backgroundColor="#eef0f2"
            alignItems="flex-start"
            rowGap="15px"
            p="4"
            height="100%"
            role='group'
            _hover={{backgroundColor:'#06a9ff',cursor:'pointer',transition:"0.3s"}}
            borderRadius="5px"
          >
           <Box className={DifferenceStyles.tickLabel} p="4" backgroundColor="#06a9ff" color="white" borderRadius="50%"_groupHover={{backgroundColor:"white",color:"green"}}>
              <BsStars size="30"/>
            </Box>
            <Heading size="lg" className="heading-font" textAlign="left" color="#06a9ff" _groupHover={{transition:"0.5s",color:"#ffffff"}}>
              Quality Hire
            </Heading>
            <Text fontSize="md" _groupHover={{transition:"0.5s",color:"#ffffff"}} fontWeight="semibold">
              Data-intelligence matches recruitment partners to best suited jobs
              to get maximum conversion
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            flexDir="column"
            backgroundColor="#eef0f2"
            alignItems="flex-start"
            rowGap="15px"
            p="4"
            height="100%"
            role='group'
            _hover={{backgroundColor:'#06a9ff',cursor:'pointer',transition:"0.3s"}}
            borderRadius="5px"
          >
           <Box className={DifferenceStyles.tickLabel} p="4" backgroundColor="#06a9ff" color="white" borderRadius="50%"_groupHover={{backgroundColor:"white",color:"green"}}>
              <TbStairsUp size="30" color/>
            </Box>
            <Heading size="lg" className="heading-font" textAlign="left" color="#06a9ff" _groupHover={{transition:"0.5s",color:"#ffffff"}}>
              Executive to C-Level
            </Heading>
            <Text fontSize="md" _groupHover={{transition:"0.5s",color:"#ffffff"}} fontWeight="semibold">
              Data-intelligence matches recruitment partners to best suited jobs
              to get maximum conversion
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            flexDir="column"
            backgroundColor="#eef0f2"
            alignItems="flex-start"
            rowGap="15px"
            p="4"
            height="100%"
            role='group'
            _hover={{backgroundColor:'#06a9ff',cursor:'pointer',transition:"0.3s"}}
            borderRadius="5px"
          >
           <Box className={DifferenceStyles.tickLabel} p="4" backgroundColor="#06a9ff" color="white" borderRadius="50%"_groupHover={{backgroundColor:"white",color:"green"}}>
              <FaCubes size="30"/>
            </Box>
            <Heading size="lg" className="heading-font" textAlign="left" color="#06a9ff" _groupHover={{transition:"0.5s",color:"#ffffff"}}>
            Master Application Tracker
            </Heading>
            <Text fontSize="md" _groupHover={{transition:"0.5s",color:"#ffffff"}} fontWeight="semibold">
              Data-intelligence matches recruitment partners to best suited jobs
              to get maximum conversion
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            flexDir="column"
            backgroundColor="#eef0f2"
            alignItems="flex-start"
            rowGap="15px"
            p="4"
            height="100%"
            role='group'
            _hover={{backgroundColor:'#06a9ff',cursor:'pointer',transition:"0.3s"}}
            borderRadius="5px"
          >
           <Box className={DifferenceStyles.tickLabel} p="4" backgroundColor="#06a9ff" color="white" borderRadius="50%"_groupHover={{backgroundColor:"white",color:"green"}}>
              <BsPeopleFill size="30"/>
            </Box>
            <Heading size="lg" className="heading-font" textAlign="left" color="#06a9ff" _groupHover={{transition:"0.5s",color:"#ffffff"}}>
            Collaborative Hiring
            </Heading>
            <Text fontSize="md" _groupHover={{transition:"0.5s",color:"#ffffff"}} fontWeight="semibold">
              Data-intelligence matches recruitment partners to best suited jobs
              to get maximum conversion
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            flexDir="column"
            backgroundColor="#eef0f2"
            alignItems="flex-start"
            rowGap="15px"
            p="4"
            height="100%"
            role='group'
            _hover={{backgroundColor:'#06a9ff',cursor:'pointer',transition:"0.3s"}}
            borderRadius="5px"
          >
           <Box className={DifferenceStyles.tickLabel} p="4" backgroundColor="#06a9ff" color="white" borderRadius="50%"_groupHover={{backgroundColor:"white",color:"green"}}>
              <BiSupport size="30"/>
            </Box>
            <Heading size="lg" className="heading-font" textAlign="left" color="#06a9ff" _groupHover={{transition:"0.5s",color:"#ffffff"}}>
            24 X 7 End To End Support
            </Heading>
            <Text fontSize="md" _groupHover={{transition:"0.5s",color:"#ffffff"}} fontWeight="semibold">
              Data-intelligence matches recruitment partners to best suited jobs
              to get maximum conversion
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </section>
    <Divider height="10"/>
    </>
  );
};

export default Differences;

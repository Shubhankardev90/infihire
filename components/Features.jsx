import React from "react";
import featureStyles from "../styles/Feature.module.css";
import { Grid, GridItem, Heading, Box, Text, Flex, transition,Divider } from "@chakra-ui/react";
// import {BsSearch,BsCashCoin,BsClock,BsBuilding} from 'react-icons/bs'
import {FaFileContract,FaBusinessTime} from 'react-icons/fa'
import {GiOrganigram} from 'react-icons/gi'
import {TbView360} from 'react-icons/tb'
const Features = () => {
  return (
    <>
    <section className={featureStyles.featureContainer}>
      <h1 className="sectionHeadings">
        <span>Features</span>
        <br />
        Lorem ipsum dolor sit, ame um ad asperiores tempore quos, pariatur quis!
      </h1>
    <Box className={featureStyles.featureContaniner} px="10"mt="10">
        <Grid templateColumns={{xl:"repeat(3, calc(33% - 40px) )",lg:"repeat(3, calc(33% - 40px) )",md:"repeat(2, calc(50% - 40px) )",base:"repeat(1, 100% )"}} gap="40px" alignItems="center" justifyContent="center" px="10px">
         
        <GridItem backgroundColor="#eef0f2" _hover={{boxShadow:"0 0 3px #06a9ff",borderRadius:"5px",backgroundColor:"#06a9ff", transition:"0.3s",cursor:"pointer",borderTop:"5px solid #06a9ff"}} height="100%" boxShadow="0 0 2px #7c7c7c" p="5"role="group" borderTop="5px solid #06a9ff"  borderRadius="5px">
            <Flex flexDir="column" justifyContent="flex-start" height="100%" color="#7c7c7c"  rowGap="10px"_groupHover={{color:"white",transition:"0.3s"}}>
              <FaFileContract size="40"/>
              <Heading className="heading-font" size="lg" color="#06a9ff" _groupHover={{color:"white",transition:"0.3s"}}>One Contract, One Platform</Heading>
              <Text fontSize="md" color="black"fontWeight="semibold" _groupHover={{color:"white",transition:"0.3s"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et minus ut? Incidunt ration non!
              </Text>
            </Flex>
          </GridItem>
           <GridItem backgroundColor="#eef0f2" _hover={{boxShadow:"0 0 3px #06a9ff",borderRadius:"5px",backgroundColor:"#06a9ff", transition:"0.3s",cursor:"pointer",borderTop:"5px solid #06a9ff"}} height="100%" boxShadow="0 0 2px #7c7c7c" p="5"role="group" borderTop="5px solid #06a9ff" borderRadius="5px">
            <Flex flexDir="column" justifyContent="flex-start" height="100%" color="#7c7c7c"  rowGap="10px"_groupHover={{color:"white",transition:"0.3s"}}>
              <GiOrganigram size="40"/>
              <Heading className="heading-font" size="lg" color="#06a9ff" _groupHover={{color:"white",transition:"0.3s"}}>Instant match to multiple consultancies</Heading>
              <Text fontSize="md" color="black"fontWeight="semibold" _groupHover={{color:"white",transition:"0.3s"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et minus ut? Incidunt ration non!
              </Text>
            </Flex>
          </GridItem>
         
          <GridItem backgroundColor="#eef0f2" _hover={{boxShadow:"0 0 3px #06a9ff",borderRadius:"5px",backgroundColor:"#06a9ff", transition:"0.3s",cursor:"pointer",borderTop:"5px solid #06a9ff"}} height="100%" boxShadow="0 0 2px #7c7c7c" p="5"role="group" borderTop="5px solid #06a9ff" borderRadius="5px">
            <Flex flexDir="column" justifyContent="flex-start" height="100%" color="#7c7c7c"  rowGap="10px"_groupHover={{color:"white",transition:"0.3s"}}>
              <FaBusinessTime size="40"/>
              <Heading className="heading-font" size="lg" color="#06a9ff" _groupHover={{color:"white",transition:"0.3s"}}>Made for Startups</Heading>
              <Text fontSize="md" color="black"fontWeight="semibold" _groupHover={{color:"white",transition:"0.3s"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et minus ut? Incidunt ration non!
              </Text>
            </Flex>
          </GridItem>
          <GridItem backgroundColor="#eef0f2" _hover={{boxShadow:"0 0 3px #06a9ff",borderRadius:"5px",backgroundColor:"#06a9ff", transition:"0.3s",cursor:"pointer",borderTop:"5px solid #06a9ff"}} height="100%" boxShadow="0 0 2px #06a9ff" p="5"role="group" borderTop="5px solid #06a9ff" borderRadius="5px">
            <Flex flexDir="column" justifyContent="flex-start" height="100%" color="#7c7c7c"  rowGap="10px"_groupHover={{color:"white",transition:"0.3s"}}>
              <FaBusinessTime size="40"/>
              <Heading className="heading-font" size="lg" color="#06a9ff" _groupHover={{color:"white",transition:"0.3s"}}>Double check quality control</Heading>
              <Text fontSize="md" color="black"fontWeight="semibold" _groupHover={{color:"white",transition:"0.3s"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et minus ut? Incidunt ration non!
              </Text>
            </Flex>
          </GridItem>
          <GridItem backgroundColor="#eef0f2" _hover={{boxShadow:"0 0 3px #06a9ff",borderRadius:"5px",backgroundColor:"#06a9ff", transition:"0.3s",cursor:"pointer",borderTop:"5px solid #06a9ff"}} height="100%" boxShadow="0 0 2px #06a9ff" p="5"role="group" borderTop="5px solid #06a9ff" borderRadius="5px">
            <Flex flexDir="column" justifyContent="flex-start" height="100%" color="#7c7c7c"  rowGap="10px"_groupHover={{color:"white",transition:"0.3s"}}>
              <TbView360 size="40"/>
              <Heading className="heading-font" size="lg" color="#06a9ff" _groupHover={{color:"white",transition:"0.3s"}}>360<sup>o</sup> Control </Heading>
              <Text fontSize="md" color="black"fontWeight="semibold" _groupHover={{color:"white",transition:"0.3s"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et minus ut? Incidunt ration non!
              </Text>
            </Flex>
          </GridItem>
        </Grid>
    </Box>
    
    </section>
    <Divider height="10"/>
    </>
  );
};

export default Features;

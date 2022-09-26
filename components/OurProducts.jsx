import { Grid, GridItem,Flex, Heading,Text ,Divider} from "@chakra-ui/react";
import React from "react";
import {BsLaptop,BsSearch,BsCurrencyDollar} from 'react-icons/bs'

const OurProducts = () => {
  return (
   <>
    <section>
      <h2 className="sectionHeadings">
        <span>Our Products</span> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <Grid templateColumns={{xl:"repeat(3,calc(33% - 40px))",lg:"repeat(3,calc(33% - 40px))",md:"repeat(2,calc(50% - 40px))",base:"repeat(1,calc(100% - 40px))"}} gap="30px" justifyContent="center"mt="5">
        <GridItem cursor="pointer" boxShadow="0 0 3px #7c7c7c7c" role="group"borderRadius="5px" backgroundColor="#eef0f2">
            <Flex flexDir="column" alignItems="center" p="4" rowGap="10px"color="#7c7c7c" borderRadius="5px" _groupHover={{transition:"0.3s",color:"white",backgroundColor:"#06a9ff"}}>
                <BsLaptop size="50"/>
                <Heading size="lg" color="#06a9ff" _groupHover={{color:"white"}} className="heading-font">CRM</Heading>
                <Text textAlign="center" fontSize="md" color="black" fontWeight="semibold"_groupHover={{color:"white",transition:"0.3s"}}>Lorem ipsum dolor sit amet coboriosam, nihil doloribus suscipit doloremque magnam, voluptatibus fugit natus possimus nulla deleniti. Voluptatibus.</Text>
            </Flex>
        </GridItem>
        <GridItem cursor="pointer" boxShadow="0 0 3px #7c7c7c7c" role="group"borderRadius="5px" backgroundColor="#eef0f2">
            <Flex flexDir="column" alignItems="center" p="4" rowGap="10px"color="#7c7c7c" borderRadius="5px" _groupHover={{transition:"0.3s",color:"white",backgroundColor:"#06a9ff"}}>
                <BsSearch size="50"/>
                <Heading size="lg" color="#06a9ff" _groupHover={{color:"white"}} className="heading-font">Infi-Search</Heading>
                <Text textAlign="center" fontSize="md" color="black" fontWeight="semibold"_groupHover={{color:"white",transition:"0.3s"}}>Lorem ipsum dolor sit amet coboriosam, nihil doloribus suscipit doloremque magnam, voluptatibus fugit natus possimus nulla deleniti. Voluptatibus.</Text>
            </Flex>
        </GridItem>
        <GridItem cursor="pointer" boxShadow="0 0 3px #7c7c7c7c" role="group"borderRadius="5px" backgroundColor="#eef0f2">
            <Flex flexDir="column" alignItems="center" p="4" rowGap="10px"color="#7c7c7c" borderRadius="5px" _groupHover={{transition:"0.3s",color:"white",backgroundColor:"#06a9ff"}}>
                <BsCurrencyDollar size="50"/>
                <Heading size="lg" color="#06a9ff" _groupHover={{color:"white"}} className="heading-font">Infi-Mart</Heading>
                <Text textAlign="center" fontSize="md" color="black" fontWeight="semibold"_groupHover={{color:"white",transition:"0.3s"}}>Lorem ipsum dolor sit amet coboriosam, nihil doloribus suscipit doloremque magnam, voluptatibus fugit natus possimus nulla deleniti. Voluptatibus.</Text>
            </Flex>
        </GridItem>
      </Grid>
    </section>
     <Divider height="10" />
   </>
  );
};

export default OurProducts;

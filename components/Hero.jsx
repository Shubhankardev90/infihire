import React from "react";
import heroStyles from "../styles/Hero.module.css";
import { Flex, Box, Heading, Button ,Divider} from "@chakra-ui/react";
import Image from "next/future/image";
// import HeroImage from "../public/Humaaans - 2 Characters_auto_x2.png";
import HeroImage from "../public/hero-1.png";

const Hero = () => {
  return (
    <>
    <section className={heroStyles.hero}>
      <Flex flexDir={{xl:"row",lg:"row",md:"row",base:"column"}} alignItems="center" justifyContent="center" style={{height:"100%"}}>
        <Flex order={{xl:1,lg:1,md:1,base:2}} 
          className={heroStyles.leftContents}
          flex="1"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
          rowGap="30px"
          padding="0 20px"
        >
          <Heading size="2xl" textAlign={{xl:"left",lg:"left",md:"left",base:"center"}} color="#06a9ff"className={"heading-font"}>
            Superfast  Hiring experience  for Startups
          </Heading>
          <Heading size="md" color="gray.600"className={"text-font"}>
            Our marketplace, InfiMart, matches hiring requirements to find
            diverse talent within hours via selected pool of 500+ trained
            recruiters
          </Heading>
          <Flex columnGap="20px">
            <Button
              variant="solid"
              backgroundColor="#06a9ff"
              color="white"
              _hover={{ backgroundColor: "#06a9ffe0" }}
              boxShadow="0 0px 0.4rem skyblue"
            >
              Explore More
            </Button>
            <Button
              variant="outline"
              backgroundColor="#7c7c7c20"
              border="none"
              fontSize="sm"
              _hover={{backgroundColor:"#7c7c7c40"}}
            >
             Recruitment Consultancy
            </Button>
          </Flex>
        </Flex>
        <Flex order={{xl:2,lg:2,md:2,base:1}} 
          className={heroStyles.rightContent}
          flex="1"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={HeroImage} alt="heroImg" />
        </Flex>
      </Flex>
    </section>
    <Divider height="10"/>
    </>
  );
};

export default Hero;

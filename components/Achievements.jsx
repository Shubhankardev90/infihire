import React from "react";
import AchievementsStyles from "../styles/Achievements.module.css";
import { Flex, Grid, GridItem, Heading, Text,Box, Link,Button, Divider } from "@chakra-ui/react";
import Image from "next/future/image";
import NextLink from 'next/link';
import candidateImg from '../public/candidates.png'
import clientImg from '../public/client.png';
import industryImg from '../public/industries.png'
const Achievements = () => {
  return (
   <>
    <section className={AchievementsStyles.AchievementsContainer}>
      <h2 className="sectionHeadings">
        <span>Acheivements</span> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>

      <Grid
        templateColumns={{xl:"repeat(3, calc(30% - 20px))",lg:"repeat(3, calc(30% - 20px))",md:"repeat(2, calc(50% - 20px))",base:"repeat(1, calc(90% - 20px))"}}
        justifyContent="center"
        alignItems="center"
        gap="20px"
        mt="5"
        className={AchievementsStyles.knowMore}
      >
        <GridItem>
          <Flex className={AchievementsStyles.AchievementCard} flexDir="column" alignItems="flex-start"rowGap="5px" _hover={{boxShadow:"0 0 4px #06a9ff",borderRadius:"5px"}} p="10" cursor="pointer">
               <Box className={AchievementsStyles.diamondImg}>
               <Image src={candidateImg} alt="img1"/>
               </Box>
              <Flex alignItems="center" justifyContent="flex-start" w="100%" columnGap="3px">  <Heading size="lg" fontWeight="bold" color="#06a9ff">
                2500+ 
                </Heading>
                <Heading size="md" fontWeight="semibold" color="#06a9ff">Candidates</Heading></Flex>
            <Text size="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio,m dolorum dignissimos, placeat aliquid expedita?
            </Text>
          <NextLink href="/" passHref>
            <Link className={AchievementsStyles.knowmoreLink}>Know More</Link>
          </NextLink>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex className={AchievementsStyles.AchievementCard} flexDir="column" alignItems="flex-start"rowGap="5px" _hover={{boxShadow:"0 0 4px #06a9ff",borderRadius:"5px"}} p="10" cursor="pointer">
               <Box className={AchievementsStyles.diamondImg}>
               <Image src={clientImg} alt="img1"/>
               </Box>
               <Flex alignItems="center" justifyContent="flex-start" w="100%" columnGap="3px">  <Heading size="lg" fontWeight="bold" color="#06a9ff">
                80+ 
                </Heading>
                <Heading size="md" fontWeight="semibold" color="#06a9ff">Clients</Heading></Flex>
            <Text size="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio,m dolorum dignissimos, placeat aliquid expedita?
            </Text>
            <NextLink href="/clients" passHref>
            <Link className={AchievementsStyles.knowmoreLink}>Know More</Link>
          </NextLink>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex className={AchievementsStyles.AchievementCard} flexDir="column" alignItems="flex-start"rowGap="5px" _hover={{boxShadow:"0 0 4px #06a9ff",borderRadius:"5px"}} p="10" cursor="pointer">
               <Box className={AchievementsStyles.diamondImg}>
               <Image src={industryImg} alt="img1"/>
               </Box>
               <Flex alignItems="center" justifyContent="flex-start" w="100%" columnGap="3px">  <Heading size="lg" fontWeight="bold" color="#06a9ff">
                50+ 
                </Heading>
                <Heading size="md" fontWeight="semibold" color="#06a9ff">Industries</Heading></Flex>
            <Text size="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio,m dolorum dignissimos, placeat aliquid expedita?
            </Text>
            <NextLink href="/industries" passHref>
            <Link className={AchievementsStyles.knowmoreLink}>Know More</Link>
          </NextLink>
          </Flex>
        </GridItem>
       
      </Grid>
    </section>
    <Divider height="10"/>
   </>
  );
};

export default Achievements;

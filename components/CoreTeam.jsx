import React from "react";
import coreTeamStyles from "../styles/CoreTeam.module.css";
import headerStyles from "../styles/Header.module.css"
import { Grid, GridItem, Heading, Text,Link,Box,Divider } from "@chakra-ui/react";
import{BsTwitter,BsGoogle,BsFacebook,BsLinkedin} from 'react-icons/bs'
import Image from "next/future/image";
import NextLink from 'next/link'
import profileImage from "../public/profile.jpg";
const CoreTeam = () => {
  return (
    <>
   <section>
   <div className={coreTeamStyles.coreTeamContainer}>
      <h2 className="sectionHeadings">
        <span>Team</span> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </h2>
      <Grid
        templateColumns={{xl:"repeat(4, calc(25% - 30px) )",lg:"repeat(4, calc(25% - 30px) )",md:"repeat(2, calc(50% - 30px) )",base:"repeat(1, calc(90% - 30px) )"}}
        marginTop="10"
        gap="30px"
        justifyContent="center"
        
      >
        <GridItem>
          <div className={coreTeamStyles.cards}>
            <div className={coreTeamStyles.cardHead}>
              <div className={coreTeamStyles.cardImage}>
                <Image src={profileImage} />
              </div>
            </div>
            <div className={coreTeamStyles.cardBody}>
              <div className={coreTeamStyles.name}>
                <Heading size="small">Lorem Ipsum</Heading>
                <Text
                position="absolute"
                  fontSize="xs"
                  wordSpacing="1"
                  color="#ffffff"
                  marginTop="-1"
                  textAlign="center"
                  fontWeight="regular"
                  top="10px"
                  right="10px"
                  zIndex="20"
                >
                  CEO
                </Text>
              </div>
              <div className={coreTeamStyles.description}>
                <Text size="sm" color="black.400" textAlign="center">
                  Lorem ipsum dolm hil? Eius velit eveniet repellat quos
                  doloremque! Magnam reprehenderit fuga earum corrupti?
                </Text>
              </div>
              <div className={headerStyles.headerSocialIcons}>
                <NextLink passHref href="twitter.com">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsTwitter color="skyblue" size={20} />
                  </Box>
                </NextLink>
                <NextLink passHref href="facebook.com">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsFacebook color="#4267B2" size={20} />
                  </Box>
                </NextLink>
                <NextLink passHref href="Google.com">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsGoogle color="#db4a39 " size={20} />
                  </Box>
                </NextLink>
                <NextLink passHref href="linkedin.in">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsLinkedin color="#0A66C2" size={20} />
                  </Box>
                </NextLink>
              </div>
            </div>
          </div>
        </GridItem>
        <GridItem>
          <div className={coreTeamStyles.cards}>
            <div className={coreTeamStyles.cardHead}>
              <div className={coreTeamStyles.cardImage}>
                <Image src={profileImage} />
              </div>
            </div>
            <div className={coreTeamStyles.cardBody}>
              <div className={coreTeamStyles.name}>
                <Heading size="small">Lorem Ipsum</Heading>
                <Text
                position="absolute"
                  fontSize="xs"
                  wordSpacing="1"
                  color="#ffffff"
                  marginTop="-1"
                  textAlign="center"
                  fontWeight="regular"
                  top="10px"
                  right="10px"
                  zIndex="20"
                >
                  CEO
                </Text>
              </div>
              <div className={coreTeamStyles.description}>
                <Text size="sm" color="black.400" textAlign="center">
                  Lorem ipsum dolm hil? Eius velit eveniet repellat quos
                  doloremque! Magnam reprehenderit fuga earum corrupti?
                </Text>
              </div>
              <div className={headerStyles.headerSocialIcons}>
                <NextLink passHref href="twitter.com">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsTwitter color="skyblue" size={20} />
                  </Box>
                </NextLink>
                <NextLink passHref href="facebook.com">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsFacebook color="#4267B2" size={20} />
                  </Box>
                </NextLink>
                <NextLink passHref href="Google.com">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsGoogle color="#db4a39 " size={20} />
                  </Box>
                </NextLink>
                <NextLink passHref href="linkedin.in">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsLinkedin color="#0A66C2" size={20} />
                  </Box>
                </NextLink>
              </div>
            </div>
          </div>
        </GridItem>
        <GridItem>
          <div className={coreTeamStyles.cards}>
            <div className={coreTeamStyles.cardHead}>
              <div className={coreTeamStyles.cardImage}>
                <Image src={profileImage} />
              </div>
            </div>
            <div className={coreTeamStyles.cardBody}>
              <div className={coreTeamStyles.name}>
                <Heading size="small">Lorem Ipsum</Heading>
                <Text
                position="absolute"
                  fontSize="xs"
                  wordSpacing="1"
                  color="#ffffff"
                  marginTop="-1"
                  textAlign="center"
                  fontWeight="regular"
                  top="10px"
                  right="10px"
                  zIndex="20"
                >
                  CEO
                </Text>
              </div>
              <div className={coreTeamStyles.description}>
                <Text size="sm" color="black.400" textAlign="center">
                  Lorem ipsum dolm hil? Eius velit eveniet repellat quos
                  doloremque! Magnam reprehenderit fuga earum corrupti?
                </Text>
              </div>
              <div className={headerStyles.headerSocialIcons}>
                <NextLink passHref href="twitter.com">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsTwitter color="skyblue" size={20} />
                  </Box>
                </NextLink>
                <NextLink passHref href="facebook.com">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsFacebook color="#4267B2" size={20} />
                  </Box>
                </NextLink>
                <NextLink passHref href="Google.com">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsGoogle color="#db4a39 " size={20} />
                  </Box>
                </NextLink>
                <NextLink passHref href="linkedin.in">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsLinkedin color="#0A66C2" size={20} />
                  </Box>
                </NextLink>
              </div>
            </div>
          </div>
        </GridItem>
        <GridItem>
          <div className={coreTeamStyles.cards}>
            <div className={coreTeamStyles.cardHead}>
              <div className={coreTeamStyles.cardImage}>
                <Image src={profileImage} />
              </div>
            </div>
            <div className={coreTeamStyles.cardBody}>
              <div className={coreTeamStyles.name}>
                <Heading size="small">Lorem Ipsum</Heading>
                <Text
                position="absolute"
                  fontSize="xs"
                  wordSpacing="1"
                  color="#ffffff"
                  marginTop="-1"
                  textAlign="center"
                  fontWeight="regular"
                  top="10px"
                  right="10px"
                  zIndex="20"
                >
                  CEO
                </Text>
              </div>
              <div className={coreTeamStyles.description}>
                <Text size="sm" color="black.400" textAlign="center">
                  Lorem ipsum dolm hil? Eius velit eveniet repellat quos
                  doloremque! Magnam reprehenderit fuga earum corrupti?
                </Text>
              </div>
              <div className={headerStyles.headerSocialIcons}>
                <NextLink passHref href="twitter.com">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsTwitter color="skyblue" size={20} />
                  </Box>
                </NextLink>
                <NextLink passHref href="facebook.com">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsFacebook color="#4267B2" size={20} />
                  </Box>
                </NextLink>
                <NextLink passHref href="Google.com">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsGoogle color="#db4a39 " size={20} />
                  </Box>
                </NextLink>
                <NextLink passHref href="linkedin.in">
                  <Box p="2" bgColor="gray.100" borderRadius="50%"  _hover={{bgColor:"gray.200"}}>
                    <BsLinkedin color="#0A66C2" size={20} />
                  </Box>
                </NextLink>
              </div>
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
   </section>

    <Divider height="10"/>
    </>
  );
};

export default CoreTeam;

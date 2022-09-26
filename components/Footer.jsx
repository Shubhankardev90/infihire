import React from "react";
import {
  Grid,
  GridItem,
  Link,
  Text,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { BsFacebook, BsGoogle, BsLinkedin, BsTwitter } from "react-icons/bs";
import footerStyles from "../styles/Footer.module.css";
import Image from "next/future/image";
import NextLink from "next/link";
import Logo from "../public/logo.png";
const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Grid templateColumns={{xl:"repeat(5, calc(20% - 20px))", lg:"repeat(5, calc(20% - 20px))",md:"repeat(3, calc(33% - 20px))",sm:"repeat(2, calc(50% - 20px))",base:"repeat(1, calc(90% - 20px))"}} gap="20px" width="100%">
        <GridItem>
          <Flex flexDir="column" rowGap="20px">
            <NextLink href="/" passHref>
              <Link>
                <Image
                  src={Logo}
                  alt="logo"
                  className={footerStyles.footerLogo}
                />
              </Link>
            </NextLink>
            <Text fontSize="sm" textAlign="center" fontWeight="semibold">
              Our marketplace, InfiMart, matches hiring requirements to find
              diverse talent within hours via selected pool of 500+ trained
              recruiters
            </Text>
            <Text fontSize="sm" textAlign="center" fontWeight="semibold">
              ABL Workspace, B-6 Building, Sector-4, Noida – 201301
            </Text>

            <Box className={footerStyles.footerSocialLinks}>
              <NextLink passHref href="twitter.com">
                <Box
                  p="2"
                  bgColor="gray.100"
                  borderRadius="50%"
                  _hover={{ bgColor: "gray.200" }}
                >
                  <BsTwitter color="skyblue" size={25} />
                </Box>
              </NextLink>
              <NextLink passHref href="facebook.com">
                <Box
                  p="2"
                  bgColor="gray.100"
                  borderRadius="50%"
                  _hover={{ bgColor: "gray.200" }}
                >
                  <BsFacebook color="#4267B2" size={25} />
                </Box>
              </NextLink>
              <NextLink passHref href="Google.com">
                <Box
                  p="2"
                  bgColor="gray.100"
                  borderRadius="50%"
                  _hover={{ bgColor: "gray.200" }}
                >
                  <BsGoogle color="#db4a39 " size={25} />
                </Box>
              </NextLink>
              <NextLink passHref href="linkedin.in">
                <Box
                  p="2"
                  bgColor="gray.100"
                  borderRadius="50%"
                  _hover={{ bgColor: "gray.200" }}
                >
                  <BsLinkedin color="#0A66C2" size={25} />
                </Box>
              </NextLink>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexDir="column" rowGap="10px" alignItems="center">
            <Heading fontSize="xl" fontWeight="semibold" as="h3" lineHeight="2">
              Products
            </Heading>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>For Startup</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>Turbo</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>Talent Suite</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>For Recruitment Partners</Link>
            </NextLink>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexDir="column" rowGap="10px" alignItems="center">
            <Heading fontSize="xl" fontWeight="semibold" as="h3" lineHeight="2">
              Work With Us
            </Heading>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>Employers</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>Partners</Link>
            </NextLink>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexDir="column" rowGap="10px" alignItems="center">
            <Heading fontSize="xl" fontWeight="semibold" as="h3" lineHeight="2">
              Company
            </Heading>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>About Company</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>About Team</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>Privacy & Policy</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>Terms & Conditions</Link>
            </NextLink>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexDir="column" rowGap="10px" alignItems="center">
            <Heading fontSize="xl" fontWeight="semibold" as="h3" lineHeight="2">
              Important Links
            </Heading>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>How We Work ?</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>Delivery Process</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>Contact Us</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link fontSize="sm"_hover={{textDecor:"none",color:"#06a9ff",fontWeight:"semibold"}}>Appointment</Link>
            </NextLink>
          </Flex>
        </GridItem>
      </Grid>
      <Box className={footerStyles.copyright}>
     
        <Text color="gray.400"  fontSize="sm" textAlign="center">Copyright &copy; 2022 InfiHire. All rights reserved.</Text>
     
      </Box>
    </footer>
  );
};

export default Footer;

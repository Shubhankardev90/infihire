import React from "react";
import {
  Flex,
  Grid,
  GridItem,
  Box,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import ContactStyles from "../styles/Contact.module.css";
import contactImg from "../public/contact.svg";
import Image from "next/future/image";

import Header from '../components/Header'
import Footer from '../components/Footer'

const contact = () => {
  return (
    <>
        <Header/>
      <main>
        <section>
       <Box pt="2">
       <h1 className="sectionHeadings">
          <span>Contact Us</span>
          <br />
          Lorem ipsum dolor sit, ame um ad asperiores tempore quos, pariatur
          quis!
        </h1>
        <Box className={ContactStyles.contactContainer} mt="4" py="10" px="2">
          <Grid
            templateColumns={{
              xl: "repeat(2, calc(50% - 30px) )",
              lg: "repeat(2, calc(50% - 30px) )",
              base: "repeat(1, calc(100% - 30px) )",
            }}
            gap="10px"
          >
            <GridItem>
              <Flex justifyContent="center" alignItems="center">
                <Image
                  src={contactImg}
                  alt="contactImage"
                  className={ContactStyles.contactImage}
                />
              </Flex>
            </GridItem>
            <GridItem>
              <Flex justifyContent="center" px="2" py="2">
                <form>
                  <FormControl>
                    <FormLabel>I want to</FormLabel>
                    <Select>
                      <option value="0">Schedule a Demo</option>
                      <option value="1">Hire</option>
                      <option value="2">Be Partner</option>
                      <option value="3">Contact Support</option>
                    </Select>
                  </FormControl>
                  <FormControl mt="3">
                    <FormLabel>Full Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl mt="3">
                    <FormLabel>Oragnization Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl mt="3">
                    <FormLabel>Email Address</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl mt="3">
                    <FormLabel>Phone Number</FormLabel>
                    <Input type="phone" />
                  </FormControl>
                  <FormControl mt="3">
                    <FormLabel>Subject</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl mt="3">
                    <FormLabel>Message</FormLabel>
                    <Textarea />
                  </FormControl>
                  <FormControl mt="3" textAlign="right">
                    <Button type="submit" colorScheme="blue">
                      Send Message
                    </Button>
                  </FormControl>
                </form>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
       </Box>
      </section>
      </main>
      <Footer/>
    </>
  );
};

export default contact;

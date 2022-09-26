import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {CheckCircleIcon} from '@chakra-ui/icons'
import {
  Box, Heading, Grid, GridItem, Flex, Text, List,
  ListItem,
  ListIcon,
  UnorderedList,
} from '@chakra-ui/react'
import Image from 'next/future/image'
import pitchImg from '../public/pitch.svg'
import AboutStyles from '../styles/About.module.css'
import logoImg from '../public/logo.png'

const about = () => {
  return (
    <div className={AboutStyles.container}>
      <Header />
      <main>
        <section className={AboutStyles.grad}>
          <Box pt="1" mb="3">
            <h1 className="sectionHeadings">
              <span>About Us</span>
              <br />
              Lorem ipsum dolor sit, ame um ad asperiores tempore quos, pariatur quis!
            </h1>
          </Box>
          <Grid templateColumns="repeat(2 , calc(50% - 20px))" justifyContent="center" p="5">
            <GridItem >
              <Flex justifyContent="center" p="3" alignItems="center" height="100%">
                <Image src={pitchImg} alt="pitch" class={AboutStyles.aboutImg} />
              </Flex>
            </GridItem>
            <GridItem>
              <Image src={logoImg} alt="logoImg" className={AboutStyles.logo} />
              <Text fontWeight="regular" >
                is an HR-tech startup that is being built to create hiring solutions to transform the recruitment experience for employers, job seekers & recruitment consultants/ freelancers.
              </Text>
              <Text fontWeight="regular" mt="2">
                Founded in 2019 by serial entrepreneurs from IIT & IMT as “HoppJobs”, it started as a recruitment marketplace specialising in building hiring talent at early-stage startups. Now rebranded as “infihire”, our B2B hiring marketplace connects employers (from startups to MNCs) job-wise with the best-suited recruitment partners to hire the talent in the minimum possible time.
              </Text>
              <Text fontWeight="regular" mt="2">

                Apart from an aggregator platform, infihire also has a SaaS offering for employers & recruitment partners, enabling customised collaborative hiring through a multi-purpose master ATS, analytics, omni-channel hiring tools (existing vendor management tool, social media campaign, resume parsing, email parsing, chrome extensions), and much more.


              </Text>
              <List spacing={2} mt="3">
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
              </List>
            </GridItem>
          </Grid>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default about
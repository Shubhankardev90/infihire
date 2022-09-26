import React from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/future/image";
import Link from "next/link";
import logo from "../public/logo.png";
import candidates from "../public/candidates.png";
import indus from '../public/industries.png'
import ClientStyles from "../styles/Client.module.css";
const ClientCards = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Grid templateColumns={{xl:"repeat(6, calc(16% - 10px))",lg:"repeat(6, calc(16% - 10px))",md:"repeat(4, calc(25% - 15px))",base:"repeat(2, calc(50% - 10px))"}} gap="10px" py="5"px="5"w="100%" justifyContent="center">
          <GridItem boxShadow="0 0 5px #7c7c7c3c" p="3" borderRadius="5px" cursor="pointer">
            <Flex alignItems="center" justifyContent="center" height="100%">
              <Link href="https://biryaniblues.com/">
                <Image
                  src={logo}
                  alt="client"
                  className={ClientStyles.clientImage}
                />
              </Link>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" p="3" borderRadius="5px" cursor="pointer">
            <Flex alignItems="center" justifyContent="center" height="100%">
              <Link href="https://biryaniblues.com/">
                <Image
                  src={candidates}
                  alt="candidates"
                  className={ClientStyles.clientImage}
                />
              </Link>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" p="3" borderRadius="5px" cursor="pointer">
            <Flex alignItems="center" justifyContent="center" height="100%">
              <Link href="https://biryaniblues.com/">
                <Image
                  src={indus}
                  alt="candidates"
                  className={ClientStyles.clientImage}
                />
              </Link>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" p="3" borderRadius="5px" cursor="pointer">
            <Flex alignItems="center" justifyContent="center" height="100%">
              <Link href="https://biryaniblues.com/">
                <Image
                  src={logo}
                  alt="client"
                  className={ClientStyles.clientImage}
                />
              </Link>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" p="3" borderRadius="5px" cursor="pointer">
            <Flex alignItems="center" justifyContent="center" height="100%">
              <Link href="https://biryaniblues.com/">
                <Image
                  src={candidates}
                  alt="candidates"
                  className={ClientStyles.clientImage}
                />
              </Link>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" p="3" borderRadius="5px" cursor="pointer">
            <Flex alignItems="center" justifyContent="center" height="100%">
              <Link href="https://biryaniblues.com/">
                <Image
                  src={indus}
                  alt="candidates"
                  className={ClientStyles.clientImage}
                />
              </Link>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" p="3" borderRadius="5px" cursor="pointer">
            <Flex alignItems="center" justifyContent="center" height="100%">
              <Link href="https://biryaniblues.com/">
                <Image
                  src={logo}
                  alt="client"
                  className={ClientStyles.clientImage}
                />
              </Link>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" p="3" borderRadius="5px" cursor="pointer">
            <Flex alignItems="center" justifyContent="center" height="100%">
              <Link href="https://biryaniblues.com/">
                <Image
                  src={candidates}
                  alt="candidates"
                  className={ClientStyles.clientImage}
                />
              </Link>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" p="3" borderRadius="5px">
            <Flex alignItems="center" justifyContent="center" height="100%">
              <Link href="https://biryaniblues.com/">
                <Image
                  src={indus}
                  alt="candidates"
                  className={ClientStyles.clientImage}
                />
              </Link>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" p="3" borderRadius="5px">
            <Flex alignItems="center" justifyContent="center" height="100%">
              <Link href="https://biryaniblues.com/">
                <Image
                  src={logo}
                  alt="client"
                  className={ClientStyles.clientImage}
                />
              </Link>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" p="3" borderRadius="5px">
            <Flex alignItems="center" justifyContent="center" height="100%">
              <Link href="https://biryaniblues.com/">
                <Image
                  src={candidates}
                  alt="candidates"
                  className={ClientStyles.clientImage}
                />
              </Link>
            </Flex>
          </GridItem>
          <GridItem boxShadow="0 0 5px #7c7c7c3c" p="3" borderRadius="5px">
            <Flex alignItems="center" justifyContent="center" height="100%">
              <Link href="https://biryaniblues.com/">
                <Image
                  src={indus}
                  alt="candidates"
                  className={ClientStyles.clientImage}
                />
              </Link>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default ClientCards;

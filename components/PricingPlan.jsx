import React from "react";
import PricingPlanStyles from "../styles/PricingPlan.module.css";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
} from "@chakra-ui/react";

import {BsCheck} from 'react-icons/bs';
import {FaTimes} from 'react-icons/fa';

const PricingPlan = () => {
  return (
    <section className={PricingPlanStyles.PricingPlanContainer}>
      <h2 className="sectionHeadings">
        <span>Pricing/Billing Plans</span> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <Box className={PricingPlanStyles.pricingPlanCardContainers} w="100%">
        <TableContainer mt="5" mx="5" boxShadow="0 0 3px #06a9ff"borderRadius="5px">
          <Table colorScheme="blue">
            <Thead>
              <Tr backgroundColor="#06a9ff">
                <Th>
                  <Flex flexDir="column" alignItems="flex-start" w="100%">
                    <Heading size="md" width="fit-content" color="#ffffff">
                      Benefits
                    </Heading>
                  </Flex>
                </Th>
                <Th>
                  <Flex flexDir="column" alignItems="center" w="100%">
                    <Heading size="md" width="fit-content" color="#ffffff">
                      Basic
                    </Heading>
                    <Heading size="sm" width="fit-content" color="#ffffff">
                      ( Per Month )
                    </Heading>
                  </Flex>
                </Th>
                <Th>
                  <Flex flexDir="column" alignItems="center" w="100%">
                    <Heading size="md" width="fit-content" color="#ffffff">
                      Premium
                    </Heading>
                    <Heading size="sm" width="fit-content" color="#ffffff">
                      ( Per Contract )
                    </Heading>
                  </Flex>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>lorem ipsum dolor sit amet, consectetur adipiscing el</Td>
                <Td>
                 <Flex justifyContent="center">
                 <Box backgroundColor="green"borderRadius="50%"><BsCheck size="40" color="#ffffff" /></Box>
                 </Flex>
                </Td>
                <Td>
                  <Flex justifyContent="center">
                 <Box backgroundColor="red"borderRadius="50%"p="1"><FaTimes size="32" color="#ffffff" /></Box>
                 </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>lorem ipsum dolor sit amet, consectetur adipiscing el</Td>
                <Td>
                 <Flex justifyContent="center">
                 <Box backgroundColor="green"borderRadius="50%"><BsCheck size="40" color="#ffffff" /></Box>
                 </Flex>
                </Td>
                <Td>
                  <Flex justifyContent="center">
                 <Box backgroundColor="green"borderRadius="50%"><BsCheck size="40" color="#ffffff" /></Box>
                 </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>lorem ipsum dolor sit amet, consectetur adipiscing el</Td>
                <Td>
                 <Flex justifyContent="center">
                 <Box backgroundColor="green"borderRadius="50%"><BsCheck size="40" color="#ffffff" /></Box>
                 </Flex>
                </Td>
                <Td>
                  <Flex justifyContent="center">
                 <Box backgroundColor="green"borderRadius="50%"><BsCheck size="40" color="#ffffff" /></Box>
                 </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>lorem ipsum dolor sit amet, consectetur adipiscing el</Td>
                <Td>
                 <Flex justifyContent="center">
                 <Box backgroundColor="red"borderRadius="50%"p="1"><FaTimes size="32" color="#ffffff" /></Box>
                 </Flex>
                </Td>
                <Td>
                  <Flex justifyContent="center">
                 <Box backgroundColor="green"borderRadius="50%"><BsCheck size="40" color="#ffffff" /></Box>
                 </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>lorem ipsum dolor sit amet, consectetur adipiscing el</Td>
                <Td>
                 <Flex justifyContent="center">
                 <Box backgroundColor="green"borderRadius="50%"><BsCheck size="40" color="#ffffff" /></Box>
                 </Flex>
                </Td>
                <Td>
                  <Flex justifyContent="center">
                 <Box backgroundColor="green"borderRadius="50%"><BsCheck size="40" color="#ffffff" /></Box>
                 </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </section>
  );
};

export default PricingPlan;

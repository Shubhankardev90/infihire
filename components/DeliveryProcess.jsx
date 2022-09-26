// import { Box, Grid, GridItem, Flex,Text ,Heading} from "@chakra-ui/react";
// import React from "react";
// import DeliverProcessStyles from "../styles/DeliveryProcess.module.css";
// import {BsShare} from 'react-icons/bs'
// const DeliveryProcess = () => {
//   return (
//     <section className={DeliverProcessStyles.deliverProcessContainer}>
//       <h1 className="sectionHeadings">
//         <span>How it Works ? </span>
//         <br />
//         Lorem ipsum dolor sit, ame um ad asperiores tempore quos, pariatur quis!
//       </h1>
//       <Grid
//       templateColumns="repeat(3,calc(30% - 20px))"
//       justifyContent="center"
//       alignItems="center"
//       padding="50px 40px"
//       gap="20px"
//       >
//         <GridItem role="group"cursor={"pointer"}>
//           <Flex flexDir="column"boxShadow="0 0 3px #7c7c7c8c">
//               <Flex className={DeliverProcessStyles.processNumber} flexDir="column" rowGap="10px" padding="10px" backgroundColor="gray.100"_groupHover={{transition:"0.3s",cursor:"pointer",backgroundColor:"skyblue"}}>
//                 {/* <Text fontSize="3xl" color="#000000"_groupHover={{transition:"0.3s",cursor:"pointer",color: "#ffffff"}}>#</Text> */}
//                 <Heading color="blue.400" size="xl" textAlign="center"_groupHover={{transition:"0.3s",cursor:"pointer",color: "#ffffff"}}>01</Heading>
//               </Flex>
//               <Flex className={DeliverProcessStyles.processDescription} padding="20px 0" flexDir="column" rowGap="10px"_groupHover={{transition:"0.3s",cursor:"pointer",backgroundColor:"gray.100"}}>
//               <Heading size="lg" color="#06a9ff"textAlign="center">Share job requirement</Heading>
//                 <Text fontSize="sm"px="5">
//                   Lorem, ipsum dolor sit amd vel culpa qui laborum iusto amet modi veritatis obcaecati, odio similique.
//                 </Text>
//               </Flex>
//           </Flex>
//         </GridItem>
//         <GridItem role="group"cursor={"pointer"}>
//           <Flex flexDir="column"boxShadow="0 0 3px #7c7c7c8c">
//               <Flex className={DeliverProcessStyles.processNumber} flexDir="column" rowGap="10px" padding="10px" backgroundColor="gray.100"_groupHover={{transition:"0.3s",cursor:"pointer",backgroundColor:"skyblue"}}>
//                 {/* <Text fontSize="3xl" color="#000000"_groupHover={{transition:"0.3s",cursor:"pointer",color: "#ffffff"}}>#</Text> */}
//                 <Heading color="blue.400" size="xl" textAlign="center"_groupHover={{transition:"0.3s",cursor:"pointer",color: "#ffffff"}}>01</Heading>
//               </Flex>
//               <Flex className={DeliverProcessStyles.processDescription} padding="20px 0" flexDir="column" rowGap="10px"_groupHover={{transition:"0.3s",cursor:"pointer",backgroundColor:"gray.100"}}>
//               <Heading size="lg" color="#06a9ff"textAlign="center">Share job requirement</Heading>
//                 <Text fontSize="sm"px="5">
//                   Lorem, ipsum dolor sit amd vel culpa qui laborum iusto amet modi veritatis obcaecati, odio similique.
//                 </Text>
//               </Flex>
//           </Flex>
//         </GridItem>
//         <GridItem role="group"cursor={"pointer"}>
//           <Flex flexDir="column"boxShadow="0 0 3px #7c7c7c8c">
//               <Flex className={DeliverProcessStyles.processNumber} flexDir="column" rowGap="10px" padding="10px" backgroundColor="gray.100"_groupHover={{transition:"0.3s",cursor:"pointer",backgroundColor:"skyblue"}}>
//                 {/* <Text fontSize="3xl" color="#000000"_groupHover={{transition:"0.3s",cursor:"pointer",color: "#ffffff"}}>#</Text> */}
//                 <Heading color="blue.400" size="xl" textAlign="center"_groupHover={{transition:"0.3s",cursor:"pointer",color: "#ffffff"}}>01</Heading>
//               </Flex>
//               <Flex className={DeliverProcessStyles.processDescription} padding="20px 0" flexDir="column" rowGap="10px"_groupHover={{transition:"0.3s",cursor:"pointer",backgroundColor:"gray.100"}}>
//               <Heading size="lg" color="#06a9ff"textAlign="center">Share job requirement</Heading>
//                 <Text fontSize="sm"px="5">
//                   Lorem, ipsum dolor sit amd vel culpa qui laborum iusto amet modi veritatis obcaecati, odio similique.
//                 </Text>
//               </Flex>
//           </Flex>
//         </GridItem>
//         <GridItem role="group"cursor={"pointer"}>
//           <Flex flexDir="column"boxShadow="0 0 3px #7c7c7c8c">
//               <Flex className={DeliverProcessStyles.processNumber} flexDir="column" rowGap="10px" padding="10px" backgroundColor="gray.100"_groupHover={{transition:"0.3s",cursor:"pointer",backgroundColor:"skyblue"}}>
//                 {/* <Text fontSize="3xl" color="#000000"_groupHover={{transition:"0.3s",cursor:"pointer",color: "#ffffff"}}>#</Text> */}
//                 <Heading color="blue.400" size="xl" textAlign="center"_groupHover={{transition:"0.3s",cursor:"pointer",color: "#ffffff"}}>01</Heading>
//               </Flex>
//               <Flex className={DeliverProcessStyles.processDescription} padding="20px 0" flexDir="column" rowGap="10px"_groupHover={{transition:"0.3s",cursor:"pointer",backgroundColor:"gray.100"}}>
//               <Heading size="lg" color="#06a9ff"textAlign="center">Share job requirement</Heading>
//                 <Text fontSize="sm"px="5">
//                   Lorem, ipsum dolor sit amd vel culpa qui laborum iusto amet modi veritatis obcaecati, odio similique.
//                 </Text>
//               </Flex>
//           </Flex>
//         </GridItem>
//         <GridItem role="group"cursor={"pointer"}>
//           <Flex flexDir="column"boxShadow="0 0 3px #7c7c7c8c">
//               <Flex className={DeliverProcessStyles.processNumber} flexDir="column" rowGap="10px" padding="10px" backgroundColor="gray.100"_groupHover={{transition:"0.3s",cursor:"pointer",backgroundColor:"skyblue"}}>
//                 {/* <Text fontSize="3xl" color="#000000"_groupHover={{transition:"0.3s",cursor:"pointer",color: "#ffffff"}}>#</Text> */}
//                 <Heading color="blue.400" size="xl" textAlign="center"_groupHover={{transition:"0.3s",cursor:"pointer",color: "#ffffff"}}>01</Heading>
//               </Flex>
//               <Flex className={DeliverProcessStyles.processDescription} padding="20px 0" flexDir="column" rowGap="10px"_groupHover={{transition:"0.3s",cursor:"pointer",backgroundColor:"gray.100"}}>
//               <Heading size="lg" color="#06a9ff"textAlign="center">Share job requirement</Heading>
//                 <Text fontSize="sm"px="5">
//                   Lorem, ipsum dolor sit amd vel culpa qui laborum iusto amet modi veritatis obcaecati, odio similique.
//                 </Text>
//               </Flex>
//           </Flex>
//         </GridItem>
//         <GridItem role="group"cursor={"pointer"}>
//           <Flex flexDir="column"boxShadow="0 0 3px #7c7c7c8c">
//               <Flex className={DeliverProcessStyles.processNumber} flexDir="column" rowGap="10px" padding="10px" backgroundColor="gray.100"_groupHover={{transition:"0.3s",cursor:"pointer",backgroundColor:"skyblue"}}>
//                 {/* <Text fontSize="3xl" color="#000000"_groupHover={{transition:"0.3s",cursor:"pointer",color: "#ffffff"}}>#</Text> */}
//                 <Heading color="blue.400" size="xl" textAlign="center"_groupHover={{transition:"0.3s",cursor:"pointer",color: "#ffffff"}}>01</Heading>
//               </Flex>
//               <Flex className={DeliverProcessStyles.processDescription} padding="20px 0" flexDir="column" rowGap="10px"_groupHover={{transition:"0.3s",cursor:"pointer",backgroundColor:"gray.100"}}>
//               <Heading size="lg" color="#06a9ff"textAlign="center">Share job requirement</Heading>
//                 <Text fontSize="sm"px="5">
//                   Lorem, ipsum dolor sit amd vel culpa qui laborum iusto amet modi veritatis obcaecati, odio similique.
//                 </Text>
//               </Flex>
//           </Flex>
//         </GridItem>
       
       
//       </Grid>
//     </section>
//   );
// };

// export default DeliveryProcess;


import React from "react";
import featureStyles from "../styles/Feature.module.css";
import { Grid, GridItem, Heading, Box, Text, Flex, transition,Divider } from "@chakra-ui/react";
import {BsSearch,BsCashCoin,BsClock,BsBuilding} from 'react-icons/bs'
import {Gi3DStairs} from 'react-icons/gi'
const Features = () => {
  return (
    <>
    <section className={featureStyles.featureContainer}>
      <h1 className="sectionHeadings">
        <span>How We Work ?</span>
        <br />
        Lorem ipsum dolor sit, ame um ad asperiores tempore quos, pariatur quis!
      </h1>
    <Box className={featureStyles.featureContaniner} px="10"mt="10">
        <Grid templateColumns={{xl:"repeat(3, calc(30% - 30px) )",lg:"repeat(3, calc(30% - 30px) )",md:"repeat(2, calc(50% - 30px) )",base:"repeat(1, calc(100%) )"}}columnGap="30px" rowGap="30px"  alignItems="center" justifyContent="center" px="10px">
          <GridItem backgroundColor="#eef0f2" borderRadius="5px" _hover={{boxShadow:"0 0 3px #06a9ff",backgroundColor:"#06a9ff", transition:"0.3s",cursor:"pointer"}} height="100%"  p="5"role="group">
            <Flex flexDir="column" justifyContent="flex-start" height="100%" color="#7c7c7c"  rowGap="10px"_groupHover={{color:"white",transition:"0.3s"}}>
              <Heading size="xl">01</Heading>
              <Heading className="heading-font" size="lg" color="#06a9ff" _groupHover={{color:"white",transition:"0.3s"}}>Share Your Requirement</Heading>
              <Text fontSize="md" color="black"fontWeight="semibold" _groupHover={{color:"white",transition:"0.3s"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et minus ut? Incidunt ration non!
              </Text>
            </Flex>
          </GridItem>
          <GridItem backgroundColor="#eef0f2" borderRadius="5px" _hover={{boxShadow:"0 0 3px #06a9ff",backgroundColor:"#06a9ff", transition:"0.3s",cursor:"pointer"}} height="100%" p="5"role="group">
            <Flex flexDir="column" justifyContent="flex-start" height="100%" color="#7c7c7c"  rowGap="10px"_groupHover={{color:"white",transition:"0.3s"}}>
              <Heading size="xl">02</Heading>
              <Heading className="heading-font" size="lg" color="#06a9ff" _groupHover={{color:"white",transition:"0.3s"}}>Get Connected With Recruitment Partner</Heading>
              <Text fontSize="md" color="black"fontWeight="semibold" _groupHover={{color:"white",transition:"0.3s"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et minus ut? Incidunt ration non!
              </Text>
            </Flex>
          </GridItem>
          <GridItem backgroundColor="#eef0f2" borderRadius="5px" _hover={{boxShadow:"0 0 3px #06a9ff",backgroundColor:"#06a9ff", transition:"0.3s",cursor:"pointer"}} height="100%" p="5"role="group">
            <Flex flexDir="column" justifyContent="flex-start" height="100%" color="#7c7c7c"  rowGap="10px"_groupHover={{color:"white",transition:"0.3s"}}>
              <Heading size="xl">03</Heading>
              <Heading className="heading-font" size="lg" color="#06a9ff" _groupHover={{color:"white",transition:"0.3s"}}>Partner Uploads Relevent Profile</Heading>
              <Text fontSize="md" color="black"fontWeight="semibold" _groupHover={{color:"white",transition:"0.3s"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et minus ut? Incidunt ration non!
              </Text>
            </Flex>
          </GridItem>
          <GridItem backgroundColor="#eef0f2" borderRadius="5px" _hover={{boxShadow:"0 0 3px #06a9ff",backgroundColor:"#06a9ff", transition:"0.3s",cursor:"pointer"}} height="100%" p="5"role="group">
            <Flex flexDir="column" justifyContent="flex-start" height="100%" color="#7c7c7c"  rowGap="10px"_groupHover={{color:"white",transition:"0.3s"}}>
              <Heading size="xl">04</Heading>
              <Heading className="heading-font" size="lg" color="#06a9ff" _groupHover={{color:"white",transition:"0.3s"}}>AI assisted screening by infihire system</Heading>
              <Text fontSize="md" color="black"fontWeight="semibold" _groupHover={{color:"white",transition:"0.3s"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et minus ut? Incidunt ration non!
              </Text>
            </Flex>
          </GridItem>
          <GridItem backgroundColor="#eef0f2" borderRadius="5px" _hover={{boxShadow:"0 0 3px #06a9ff",backgroundColor:"#06a9ff", transition:"0.3s",cursor:"pointer"}} height="100%" p="5"role="group">
            <Flex flexDir="column" justifyContent="flex-start" height="100%" color="#7c7c7c"  rowGap="10px"_groupHover={{color:"white",transition:"0.3s"}}>
              <Heading size="xl">05</Heading>
              <Heading className="heading-font" size="lg" color="#06a9ff" _groupHover={{color:"white",transition:"0.3s"}}>Interviews by employer</Heading>
              <Text fontSize="md" color="black"fontWeight="semibold" _groupHover={{color:"white",transition:"0.3s"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et minus ut? Incidunt ration non!
              </Text>
            </Flex>
          </GridItem>
          <GridItem backgroundColor="#eef0f2" borderRadius="5px" _hover={{boxShadow:"0 0 3px #06a9ff",backgroundColor:"#06a9ff", transition:"0.3s",cursor:"pointer"}} height="100%" p="5"role="group">
            <Flex flexDir="column" justifyContent="flex-start" height="100%" color="#7c7c7c"  rowGap="10px"_groupHover={{color:"white",transition:"0.3s"}}>
              <Heading size="xl">06</Heading>
              <Heading className="heading-font" size="lg" color="#06a9ff" _groupHover={{color:"white",transition:"0.3s"}}>Hire the candidate</Heading>
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


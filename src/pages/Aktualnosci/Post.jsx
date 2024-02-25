import { Card, SimpleGrid, Image, Text, VStack, Button, Flex } from "@chakra-ui/react";
import React from "react";

export default function Post() {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique diam in augue sodales ullamcorper. Donec tincidunt hendrerit diam aliquet tincidunt. Cras libero massa, scelerisque vitae leo vel, dapibus cursus nisl. In eget blandit tellus. Cras in tellus vitae arcu varius egestas vel ac sem. Aenean sit amet lorem nec libero lacinia sagittis id sit amet ris";
  return (
    <Card p={5} w={"4xl"} my={4} bg={"white"} boxShadow={"lg"} rounded={"lg"}>
      <SimpleGrid columns={2} spacing={10}>
        <Image
          alt={"Login Image"}
          src={
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        />
        <VStack align="start">
          <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"}>
            Post
          </Text>
          <Text fontSize="1xl" color={"blue.400"}>
            {loremIpsum.substring(0, 300) + "..."}
          </Text>
          <Flex w={'100%'} justifyContent={'flex-end'}>
    <Button rounded={"full"} bg={'blue.400'} textColor={'white'}>Czytaj więcej</Button>
</Flex>
        </VStack>
      </SimpleGrid>
    </Card>
  );
}

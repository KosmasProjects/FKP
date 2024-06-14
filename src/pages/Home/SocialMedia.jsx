import { Box, VStack, Image, Text, Flex, Center } from "@chakra-ui/react";
import React from "react";

export default function Team() {
  const items = [
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg",
      group: "Zarząd",
    },
    {
      name: "Elwira Fronczak",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      group: "Stowarzyszenie Husaria",
    },
    {
      name: "Katarzyna Słupianek-Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      group: "Stowarzyszenie Husaria",
    },
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/rekografiazeznakiem086.jpg",
      group: "Stowarzyszenie Husaria",
    },
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Fronczak.png",
      group: "Stowarzyszenie Husaria",
    },
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      group: "Stowarzyszenie Husaria",
    },
    // Add more items here
  ];

  return (
    <Center>
      <Box
        maxW="100%"
        overflowX="scroll"
        overflowY="hidden"
        marginX={"50px"}
        p={"20px"}
        marginY={"20px"}
      >
        <Flex direction="row" spacing={10}>
          {items.map((item, index) => (
            <Box minW={"270px"} p={5}>
              <VStack
                key={index}
                borderRadius={"5px"}
                bg="white"
                minH={"300px"}
                p={4}
                boxShadow="md"
                minW={"250px"}
              >
                <Image
                  mt={"10px"}
                  boxSize="150px"
                  minW={"150px"}
                  objectFit="cover"
                  src={item.image}
                  alt={item.name}
                  borderRadius="full" // make the image circular
                />
                <Text
                  textAlign={"center"}
                  fontWeight={"semi-bold"}
                  fontSize={"20px"}
                >
                  {item.name}
                </Text>
                <Text textAlign={"center"}>{item.group}</Text>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Box>
    </Center>
  );
}

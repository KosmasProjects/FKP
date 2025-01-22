// PersonCard.jsx
import React, { useState } from "react";
import { Box, VStack, Image, Text, Center } from "@chakra-ui/react";
import ReactCardFlip from "react-card-flip";

export default function PersonCard({ item }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      w={"200px"}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.05)",
        transition: "all 0.2s",
      }}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <VStack
          borderRadius={"5px"}
          bg="white"
          minH={"370px"}
          boxShadow="md"
          minW={"230px"}
          border={"8px solid"}
          borderColor={"blue.400"}
          bgColor={"blue.400"}
        >
          <Box
            w={"100%"}
            h={"100%"}
            bgColor={"blue.100"}
            p={5}
            borderTopLeftRadius={"5px"}
            borderTopRightRadius={"5px"}
          >
            <Center>
              <Box boxSize={"180px"} bgColor={"transparent"}>
                <Image
                  boxSize="180px"
                  w={"180px"}
                  objectFit="cover"
                  src={item.images}
                  alt={item.name + " " + item.surname}
                  borderRadius={"full"}
                />
              </Box>
            </Center>
          </Box>
          <Text
            mx={1}
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={"20px"}
            bgColor={"blue.400"}
            color={"white"}
          >
            {item.name + " " + item.surname}
          </Text>
          <Text mx={1} textAlign={"center"} color={"white"}>
            {item.organization_name}
          </Text>
        </VStack>
        <VStack
          borderRadius={"5px"}
          bg="white"
          minH={"370px"}
          boxShadow="md"
          minW={"230px"}
          border={"8px solid"}
          borderColor={"blue.400"}
          bgColor={"blue.400"}
        >
            <Text color={'white'} fontWeight={'bold'} textAlign={'center'}>
                {item.name + " " + item.surname}
            </Text>
          <Text px={5} color={'white'}>
            {item.description}
          </Text>
        </VStack>
      </ReactCardFlip>
    </Box>
  );
}

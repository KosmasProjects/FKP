import {
  Card,
  Image,
  Text,
  VStack,
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
// [
//   {
//       "id": 2,
//       "title": "Drugi artykul",
//       "description": "aosidjsdo",
//       "author": "Kosma Cieliczko",
//       "created_at": "2024-06-27T10:58:07.224556Z",
//       "updated_at": "2024-06-27T12:11:44.470192Z",
//       "image": null,
//       "fundacja_kochania_poznania": true,
//       "pomniki_poznania": false,
//       "wspolna_sprawa": true,
//       "cieliczko_pl": faslse,
//       "poznanskie_legendy": false
//   }
// ]
export default function Post({ post }) {
  return (
<Box 
      as={Card} 
      pl={3} 
      pr={2} 
      py={3} 
      w={"4xl"} 
      my={2} 
      bg={"white"} 
      rounded={"none"} 
      transition="transform 0.2s" 
      _hover={{ transform: "scale(1.05)" }}
    >      <Flex direction={"row"} spacing={10}>
        <Image
          pr={2}
          h={"200px"}
          alt={"Login Image"}
          src={
            post.image == null
              ? "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/szkolenie żołnierzy batalionu parasol.jpg"
              : post.image
          }
        />
        <VStack align="start" flex="1" mx={2}>
          <HStack w={"100%"} align={"start"}>
            <Text fontSize="2xl" fontWeight={"bold"} color={"blue.400"}>
              {post.title}
            </Text>
            <Spacer />
            <Text
              fontSize="1xl"
              color={"black"}
              w={"170px"}
              align={"end"}
              mr={"15px"}
            >
              {post.created_at.slice(0, 10)}
            </Text>
          </HStack>
          <Text fontSize="1xl" color={"blue.400"}>
            {post.description.slice(0, 100)}...
          </Text>
          <Spacer />
          <HStack alignItems={"end"} justifyContent={"end"} w={"100%"}>
            <Text fontSize="1xl" color={"black"}>
              {post.author}
            </Text>
            <Spacer />

            <Button rounded={"full"} bg={"blue.400"} textColor={"white"}>
              Czytaj więcej
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

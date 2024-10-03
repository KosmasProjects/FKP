import { Card, SimpleGrid, Image, Text, VStack, Button, Flex } from "@chakra-ui/react";
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
export default function Post({post}) {
  
  return (
    <Card p={5} w={"4xl"} my={4} bg={"white"} boxShadow={"lg"} rounded={"lg"}>
      <SimpleGrid columns={2} spacing={10}>
        <Image
          alt={"Login Image"}
          src={post.image == null ?
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" : image
          }
        />
        <VStack align="start">
          <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"}>
            {post.title}
          </Text>
          <Text fontSize="1xl" color={"blue.400"}>
            {post.description}
          </Text>
          <Flex w={'100%'} justifyContent={'flex-end'}>
    <Button rounded={"full"} bg={'blue.400'} textColor={'white'}>Czytaj więcej</Button>
</Flex>
        </VStack>
      </SimpleGrid>
    </Card>
  );
}

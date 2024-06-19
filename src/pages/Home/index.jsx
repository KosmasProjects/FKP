import React from "react";
import SplitWithImage from "../Fundacja/Info";
import MyGrid from "./Grid";
import Header from "./Header";
import { Center, Container, Text } from "@chakra-ui/react";
import Products from "./Products";
import MediaPosts from "./MediaPosts";
import Team from "./SocialMedia";

export default function HomePage() {
  return (
    <>
      <Center>
        <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"} mb={5}> 
          Fundacja Kochania Poznania

        </Text>
      </Center>
      <MyGrid />
      <Center>
        <Text textAlign={"center"} fontSize="4xl" fontWeight="bold">
          Nasze publikacje
        </Text>
      </Center>
      <Products />
      <Header />
      <Center>
        <Text
          textAlign={"center"}
          fontSize="4xl"
          fontWeight="bold"
          marginTop={"50px"}
        >
          Zespół
        </Text>
      </Center>
      <Team />
      <Center>
        <Text
          textAlign={"center"}
          fontSize="4xl"
          fontWeight="bold"
          marginTop={"50px"}
        >
          Fundacja w mediach
        </Text>
      </Center>
      <MediaPosts />
      <Center>
        <Text
          textAlign={"center"}
          fontSize="4xl"
          fontWeight="bold"
          marginTop={"50px"}
        >
          Przyjaciele Fundacji
        </Text>
      </Center>
      <Center>
        <Text
          textAlign={"center"}
          fontSize="4xl"
          fontWeight="bold"
          marginTop={"50px"}
        >
          Partnerzy Fundacji
        </Text>
      </Center>

      <Container h={40}></Container>
    </>
  );
}

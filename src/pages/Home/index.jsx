import React from "react";
import SplitWithImage from "../Fundacja/Info";
import MyGrid from "./Grid";
import Header from "./Header";
import { Center, Container, Text } from "@chakra-ui/react";
import Products from "./Products";
import MediaPosts from "./MediaPosts";
import Team from "./SocialMedia";
import Partners from "./Partners";

export default function HomePage() {
  return (
    <>
      <Center h={"80px"}>
        <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"} mb={5}>
          Fundacja Kochania Poznania
        </Text>
      </Center>
      <MyGrid />
      
      <Header />
      <Center>
        <Text
          textAlign={"center"}
          fontSize="4xl"
          fontWeight="bold"
          marginTop={"50px"}
          color={"blue.400"}
        >
          Fundacja i Przyjaciele
        </Text>
      </Center>
      <Team />
      {/* <Center>
        <Text
          textAlign={"center"}
          fontSize="4xl"
          fontWeight="bold"
          marginTop={"50px"}
        >
          Fundacja w mediach
        </Text>
      </Center>
      <MediaPosts /> */}

      <Center>
        <Text
          textAlign={"center"}
          fontSize="4xl"
          fontWeight="bold"
          marginTop={"50px"}
          color={"blue.400"}
        >
          Partnerzy Fundacji
        </Text>
      </Center>
      <Partners />
      <Center pt={'30px'}>
        <Text textAlign={"center"} fontSize="4xl" fontWeight="bold" color={"blue.500"}>
          Nasze publikacje
        </Text>
      </Center>
      <Products />

      <Container h={40}></Container>
    </>
  );
}

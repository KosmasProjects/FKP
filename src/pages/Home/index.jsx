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
      <MyGrid />
      <Center>
        <Text fontSize="4xl" fontWeight="bold">
          Nasze publikacje
        </Text>
      </Center>
      <Products />
      <Header />
      <Center>
        <Text fontSize="4xl" fontWeight="bold" marginTop={'50px'}>
          Fundacja w mediach
        </Text>
      </Center>
      <MediaPosts />
      <Center>
        <Text fontSize="4xl" fontWeight="bold" marginTop={'50px'}>
          Zespół
        </Text>
      </Center>
      <Team />

      <Container h={40}></Container>
    </>
  );
}

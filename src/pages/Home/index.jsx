import React from "react";
import SplitWithImage from "../Fundacja/Info";
import MyGrid from "./Grid";
import Header from "./Header";
import { Center, Container, Text } from "@chakra-ui/react";
import Products from "./Products";

export default function HomePage() {
  return (
    <>
      <MyGrid />
      <Center>
        <Text fontSize="2xl" fontWeight="bold">
          Nasze publikacje
        </Text>
      </Center>
      <Products />
      <Header />

      <Container h={40}></Container>
    </>
  );
}

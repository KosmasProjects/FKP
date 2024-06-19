import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridWS from "./GridWS";

export default function WspolnaSprawa() {
  return (
    <>
        <Center>
          <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"} mb={5}>
            Wspólna Sprawa 44
          </Text>
        </Center>
        <GridWS />
      <Container maxW={"5xl"} pb={"200px"}>
      </Container>
    </>
  );
}

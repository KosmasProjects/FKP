import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridPomniki from "./GridPomniki";

export default function PomnikiPoznania() {
  return (
    <>
        <Center>
          <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"} mb={5}>
            Pomniki Poznania
          </Text>
        </Center>
        <GridPomniki />
      <Container maxW={"5xl"} pb={"200px"}>
      </Container>
    </>
  );
}

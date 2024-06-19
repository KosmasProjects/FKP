import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridLegendy from "./GridLegendy";

export default function PoznanskieLegendy() {
  return (
    <>
    
        <Center>
          <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"} mb={5}>
            Poznańskie Legendy
          </Text>
        </Center>
        <GridLegendy />
      <Container maxW={"5xl"} pb={"200px"}>
      </Container>
    </>
  );
}

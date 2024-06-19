import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridRozwazni from "./GridRozwazni";

export default function RozwazniIRomantyczni() {
  return (
    <>
        <Center>
          <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"} mb={5}>
            Rozwani i Romantyczni
          </Text>
        </Center>
        <GridRozwazni />
      <Container maxW={"5xl"} pb={"200px"}>
      </Container>
    </>
  );
}

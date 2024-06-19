import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridRozwazni from "./GridRozwazni";

export default function RozwazniIRomantyczni() {
  return (
    <>
        <GridRozwazni />
        <Center>
          <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"}>
            Rozwani i Romantyczni
          </Text>
        </Center>
      <Container maxW={"5xl"} pb={"200px"}>
      </Container>
    </>
  );
}

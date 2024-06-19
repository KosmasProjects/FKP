import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridBimba from "./GridBimba";

export default function BimbaWHistorie() {
  return (
    <>
        <Center>
          <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"} mb={5}>
            Bimbą w historię
          </Text>
        </Center>
        <GridBimba />
      <Container maxW={"5xl"} pb={"200px"}>
      </Container>
    </>
  );
}

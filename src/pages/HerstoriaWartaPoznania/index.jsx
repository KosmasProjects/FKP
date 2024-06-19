import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridHerstoria from "./GridHerstoria";

export default function Herstoria() {
  return (
    <>
        <Center>
          <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"} mb={5}>
            Herstoria Warta Poznania
          </Text>
        </Center>
        <GridHerstoria />
      <Container maxW={"5xl"} pb={"200px"}>
      </Container>
    </>
  );
}

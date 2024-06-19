import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridLiteracki from "./GridLiteracki";

export default function LiterackiPoznan() {
  return (
    <>
        <Center>
          <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"} mb={5}>
            Literacki Poznan
          </Text>
        </Center>
        <GridLiteracki />
      <Container maxW={"5xl"} pb={"200px"}>
      </Container>
    </>
  );
}

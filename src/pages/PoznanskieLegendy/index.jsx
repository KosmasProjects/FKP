import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridLegendy from "./GridLegendy";
import Title from "../../components/Title";

export default function PoznanskieLegendy() {
  return (
    <>
      <Title title="Poznańskie Legendy" color={"green.400"} />

      <GridLegendy />
      <Container maxW={"5xl"} pb={"200px"}></Container>
    </>
  );
}

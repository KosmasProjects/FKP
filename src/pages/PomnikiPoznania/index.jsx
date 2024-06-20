import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridPomniki from "./GridPomniki";
import Title from "../../components/Title";

export default function PomnikiPoznania() {
  return (
    <>
      <Title title="Pomniki Poznania" color={"teal.500"} />
      <GridPomniki />
      <Container maxW={"5xl"} pb={"200px"}></Container>
      
    </>
  );
}

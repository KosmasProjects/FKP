import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridBimba from "./GridBimba";
import Title from "../../components/Title";

export default function BimbaWHistorie() {
  return (
    <>
      <Title title="Bimbą w historię" color={"orange.500"} />
      <GridBimba />
      <Container maxW={"5xl"} pb={"200px"}></Container>
    </>
  );
}

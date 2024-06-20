import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridRozwazni from "./GridRozwazni";
import Title from "../../components/Title";

export default function RozwazniIRomantyczni() {
  return (
    <>
      <Title title="Rozwani i Romantyczni" color={"blue.400"} />

      <GridRozwazni />
      <Container maxW={"5xl"} pb={"200px"}></Container>
    </>
  );
}
